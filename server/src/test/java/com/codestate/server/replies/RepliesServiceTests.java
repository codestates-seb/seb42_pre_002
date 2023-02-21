package com.codestate.server.replies;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.replies.entity.Replies;
import com.codestate.server.replies.repository.RepliesRepository;
import com.codestate.server.replies.service.RepliesService;
import com.codestate.server.utils.CustomBeanUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;



@SpringBootTest

public class RepliesServiceTests {
    @Autowired
    private RepliesService service;
    @Autowired
    private RepliesRepository repliesRepository;
    @Autowired
    private CustomBeanUtils<Replies> beanUtils;
    @Test
    public void createTest() {

        Replies entity = Replies.builder()
                .content("Retest45")
                .build();

        System.out.println(service.createReplies(entity));
    }

    @Test
    public Replies updateReplies(Replies replies){
        Replies findReplies = findVerifiedReplies(3L);

        Replies updateReplies = beanUtils.copyNonNullProperties(replies, findReplies);
        return repliesRepository.save(updateReplies);
    }
    public Replies findVerifiedReplies(Long rid){
        Optional<Replies> optionalReplies = repliesRepository.findById(rid);
        Replies findReplies = optionalReplies.orElseThrow(()-> new BusinessLogicException(ExceptionCode.REPLIES_NOT_FOUND));
        return findReplies;
    }


}



