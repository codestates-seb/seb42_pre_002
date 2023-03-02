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
        member.setMemberId(answerPostDto.getMemberId());

        Question question = new Question();
        question.setQuestionId(answerPostDto.getQuestionId());

        answer.setMember(member);
        answer.setQuestion(question);
        answer.setContent(answerPostDto.getContent());

        return answer;
    }

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        Member member = answer.getMember();
        Question question = answer.getQuestion();

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setMemberId(answer.getMember().getMemberId());
        answerResponseDto.setNickname(answer.getMember().getNickname());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setContent(answer.getContent());

        return answerResponseDto;

        /*return AnswerResponseDto.builder()
                .answerId(answer.getAnswerId())
                .memberId(answer.getMember().getMemberId())
                .nickname(answer.getMember().getNickname())
                .questionId(answer.getQuestion().getQuestionId())
                .content(answer.getContent())
                .build();*/
    }
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);

}
