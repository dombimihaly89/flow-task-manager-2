package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.model.Task.Difficulty;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class TaskDTO {

  private Long id;

  private Task.Type type;

  private String title;

  private String content;

  private Difficulty difficulty;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  private UserDTO user;

  private List<SolutionDTO> solutions;

  private List<PostDTO> posts;
}
