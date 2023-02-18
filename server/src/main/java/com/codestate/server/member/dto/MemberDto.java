package com.codestate.server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter @Setter
@AllArgsConstructor
public class MemberDto {

    private Long memberId;

    @NotNull(message = "이메일은 공백이 아니어야 합니다.")
    private String email;

    @NotNull(message = "이름은 공백이 아니어야 합니다.")
    private String nickName;

    @NotNull(message = "비밀번호는 공백이 아니어야 합니다.")
    private String passWord;

}
