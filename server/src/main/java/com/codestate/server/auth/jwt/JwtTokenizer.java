package com.codestate.server.auth.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoder;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.validation.Valid;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenizer {

    @Getter
    @Value("{jwt.key}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;


    public String encodeBase64SecretKey(String secretKey){
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncoderSecretKey){

        Key key = getKeyFromBase64EncodedKey(base64EncoderSecretKey);

         return Jwts.builder()
                 .setClaims(claims)  // 인증 사용자 추가 정보
                 .setSubject(subject) // jwt 제목 추가
                 .setIssuedAt(Calendar.getInstance().getTime()) // 발행 일자
                 .setExpiration(expiration) // 만료일시
                 .signWith(key) // 서명 객체
                 .compact();
    }



    private Key getKeyFromBase64EncodedKey(String base64EncoderSecretKey){
        byte[] keyBytes = Decoders.BASE64.decode(base64EncoderSecretKey);
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;
    }
}
