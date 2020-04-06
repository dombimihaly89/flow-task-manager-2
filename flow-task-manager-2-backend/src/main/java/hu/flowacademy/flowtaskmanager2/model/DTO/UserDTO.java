package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.User;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
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

  public UserDTO(User user) {
    this.setId(user.getId());
    this.setUsername(user.getUsername());
    this.setFirstName(user.getFirstName());
    this.setLastName(user.getLastName());
    this.setDateOfBirth(user.getDateOfBirth());
    this.setRole(user.getRole());
    if (user.getTasks() != null) {
      this.setTasks(user.getTasks().stream().map(TaskDTO::new).collect(Collectors.toList()));
    }
    if (user.getSolutions() != null) {
      this.setSolutions(user.getSolutions().stream().map(SolutionDTO::new).collect(Collectors.toList()));
    }
    if (user.getRatings() != null) {
      this.setRatings(user.getRatings().stream().map(RatingDTO::new).collect(Collectors.toList()));
    }
    if (user.getPosts() != null) {
      this.setPosts(user.getPosts().stream().map(PostDTO::new).collect(Collectors.toList()));
    }
  }
}
