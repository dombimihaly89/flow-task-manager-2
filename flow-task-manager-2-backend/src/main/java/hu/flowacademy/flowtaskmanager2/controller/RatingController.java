package hu.flowacademy.flowtaskmanager2.controller;

import hu.flowacademy.flowtaskmanager2.model.DTO.RatingDTO;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import hu.flowacademy.flowtaskmanager2.service.RatingService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.dom4j.swing.BranchTreeNode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/ratings")
public class RatingController {

  private RatingService ratingService;

  @GetMapping
  public ResponseEntity<List<RatingDTO>> findAll() {
    return new ResponseEntity<>(ratingService.findAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<RatingDTO> findOne(@PathVariable Long id) {
    return ratingService.findOne(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<RatingDTO> createRating(@RequestBody Rating rating) {
    return new ResponseEntity<>(ratingService.createRating(rating), HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<RatingDTO> updateRating(@PathVariable Long id, @RequestBody Rating rating) {
    return new ResponseEntity<>(ratingService.updateRating(id, rating), HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteRating(@PathVariable Long id) {
    ratingService.deleteRating(id);
    return ResponseEntity.noContent().build();
  }

}
