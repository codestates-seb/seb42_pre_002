package com.codestate.server.questions.mapper;

import com.codestate.server.questions.dto.QuestionPatchDto;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.dto.QuestionPostDto;
import com.codestate.server.questions.dto.QuestionResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question QuestionPostDtoToQuestions (QuestionPostDto questionPostDto);
    Question QuestionPatchDtoTQuestions (QuestionPatchDto questionPatchDto);
    QuestionResponseDto QuestionToQuestionResponseDto(Question question);
}
