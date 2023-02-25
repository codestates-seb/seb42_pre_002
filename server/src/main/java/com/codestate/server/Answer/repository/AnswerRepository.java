package com.codestate.server.Answer.repository;

import com.codestate.server.Answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
}
