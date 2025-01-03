package com.edu.taskManagement.controller;

import com.edu.taskManagement.entity.LoginRequest;
import com.edu.taskManagement.security.JwtTokenProvider;
import com.edu.taskManagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    // Đăng nhập người dùng và trả về JWT token
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
        Map<String,String> resp = new HashMap();
        // Xác thực người dùng
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );
            // Nếu xác thực thành công, lưu trữ thông tin ngư bvời dùng vào SecurityContext
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Tạo JWT token
            String token = jwtTokenProvider.generateToken(authentication);
            resp.put("token",token);
            resp.put("user",loginRequest.getUsername());

        } catch (BadCredentialsException e) {
            resp.put("error", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(resp);
        } catch (Exception e) {
            resp.put("error", "An error occurred");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
        }

        return ResponseEntity.ok(resp);
    }

    // Đăng xuất người dùng (Nếu cần thiết)
    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        // Xóa context (hoặc token không cần thiết)
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logged out successfully");
    }
}
