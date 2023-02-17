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
public class RepliesPatchDto {
    private Long rid;

    @NotBlank(message = "내용은 공백이 아니어야 합니다")
    private String content;
}
