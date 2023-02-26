package com.codestate.server.questions.controller;

import com.codestate.server.dto.MultiResponseDto;
import com.codestate.server.dto.SingleResponseDto;
import com.codestate.server.questions.dto.QuestionPatchDto;
import com.codestate.server.questions.dto.QuestionPostDto;
import com.codestate.server.questions.dto.QuestionResponseDto;
import com.codestate.server.questions.dto.QuestionTagDto;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.entity.QuestionTag;
import com.codestate.server.questions.mapper.QuestionMapper;
import com.codestate.server.questions.service.QuestionService;
import com.codestate.server.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {

    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionService questionService;
    private final QuestionMapper mapper;


    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }


    @PostMapping
    public ResponseEntity postQuestion (@Valid @RequestBody QuestionPostDto questionsPostDto){
        Question question = questionService.createQuestion(mapper.QuestionPostDtoToQuestion(questionsPostDto));

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();

    }


    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id")@Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto){
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.QuestionPatchDtoTQuestions(questionPatchDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id")@Positive long questionId){
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),HttpStatus.OK);
    }

    // 전체 질문 조회 (최신순)
    @GetMapping("/latest")
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size){
        Page<Question> questionPage = questionService.findQuestions(page-1,size);
        List<Question> questions = questionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.QuestionToQuestionResponseDtos(questions),questionPage),
                HttpStatus.OK);
    }

    // 전체 질문 조회 (조회순)
    @GetMapping("/view")
    public ResponseEntity getVQuestions(@Positive @RequestParam int page,
                                        @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findRecommendQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.QuestionToQuestionResponseDtos(questions), pageQuestions),
                HttpStatus.OK);
    }

    // 질문 검색 기능 (title,problemContent)
    @GetMapping("/search")
    public ResponseEntity search(@RequestParam(value = "type") String type,
                                 @RequestParam(value = "keyword") String keyword) {
        return ResponseEntity.ok(mapper.QuestionToQuestionResponseDtos(questionService.searchQuestion(type, keyword)));
    }

        @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id")long questionId){
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 전체 질문 삭제
    @DeleteMapping
    public ResponseEntity deleteQuestions(Question question) {
        questionService.deleteQuestions(question);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}