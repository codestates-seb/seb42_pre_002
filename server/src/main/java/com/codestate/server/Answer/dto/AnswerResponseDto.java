package com.codestate.server.Answer.dto;

import com.codestate.server.member.entity.Member;
import lombok.*;

import java.time.LocalDateTime;
@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;

    private long memberId;
    private String nickname;
    private long questionId;
    private String content;
    //private LocalDateTime createdAt;
    //private LocalDateTime modifiedAt;

    public void setMember(Member member) {this.memberId = member.getMemberId();}
}
