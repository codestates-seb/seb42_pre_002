package com.codestate.server.companies.mapper;

import com.codestate.server.companies.dto.CompaniesDto;
import com.codestate.server.companies.entity.Companies;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CompaniesMapper {

    Companies PostDtoToEntity(CompaniesDto.Post requestBody);
    Companies PatchDtoToEntity(CompaniesDto.Patch requestBody);

    CompaniesDto.Response entityToDto(Companies companies);
    List<CompaniesDto.Response> entitiesToDto(List<Companies> companies);
}
