package com.codestate.server.replies.mapper;

import com.codestate.server.member.entity.Member;
import com.codestate.server.questions.entity.Question;
import com.codestate.server.replies.dto.RepliesDto;

import com.codestate.server.replies.dto.RepliesPatchDto;
import com.codestate.server.replies.dto.RepliesPostDto;
import com.codestate.server.replies.dto.RepliesResponseDto;
import com.codestate.server.replies.entity.Replies;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface RepliesMapper {
    Replies PostDtoToEntity(RepliesDto.Post requestBody);

    Replies PatchDtoToEntity(RepliesDto.Patch requestBody);


    RepliesDto.Response entityToDto(Replies replies);

    List<RepliesDto.Response> entitiesToDto(List<Replies> replies);
}



