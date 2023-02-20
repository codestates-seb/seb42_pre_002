package com.codestate.server.member.service;
import com.codestate.server.member.dto.MemberDto;
import com.codestate.server.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    MemberRepository memberRepository;

    public MemberDto insertMember(MemberDto member){
        return memberRepository.insertMember(member);
    }

    public List<MemberDto> getAllMembers() {
        return memberRepository.getAllMembers();
    }

    public MemberDto getMemberByMemberId(String memberId){
        return memberRepository.getMemberByMemberId(memberId);
    }

    public void updateMemberPassWord(String memberId, MemberDto member) {
        memberRepository.updateMemberPassWord(memberId,member);
    }

    public void deleteMember(String memberId){
        memberRepository.deleteMember(memberId);
    }


}
