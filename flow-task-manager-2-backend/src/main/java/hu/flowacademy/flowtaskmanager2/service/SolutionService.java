package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.SolutionNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.SolutionDTO;
import hu.flowacademy.flowtaskmanager2.model.Solution;
import hu.flowacademy.flowtaskmanager2.repository.SolutionRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@AllArgsConstructor
public class SolutionService {

  private SolutionRepository solutionRepository;

  public List<SolutionDTO> findAll() {
    return solutionRepository.findAll().stream().map(SolutionDTO::new).collect(Collectors.toList());
  }

  public Optional<SolutionDTO> findOne(Long id) {
    return Optional.of(solutionRepository.findById(id).map(SolutionDTO::new).orElseThrow(() -> new SolutionNotFoundException(id)));
  }

  public SolutionDTO createSolution(Solution solution) {
    solution.setCreatedAt(LocalDateTime.now());
    return new SolutionDTO(solutionRepository.save(solution));
  }

  public SolutionDTO updateSolution(Long id, Solution solution) {
    Solution oldSolution = solutionRepository.findById(id).orElseThrow(() -> new SolutionNotFoundException(id));
    oldSolution.setUpdatedAt(LocalDateTime.now());
    oldSolution.setContent(solution.getContent());
    return new SolutionDTO(solutionRepository.save(oldSolution));
  }

  public void deleteSolution(Long id) {
    solutionRepository.deleteById(id);
  }
}
