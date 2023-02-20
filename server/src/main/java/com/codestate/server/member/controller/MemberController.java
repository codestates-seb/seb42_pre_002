package com.codestate.server.member.controller;
import com.codestate.server.member.dto.MemberDto;
import com.codestate.server.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {

    //CRUD


    @Autowired
    MemberService memberService;

    @PostMapping
    public MemberDto insertMember(@RequestBody MemberDto member){
        return memberService.insertMember(member);
    }

    @GetMapping
    public List<MemberDto> getAllMembers() {
        return memberService.getAllMembers();
    }
    @GetMapping("/{memberId}")
    public MemberDto getMemberByMemberId(@PathVariable String memberId) {
        return memberService.getMemberByMemberId(memberId);
    }

    @PatchMapping("/{memberId}")
    public void updateMemberPassWord(@PathVariable String memberId,@RequestBody MemberDto member) {
        memberService.updateMemberPassWord(memberId, member);
    }
    @DeleteMapping("/{memberId}")
    public void deleteMember(@PathVariable String memberId){
        memberService.deleteMember(memberId);
    }

}
