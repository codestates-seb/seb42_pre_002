package com.codestate.server.company.entity;

import com.codestate.server.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
//@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Company extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cid;

    @Column(nullable = false)
    private String cname;

    private String content;

    private String location;

    @Column(nullable = false)
    private String position;

//    private String tag_tno;
    @ManyToOne
    @JoinColumn(name="tagId")
    private Tag tag;

        public void addQuestion(Tag tag){
            this.tag = tag;
        }
}
