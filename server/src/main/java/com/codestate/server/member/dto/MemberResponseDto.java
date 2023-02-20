package com.codestate.server.member.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
    private long memberId;
    private String email;
    private String name;
    private String phone;


    //    private Member.MemberStatus memberStatus;
//    // 추가 구현
//    private Stamp stamp;
//
//    public String getMemberStatus() {
//        return memberStatus.getStatus();
//    }
//    public int getStamp() {
//        return stamp.getStampCount();
//    }

}