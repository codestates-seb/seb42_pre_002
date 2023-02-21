package com.codestate.server.company.mapper;

import com.codestate.server.company.dto.CompanyDto;
import com.codestate.server.company.entity.Company;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CompanyMapper {

    Company PostDtoToEntity(CompanyDto.Post requestBody);
    Company PatchDtoToEntity(CompanyDto.Patch requestBody);

    CompanyDto.Response entityToDto(Company company);
    List<CompanyDto.Response> entitiesToDto(List<Company> companies);
}
