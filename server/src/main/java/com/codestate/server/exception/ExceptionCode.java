package com.codestate.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    REPLIES_NOT_FOUND(404, "Replies not found"),
    REPLIES_EXISTS(400, "Replies Exists"),
    COMPANY_NOT_FOUND(404, "Company not found"),
    COMPANY_EXISTS(400, "Company Exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    NOT_IMPLEMENTATION(501, "Not Implementation");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }
}