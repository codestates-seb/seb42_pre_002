package com.codestate.server.member.controller;

import com.codestate.server.member.dto.MemberDto;
import com.codestate.server.member.dto.MemberPostDto;
import com.codestate.server.member.entity.Member;
import com.codestate.server.member.mapper.MemberMapper;
import com.codestate.server.member.repository.MemberRepository;
import com.codestate.server.member.service.MemberService;
import com.codestate.server.replies.response.MultiResponseDto;
import com.codestate.server.replies.response.SingleResponseDto;
import com.codestate.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberService service;
    private final MemberMapper mapper;
    private final MemberRepository memberRepository;


    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = mapper.PostDtoToEntity(requestBody);

        Member createMember = service.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createMember.getMemberId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{memberId}")
    public ResponseEntity updateMember(@PathVariable("memberId") @Positive long memberId,
                                       @Valid @RequestBody MemberDto.Patch requestBody){

        requestBody.setMemberId(memberId);

        Member member = service.updateMember(mapper.PatchDtoToEntity(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.entityToDto(member)), HttpStatus.OK);
    }

    @GetMapping("/{memberId}")
    public ResponseEntity findMember(@PathVariable("memberId") @Positive long memberId){

        Member member = service.findMember(memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.entityToDto(member)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){

        Page<Member> pageMember = service.findMembers(page-1, size);
        List<Member> members = pageMember.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.entitiesToDto(members), pageMember), HttpStatus.OK);
    }

    @DeleteMapping("/{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId") long memberId) {
        service.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
