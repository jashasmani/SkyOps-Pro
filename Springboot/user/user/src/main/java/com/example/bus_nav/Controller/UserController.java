package com.example.bus_nav.Controller;

import com.example.bus_nav.Repository.UserRepository;
import com.example.bus_nav.Service.UserService;
import com.example.bus_nav.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;




//    @PostMapping("/add")
//    public User addUser(@RequestBody User user) {
//        return userService.saveUser(user);
//    }
    @GetMapping("/getAll")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }



    @PostMapping("login")
    public String login(@RequestBody  User user){
        User storedUser = userRepository.findByUsername(user.getUsername());
        if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid email or password";
        }
    }

    @PostMapping("/signup")
    public String checkUser(@RequestBody User user) {

        User storedUser = userRepository.findByUsername(user.getUsername());
        if (storedUser != null && storedUser.getUsername().equals(user.getUsername())) {
            return "Username is Already Registered!";
        } else {
            userService.saveUser(user);
            return "Sign up Successful";
        }

    }


}
