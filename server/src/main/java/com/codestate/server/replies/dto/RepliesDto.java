package com.codestate.server.replies.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Builder
@AllArgsConstructor
@Data
public class RepliesDto {
    @Getter
    public static class Post{

        @NotBlank
        private String content;

        @NotBlank
        private String writer;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long rid;

        @NotBlank(message = "내용은 공백이 아니어야 합니다")
        private String content;
        public void setRid(long rid) {this.rid = rid;}

    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private Long rid;
        private String content;
        private String writer;
    }
}
