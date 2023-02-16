package com.codestate.server.review.mapper;

import com.codestate.server.review.dto.ReviewPatchDto;
import com.codestate.server.review.dto.ReviewPostDto;
import com.codestate.server.review.dto.ReviewResponseDto;
import com.codestate.server.review.entity.Review;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review PostDtoToEntity(ReviewPostDto reviewpostDto);
    Review PatchDtoToEntity(ReviewPatchDto reviewpatchDto);
    ReviewResponseDto reviewToResponseDto(Review review);
}
