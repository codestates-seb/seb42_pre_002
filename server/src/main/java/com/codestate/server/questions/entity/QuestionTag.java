package com.codestate.server.questions.entity;

import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.tag.entity.Tag;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@EqualsAndHashCode(callSuper=false)
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    //private String title;

    // 질문태그 <-> 질문
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    // 질문태그 <-> 태그
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    //private int viewCnt;

    public void addQuestion(Question question){
        this.question = question;
        if(!this.question.getQuestionTags().contains(this)){
            this.question.getQuestionTags().add(this);
        }
    }

    public void addTag(Tag tag){
        this.tag = tag;
        if(!this.tag.getQuestionTags().contains(this)){
            this.tag.addQuestionTag(this);
        }
    }

}
