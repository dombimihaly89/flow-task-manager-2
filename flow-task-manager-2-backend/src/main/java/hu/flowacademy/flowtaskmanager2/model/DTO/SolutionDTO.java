package hu.flowacademy.flowtaskmanager2.model.DTO;

import java.time.LocalDateTime;
import java.util.List;
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
}
