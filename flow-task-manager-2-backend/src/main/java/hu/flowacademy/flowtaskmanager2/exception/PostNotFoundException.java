package hu.flowacademy.flowtaskmanager2.exception;

public class PostNotFoundException extends NotFoundException {

  public PostNotFoundException(Long id) {
    super("Post not found with the id: " + id);
  }

}
