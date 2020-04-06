package hu.flowacademy.flowtaskmanager2.exception;

public class SolutionNotFoundException extends NotFoundException {

  public SolutionNotFoundException(Long id) {
    super("Solution not found with the id: " + id);
  }
}
