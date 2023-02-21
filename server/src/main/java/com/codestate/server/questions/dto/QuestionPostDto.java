package com.codestate.server.questions.dto;

import lombok.Getter;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


@Getter
public class QuestionPostDto {

    @NotNull
    private long questionId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    private LocalDateTime regDate;
}
