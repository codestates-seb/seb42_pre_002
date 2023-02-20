package com.codestate.server.replies.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@Builder
@AllArgsConstructor
@Data
public class RepliesPostDto {
    private Long rid;

    @NotBlank
    private String content;

    @NotBlank
    private String writer;
}
