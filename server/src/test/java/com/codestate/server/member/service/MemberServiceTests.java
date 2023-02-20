package com.codestate.server.member.service;

import com.codestate.server.member.entity.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
                .build();
        System.out.println(service.createMember(entity));

    }
}
