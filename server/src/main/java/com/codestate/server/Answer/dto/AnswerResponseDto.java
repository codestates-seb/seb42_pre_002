package com.codestate.server.Answer.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerResponseDto {
    private long answerId;
    //private long questionId;
    private String content;
    //private LocalDateTime createdAt;
    //private LocalDateTime modifiedAt;
}
