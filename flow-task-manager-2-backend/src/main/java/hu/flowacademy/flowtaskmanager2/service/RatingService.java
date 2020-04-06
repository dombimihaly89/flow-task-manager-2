package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.RatingNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.RatingDTO;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import hu.flowacademy.flowtaskmanager2.repository.RatingRepository;
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

  public List<RatingDTO> findAll() {
    return ratingRepository.findAll().stream().map(RatingDTO::new).collect(Collectors.toList());
  }

  public Optional<RatingDTO> findOne(Long id) {
    return Optional.of(ratingRepository.findById(id).map(RatingDTO::new)).orElseThrow(() -> new RatingNotFoundException(id));
  }

  public RatingDTO createRating(Rating rating) {
    return new RatingDTO(ratingRepository.save(rating));
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
