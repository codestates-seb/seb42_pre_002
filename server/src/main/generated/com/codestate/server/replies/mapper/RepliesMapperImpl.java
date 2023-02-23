package com.codestate.server.replies.mapper;

import com.codestate.server.replies.dto.RepliesDto.Patch;
import com.codestate.server.replies.dto.RepliesDto.Post;
import com.codestate.server.replies.dto.RepliesDto.Response;
import com.codestate.server.replies.entity.Replies;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-24T00:31:19+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class RepliesMapperImpl implements RepliesMapper {

    @Override
    public Replies PostDtoToEntity(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Replies replies = new Replies();

        replies.setContent( requestBody.getContent() );
        replies.setWriter( requestBody.getWriter() );

        return replies;
    }

    @Override
    public Replies PatchDtoToEntity(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Replies replies = new Replies();

        replies.setRid( requestBody.getRid() );
        replies.setContent( requestBody.getContent() );

        return replies;
    }

    @Override
    public Response entityToDto(Replies replies) {
        if ( replies == null ) {
            return null;
        }

        Long rid = null;
        String content = null;
        String writer = null;

        rid = replies.getRid();
        content = replies.getContent();
        writer = replies.getWriter();

        Response response = new Response( rid, content, writer );

        return response;
    }

    @Override
    public List<Response> entitiesToDto(List<Replies> replies) {
        if ( replies == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( replies.size() );
        for ( Replies replies1 : replies ) {
            list.add( entityToDto( replies1 ) );
        }

        return list;
    }
}
