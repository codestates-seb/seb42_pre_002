package com.codestate.server.tag.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.questions.entity.QuestionTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    private String title;

    private String summary;

    private int tagCount;

    private LocalDateTime regDate;

    private LocalDateTime modDate;

    // 질문태그 <-> 태그
    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void setQuestionTags(QuestionTag questionTags) {
        this.questionTags.add(questionTags);
        if(questionTags.getTag() !=this) {
            questionTags.setTag(this);
        }
    }
}
