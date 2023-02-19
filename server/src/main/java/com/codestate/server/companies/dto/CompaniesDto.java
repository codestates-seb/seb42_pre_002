package com.codestate.server.companies.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

public class CompaniesDto {
    @Getter
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
    public static class Patch{
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
