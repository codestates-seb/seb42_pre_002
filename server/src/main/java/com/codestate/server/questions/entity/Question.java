package com.codestate.server.questions.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.member.entity.Member;
import com.codestate.server.replies.entity.Replies;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
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
    private String problemContent;

    @Column(length = 1000, nullable = false)
    private String expectContent;

    @Column(columnDefinition = "int default 0")
    private int viewCnt; // 조회수


   /*연관관계 매핑*/
    // 질문 <-> 회원
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    public Member member;


    // 질문 <-> 답변
    @OneToMany(mappedBy = "question")
    private List<Replies> questionReplies = new ArrayList<>();

//    public void setMember(Member member) {
//        this.member = member;
//        if(!this.member.getQuestions().contains(this)) {
//            this.member.addQuestion(this);
//        }
//    }

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_POSTING;

    // 질문 <-> 질문태그
    @OneToMany(mappedBy = "question")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getQuestion() != this) {
            questionTag.addQuestion(this);
        }
    }


    // 게시 상태
    @AllArgsConstructor
    public enum QuestionStatus{
        QUESTION_POSTING("게시중"),
        QUESTION_DELETED("게시 중지"),
        QUESTION_RESOLVED("채택 완료"),
        QUESTION_UNRESOLVED("미해결");

        @Getter
        private String status;
    }

}


