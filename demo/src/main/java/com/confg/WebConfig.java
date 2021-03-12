package com.confg;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/api/auth/login")
                .allowedOrigins("http://localhost:4200/**")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .maxAge(3600L)
                .allowedHeaders("*")
                .exposedHeaders("Authorization")
                .allowCredentials(true);
        corsRegistry.addMapping("/api/request/**").allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
        .maxAge(3600L)
        .allowedHeaders("*")
        .exposedHeaders("*").allowCredentials(false);
        corsRegistry.addMapping("/api/rescueTeam/**").allowedOriginPatterns("*").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
        .maxAge(3600L).exposedHeaders("Authorization")
        .allowedHeaders("*").allowCredentials(true);
        corsRegistry.addMapping("/api/department/**").allowedOriginPatterns("*").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
        .maxAge(3600L)
        .allowedHeaders("*").allowCredentials(true).exposedHeaders("Authorization");
           
    }

}
