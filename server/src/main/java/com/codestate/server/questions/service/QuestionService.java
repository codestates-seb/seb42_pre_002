package com.codestate.server.questions.service;

import com.codestate.server.member.entity.Member;
import com.codestate.server.member.service.MemberService_backup;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.repository.QuestionRepository;
import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.replies.entity.Replies;
import com.codestate.server.tag.service.TagService;
import com.codestate.server.utils.CustomBeanUtils;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class QuestionService {

    private final QuestionRepository questionsRepository;
    private final CustomBeanUtils<Question> beanUtils;

    private MemberService_backup memberService;

    private TagService tagService;

    public Question createQuestion(Question question){
        // 등록된 회원인지 검증
        Member verifiedMember = memberService.findVerifiedMember(question.getMember().getMemberId());
        question.setMember(verifiedMember);

        // 태그가 존재하는지 검증

        question.getQuestionTags().stream()
                        .forEach(questionTag -> tagService.findVerifiedTag(questionTag.getTag().getTagId()));

        verifyExistsQuestion(question.getQuestionId());
        Question savedQuestion = saveQuestion(question);

        return savedQuestion;

    }

    @Transactional(propagation = Propagation.REQUIRED)
    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        Question updateQuestion = beanUtils.copyNonNullProperties(question, findQuestion);


        return questionsRepository.save(findQuestion);
    }
    //한개의 질문 조회시 조회수 +1
    @Transactional(readOnly = true)
    public Question findQuestion(long questionId){
        Question question = findVerifiedQuestion(questionId);
        question.setViewCnt(question.getViewCnt()+1);
        return findVerifiedQuestion(questionId);

    }
    // 전체 질문 조회 (최신순)
    @Transactional(readOnly = true)
    public Page<Question> findQuestions(int page, int size) {
        return questionsRepository.findAll(PageRequest.of(page,size,
                Sort.by("questionId").descending()));
    }

    // 전체 질문 조회 (조회순)
    @Transactional(readOnly = true)
    public Page<Question> findRecommendQuestions (int page, int size) {
        return questionsRepository.findAll(PageRequest.of(page, size,
                Sort.by("viewCnt").descending()));
    }

    // 질문 검색 기능
    public Page<Question> searchQuestion(String keyword, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Question> searchQuestion = questionsRepository.findByKeyword(keyword,pageable);

        return searchQuestion;
    }

    public void deleteQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        questionsRepository.deleteById(questionId);

    }

    public void deleteQuestions(Question question) {
        questionsRepository.deleteAll();
        log.info("전체 질문 삭제 완료");
    }



    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalQuestion =
                questionsRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    public void verifyExistsQuestion(long questionId){
        Optional<Question> question = questionsRepository.findById(questionId);
        if(question.isPresent())
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
    }

    public Question saveQuestion(Question question){
        return questionsRepository.save(question);
    }

    // 질문 Id로 해당 답변 리스트 호출
    public List<Replies> getAnswer(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);

        return findQuestion.getQuestionReplies();
    }



}
