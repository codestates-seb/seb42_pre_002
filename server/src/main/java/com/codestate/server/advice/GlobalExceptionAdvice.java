package com.codestate.server.advice;

import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.ConstraintViolationException;

@Slf4j
@RestController
public class GlobalExceptionAdvice { // controller 에서 발생하는 예외 처리


    /*Argument error*/
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException e){

        final ErrorResponse response = ErrorResponse.of(e.getBindingResult());
        return response;

    }

    /*URI error*/
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleConstrainViolationException(ConstraintViolationException e){

        final ErrorResponse response = ErrorResponse.of(e.getConstraintViolations());
        return response;
    }

    @ExceptionHandler //service layer error
    public ResponseEntity handleBusinessLogicException(BusinessLogicException e){
        final ErrorResponse response = ErrorResponse.of(e.getExceptionCode());

        return new ResponseEntity<>(response, HttpStatus.valueOf(e.getExceptionCode()
        .getStatus()));
    }


}
