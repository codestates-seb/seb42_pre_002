package com.codestate.server.replies.service;

import com.codestate.server.replies.entity.Replies;
import com.codestate.server.replies.repository.RepliesRepository;
import com.codestate.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RepliesService {

    private final RepliesRepository repliesRepository;
//    private final CustomBeanUtils<Replies> beanUtils;

    public Replies createReplies(Replies replies) {
        return repliesRepository.save(replies);
    }




//    public Replies deleteReplies(Long rid){
//        Replies findReplies = findVerifiedReplies(rid);
//
//        return repliesRepository.deleteById(findReplies);
//    }

//    public Replies findVerifiedReplies(Long rid){
//        Optional<Replies> optionalReplies = repliesRepository.findById(rid);
//        Replies findReplies = optionalReplies.orElseThrow(()-> new BusinessLogicException(ExceptionCode.REPLIES_NOT_FOUND));
//        return findReplies;
//    }
}
