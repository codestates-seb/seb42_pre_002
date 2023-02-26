package com.codestate.server.member.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.questions.entity.Question;
import com.fasterxml.jackson.databind.ser.Serializers;
import lombok.*;
import net.bytebuddy.asm.Advice;
import org.springframework.data.domain.Auditable;

import javax.persistence.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
//@AllArgsConstructor
//@Builder
@Entity
@Getter
@Setter
public class Member extends BaseEntity implements Principal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(updatable = false, unique = true, nullable = false)
    private String email;

    @Column(updatable = false, unique = true, nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    // 연관관계 매핑
    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    // User 권한 정보 테이블과 매핑되는 정보
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

//    public void addQuestion(Question question) {
//        this.questions.add(question);
//        if(question.getMember() != this) {
//            question.setMember(this);
//        }
//    }

    public Member(String email, String nickname, String password){
        this.email=email;
        this.nickname=nickname;
        this.password=password;
    }

    @Override
    public String getName(){
        return getEmail();
    }

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

    // Role 저장
    public enum MemberRole{
        ROLE_USER,
        ROLE_ADMIN
    }

}
