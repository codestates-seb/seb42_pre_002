//package com.codestate.server.auth;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//@Controller
//@RequestMapping(value="/auths")
//public class AuthController {
//    @GetMapping("/login-form")
//    public String loginForm() {
//        return "login";
//    }
//
//    @GetMapping("/access-denied")
//    public String accessDenied() {
//        return "access-denied";
//    }
//
//    @PostMapping("/login")
//    public String login() {
//        System.out.println("Login successfully!");
//        return "home";
//    }
//
//    @GetMapping("/index")
//    public String index(){return "index";}
//}
