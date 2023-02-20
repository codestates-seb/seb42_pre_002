package com.codestate.server.datetime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BaseEntityImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor(){return Optional.of("Pre");}
}
