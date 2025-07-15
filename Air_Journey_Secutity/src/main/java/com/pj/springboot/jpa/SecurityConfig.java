package com.pj.springboot.jpa;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig 
{
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() 
    {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception 
    {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/login", "/register", "/css/**", "/js/**", "/images/**", "/WEB-INF/**").permitAll() // 로그인, 회원가입 페이지 및 정적 리소스는 모두 접근 허용
                .anyRequest().authenticated()
            )
            .formLogin(formLogin -> formLogin
                .loginPage("/login") 
                .defaultSuccessUrl("/dashboard", true) 
                .failureUrl("/login?error") 
                .usernameParameter("id") 
                .passwordParameter("password") 
                .permitAll()
            )
            .logout(logout -> logout
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout")) 
                .logoutSuccessUrl("/login?logout") 
                .invalidateHttpSession(true) 
                .deleteCookies("JSESSIONID") 
                .permitAll()
            )
            .csrf(csrf -> csrf.disable()); 

        return http.build();
    }
}