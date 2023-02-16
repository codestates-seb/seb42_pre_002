package com.codestate.server.repository;

import com.codestate.server.review.entity.Review;
import com.codestate.server.review.repository.ReviewRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.stream.IntStream;

@SpringBootTest
public class ReviewRepositoryTests {

    @Autowired
    private ReviewRepository repository;

    @Test
    public void insertDummies(){
        IntStream.rangeClosed(1,30).forEach(i->{
            Review review = Review.builder()
                    .text("Review content test.."+i)
                    .replyer("writer"+(long)(Math.random()*10))
                    .build();
            System.out.println(repository.save(review));
        });
    }
}
