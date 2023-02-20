package com.codestate.server.exception;

import lombok.Getter;

public enum ExceptionCode {


    QUESTION_NOT_FOUND(404, "Question not found"),
    QUESTION_EXISTS(409, "Question exists"),
    REPLIES_NOT_FOUND(404, "Replies not found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    NOT_IMPLEMENTATION(501, "Not Implementation");


    @Getter
    private int status;

    @Getter
    private String message;


    ExceptionCode(int status, String message) {
        this.status = status;

        this.message = message;
    }
}
