package com.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class RegisterRescueTeam {
	
	private ArrayList<Long> members;
    private String location;
    private String nature;
    
    public ArrayList<Long> getmembers(){return this.members;}
    public void setmembers(ArrayList<Long>members){this.members=members;}

    
}
