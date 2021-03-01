package com.dto;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class RegisterRescueTeam {
    private String empId;
    private String emp2Id;
    private String emp3Id;
    private String location;
    private String nature;
    
    
}
