package com.example.demo.service.UserService;


import com.example.demo.model.User;

import java.util.List;

public interface UserService {
    List<User> get();

    //    User get(int id);
    User get(String email);

    void save(User user);

    void delete(int id);
}
