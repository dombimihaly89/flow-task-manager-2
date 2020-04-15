package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Post;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import lombok.Data;

@Data
public class RatingDTO {

  private Long id;

  private Rating.UserRating rating;

  private String username;

  private Long solutionId;

  private Long postId;

  private Long taskId;

  public RatingDTO(Rating rating) {
    this.setId(rating.getId());
    this.setRating(rating.getRating());
    this.setUsername(rating.getUser().getUsername());
    if (rating.getSolution() != null) {
      this.setSolutionId(rating.getSolution().getId());
    }
    if (rating.getPost() != null) {
      this.setPostId(rating.getPost().getId());
    }
    if (rating.getTask() != null) {
      this.setTaskId(rating.getTask().getId());
    }
  }

}
