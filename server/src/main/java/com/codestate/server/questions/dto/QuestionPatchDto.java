package com.codestate.server.questions.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

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

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    private LocalDateTime regDate, modDate;

}
