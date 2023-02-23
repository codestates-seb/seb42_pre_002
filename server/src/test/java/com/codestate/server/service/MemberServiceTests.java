package com.codestate.server.service;

import com.codestate.server.member.entity.Member;
import com.codestate.server.member.repository.MemberRepository;
import com.codestate.server.member.service.MemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
public class MemberServiceTests {
    @Autowired
    private MemberService service;

    @Test
    public void createTest(){
        Member entity = Member.builder()
                .email("test@aa.com")
                .password("pqss")
                .nickname("admin")
                .memberStatus(Member.MemberStatus.MEMBER_ACTIVE)
                .build();
        System.out.println(service.createMember(entity));

    }

    @Test
    public void insertDummies(){
        IntStream.rangeClosed(1,10).forEach(i->{

            Member entity = Member.builder()
                    .email("test"+i+"aa.com")
                    .password("test"+i)
                    .nickname("testName")
                    .memberStatus(Member.MemberStatus.MEMBER_ACTIVE)
                    .build();

            System.out.println(service.createMember(entity));
        });
    }
}
