package com.codestate.server.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class MemberPatchDto {
    private long memberId;

    @NotNull(message = "회원 이름은 공백이 아니어야 합니다")
    private String nickname;


}
