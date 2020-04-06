package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.TaskNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.TaskDTO;
import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.repository.TaskRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Transactional
@AllArgsConstructor
public class TaskService {

  private TaskRepository taskRepository;

  public List<TaskDTO> findAll() {
    return taskRepository.findAll().stream().map(TaskDTO::new).collect(Collectors.toList());
  }

  public Optional<TaskDTO> findOne(Long id) {
    return Optional.of(taskRepository.findById(id).map(TaskDTO::new)).orElseThrow(() -> new TaskNotFoundException(id));
  }

  public TaskDTO createTask(Task task) {
    task.setCreatedAt(LocalDateTime.now());
    return new TaskDTO(taskRepository.save(task));
  }

  public TaskDTO updateTask(Long id, Task task) {
    Task oldTask = taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    oldTask.setUpdatedAt(LocalDateTime.now());
    oldTask.setContent(task.getContent());
    oldTask.setDifficulty(task.getDifficulty());
    oldTask.setTitle(task.getTitle());
    oldTask.setType(task.getType());
    return new TaskDTO(taskRepository.save(oldTask));
  }
}
