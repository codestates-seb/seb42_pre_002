package com.codestate.server.replies.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Builder
//@AllArgsConstructor
//@Data
public class RepliesResponseDto {
    private Long rid;
    private String content;
    private String writer;
}
