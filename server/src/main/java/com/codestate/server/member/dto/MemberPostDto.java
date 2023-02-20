package com.codestate.server.member.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotBlank;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberPostDto {
    @NotBlank
    private String email;

    @NotBlank
    private String nickName;

    @NotBlank
    private String passWord;
}
