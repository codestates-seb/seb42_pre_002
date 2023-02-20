package com.codestate.server.replies.repository;

import com.codestate.server.replies.entity.Replies;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepliesRepository extends JpaRepository<Replies, Long> {
    Optional<Replies> findById(Long rid);
    Optional<Replies> findByWriter(String writer);

}
