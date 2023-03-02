package com.codestate.server.replies.dto;

import com.codestate.server.questions.entity.Question;
import lombok.*;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RepliesResponseDto {
    private Long rid;

    private long questionId;
    private String content;
    private String writer;
    private List<RepliesResponseDto> replies;



    public void setQuestion(Question question) {
        this.questionId = question.getQuestionId();
    }
}
