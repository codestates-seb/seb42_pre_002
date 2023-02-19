package com.codestate.server.companies.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
//@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Companies extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cid;

    private String cname;

    private String content;

    private String location;

    private String position;

//    private String tag_tno;
}
