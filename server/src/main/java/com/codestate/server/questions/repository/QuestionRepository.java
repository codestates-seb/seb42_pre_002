package com.codestate.server.questions.repository;

import com.codestate.server.questions.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    Optional<Question> findById(long questionId);
}
