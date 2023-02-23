package com.codestate.server.auth.handler;

import com.codestate.server.response.ErrorResponse;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        // 인증 성공 후, 로그를 기록하거나 사용자 정보를 response로 전송하는 등의 추가 작업을 할 수 있다.
        log.info("# Authenticated successfully!");
    }

//    private void sendErrorResponse(HttpServletResponse respone) throws IOException{
//        Gson gson = new Gson();
//        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED);
//        respone.setContentType(MediaType.APPLICATION_JSON_VALUE);
//        respone.setStatus(HttpStatus.UNAUTHORIZED.value());
//        respone.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
//    }
}
