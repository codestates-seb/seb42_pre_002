package com.codestate.server.questions.repository;

import com.codestate.server.questions.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface QuestionRepository extends JpaRepository<Question,Long> {
    Optional<Question> findById(long questionId);

    Optional<List<Question>> findByTitleContaining(String keyword);
    Optional<List<Question>> findByProblemContentContaining(String keyword);



}

