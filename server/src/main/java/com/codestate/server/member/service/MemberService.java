package com.codestate.server.member.service;

import com.codestate.server.member.entity.Member;

public interface MemberService {
    Member createMember(Member member);
    Member findMember(String email);
}
