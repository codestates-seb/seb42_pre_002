package com.codestate.memberservice;


import com.codestate.server.member.entity.Member;
import com.codestate.server.member.service.MemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest()
public class ServiceTest {

    @Autowired
    private MemberService memberService;

    @Test
    public void createTest() {

        Member entity = Member.builder()
                .email("test12@aaasdf.com")
                .nickName("test12345")
                .passWord("123")
                .build();

        System.out.println(memberService.createMember(entity));
    }
}
