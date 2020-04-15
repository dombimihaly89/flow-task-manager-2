package hu.flowacademy.flowtaskmanager2.repository;

import hu.flowacademy.flowtaskmanager2.model.Solution;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SolutionRepository extends JpaRepository<Solution, Long> {

  List<Solution> findByTask_Id(Long taskId);

}
