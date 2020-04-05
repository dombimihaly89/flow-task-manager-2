package hu.flowacademy.flowtaskmanager2.repository;

import hu.flowacademy.flowtaskmanager2.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
