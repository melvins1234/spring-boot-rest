package com.rakutech.rakutech.services;

import com.rakutech.rakutech.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
