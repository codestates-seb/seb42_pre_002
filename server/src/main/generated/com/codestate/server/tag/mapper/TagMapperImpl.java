package com.codestate.server.tag.mapper;

import com.codestate.server.tag.dto.TagPatchDto;
import com.codestate.server.tag.dto.TagPostDto;
import com.codestate.server.tag.dto.TagResponseDto;
import com.codestate.server.tag.entity.Tag;
import java.time.LocalDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T19:52:48+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public Tag TagPostDtoToTag(TagPostDto tagPostDto) {
        if ( tagPostDto == null ) {
            return null;
        }

        String title = null;
        String summary = null;

        title = tagPostDto.getTitle();
        summary = tagPostDto.getSummary();

        long tagId = 0L;
        int tagCount = 0;
        LocalDateTime regDate = null;
        LocalDateTime modDate = null;

        Tag tag = new Tag( tagId, title, summary, tagCount, regDate, modDate );

        return tag;
    }

    @Override
    public Tag TagPatchDtoToTag(TagPatchDto tagPatchDto) {
        if ( tagPatchDto == null ) {
            return null;
        }

        long tagId = 0L;
        String title = null;
        String summary = null;

        tagId = tagPatchDto.getTagId();
        title = tagPatchDto.getTitle();
        summary = tagPatchDto.getSummary();

        int tagCount = 0;
        LocalDateTime regDate = null;
        LocalDateTime modDate = null;

        Tag tag = new Tag( tagId, title, summary, tagCount, regDate, modDate );

        return tag;
    }

    @Override
    public TagResponseDto TagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

        return tagResponseDto;
    }
}
