package com.airline.user.dao;

import com.airline.user.model.User;
import java.util.List;

public interface UserDAO {

    List<User> get();

//    User get(int id);
User get(String email);
    void save(User user);

    void delete(int id);
}
