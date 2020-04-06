package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.model.DTO.TaskDTO;
import hu.flowacademy.flowtaskmanager2.repository.TaskRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@AllArgsConstructor
public class TaskService {

  private TaskRepository taskRepository;

  public List<TaskDTO> getAll() {
    return taskRepository.findAll().stream().map(TaskDTO::new).collect(Collectors.toList());
  }
}
