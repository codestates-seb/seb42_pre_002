package com.codestate.server.member.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@Builder
@AllArgsConstructor
@Data
public class MemberDto {
    @Getter
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String nickname;

        private String password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long memberId;

        @NotBlank(message = "회원 이름은 공백이 아니어야 합니다")
        private String nickname;

        public void setMemberId(long memberId) {this.memberId = memberId;}
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long memberId;
        private String email;
        private String nickname;
        private String password;}

}
