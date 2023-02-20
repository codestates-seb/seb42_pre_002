package com.codestate.server.questions.service;

import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.repository.QuestionRepository;
import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionsRepository;

    public QuestionService(QuestionRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }

    public Question createQuestion(Question question){
        verifyExistsQuestion(question.getQuestionId());
        Question savedQuestion = saveQuestion(question);

        return savedQuestion;

    }

    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));

        return questionsRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId){
        return findVerifiedQuestion(questionId);

    }

    public void deleteQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        questionsRepository.deleteById(questionId);

    }


    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalQuestion =
                questionsRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    public void verifyExistsQuestion(long questionId){
        Optional<Question> question = questionsRepository.findById(questionId);
        if(question.isPresent())
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
    }

    public Question saveQuestion(Question question){
        return questionsRepository.save(question);
    }



}
