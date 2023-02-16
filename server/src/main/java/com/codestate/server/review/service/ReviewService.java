package com.codestate.server.review.service;

import com.codestate.server.review.dto.ReviewPostDto;
import com.codestate.server.review.entity.Review;
import com.codestate.server.review.mapper.ReviewMapper;
import com.codestate.server.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
@Mapper
public class ReviewService {

    private ReviewRepository repository;
    private ReviewMapper mapper;

    public Long createReview(ReviewPostDto reviewPostDto){
        log.info("DTO------------");
        log.info(reviewPostDto);

        Review entity = mapper.PostDtoToEntity(reviewPostDto);
        log.info(entity);

        repository.save(entity);
        return entity.getRno();
    }

    public Review updateReview(Review review){return review;}

    public void deleteReview(long rno){};

}
