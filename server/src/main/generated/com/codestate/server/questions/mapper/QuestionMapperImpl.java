package com.codestate.server.questions.mapper;

import com.codestate.server.questions.dto.QuestionPatchDto;
import com.codestate.server.questions.dto.QuestionResponseDto;
import com.codestate.server.questions.dto.QuestionTagDto;
import com.codestate.server.questions.dto.QuestionTagResponseDto;
import com.codestate.server.questions.dto.QuestionTagResponseDto.QuestionTagResponseDtoBuilder;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.entity.Question.QuestionBuilder;
import com.codestate.server.questions.entity.QuestionTag;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-24T03:08:31+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question QuestionPatchDtoTQuestions(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

        question.questionId( questionPatchDto.getQuestionId() );
        question.title( questionPatchDto.getTitle() );
        question.problemContent( questionPatchDto.getProblemContent() );
        question.expectContent( questionPatchDto.getExpectContent() );
        List<QuestionTag> list = questionPatchDto.getQuestionTags();
        if ( list != null ) {
            question.questionTags( new ArrayList<QuestionTag>( list ) );
        }

        return question.build();
    }

    @Override
    public List<QuestionResponseDto> QuestionToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    @Override
    public QuestionTag QuestionDtoToQuestionTag(QuestionTagDto questionTagDto) {
        if ( questionTagDto == null ) {
            return null;
        }

        QuestionTag questionTag = new QuestionTag();

        questionTag.setTitle( questionTagDto.getTitle() );

        return questionTag;
    }

    @Override
    public QuestionTagResponseDto QuestionTagToQuestionTagResponseDto(QuestionTag questionTag) {
        if ( questionTag == null ) {
            return null;
        }

        QuestionTagResponseDtoBuilder questionTagResponseDto = QuestionTagResponseDto.builder();

        questionTagResponseDto.title( questionTag.getTitle() );

        return questionTagResponseDto.build();
    }
}
