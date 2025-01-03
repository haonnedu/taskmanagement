package com.edu.taskManagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public ResponseEntity<String> getAll(){
        String json = "{\"message\": \"Hello, World!\"}";
        return ResponseEntity.ok(json);
    }
}
