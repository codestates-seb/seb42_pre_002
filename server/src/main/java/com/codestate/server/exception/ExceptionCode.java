package com.codestate.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    QUESTION_NOT_FOUND(404, "Question not found"),
    QUESTION_EXISTS(409, "Question exists"),

    TAG_NOT_FOUND(404,"Tag not found"),

    TAG_EXISTS(409,"Tag exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
