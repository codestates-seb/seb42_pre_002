package com.codestate.server.replies.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;


@Getter
@Setter

public class RepliesPatchDto {
    private long rid;

    @NotBlank(message = "내용은 공백이 아니어야 합니다")
    private String content;

//    public void setRid(long rid) {this.rid = rid;}
}
