package com.codestate.server.company.dto;


import lombok.*;

import javax.validation.constraints.NotNull;
@Getter
@Builder
@AllArgsConstructor
@Data
public class CompanyDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        @NotNull
        private String cname;
        private String title;
        private String content;
        private String location;
        private String position;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch{
        private long cid;
        @NotNull(message = "회사명은 공백 금지")
        private String cname;
        private String content;
        private String location;
        private String position;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long cid;
        private String cname;
        private String title;
        private String content;
        private String location;
        private String position;
    }
}
