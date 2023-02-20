package com.codestate.server.replies.mapper;

import com.codestate.server.replies.dto.RepliesDto;

import com.codestate.server.replies.entity.Replies;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RepliesMapper {

    Replies PostDtoToEntity(RepliesDto.Post requestBody);
    Replies PatchDtoToEntity(RepliesDto.Patch requestBody);


    RepliesDto.Response entityToDto(Replies replies);
    List<RepliesDto.Response> entitiesToDto(List<Replies> replies);
}
