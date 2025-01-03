package com.edu.taskManagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @PreAuthorize("hasRole('ADMIN')") // Only allow ADMIN
    @GetMapping
    public ResponseEntity<String> adminOnlyEndpoint() {
        return ResponseEntity.ok("This is admin content.");
    }

}
