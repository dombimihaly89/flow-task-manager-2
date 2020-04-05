package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Post;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
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

  public PostDTO(Post post) {
    this.setId(post.getId());
    this.setContent(post.getContent());
    this.setCreatedAt(post.getCreatedAt());
    this.setUpdatedAt(post.getUpdatedAt());
    this.setTask(new TaskDTO(post.getTask()));
    this.setUser(new UserDTO(post.getUser()));
    this.setSolution(new SolutionDTO(post.getSolution()));
    this.setPosts(post.getPosts().stream().map(PostDTO::new).collect(Collectors.toList()));
  }
}
