package com.codestate.server.helper.event;

import com.codestate.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberRegistrationApplicationEvent {
    private Member member;
}
