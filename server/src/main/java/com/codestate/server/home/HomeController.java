package com.codestate.server.home;

import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Component
public class HomeController {
    @GetMapping("/")
    public String home(Model model){
        return "home";
    }
}
