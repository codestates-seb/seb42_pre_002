package com.codestate.server.questions.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class QuestionResponseDto {

    private long questionId;

    private String title;

    private String content;




}
