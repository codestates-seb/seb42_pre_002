package com.codestate.server.Answer.entity;

import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.entity.Question;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, length = 500)
    private String content;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
    }

    /*public void setMember(Member member) {
        this.member = member;
        member.getAnswerList().add(this);
    }*/
}
