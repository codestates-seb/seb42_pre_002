package com.codestate.server.replies.dto;

import com.codestate.server.questions.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@Builder
@AllArgsConstructor
@Data
public class RepliesPostDto {

    private Long questionId;

    @NotBlank
    private String content;

    @NotBlank
    private String writer;

    public Question getQuestion(){
        Question question = new Question();
        question.setQuestionId(questionId);
        return question;
    }


}
