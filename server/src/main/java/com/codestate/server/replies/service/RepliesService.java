package com.codestate.server.replies.service;
import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.replies.dto.RepliesDto;
import com.codestate.server.replies.entity.Replies;
import com.codestate.server.replies.mapper.RepliesMapper;
import com.codestate.server.replies.repository.RepliesRepository;
import com.codestate.server.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class RepliesService {

    private final RepliesRepository repliesRepository;
    private final CustomBeanUtils<Replies> beanUtils;
    private final RepliesMapper mapper;

    // 리뷰 생성
    public Replies createReplies(Replies replies) {
        return repliesRepository.save(replies);
    }

    // 내용 수정
    @Transactional(propagation = Propagation.REQUIRED)
    public Replies updateReplies(Replies replies){
        Replies findReplies = findVerifiedId(replies.getRid());

        Replies updatedReplies = beanUtils.copyNonNullProperties(replies, findReplies);
        return repliesRepository.save(updatedReplies);
    }


    // 찾기
//    @Transactional(readOnly=true)
//    public Replies findReply(long rid){return findVerifiedId(rid);}

    @Transactional(readOnly=true)
    public List<RepliesDto.Response> findReply(Long questionId){
        List<Replies> result = repliesRepository.getRepliesByQuestionOrderByQuestion(Question.builder().questionId(questionId).build());
        return result.stream().map(replies -> mapper.entityToDto(replies)).collect(Collectors.toList());
    }

    // 모두 찾기
    public Page<Replies> findReplies(int page, int size){
        return repliesRepository.findAll(PageRequest.of(page, size, Sort.by("rid").descending()));
    }

    // 삭제
    public void deleteReplies(Long rid){
        Replies findReplies = findVerifiedId(rid);
        repliesRepository.delete(findReplies);
    }

    public Replies findVerifiedId(Long rid){
        Optional<Replies> optionalReplies = repliesRepository.findById(rid);
        Replies findReplies = optionalReplies.orElseThrow(()-> new BusinessLogicException(ExceptionCode.REPLIES_NOT_FOUND));
        return findReplies;
    }


}
