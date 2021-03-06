package com.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import com.dto.RescueTeam;
import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.SEQUENCE;


@Data
@Entity
@Table(name="department")
public class Department {
	 	@Id
	    @GeneratedValue
	    private Long departmentId;
	 	
	 	@Column
	 	private String location;
	 	
	 	@Column
	    private ArrayList<Long> employees;
	 
	 	@Column
	 	private String name;
	 	
	 	@Column
	 	private boolean status;

	 	public Long getDepartmentId() {
	 		return this.departmentId;
	 	}
	 	
	 	public void setDepartmentId(Long depId) {
	 		this.departmentId=depId;
	 	}
	 	
	 	public ArrayList<Long> getEmployees(){
	 		return this.employees;
	 	}
	 	
	 	public void SetEmployees(ArrayList<Long> employees) {
	 		this.employees=employees;
	 	}
	 	
		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public boolean isStatus() {
			return status;
		}

		public void setStatus(boolean status) {
			this.status = status;
		} 
		
	 	 
}
