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
                .allowedMethods("*")
                .maxAge(3600L)
                .allowedHeaders("*")
                .exposedHeaders("Authorization")
                .allowCredentials(true);
        corsRegistry.addMapping("/api/request/**").allowedOrigins("*").allowedMethods("*")
        .maxAge(3600L)
        .allowedHeaders("*")
        .exposedHeaders("Authorization").allowCredentials(false);
        corsRegistry.addMapping("/api/rescueTeam/**").allowedOriginPatterns("*").allowedMethods("*")
        .maxAge(3600L)
        .allowedHeaders("*").allowCredentials(true);
        corsRegistry.addMapping("/api/department/**").allowedOriginPatterns("*").allowedMethods("*")
        .maxAge(3600L)
        .allowedHeaders("*").allowCredentials(true);
           
    }

}
