package hu.flowacademy.flowtaskmanager2.exception;

public class RatingNotFoundException extends NotFoundException {

  public RatingNotFoundException(Long id) {
    super("Rating not found with the id: " + id);
  }
}
