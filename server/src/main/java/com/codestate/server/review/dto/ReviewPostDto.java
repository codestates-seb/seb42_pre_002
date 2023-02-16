package com.codestate.server.review.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ReviewPostDto {
    private Long rno;
    @NotBlank
    private String text;
    @NotBlank
    private String replyer;

    private LocalDateTime regDate;

    private LocalDateTime modDate;

}
