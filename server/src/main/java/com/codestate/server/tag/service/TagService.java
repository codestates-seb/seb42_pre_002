package com.codestate.server.tag.service;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.tag.entity.Tag;
import com.codestate.server.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag createTag(Tag tag){
        verifyExistTag(tag.getTagId());
        Tag savedTag = saveTag(tag);

        return savedTag;

    }

    public Tag updateTag(Tag tag){
        Tag findTag = findVerifiedTag(tag.getTagId());

        Optional.ofNullable(tag.getTitle())
                .ifPresent(title-> findTag.setTitle(title));
        Optional.ofNullable(tag.getSummary())
                .ifPresent(summary->findTag.setSummary(summary));

        return tagRepository.save(findTag);
    }

    public Tag findTag(long tagId){
        return findVerifiedTag(tagId);
    }

    public void deleteTag(long tagId){
        Tag findTag = findVerifiedTag(tagId);
        tagRepository.deleteById(tagId);
    }
    //존재하는지 확인
    public Tag findVerifiedTag(long tagId){
        Optional<Tag> optionalTag =
                tagRepository.findById(tagId);
        Tag findTag =
                optionalTag.orElseThrow(()->
        new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));

        return findTag;
    }
    //존재안하는 것 post와 연결
    public void verifyExistTag(long tagId){
        Optional<Tag> tag = tagRepository.findById(tagId);
        if(tag.isPresent())
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
    }
    public Tag saveTag(Tag tag){
        return tagRepository.save(tag);
    }
}
