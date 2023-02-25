package com.codestate.server.Answer.service;
import com.codestate.server.Answer.entity.Answer;
import com.codestate.server.Answer.repository.AnswerRepository;
import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.member.service.MemberService;
import com.codestate.server.member.service.MemberService_backup;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public Answer createAnswer(Answer answer){

        return answerRepository.save(answer);
    }


    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(findAnswer::setContent);

        findAnswer.setModifiedAt(LocalDateTime.now());
        return answerRepository.save(findAnswer);
    }


    public Answer findAnswer(long answerId){
        return findVerifiedAnswer(answerId);
    }

    public Page<Answer> findAnswers(int page, int size){
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("answerId").descending()));
    }

    public void deleteAnswer(long answerId){
        answerRepository.delete(findVerifiedAnswer(answerId));
    }

    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow(()-> new BusinessLogicException(ExceptionCode.REPLIES_NOT_FOUND));
    }

    private void verifyExistsAnswer(Answer answer){
        Optional<Answer> optionalAnswer = answerRepository.findById(answer.getAnswerId());
        if(optionalAnswer.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.REPLIES_NOT_FOUND);
        }
    }

}