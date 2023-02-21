package com.codestate.server.questions.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000, nullable = false)
    private String content;

    @Column(nullable = false)
    private int viewCnt; // 조회수

   /*연관관계 매핑*/
    @ManyToOne(fetch = FetchType.LAZY)
    public Member nickname;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_POSTING;

    // 게시 상태
    @AllArgsConstructor
    public enum QuestionStatus{
        QUESTION_POSTING("게시중"),
        QUESTION_DELETED("게시 중지");

        @Getter
        private String status;
    }

}
