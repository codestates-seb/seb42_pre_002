package com.codestate.server.company.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
abstract class BaseEntity {
    // 등록 일자
    @CreatedDate
    @Column(name="regdate", updatable = false)
    private LocalDateTime regDate;

    // 수정 일자
    @LastModifiedDate
    @Column(name = "moddate")
    private LocalDateTime modDate;
}

