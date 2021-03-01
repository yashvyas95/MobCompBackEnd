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
import com.dto.Request;
import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.SEQUENCE;


@Data
@Entity
@Table(name="rescue_team")
public class RescueTeam {
	 	@Id
	    @GeneratedValue(strategy = SEQUENCE)
	    private Long rescueTeamId;
	 	
	 	@Column
	 	private String location;
	 	
	 	@Column
	    private String empId;
	 	
	 	@Column
	    private String emp2Id;
	 	
	 	@Column
	    private String emp3Id;
	 	
	 	@Column
	    private Long requestId;

	 	@Column
	    private boolean status;

		public Long getRescueTeamId() {
			return rescueTeamId;
		}

		public void setRescueTeamId(Long rescueTeamId) {
			this.rescueTeamId = rescueTeamId;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public Long getRequestId() {
			return requestId;
		}

		public void setRequestId(Long id) {
			this.requestId = id;
		}
	 	
		public void setStatus(boolean status) {
			this.status=status;
		}
		public boolean getStatus() {
			return this.status;
		}
	 	
}
