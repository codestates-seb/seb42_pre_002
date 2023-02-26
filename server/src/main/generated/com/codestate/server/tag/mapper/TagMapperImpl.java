package com.codestate.server.tag.mapper;

import com.codestate.server.tag.dto.TagPatchDto;
import com.codestate.server.tag.dto.TagPostDto;
import com.codestate.server.tag.dto.TagResponseDto;
import com.codestate.server.tag.entity.Tag;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-24T03:08:32+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public Tag TagPostDtoToTag(TagPostDto tagPostDto) {
        if ( tagPostDto == null ) {
            return null;
        }

        Tag tag = new Tag();

        tag.setTitle( tagPostDto.getTitle() );
        tag.setSummary( tagPostDto.getSummary() );

        return tag;
    }

    @Override
    public Tag TagPatchDtoToTag(TagPatchDto tagPatchDto) {
        if ( tagPatchDto == null ) {
            return null;
        }

        Tag tag = new Tag();

        tag.setTagId( tagPatchDto.getTagId() );
        tag.setTitle( tagPatchDto.getTitle() );
        tag.setSummary( tagPatchDto.getSummary() );

        return tag;
    }

    @Override
    public TagResponseDto TagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

        tagResponseDto.setTagId( tag.getTagId() );
        tagResponseDto.setTitle( tag.getTitle() );
        tagResponseDto.setSummary( tag.getSummary() );

        return tagResponseDto;
    }

    @Override
    public List<TagResponseDto> TagsToTagResponseDtos(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagResponseDto> list = new ArrayList<TagResponseDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( TagToTagResponseDto( tag ) );
        }

        return list;
    }
}
