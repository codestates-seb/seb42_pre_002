package com.codestate.server.company.mapper;

import com.codestate.server.company.dto.CompanyDto.Patch;
import com.codestate.server.company.dto.CompanyDto.Post;
import com.codestate.server.company.dto.CompanyDto.Response;
import com.codestate.server.company.entity.Company;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T19:52:48+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class CompanyMapperImpl implements CompanyMapper {

    @Override
    public Company PostDtoToEntity(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Company company = new Company();

        return company;
    }

    @Override
    public Company PatchDtoToEntity(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Company company = new Company();

        return company;
    }

    @Override
    public Response entityToDto(Company company) {
        if ( company == null ) {
            return null;
        }

        long cid = 0L;
        String cname = null;
        String content = null;
        String location = null;
        String position = null;

        cid = company.getCid();
        cname = company.getCname();
        content = company.getContent();
        location = company.getLocation();
        position = company.getPosition();

        String title = null;

        Response response = new Response( cid, cname, title, content, location, position );

        return response;
    }

    @Override
    public List<Response> entitiesToDto(List<Company> companies) {
        if ( companies == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( companies.size() );
        for ( Company company : companies ) {
            list.add( entityToDto( company ) );
        }

        return list;
    }
}
