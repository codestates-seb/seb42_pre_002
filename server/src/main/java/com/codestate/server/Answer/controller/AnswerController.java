package com.codestate.server.Answer.controller;

import com.codestate.server.Answer.dto.AnswerPatchDto;
import com.codestate.server.Answer.dto.AnswerPostDto;
import com.codestate.server.Answer.entity.Answer;
import com.codestate.server.Answer.mapper.AnswerMapper;
import com.codestate.server.Answer.service.AnswerService;
import com.codestate.server.dto.MultiResponseDto;
import com.codestate.server.dto.SingleResponseDto;
import com.codestate.server.member.service.MemberService;
import com.codestate.server.member.service.MemberService_backup;
import com.codestate.server.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/answers")
@CrossOrigin
@Validated
@Slf4j
public class AnswerController {

    private final static String ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;


    public AnswerController(AnswerService answerService,
                            AnswerMapper answerMapper){
        this.answerService = answerService;
        this.answerMapper = answerMapper;

    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));

        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, answer.getAnswerId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer)),HttpStatus.OK);

    }


    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId) {
        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer)),HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Answer> pageAnswers = answerService.findAnswers(page - 1, size);
        List<Answer> answers = pageAnswers.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(answerMapper.answersToAnswerResponseDtos(answers), pageAnswers), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
