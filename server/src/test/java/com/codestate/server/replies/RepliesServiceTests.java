package com.codestate.server.replies;

import com.codestate.server.replies.entity.Replies;
import com.codestate.server.replies.service.RepliesService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RepliesServiceTests {
    @Autowired
    private RepliesService service;

    @Test
    public void testCreate(){

        Replies entity = Replies.builder()
                .content("Retest45")
                .writer("test13")
                .build();

        System.out.println(service.createReplies(entity));
    }
}
