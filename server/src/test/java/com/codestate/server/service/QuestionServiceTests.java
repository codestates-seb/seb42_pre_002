package com.codestate.server.service;

import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.service.QuestionService;
import com.codestate.server.questions.entity.Question;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.IntStream;

@SpringBootTest
public class QuestionServiceTests {
    @Autowired
    private QuestionService service;

//    @Test
//    public void createTest(){
//         Question entity = Question.builder()
//                .title("Title....")
//                .problemContent("Subject is")
//                .expectContent("admin")
//                .questionStatus(Question.QuestionStatus.QUESTION_POSTING)
//                .member(Member.builder().memberId(1L).build())
//                .build();
//        System.out.println(service.createQuestion(entity));
//
//    }
//
//    @Test
//    public void insertDummies(){
//        IntStream.rangeClosed(1,10).forEach(i->{
//
//            Question entity = Question.builder()
//                    .email("test"+i+"aa.com")
//                    .password("test"+i)
//                    .nickname("testName")
//                    .questionStatus(Question.QuestionStatus.MEMBER_ACTIVE)
//                    .build();
//
//            System.out.println(service.createQuestion(entity));
//        });
//    }
}
