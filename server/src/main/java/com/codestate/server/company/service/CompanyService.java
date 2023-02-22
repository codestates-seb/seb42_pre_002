package com.codestate.server.company.service;

import com.codestate.server.company.entity.Company;
import com.codestate.server.company.repository.CompanyRepository;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final CustomBeanUtils<Company> beanUtils;

    // 등록
    public Company createCompany(Company company){
        VerifiedExistsCid(company.getCid());
        return companyRepository.save(company);
    }

    // 수정
    public Company updateCompany(Company company) {
        Company findCompany = findVerifiedCompany(company.getCid());

        Company updatedCompany = beanUtils.copyNonNullProperties(company, findCompany);

        return companyRepository.save(updatedCompany);
    }
    
    // 찾기
    public Company findCompany(long memberId) {
        return findVerifiedCompany(memberId);
    }

    public Page<Company> findCompanies(int page, int size) {
        return companyRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    // 삭제
    public void deleteCompany(long cid) {
        Company findCompany = findVerifiedCompany(cid);

        companyRepository.delete(findCompany);
    }



    /*verified*/
    public Company findVerifiedCompany(long cid) {
        Optional<Company> optionalCompany = companyRepository.findById(cid);
        Company findCompany =
                optionalCompany.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMPANY_NOT_FOUND));
        return findCompany;
    }
    
    public void VerifiedExistsCid(long cid){
        Optional<Company> companies = companyRepository.findByCid(cid);
        if(companies.isPresent())
            throw new BusinessLogicException(ExceptionCode.COMPANY_EXISTS);
    }

}
