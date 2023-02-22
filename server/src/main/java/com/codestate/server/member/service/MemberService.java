package com.codestate.server.member.service;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.member.entity.Member;
import com.codestate.server.member.repository.MemberRepository;
import com.codestate.server.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;

import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Transactional
@Service
@Log4j2
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
//    private final ApplicationEventPublisher publisher; // 옵저퍼 패턴 구현체(이벤트 생성시 발행)
    private final CustomBeanUtils<Member> beanUtils;

    // 생성
    public Member createMember(Member member){

        VerifiedEmail(member.getEmail());

//        Member saveMember = memberRepository.save(member);
//
//        publisher.publishEvent(new );

        return memberRepository.save(member);
    }

    // 수정
    @Transactional(propagation = Propagation.REQUIRED)
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        Member updateMember = beanUtils.copyNonNullProperties(member, findMember);

        return memberRepository.save(updateMember);
    }

    // 찾기
    @Transactional(readOnly = true)
    public Member findMember(long memberId){return findVerifiedMember(memberId);}

    public Page<Member> findMembers(int page, int size){
        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));
    }

    public void deleteMember(long memberId){
        Member member = findVerifiedMember(memberId);
        memberRepository.delete(member);
    }


    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void VerifiedEmail(String email){

        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }



}
