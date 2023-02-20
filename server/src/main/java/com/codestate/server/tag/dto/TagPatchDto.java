package com.codestate.server.tag.dto;

import lombok.Getter;

@Getter
public class TagPatchDto {

    private long tagId;

    private String title;

    private String summary;

    public void setTagId(long tagId) {
        this.tagId = tagId;
    }
}
