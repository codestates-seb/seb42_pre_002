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
public class RepliesDto {

    public static class Post{

//        @NotBlank
        private String content;

//        @NotBlank
        private String writer;
    }

    public static class Patch{
        private Long rid;

        @NotBlank(message = "내용은 공백이 아니어야 합니다")
        private String content;

    }

    public static class Response{
        private Long rid;
        private String content;
        private String writer;
    }
}
