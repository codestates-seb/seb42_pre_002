package com.codestate.server.service;

import com.codestate.server.review.dto.ReviewPostDto;
import com.codestate.server.review.entity.Review;
import com.codestate.server.review.service.ReviewService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class ReviewServiceTest {
    @Autowired
    private ReviewService service;

    @Test
    public void testCreate(){
        ReviewPostDto postDto = ReviewPostDto.builder()
                .rno(32L)
                .text("tests1234565")
                .replyer("test12")
                .build();

        System.out.println(service.createReview(postDto));
    }

}
//        } else {
//                Review.ReviewBuilder review = Review.builder();
//                review.rno(reviewpostDto.getRno());
//                review.text(reviewpostDto.getText());
//                review.replyer(reviewpostDto.getReplyer());
//                return review.build();