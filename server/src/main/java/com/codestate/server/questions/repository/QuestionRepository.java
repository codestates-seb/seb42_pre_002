package com.codestate.server.questions.repository;

import com.codestate.server.questions.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    Optional<Question> findById(long questionId);

    @Query("SELECT q FROM Question q WHERE q.title LIKE %:keyword% OR q.problemContent LIKE %:keyword%")
    Page<Question> findByKeyword(@Param("keyword") String keyword, Pageable pageable);

}

