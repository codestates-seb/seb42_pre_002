package com.codestate.server.questions.mapper;

import com.codestate.server.questions.dto.QuestionPatchDto;
import com.codestate.server.questions.dto.QuestionPostDto;
import com.codestate.server.questions.dto.QuestionResponseDto;
import com.codestate.server.questions.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T19:52:48+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question QuestionPostDtoToQuestions(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionPostDto.getQuestionId() );
        question.setTitle( questionPostDto.getTitle() );
        question.setContent( questionPostDto.getContent() );

        return question;
    }

    @Override
    public Question QuestionPatchDtoTQuestions(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionPatchDto.getQuestionId() );
        question.setTitle( questionPatchDto.getTitle() );
        question.setContent( questionPatchDto.getContent() );

        return question;
    }

    @Override
    public QuestionResponseDto QuestionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setContent( question.getContent() );

        return questionResponseDto;
    }
}
