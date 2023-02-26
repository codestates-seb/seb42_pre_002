package com.codestate.server.questions.dto;

import com.codestate.server.Answer.dto.AnswerResponseDto;
import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.entity.QuestionTag;
import com.codestate.server.replies.dto.RepliesResponseDto;
import com.codestate.server.tag.entity.Tag;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Data
@Builder
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

    private List<AnswerResponseDto> answers;


    public Question.QuestionStatus getQuestionStatus() {
        return questionStatus;
    }

    public void setMember(Member member) {this.memberId = member.getMemberId();}


}

