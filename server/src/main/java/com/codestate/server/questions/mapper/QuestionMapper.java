package com.codestate.server.questions.mapper;

import com.codestate.server.questions.dto.*;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.entity.QuestionTag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question QuestionPostDtoToQuestions (QuestionPostDto questionPostDto);
    Question QuestionPatchDtoTQuestions (QuestionPatchDto questionPatchDto);
    QuestionResponseDto QuestionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> QuestionToQuestionResponseDtos(List<Question> questions);

    QuestionTag QuestionDtoToQuestionTag (QuestionTagDto questionTagDto);

    QuestionTagResponseDto QuestionTagToQuestionTagResponseDto(QuestionTag questionTag);
}
