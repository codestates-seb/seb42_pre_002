package com.codestate.server.questions.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class QuestionTagResponseDto {
    private long questionTagId;

    private String title;
}