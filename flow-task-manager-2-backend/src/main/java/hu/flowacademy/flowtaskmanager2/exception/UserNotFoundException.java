package hu.flowacademy.flowtaskmanager2.exception;

public class UserNotFoundException extends NotFoundException {
  public UserNotFoundException(Long id) {
    super("User not found with the id: " + id);
  }
}
