package hu.flowacademy.flowtaskmanager2.exception;

public class NotFoundException extends RuntimeException {

  public NotFoundException(String message) {
    super("NotFoundException :" + message);
  }
}
