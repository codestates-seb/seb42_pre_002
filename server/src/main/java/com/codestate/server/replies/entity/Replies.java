package com.codestate.server.replies.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.questions.entity.Question;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Replies extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rid;

    private String content;

    private String writer;


    /*연관관계 매핑*/
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question; // DB상 외래키의 관계로 연결된 엔티티 클래스에 설정

    public void setQuestion(Question question) {
        this.question = question;
    }

    @Enumerated(EnumType.STRING)
    private RepliesStatus repliesStatus = RepliesStatus.REPLIES_REQUEST;


    // 컬럼 간 매핑
    @AllArgsConstructor
    public enum RepliesStatus{
        REPLIES_REQUEST(1, "댓글 작성"),
        REPLIES_COMPLETE(2, "댓글 작성 완료"),
        REPLIES_CANCEL(3, "댓글 작성 취소");

        @Getter
        private int stepNumber;

        @Getter
        private String stepDesc;
    }

}
