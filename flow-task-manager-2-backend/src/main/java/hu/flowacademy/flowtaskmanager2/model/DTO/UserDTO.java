package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.User;
import java.time.LocalDate;
import java.util.List;
import lombok.Data;

@Data
public class UserDTO {

  private Long id;

  private String username;

  private String firstName;

  private String lastName;

  private LocalDate dateOfBirth;

  private User.Role role;

  private List<TaskDTO> tasks;

  private List<SolutionDTO> solutions;

  private List<RatingDTO> ratings;

  private List<PostDTO> posts;
}
