package com.codestate.server.questions.mapper;

import com.codestate.server.Answer.dto.AnswerResponseDto;
import com.codestate.server.Answer.entity.Answer;
import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.dto.*;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.entity.QuestionTag;
import com.codestate.server.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {

    Question QuestionPatchDtoTQuestions (QuestionPatchDto questionPatchDto);
    List<QuestionResponseDto> QuestionToQuestionResponseDtos(List<Question> questions);
    default Question QuestionPostDtoToQuestion (QuestionPostDto questionPostDto){
        Question question = new Question();
        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        List<QuestionTag> questionTags = questionPostDto.getQuestionTags().stream()
                        .map(questionTagDto -> {
                            QuestionTag questionTag = new QuestionTag();
                            Tag tag = new Tag();
                            tag.setTagId(questionTagDto.getTagId());
                            tag.setTitle(questionTagDto.getTitle());
                            questionTag.addQuestion(question);
                            questionTag.addTag(tag);
                            return questionTag;
                        }).collect(Collectors.toList());


        question.setMember(member);
        question.setQuestionTags(questionTags);
        question.setTitle(questionPostDto.getTitle());
        question.setProblemContent(questionPostDto.getProblemContent());
        question.setExpectContent(questionPostDto.getExpectContent());
        return question;

    }

    @Mapping(source = "member.memberId", target = "memberId")
    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        Member member = question.getMember();

        List<QuestionTag> questionTags = question.getQuestionTags();
        List<Answer> answers = question.getAnswers();



        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setMemberId(question.getMember().getMemberId());
        questionResponseDto.setNickname(question.getMember().getNickname());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setProblemContent(question.getProblemContent());
        questionResponseDto.setExpectContent(question.getExpectContent());
        questionResponseDto.setRegDate(question.getRegDate());
        questionResponseDto.setModDate(question.getModDate());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setViewCnt(question.getViewCnt());
        questionResponseDto.setQuestionTags(
                questionTagsToQuestionTagResponseDtos(questionTags));
        questionResponseDto.setAnswers(
                answerToAnswerRespsonseDtos(answers));

        return questionResponseDto;
    }
    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(
                                                List<QuestionTag> questionTags) {
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagId(questionTag.getTag().getTagId())
                        .title(questionTag.getTag().getTitle())
                        .build())
                .collect(Collectors.toList());
    }


    QuestionTag QuestionDtoToQuestionTag (QuestionTagDto questionTagDto);

    QuestionTagResponseDto QuestionTagToQuestionTagResponseDto(QuestionTag questionTag);

    //답변 추가
    default List<AnswerResponseDto> answerToAnswerRespsonseDtos(List<Answer> answers) {
        return answers
                .stream()
                .map(answer -> AnswerResponseDto
                        .builder()
                        .answerId(answer.getAnswerId())
                        .content(answer.getContent())
                        .build())
                .collect(Collectors.toList());
    }


}
