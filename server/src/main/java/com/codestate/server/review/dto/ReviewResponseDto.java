package com.codestate.server.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ReviewResponseDto {
    private Long rno;
    private String text;
    private String replyer;
}
