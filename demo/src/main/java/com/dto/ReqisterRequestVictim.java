package com.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class ReqisterRequestVictim {
    private String name;
    private String location;
    private String nature;
}
