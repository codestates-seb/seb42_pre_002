package com.codestate.server.questions.controller;

import com.codestate.server.questions.dto.QuestionPatchDto;
import com.codestate.server.questions.dto.QuestionPostDto;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.mapper.QuestionMapper;
import com.codestate.server.questions.service.QuestionService;
import com.codestate.server.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/ask/modify")
@Validated
public class QuestionController {

    private final static String QUESTION_DEFAULT_URL = "/ask/modify";
    private final QuestionService questionService;
    private final QuestionMapper mapper;


    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }


    @PostMapping
    public ResponseEntity postQuestion (@Valid @RequestBody QuestionPostDto questionsPostDto){
        Question question = questionService.createQuestion(mapper.QuestionPostDtoToQuestions(questionsPostDto));

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();

    }


    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id")@Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto){
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.QuestionPatchDtoTQuestions(questionPatchDto));
        return new ResponseEntity<>(mapper.QuestionToQuestionResponseDto(question),HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id")@Positive long questionId){
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(mapper.QuestionToQuestionResponseDto(question),HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id")long questionId){
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
