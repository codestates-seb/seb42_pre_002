package com.codestate.server.company.controller;

import com.codestate.server.company.dto.CompanyDto;
import com.codestate.server.company.entity.Company;
import com.codestate.server.company.mapper.CompanyMapper;
import com.codestate.server.company.service.CompanyService;
import com.codestate.server.response.MultiResponseDto;
import com.codestate.server.response.SingleResponseDto;
import com.codestate.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/companies")
public class CompanyController {

    private final static String REPLIES_DEFAULT_URL="/companies";
    private final CompanyService service;
    private final CompanyMapper mapper;

    // 생성
    @PostMapping
    public ResponseEntity postCompany(@Valid @RequestBody CompanyDto.Post requestBody){
        Company company = mapper.PostDtoToEntity(requestBody);

        Company createdCompany = service.createCompany(company);
        URI location = UriCreator.createUri(REPLIES_DEFAULT_URL, createdCompany.getCid());


        return ResponseEntity.created(location).build();
    }


    //
    @PatchMapping("/{cid}")
    public ResponseEntity patchCompany(@PathVariable("cid") @Positive long cid,
                                       @Valid @RequestBody CompanyDto.Patch requestBody){

        requestBody.setCid(cid);

        Company company = service.updateCompany(mapper.PatchDtoToEntity(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.entityToDto(company)), HttpStatus.OK);
    }


    // 찾기
    @GetMapping
    public ResponseEntity getCompany(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Company> pageCompany = service.findCompanies(page -1 ,size);
        List<Company> companies = pageCompany.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.entitiesToDto(companies), pageCompany), HttpStatus.OK);

    }


    @DeleteMapping("/{cid}")
    public ResponseEntity deleteCompany(@PathVariable("cid") @Positive long cid){
        service.deleteCompany(cid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
