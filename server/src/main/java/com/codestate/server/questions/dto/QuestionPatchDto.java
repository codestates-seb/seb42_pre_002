package com.codestate.server.questions.dto;

import com.codestate.server.questions.entity.QuestionTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionPatchDto {

    private long questionId;

    @NotBlank
    private String title;

    @NotBlank
    private String problemContent;

    @NotBlank
    private String expectContent;

    private List<QuestionTag> questionTags;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }


}
