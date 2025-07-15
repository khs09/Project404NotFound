package com.pj.springboot.jpa;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService 
{
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
}

    @Transactional
    public User registerUser(User user) 
    {
        if (userRepository.findById(user.getId()).isPresent()) 
        {
            throw new IllegalArgumentException("이미 존재하는 ID입니다.");
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) 
        {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String id, String password) 
    {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) 
        {
            User user = optionalUser.get();
            if (bCryptPasswordEncoder.matches(password, user.getPassword())) 
            {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

    public Optional<User> findUserById(String id) {
        return userRepository.findById(id);
    }
}