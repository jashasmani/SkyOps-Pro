package com.example.demo.contoller;


import com.example.demo.model.Flights;
import com.example.demo.model.User;
import com.example.demo.service.UserService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> get() {
        return userService.get();
    }

    @PostMapping("/user")
    public User save(@RequestBody User userobj) {
        userService.save(userobj);
        return userobj;
    }

    @GetMapping("/user/{email}/{password}")
    public ResponseEntity<?> getLogin(@PathVariable Map<String, String> map) {
        String email = map.get("email");
        String password = map.get("password");

        // Retrieve the user by email
        List<User> userList = userService.get();
        Optional<User> userOpt = userList.stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst();

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(password)) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }


//    @GetMapping("/user/{id}")
//    public User get(@PathVariable int id) {
//        User userobj = userService.get(id);
//        if (userobj == null) {
//            throw  new RuntimeException("User not Found By ID :"+id);
//        }
//        return userobj;
//    }


    @PutMapping("/user")
    public User update(@RequestBody User userobj) {
        userService.save(userobj);
        return userobj;
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        userService.delete(id);
        return ("User with id " + id + " has been deleted");
    }
}
