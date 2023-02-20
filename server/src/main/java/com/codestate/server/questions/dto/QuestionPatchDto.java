package com.codestate.server.questions.dto;

import lombok.Getter;
import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPatchDto {

    private long questionId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}
