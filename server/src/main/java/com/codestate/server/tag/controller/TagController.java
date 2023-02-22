package com.codestate.server.tag.controller;

import com.codestate.server.dto.MultiResponseDto;
import com.codestate.server.tag.dto.TagPatchDto;
import com.codestate.server.tag.dto.TagPostDto;
import com.codestate.server.tag.entity.Tag;
import com.codestate.server.tag.mapper.TagMapper;
import com.codestate.server.tag.service.TagService;
import com.codestate.server.utils.UriCreator;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/tags")
public class TagController {

    private final static String TAG_DEFAULT_URL = "/tags";
    private final TagService tagService;
    private final TagMapper mapper;

    public TagController(TagService tagService, TagMapper mapper) {
        this.tagService = tagService;
        this.mapper = mapper;
    }
    @PostMapping
    public ResponseEntity postTag(@RequestBody TagPostDto tagPostDto){
        Tag tag = tagService.createTag(mapper.TagPostDtoToTag(tagPostDto));
        URI location = UriCreator.createUri(TAG_DEFAULT_URL, tag.getTagId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{tag-id}")
    public ResponseEntity patchTag(@PathVariable("tag-id")@Positive long tagId,
                                   @RequestBody TagPatchDto tagPatchDto){
        tagPatchDto.setTagId(tagId);
        Tag tag = tagService.updateTag(mapper.TagPatchDtoToTag(tagPatchDto));

        return new ResponseEntity<>(mapper.TagToTagResponseDto(tag), HttpStatus.OK);
    }

    @GetMapping("/{tag-id}")
    public ResponseEntity getTag(@PathVariable("tag-id")long tagId){
        Tag tag = tagService.findTag(tagId);
        return new ResponseEntity<>(mapper.TagToTagResponseDto(tag),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getTags(@Positive @RequestParam int page,
                                  @Positive @RequestParam int size) {
        Page<Tag> pageTags = tagService.findTags(page-1, size);
        List<Tag> tags = pageTags.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.TagsToTagResponseDtos(tags),pageTags),
                HttpStatus.OK);

    }

    @DeleteMapping("/{tag-id}")
    public ResponseEntity deleteTag(@PathVariable("tag-id")long tagId){
        tagService.deleteTag(tagId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
