package com.codestate.server.replies.entity;

import lombok.*;

import javax.persistence.*;



@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Replies extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rid;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String writer;

}
