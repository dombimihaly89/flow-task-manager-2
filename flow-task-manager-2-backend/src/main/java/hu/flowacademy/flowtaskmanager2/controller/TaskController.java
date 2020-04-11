package hu.flowacademy.flowtaskmanager2.controller;

import hu.flowacademy.flowtaskmanager2.model.DTO.TaskDTO;
import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.service.TaskService;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")
@AllArgsConstructor
@CrossOrigin("http://localhost:4200")
public class TaskController {

  private TaskService taskService;

  @GetMapping
  public ResponseEntity<List<TaskDTO>> findAll() {
    return new ResponseEntity<>(taskService.findAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<TaskDTO> findOne(@PathVariable Long id) {
    return taskService.findOne(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping()
  public ResponseEntity<TaskDTO> createTask(@RequestBody TaskDTO taskdto) {
    return new ResponseEntity<>(taskService.createTask(taskdto), HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<TaskDTO> updateTask(@PathVariable Long id, @RequestBody Task task) {
    return new ResponseEntity<>(taskService.updateTask(id, task), HttpStatus.OK) ;
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteTask(@PathVariable Long id ) {
    taskService.deleteTask(id);
    return ResponseEntity.noContent().build();
  }

}
