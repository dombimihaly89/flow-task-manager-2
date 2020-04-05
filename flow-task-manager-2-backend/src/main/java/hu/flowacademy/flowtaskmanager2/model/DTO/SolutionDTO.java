package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Solution;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Data;

@Data
public class SolutionDTO {

  private Long id;

  private String content;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  private TaskDTO task;

  private UserDTO user;

  private List<RatingDTO> ratings;

  private List<PostDTO> posts;

  public SolutionDTO(Solution solution) {
    this.setId(solution.getId());
    this.setContent(solution.getContent());
    this.setCreatedAt(solution.getCreatedAt());
    this.setUpdatedAt(solution.getUpdatedAt());
    this.setTask(new TaskDTO(solution.getTask()));
    this.setUser(new UserDTO(solution.getUser()));
    this.setRatings(solution.getRatings().stream().map(RatingDTO::new).collect(Collectors.toList()));
    this.setPosts(solution.getPosts().stream().map(PostDTO::new).collect(Collectors.toList()));
  }
}
