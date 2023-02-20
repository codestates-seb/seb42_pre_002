package com.codestate.server.tag.mapper;

import com.codestate.server.tag.dto.TagPatchDto;
import com.codestate.server.tag.dto.TagPostDto;
import com.codestate.server.tag.dto.TagResponseDto;
import com.codestate.server.tag.entity.Tag;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag TagPostDtoToTag (TagPostDto tagPostDto);
    Tag TagPatchDtoToTag (TagPatchDto tagPatchDto);
    TagResponseDto TagToTagResponseDto (Tag tag);
}
