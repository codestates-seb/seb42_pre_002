package com.codestate.server.questions.dto;

import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.replies.dto.RepliesResponseDto;
import com.codestate.server.tag.entity.Tag;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionResponseDto {

    private long questionId;
    private long memberId;
    private String nickname;
    private String title;
    private String problemContent;
    private String expectContent;
    private int viewCnt;

    private Question.QuestionStatus questionStatus;
    private List<QuestionTagResponseDto> questionTags;
    private LocalDateTime regDate, modDate;

    // 답변 추가
    private List<RepliesResponseDto> replies;

    public Question.QuestionStatus getQuestionStatus() {
        return questionStatus;
    }





}
