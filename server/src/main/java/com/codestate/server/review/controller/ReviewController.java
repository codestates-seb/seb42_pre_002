package com.codestate.server.review.controller;

import com.codestate.server.review.dto.ReviewPatchDto;
import com.codestate.server.review.dto.ReviewPostDto;
import com.codestate.server.review.entity.Review;
import com.codestate.server.review.mapper.ReviewMapper;
import com.codestate.server.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/replies")
@Log4j2
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService service;
    private final ReviewMapper mapper;

    // 리뷰 등록
    @PostMapping
    public ResponseEntity postReview(@Valid @RequestBody ReviewPostDto postDto, RedirectAttributes redirectAttributes){

        log.info("create review-------------------");
        log.info(postDto);

        // 새로 추가된 rno
        Long review = service.createReview(postDto);
        redirectAttributes.addFlashAttribute("msg", review);

        return new ResponseEntity<>(review, HttpStatus.CREATED);

    }

//    @GetMapping("/reviewr/{rno}")
//    public Re

    // 리뷰 수정
//    @PatchMapping(value = "/{rno}", produces = {MediaType.APPLICATION_JSON_VALUE})
//    public ResponseEntity patchReview(@PathVariable("rno") @Positive long mno,
//                                      @Valid @RequestBody ReviewPatchDto patchDto){
////        service.updateReview(patchDto.setText());
//        return ResponseEntity<>();
//    }
}
