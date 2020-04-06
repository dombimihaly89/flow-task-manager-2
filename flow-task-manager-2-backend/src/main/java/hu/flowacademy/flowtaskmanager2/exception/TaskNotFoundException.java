package hu.flowacademy.flowtaskmanager2.exception;

public class TaskNotFoundException extends NotFoundException {
  public TaskNotFoundException(Long id) {
    super("Task not found with the id: " + id);
  }
}
