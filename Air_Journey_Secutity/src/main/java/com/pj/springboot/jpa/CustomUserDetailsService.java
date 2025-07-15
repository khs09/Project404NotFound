package com.pj.springboot.jpa;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + id));

        // UserDetails 구현체 반환 (Spring Security의 User 객체 사용)
        return new org.springframework.security.core.userdetails.User(
                user.getId(),
                user.getPassword(),
                Collections.emptyList() // 권한 (roles) 설정. 여기서는 비워둠.
        );
    }
}