package hu.flowacademy.flowtaskmanager2.model.DTO;

import hu.flowacademy.flowtaskmanager2.model.Post;
import hu.flowacademy.flowtaskmanager2.model.Rateable;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import hu.flowacademy.flowtaskmanager2.model.Solution;
import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

@Data
@NoArgsConstructor
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

  public Rating toEntity(User user, Rateable rateable) {
    Rating rating = new Rating();
    rating.setUser(user);
    if (rateable instanceof Task) {
      rating.setTask((Task) rateable);
    } else {
      rating.setSolution((Solution) rateable);
    }
    BeanUtils.copyProperties(this, rating);
    return rating;
  }

}
