package com.codestate.server.member.repository;
import com.codestate.server.member.dto.MemberDto;
import com.codestate.server.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MemberRepository  {

    static public ArrayList<MemberDto> members;

    static {
        members = new ArrayList<>();
        members.add(new MemberDto(1L,"asd@gmail.com", "Id1", "1234"));
        members.add(new MemberDto(2L,"15acod@gmail.com", "Id1", "1234"));
        members.add(new MemberDto(3L,"gogo@gmail.com", "Id1", "1234"));

    }

    public MemberDto insertMember(MemberDto member) {
        members.add(member);
        return member;
    }

    public List<MemberDto> getAllMembers() {
        return members;
    }
    public MemberDto getMemberByMemberId(String memberId) {
        return members.stream().filter(memberDto -> memberDto.getMemberId().equals(memberId))
                .findAny().orElse(new MemberDto(null, "", "", ""));
    }

    public void updateMemberPassWord(String memberId,MemberDto member) {
        members.stream().filter(memberDto -> memberDto.getMemberId().equals(memberId))
                .findAny().orElse(new MemberDto(null, "", "", ""))
                .setPassWord(member.getPassWord());
    }

    public void deleteMember(String memberId){
        members.removeIf(memberDto -> memberDto.getMemberId().equals(memberId));
    }

}
