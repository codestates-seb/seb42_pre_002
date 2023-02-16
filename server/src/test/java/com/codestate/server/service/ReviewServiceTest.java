package com.codestate.server.service;

import com.codestate.server.review.dto.ReviewPostDto;
import com.codestate.server.review.entity.Review;
import com.codestate.server.review.service.ReviewService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
public class ReviewServiceTest {
    @Autowired
    private ReviewService service;

    @Test
    public void testCreate(){
        ReviewPostDto postDto = ReviewPostDto.builder()
                .rno(1L)
                .text("tests1234565")
                .replyer("test12")
                .build();

        System.out.println(service.createReview(postDto));
    }

}
