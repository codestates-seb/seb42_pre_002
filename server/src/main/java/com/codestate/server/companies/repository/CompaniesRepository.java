package com.codestate.server.companies.repository;

import com.codestate.server.companies.entity.Companies;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CompaniesRepository extends JpaRepository<Companies, Long> {
    Optional<Companies> findByCid(long cid);
    Optional<Companies> findByCname(String cname);
}
