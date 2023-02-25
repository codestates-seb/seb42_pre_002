package com.codestate.server.Answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPatchDto {
    private long answerId;

    private String content;
}
