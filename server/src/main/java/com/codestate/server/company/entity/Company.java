package com.codestate.server.company.entity;

import com.codestate.server.audit.BaseEntity;
import com.codestate.server.tag.entity.Tag;
import lombok.*;

import javax.persistence.*;
import java.security.Principal;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Company extends BaseEntity  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cid;

    @Column(nullable = false)
    private String cname;

    private String content;
    @Column(nullable = false)
    private String title;

    private String location;

    @Column(nullable = false)
    private String position;


    @ManyToOne(fetch = FetchType.LAZY)
//    private String tag_tno;
    private Tag tag;

        public void addQuestion(Tag tag){
            this.tag = tag;
        }
}
