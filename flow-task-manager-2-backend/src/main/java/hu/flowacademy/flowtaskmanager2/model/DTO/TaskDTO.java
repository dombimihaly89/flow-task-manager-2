package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.model.Task.Difficulty;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
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

  public TaskDTO(Task task) {
    this.setId(task.getId());
    this.setType(task.getType());
    this.setTitle(task.getTitle());
    this.setContent(task.getContent());
    this.setDifficulty(task.getDifficulty());
    this.setCreatedAt(task.getCreatedAt());
    this.setUpdatedAt(task.getUpdatedAt());
    this.setUser(new UserDTO(task.getUser()));
    this.setSolutions(task.getSolutions().stream().map(SolutionDTO::new).collect(Collectors.toList()));
    this.setPosts(task.getPosts().stream().map(PostDTO::new).collect(Collectors.toList()));
  }
}
