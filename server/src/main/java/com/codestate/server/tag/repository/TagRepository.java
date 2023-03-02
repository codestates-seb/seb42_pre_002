package com.codestate.server.tag.repository;

import com.codestate.server.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag,Long> {
    @Query(value = "SELECT c FROM Tag c WHERE c.tagId = :tagId")
    Optional<Tag> findById(long tagId);

}
