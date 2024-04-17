package com.toy.user.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    
    private String userId;
    
    private String password;
    
    private String nickname;

    private String name;
    
    private String phone;
    
    private String email;
    
    private LocalDate joinDate;
}
