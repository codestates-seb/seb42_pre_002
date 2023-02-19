package com.codestate.server.companies.service;

import com.codestate.server.companies.entity.Companies;
import com.codestate.server.companies.repository.CompaniesRepository;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.replies.entity.Replies;
import com.codestate.server.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CompaniesService {
    private final CompaniesRepository repository;
    private final CustomBeanUtils<Companies> beanUtils;

    public Companies createCompanies(Companies companies){
        VerifiedExistsCid(companies.getCid());
        return repository.save(companies);
    }

    // 내용 수정
    public Companies updateCompanies(Companies companies) {
        Companies findCompanies = findVerifiedCompanies(companies.getCid());

        Companies updatedCompanies = beanUtils.copyNonNullProperties(companies, findCompanies);

        return repository.save(updatedCompanies);
    }


    public Companies findVerifiedCompanies(long cid) {
        Optional<Companies> optionalCompanies = repository.findById(cid);
        Companies findCompanies =
                optionalCompanies.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMPANY_NOT_FOUND));
        return findCompanies;
    }
    
    public void VerifiedExistsCid(long cid){
        Optional<Companies> companies = repository.findByCid(cid);
        if(companies.isPresent())
            throw new BusinessLogicException(ExceptionCode.COMPANY_EXISTS);
    }

}
