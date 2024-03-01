package com.example.bus_nav.Repository;

import com.example.bus_nav.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public User findByUsername(String username);


}

