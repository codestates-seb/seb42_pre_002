package com.codestate.server.cofing;
/*
import com.codestate.server.member.repository.MemberRepository;
import com.codestate.server.member.service.MemberServiceImpl;
import com.codestate.server.member.service.MemberService_backup;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    // 커스텀 로그인 페이지 지정
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .formLogin()
                /*login - logout page 변동 예정*/
/*//                .loginPage("signup/register") // 변동 예정(1)
                .loginPage("/auths/login-form")
                .loginProcessingUrl("/process_login") // 변동 예정(2)
                .failureUrl("/auths/login-form?error")
                .and() // Spring Security 보안 설정 메서드 체인 구성
                .logout()
                .logoutUrl("/logout") // 변동 예정(3)
                .logoutSuccessUrl("/") // 변동 예정(4)
                .and()
                .exceptionHandling().accessDeniedPage("/auths/access-denied")
                /*login - logout page 변동 예정*/
 /*               .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("/questions").hasRole("USER")
                        .antMatchers("replies").hasRole("USER")
                        .antMatchers("/**").permitAll());// 접근 권한 확인
                return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}

*/


