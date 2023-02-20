package com.codestate.server.member.service;
import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.member.entity.Member;
import com.codestate.server.member.repository.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    // 회원 가입
    public Member createMember(Member member) {
        // 이미 등록된 이메일인지 확인
        verifyExistsEmail(member.getEmail());

        return memberRepository.save(member);
    }

    // 회원 정보 조회
    public Member findMember(long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    // 모든 회원 조회
    public Page<Member> findMembers(int page, int size) {
        // Pagination
        return memberRepository.findAll(PageRequest.of(page - 1, size,
                Sort.by("memberId").descending()));
    }

    // 특정 회원 정보 수정
    public Member updateMember(Member member) {
        // 존재하는 회원인지 확인
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getNickName()).ifPresent(nickName -> findMember.setNickName(nickName));
        Optional.ofNullable(member.getPassWord()).ifPresent(passWord -> findMember.setPassWord(passWord));

        return memberRepository.save(findMember);
    }

    // 특정 회원 탈퇴
    public void deleteMember(long memberId) {
        // TODO: 데이터 삭제가 아닌 숨김(휴면) 상태로 변경

        // 존재하는 회원인지 확인
        //Member findMember = findVerifiedMember(memberId);
        findVerifiedMember(memberId);

        memberRepository.deleteById(memberId);
    }

    // 이미 등록된 이메일인지 확인
    public void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    // 존재하는 회원인지 확인
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }
}