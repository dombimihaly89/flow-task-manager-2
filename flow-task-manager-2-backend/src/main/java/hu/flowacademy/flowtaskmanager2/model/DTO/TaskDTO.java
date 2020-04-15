package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.model.Task.Difficulty;
import hu.flowacademy.flowtaskmanager2.model.User;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

@Data
@NoArgsConstructor
public class TaskDTO {

  private Long id;

  private Task.Type type;

  private String title;

  private String content;

  private Difficulty difficulty;

  private LocalDateTime createdAt;

  private LocalDateTime updatedAt;

  private String username;

  private int solutions;

  private List<PostDTO> posts;

  private List<RatingDTO> ratings;

  public TaskDTO(Task task) {
    this.setId(task.getId());
    this.setType(task.getType());
    this.setTitle(task.getTitle());
    this.setContent(task.getContent());
    this.setDifficulty(task.getDifficulty());
    this.setCreatedAt(task.getCreatedAt());
    this.setUpdatedAt(task.getUpdatedAt());
    this.setUsername(task.getUser().getUsername());
    if (task.getSolutions() != null) {
      this.setSolutions(task.getSolutions().size());
    }
    if (task.getPosts() != null) {
      this.setPosts(task.getPosts().stream().map(PostDTO::new).collect(Collectors.toList()));
    }
    if (task.getRatings() != null){
      this.setRatings(task.getRatings().stream().map(RatingDTO::new).collect(Collectors.toList()));
    }
  }

  public Task toEntity(User user) {
    Task task = new Task();
    task.setUser(user);
    BeanUtils.copyProperties(this, task);
    return task;
  }
}
