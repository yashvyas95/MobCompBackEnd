package com.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.Instant;
import java.util.List;
import com.dto.RescueTeam;
import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.SEQUENCE;


@Data
@Entity
@Table(name="request")
public class Request {
	 	@Id
	    @GeneratedValue
	    private Long requestId;
	 	
	 	@Column
	 	private String location;
	 	
	 	@Column
	    private Long resTeamObj;
	 
	 	@Column
	 	private String name;
	 	
	 	@Column
	 	private boolean status;
	 	
	 	@Column
	 	private String nature;

		public Long getRequestId() {
			return requestId;
		}

		public void setRequestId(Long requestId) {
			this.requestId = requestId;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public Long getResTeamObj() {
			return resTeamObj;
		}

		public void setResTeamObj(Long resTeamObj) {
			this.resTeamObj = resTeamObj;
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
		
	 	 
		public String getNature() {
			return nature;
		}

		public void setNature(String nature) {
			this.nature = nature;
		}
}
