package com.codestate.server.member.mapper;

import com.codestate.server.member.dto.MemberDto.Patch;
import com.codestate.server.member.dto.MemberDto.Post;
import com.codestate.server.member.dto.MemberDto.Response;
import com.codestate.server.member.entity.Member;
import com.codestate.server.member.entity.Member.MemberBuilder;
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
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member PostDtoToEntity(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MemberBuilder member = Member.builder();

        member.email( requestBody.getEmail() );
        member.nickname( requestBody.getNickname() );
        member.password( requestBody.getPassword() );

        return member.build();
    }

    @Override
    public Member PatchDtoToEntity(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MemberBuilder member = Member.builder();

        member.memberId( requestBody.getMemberId() );
        member.nickname( requestBody.getNickname() );

        return member.build();
    }

    @Override
    public Response entityToDto(Member member) {
        if ( member == null ) {
            return null;
        }

        long memberId = 0L;
        String email = null;
        String nickname = null;
        String password = null;

        memberId = member.getMemberId();
        email = member.getEmail();
        nickname = member.getNickname();
        password = member.getPassword();

        Response response = new Response( memberId, email, nickname, password );

        return response;
    }

    @Override
    public List<Response> entitiesToDto(List<Member> member) {
        if ( member == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( member.size() );
        for ( Member member1 : member ) {
            list.add( entityToDto( member1 ) );
        }

        return list;
    }
}
