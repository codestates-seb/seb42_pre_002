package com.codestate.server.member.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.questions.entity.Question;
import lombok.*;
import net.bytebuddy.asm.Advice;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    private String email;

    private String nickname;

    private String password;



//    public Member(String email){this.email = email;}
//
//    public Member(String email, String nickname, String password){
//        this.email=email;
//        this.nickname=nickname;
//        this.password=password;
//    }

    // 회원 상태 저장 필드
    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;
    // 활동 상태 추가
    @AllArgsConstructor
    public enum MemberStatus{
        MEMBER_ACTIVE("활동 회원"),
        MEMBER_SLEEP("휴면 회원"),
        MEMBER_QUIT("탈퇴 회원");

        @Getter
        private String status;
    }
}
