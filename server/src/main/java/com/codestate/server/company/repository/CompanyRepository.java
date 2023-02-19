package com.codestate.server.company.repository;

import com.codestate.server.company.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Optional<Company> findByCid(long cid);
    Optional<Company> findByCname(String cname);
}
