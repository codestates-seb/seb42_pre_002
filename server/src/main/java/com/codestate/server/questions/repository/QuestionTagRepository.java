package com.codestate.server.questions.repository;

import com.codestate.server.questions.entity.Question;
import com.codestate.server.questions.entity.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionTagRepository extends JpaRepository<QuestionTag,Long> {
    List<QuestionTag> findAllByQuestion(Question question);
}
