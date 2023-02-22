package com.codestate.server.replies.repository;

import com.codestate.server.questions.entity.Question;
import com.codestate.server.replies.entity.Replies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RepliesRepository extends JpaRepository<Replies, Long> {
    Optional<Replies> findById(Long rid);
    Optional<Replies> findByWriter(String writer);

    /*// board 삭제시 댓글 삭제
    @Modifying
    @Query("delete from Replies r where r.Question.questionId =: questionId")
    void deleteByQuestionId(Long bno);

    // 게시물 댓글 목록 가져오기
    List<Replies> getRepliesByBoardOrderByRno(Question question);*/

}
