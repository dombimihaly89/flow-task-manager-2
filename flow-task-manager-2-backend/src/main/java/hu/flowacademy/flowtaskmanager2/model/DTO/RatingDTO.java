package hu.flowacademy.flowtaskmanager2.model.DTO;

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

}
