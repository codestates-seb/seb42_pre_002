package com.codestate.server.replies.entity;

import com.codestate.server.questions.entity.Question;
import lombok.*;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
//@Transactional
public class Replies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rid;

    private String content;

    private String writer;

    @Enumerated(EnumType.STRING) // 컬럼 맵핑
    private RepliesStatus repliesStatus = RepliesStatus.REPLIES_REQUEST;

    /*M:1*/
//    @ManyToOne
//    @JoinColumn(name="mid")
//    private Member member;
//    public void addMember(Member member){
//        this.member = member;
//    }

    @ManyToOne
    @JoinColumn(name="questionId")
    private Question question;

    public void addQuestion(Question question){
        this.question = question;
    }



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
