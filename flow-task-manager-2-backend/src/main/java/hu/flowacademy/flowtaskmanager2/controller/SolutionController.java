package hu.flowacademy.flowtaskmanager2.controller;

import hu.flowacademy.flowtaskmanager2.model.DTO.SolutionDTO;
import hu.flowacademy.flowtaskmanager2.model.Solution;
import hu.flowacademy.flowtaskmanager2.service.SolutionService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/solutions")
public class SolutionController {

  private SolutionService solutionService;

  @GetMapping
  public ResponseEntity<List<SolutionDTO>> findAll() {
    return new ResponseEntity<>(solutionService.findAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<SolutionDTO> findOne(@PathVariable Long id) {
    return solutionService.findOne(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<SolutionDTO> createSolution(@RequestBody Solution solution) {
    return new ResponseEntity<>(solutionService.createSolution(solution), HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<SolutionDTO> updateSolution(@PathVariable Long id, @RequestBody Solution solution) {
    return new ResponseEntity<>(solutionService.updateSolution(id, solution), HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteSolution(@PathVariable Long id) {
    solutionService.deleteSolution(id);
    return ResponseEntity.noContent().build();
  }

}
