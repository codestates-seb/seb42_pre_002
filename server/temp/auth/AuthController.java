package com.codestate.server.auth;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RequestMapping("/auths")
public class AuthController {
    @GetMapping("/login-form")
    public String loginForm() {
        return "login";
    }

    @GetMapping("/access-denied")
    public String accessDenied() {
        return "access-denied";
    }

    @PostMapping("/login")
    public String login() {
        System.out.println("Login successfully!");
        return "home";
    }
}