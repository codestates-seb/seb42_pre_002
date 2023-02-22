//package com.codestate.server.cofing;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfiguration {
//
//    // 커스텀 로그인 페이지 지정
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http
//                .csrf().disable()
//                .formLogin()
////                .loginPage("signup/register")
////                .loginProcessingUrl()
////                .failureUrl("")
//                .and() // Spring Security 보안 설정 메서드 체인 구성
//                .authorizeHttpRequests() // 접근 권한 확인
//                .anyRequest()
//                .permitAll(); // 클라이언트의 모든 요청 접근 허용
//
//                return http.build();
//    }
//
//    // requestURL 접근 권한 부여
//}