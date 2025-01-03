package com.edu.taskManagement.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Cho phép tất cả các đường dẫn
                .allowedOrigins("http://localhost:3000") // Cho phép React frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Các phương thức HTTP
                .allowedHeaders("*") // Cho phép tất cả các headers
                .allowCredentials(true); // Cho phép cookies nếu cần
    }
}
