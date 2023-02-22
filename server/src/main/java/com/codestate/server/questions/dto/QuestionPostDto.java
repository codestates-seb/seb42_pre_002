package com.codestate.server.questions.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


@Getter
@AllArgsConstructor
public class QuestionPostDto {

    @NotNull
    private long questionId;

    @NotBlank
    private String title;

    @NotBlank
    private String problemContent;

    @NotBlank
    private String expectContent;

    private LocalDateTime regDate;
}
