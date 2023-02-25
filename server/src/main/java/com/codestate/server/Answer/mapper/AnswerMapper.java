package com.codestate.server.Answer.mapper;

import com.codestate.server.Answer.dto.AnswerPatchDto;
import com.codestate.server.Answer.dto.AnswerPostDto;
import com.codestate.server.Answer.dto.AnswerResponseDto;
import com.codestate.server.Answer.entity.Answer;
import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        Member member = new Member();
        Question question = new Question();
        answer.setContent(answerPostDto.getContent());
        question.setQuestionId(answerPostDto.getQuestionId());
        answer.setQuestion(question);
        return answer;
    }

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {

        return AnswerResponseDto.builder()
                .answerId(answer.getAnswerId())
                .content(answer.getContent())
                .build();
    }
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
