package com.codestate.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member Exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    QUESTION_EXISTS(409, "Question Exists"),
    REPLIES_NOT_FOUND(404, "Replies not found"),
    REPLIES_EXISTS(409, "Replies Exists"),
    COMPANY_NOT_FOUND(404, "Company not found"),
    COMPANY_EXISTS(409, "Company Exists"),
    NOT_IMPLEMENTATION(501, "Not Implementation");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message){
        this.status = status;
        this.message = message;
    }
}