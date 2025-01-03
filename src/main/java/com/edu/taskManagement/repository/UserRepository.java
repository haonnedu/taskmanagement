package com.edu.taskManagement.repository;

import com.edu.taskManagement.entity.User;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,UUID> {
     Optional<User> findByUsername(String username);

     Optional<User> findById(UUID uuid);
}
