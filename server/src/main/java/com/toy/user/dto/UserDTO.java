package com.toy.user.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    
	@NotNull
    private String userId;
    
	@NotNull
    private String password;

	@NotNull
    private String nickname;

	@NotNull
    private String name;
    
	@NotNull
    private String phone;
    
	@NotNull
    private String email;
    
    private LocalDate joinDate;
}
