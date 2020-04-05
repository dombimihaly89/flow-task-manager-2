package hu.flowacademy.flowtaskmanager2.model.DTO;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class PostDTO {

  private Long id;

  private String content;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  private TaskDTO task;

  private UserDTO user;

  private SolutionDTO solution;

  private List<PostDTO> posts;
}
