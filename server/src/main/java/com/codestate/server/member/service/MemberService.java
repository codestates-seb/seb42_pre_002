package com.codestate.server.member.service;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.member.entity.Member;
import com.codestate.server.member.repository.MemberRepository;
import com.codestate.server.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Log4j2
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final CustomBeanUtils<Member> beanUtils;

    // 생성
    public Member createMember(Member member){return memberRepository.save(member);}

    // 수정
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        Member updateMember = beanUtils.copyNonNullProperties(member, findMember);
        return memberRepository.save(updateMember);
    }

    // 찾기
    public Member findMember(long memberId){return findVerifiedMember(memberId);}

    public Page<Member> findMembers(int page, int size){
        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));
    }

    public void deleteMember(long memberId){
        Member member = findVerifiedMember(memberId);
        memberRepository.delete(member);
    }


    // 유효성 검사
    public Member findVerifiedEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);

        Member findMembers = optionalMember.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMembers;
    }


    private Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }



}
