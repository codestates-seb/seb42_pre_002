package com.codestate.server.companies.controller;

import com.codestate.server.companies.dto.CompaniesDto;
import com.codestate.server.companies.entity.Companies;
import com.codestate.server.companies.mapper.CompaniesMapper;
import com.codestate.server.companies.service.CompaniesService;
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
public class CompaniesController {

    private final static String REPLIES_DEFAULT_URL="/companies";
    private final CompaniesService service;
    private final CompaniesMapper mapper;

    @PostMapping
    public ResponseEntity postCompanies(@Valid @RequestBody CompaniesDto.Post requestBody){
        Companies companies = mapper.PostDtoToEntity(requestBody);

        Companies createdCompanies = service.createCompanies(companies);
        URI location = UriCreator.createUri(REPLIES_DEFAULT_URL, createdCompanies.getCid());


        return ResponseEntity.created(location).build();
    }
//
//    @PatchMapping("/{cid}")
//    public ResponseEntity patchCompanies(@PathVariable("cid") @Positive long cid,
//                                       @Valid @RequestBody CompaniesDto.Patch requestBody){
//
//        requestBody.setCid(cid);
//
//        Companies companies = service.updateCompanies(mapper.PatchDtoToEntity(requestBody));
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.entityToDto(companies)), HttpStatus.OK);
//    }
//
//
//    @GetMapping("/{cid}")
//    public ResponseEntity getReply(@PathVariable("cid") long cid){
//        Companies companies = service.findReply(cid);
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.entityToDto(companies)),HttpStatus.OK);
//    }
//
//    @GetMapping
//    public ResponseEntity getCompanies(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size){
//        Page<Companies> pageCompanies = service.findCompanies(page -1 ,size);
//        List<Companies> companies = pageCompanies.getContent();
//
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.entitiesToDto(companies), pageCompanies), HttpStatus.OK);
//
//    }
//
//
//    @DeleteMapping("/{cid}")
//    public ResponseEntity deleteCompanies(@PathVariable("cid") @Positive long cid){
//        service.deleteCompanies(cid);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
