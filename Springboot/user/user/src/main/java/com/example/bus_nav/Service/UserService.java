package com.example.bus_nav.Service;

import com.example.bus_nav.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUser();



}
