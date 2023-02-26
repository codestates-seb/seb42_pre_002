package com.codestate.server.cofing;

import com.codestate.server.auth.filter.JwtAuthenticationFilter;
import com.codestate.server.auth.jwt.JwtTokenizer;
import com.codestate.server.auth.utils.CustomAuthorityUtils;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true)
@AllArgsConstructor
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    // 커스텀 로그인 페이지 지정
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .formLogin()
                .loginPage("/auths/login-form")
                .loginProcessingUrl("/process_login")
                .failureUrl("/auths/login-form?error")
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .and()
                .exceptionHandling().accessDeniedPage("/auths/access-denied")
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/members").permitAll()         // (1) 추가
                        .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")  // (2) 추가
                        .antMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")     // (3) 추가
                        .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")  // (4) 추가
                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")  // (5) 추가
                        .anyRequest().permitAll()
                );

        return http.build();
    }
//        http
//                .headers().frameOptions().sameOrigin()
//                .and()
//                .csrf().disable()
//                .cors(withDefaults())
//                .formLogin().disable()
//                .httpBasic().disable()
//                /*login - logout page 변동 예정*/
////                .formLogin()
////                .loginPage("signup/register") // 변동 예정(1)
////                .loginPage("/auths/login-form")
////                .loginProcessingUrl("/process_login") // 변동 예정(2)
////                .failureUrl("/auths/login-form?error")
////                .and() // Spring Security 보안 설정 메서드 체인 구성
////                .logout()
////                .logoutUrl("/logout") // 변동 예정(3)
////                .logoutSuccessUrl("/") // 변동 예정(4)
////                .and()
////                .exceptionHandling().accessDeniedPage("/auths/access-denied")
////                .and()
//                /*login - logout page 변동 예정*/
//                .apply(new CustomFilterConfigurer())
//                .and()
//                .authorizeHttpRequests(authorize -> authorize
//                        // Member
//                        .antMatchers(HttpMethod.POST,"/*/members").permitAll()
//                        .antMatchers(HttpMethod.PATCH,"/*/members/**").hasRole("USER")
//                        .antMatchers(HttpMethod.GET,"/*/members").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.GET,"/*/members/**").hasAnyRole("USER","ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")
//                        // Questions
//                        .antMatchers(HttpMethod.POST, "/*/questions").hasAnyRole("ADMIN","USER")
//                        .antMatchers(HttpMethod.PATCH, "/*/questions").hasAnyRole("ADMIN","USER")
//                        .antMatchers(HttpMethod.GET, "/*/questions").hasAnyRole("ADMIN","USER")
//                        .antMatchers(HttpMethod.DELETE, "/*/questions").hasAnyRole("ADMIN","USER")
//                        // Replies
//                        .antMatchers(HttpMethod.POST, "/*/replies").hasRole("USER")
//                        .antMatchers(HttpMethod.PATCH, "/*/replies").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.GET, "/*/replies/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/*/replies").hasRole("USER")
//                        .anyRequest().permitAll());// 접근 권한 확인
//                return http.build();
//    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource (){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH","DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/v11/auth/login");

            builder.addFilter(jwtAuthenticationFilter);
        }
    }
//    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity>{
//
//        public void configure(HttpSecurity builder) throws Exception{
//            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
//
//            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
//            jwtAuthenticationFilter.setFilterProcessesUrl("auth/login"); // request URL(수정 예정)
//
//            builder.addFilter(jwtAuthenticationFilter);
//        }
//    }

}





