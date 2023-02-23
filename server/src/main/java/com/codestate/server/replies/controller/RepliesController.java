package com.codestate.server.replies.controller;

import com.codestate.server.replies.dto.RepliesDto;
import com.codestate.server.replies.entity.Replies;
import com.codestate.server.replies.mapper.RepliesMapper;
import com.codestate.server.replies.response.MultiResponseDto;
import com.codestate.server.replies.response.SingleResponseDto;
import com.codestate.server.replies.service.RepliesService;
import com.codestate.server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/replies")
@Log4j2
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

    @PatchMapping("/{rid}")
    public ResponseEntity patchReplies(@PathVariable("rid") @Positive long rid,
                                       @Valid @RequestBody RepliesDto.Patch requestBody){

        requestBody.setRid(rid);

        Replies replies = service.updateReplies(mapper.PatchDtoToEntity(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.entityToDto(replies)), HttpStatus.OK);
        }



        //find - v1
//    @GetMapping("/{rid}")
//    public ResponseEntity getReply(@PathVariable("rid") long rid){
//        Replies replies = service.findReply(rid);
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.entityToDto(replies)),HttpStatus.OK);
//    }
    //find - v2
    @GetMapping(value = "/question/{questionId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RepliesDto.Response>> getListByQuestion(@PathVariable("questionId") Long questionId){
        log.info("question Id : "+questionId);
        return new ResponseEntity<>(service.findReply(questionId),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getReplies(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Replies> pageReplies = service.findReplies(page -1 ,size);
        List<Replies> replies = pageReplies.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.entitiesToDto(replies), pageReplies), HttpStatus.OK);

    }


    @DeleteMapping("/{rid}")
    public ResponseEntity deleteReplies(@PathVariable("rid") @Positive long rid){
        service.deleteReplies(rid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

