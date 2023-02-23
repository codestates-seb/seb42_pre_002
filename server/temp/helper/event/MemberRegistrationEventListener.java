package com.codestate.server.helper.event;

import com.codestate.server.helper.email.EmailSender;
import com.codestate.server.member.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@Slf4j
@EnableAsync
@Component
@AllArgsConstructor
public class MemberRegistrationEventListener {
    private final EmailSender emailSender;
    private final MemberService memberService;
}
