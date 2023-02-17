package com.codestate.server.replies.controller;

import com.codestate.server.replies.dto.RepliesDto;
import com.codestate.server.replies.dto.RepliesPostDto;
import com.codestate.server.replies.entity.Replies;
import com.codestate.server.replies.mapper.RepliesMapper;
import com.codestate.server.replies.service.RepliesService;
import com.codestate.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping("/replies")
public class RepliesController {

    private final static String REPLIES_DEFAULT_URL="/replies";
    private final RepliesService service;
    private final RepliesMapper mapper;

    @PostMapping
    public ResponseEntity postReplies(@Valid @RequestBody RepliesDto.Post requestBody){
        Replies replies = mapper.PostDtoToEntity(requestBody);

        Replies createdReplies = service.createReplies(replies);
        URI location = UriCreator.createUri(REPLIES_DEFAULT_URL, createdReplies.getRid());


        return ResponseEntity.created(location).build();
    }

}
