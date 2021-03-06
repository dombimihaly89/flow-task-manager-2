package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.NotFoundException;
import hu.flowacademy.flowtaskmanager2.exception.RatingNotFoundException;
import hu.flowacademy.flowtaskmanager2.exception.SolutionNotFoundException;
import hu.flowacademy.flowtaskmanager2.exception.TaskNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.RatingDTO;
import hu.flowacademy.flowtaskmanager2.model.Rateable;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import hu.flowacademy.flowtaskmanager2.model.Solution;
import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.model.User;
import hu.flowacademy.flowtaskmanager2.repository.RatingRepository;
import hu.flowacademy.flowtaskmanager2.repository.SolutionRepository;
import hu.flowacademy.flowtaskmanager2.repository.TaskRepository;
import hu.flowacademy.flowtaskmanager2.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@AllArgsConstructor
public class RatingService {

  private RatingRepository ratingRepository;
  private UserRepository userRepository;
  private TaskRepository taskRepository;
  private SolutionRepository solutionRepository;

  public List<RatingDTO> findAll() {
    return ratingRepository.findAll().stream().map(RatingDTO::new).collect(Collectors.toList());
  }

  public Optional<RatingDTO> findOne(Long id) {
    return Optional.of(ratingRepository.findById(id).map(RatingDTO::new)).orElseThrow(() -> new RatingNotFoundException(id));
  }

  public RatingDTO createRating(RatingDTO ratingDTO) {
    User user = userRepository.findByUsername(ratingDTO.getUsername());
    Rateable rateable;
    if (ratingDTO.getTaskId() != null) {
      rateable = taskRepository.findById(ratingDTO.getTaskId()).orElseThrow(() -> new TaskNotFoundException(ratingDTO.getTaskId()));
    }
    else if (ratingDTO.getSolutionId() != null) {
      rateable = solutionRepository.findById(ratingDTO.getSolutionId()).orElseThrow(() -> new SolutionNotFoundException(ratingDTO.getSolutionId()));
    } else throw new NotFoundException("Cannot create this rating. TaskID and SolutionID are both null");
    return new RatingDTO(ratingRepository.save(ratingDTO.toEntity(user, rateable)));
  }

  public RatingDTO updateRating(Long id, Rating rating) {
    Rating oldRating =  ratingRepository.findById(id).orElseThrow(() -> new RatingNotFoundException(id));
    oldRating.setRating(rating.getRating());
    return new RatingDTO(ratingRepository.save(oldRating));
  }

  public void deleteRating(Long id) {
    ratingRepository.deleteById(id);
  }
}
