package com.codestate.server.member.mapper;

import com.codestate.server.member.dto.MemberDto;
import com.codestate.server.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {

    Member PostDtoToEntity(MemberDto.Post requestBody);
    Member PatchDtoToEntity(MemberDto.Patch requestBody);

    MemberDto.Response entityToDto(Member member);
    List<MemberDto.Response> entitiesToDto(List<Member> member);

}
