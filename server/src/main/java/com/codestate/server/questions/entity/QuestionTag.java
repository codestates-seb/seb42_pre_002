package com.codestate.server.questions.entity;

import com.codestate.server.questions.entity.Question;
import com.codestate.server.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    // 질문태그 <-> 질문
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    // 질문태그 <-> 태그
    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    public void setQuestion(Question question){
        this.question = question;
        if(!this.question.getQuestionTags().contains(this)){
            this.question.getQuestionTags().add(this);
        }
    }

    public void setTag(Tag tag){
        this.tag = tag;
        if(!this.tag.getQuestionTags().contains(this)){
            this.tag.setQuestionTags(this);
        }
    }
}