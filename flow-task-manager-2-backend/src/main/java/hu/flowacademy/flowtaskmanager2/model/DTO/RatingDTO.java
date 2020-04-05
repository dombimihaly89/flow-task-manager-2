package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Post;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import lombok.Data;

@Data
public class RatingDTO {

  private Long id;

  private Rating.UserRating rating;

  private UserDTO user;

  private SolutionDTO solution;

  private PostDTO post;

  private TaskDTO task;

  public RatingDTO(Rating rating) {
    this.setId(rating.getId());
    this.setRating(rating.getRating());
    this.setUser(new UserDTO(rating.getUser()));
    this.setSolution(new SolutionDTO(rating.getSolution()));
    this.setPost(new PostDTO(rating.getPost()));
    this.setTask(new TaskDTO(rating.getTask()));

  }

}
