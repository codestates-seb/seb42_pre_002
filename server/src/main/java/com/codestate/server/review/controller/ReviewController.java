package com.codestate.server.review.controller;

import com.codestate.server.review.dto.ReviewPostDto;
import com.codestate.server.review.mapper.ReviewMapper;
import com.codestate.server.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
@RequestMapping("/replies")
@Log4j2
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    // 리뷰 생성
    @PostMapping("/")
    public ResponseEntity postReview(@Valid @RequestBody ReviewPostDto reviewPostDto){
//        Review review = reviewService.
        return new ResponseEntity<ReviewPostDto>(reviewPostDto, HttpStatus.CREATED);
    }
}
