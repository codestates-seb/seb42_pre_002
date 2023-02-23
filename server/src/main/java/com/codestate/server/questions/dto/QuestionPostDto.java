package com.codestate.server.questions.dto;

import com.codestate.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import javax.validation.constraints.NotBlank;
import java.util.List;


@Getter
@AllArgsConstructor
public class QuestionPostDto {

    private long memberId;

    @NotBlank
    private String title;

    @NotBlank
    private String problemContent;

    @NotBlank
    private String expectContent;

    private List<QuestionTagDto> questionTags;

    public Member getMember(){
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }

}
