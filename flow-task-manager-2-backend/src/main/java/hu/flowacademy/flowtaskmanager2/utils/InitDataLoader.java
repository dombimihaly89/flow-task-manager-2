package hu.flowacademy.flowtaskmanager2.utils;

import hu.flowacademy.flowtaskmanager2.exception.TaskNotFoundException;
import hu.flowacademy.flowtaskmanager2.exception.UserNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.TaskDTO;
import hu.flowacademy.flowtaskmanager2.model.Rating;
import hu.flowacademy.flowtaskmanager2.model.Rating.UserRating;
import hu.flowacademy.flowtaskmanager2.model.Solution;
import hu.flowacademy.flowtaskmanager2.model.Task;
import hu.flowacademy.flowtaskmanager2.model.Task.Difficulty;
import hu.flowacademy.flowtaskmanager2.model.Task.Type;
import hu.flowacademy.flowtaskmanager2.model.User;
import hu.flowacademy.flowtaskmanager2.model.User.Role;
import hu.flowacademy.flowtaskmanager2.repository.RatingRepository;
import hu.flowacademy.flowtaskmanager2.repository.SolutionRepository;
import hu.flowacademy.flowtaskmanager2.repository.TaskRepository;
import hu.flowacademy.flowtaskmanager2.repository.UserRepository;
import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Transactional
@AllArgsConstructor
public class InitDataLoader {

  private UserRepository userRepository;
  private TaskRepository taskRepository;
  private SolutionRepository solutionRepository;
  private RatingRepository ratingRepository;

  @PostConstruct
  public void init() {
    userRepository.save(User.builder().username("Misi").password("123").firstName("Mihaly").lastName("Dombi").dateOfBirth(
        LocalDate.now()).role(Role.MENTOR).build());
    userRepository.save(User.builder().username("Dina").password("123qwe").firstName("Dina").lastName("Maki").dateOfBirth(
        LocalDate.now()).role(Role.MENTOR).build());

    taskRepository.save(
        Task.builder().title("Hello World").type(Type.JAVA).content("Make a hello world task.").difficulty(
        Difficulty.EASY).createdAt(LocalDateTime.of(2020, 4, 30, 15, 30, 15)).user(userRepository.findById(1L).orElseThrow(() -> new UserNotFoundException(1L))).build());
    taskRepository.save(
        Task.builder().title("Palindrom").type(Type.JAVASCRIPT).content("Make a palindrom checker").difficulty(
            Difficulty.MEDIUM).createdAt(LocalDateTime.of(2020, 4, 30, 18, 30, 15)).user(userRepository.findById(1L).orElseThrow(() -> new UserNotFoundException(1L))).build());
    taskRepository.save(
        Task.builder().title("Blog app").type(Type.SPRING).content("Make a blog app").difficulty(
            Difficulty.HARD).createdAt(LocalDateTime.of(2020, 5, 1, 14, 45, 20)).user(userRepository.findById(2L).orElseThrow(() -> new UserNotFoundException(2L))).build());

    solutionRepository.save(
        Solution.builder().content("System.out.println(\"Hello World\")").createdAt(LocalDateTime.now()).task(taskRepository.findById(1L).orElseThrow(() -> new TaskNotFoundException(1L)))
        .user(userRepository.findById(1L).orElseThrow(() -> new UserNotFoundException(1L))).build());

    solutionRepository.save(
        Solution.builder().content("System.out.println(\"Hello World\")").createdAt(LocalDateTime.now()).task(taskRepository.findById(1L).orElseThrow(() -> new TaskNotFoundException(1L)))
            .user(userRepository.findById(2L).orElseThrow(() -> new UserNotFoundException(2L))).build());

    solutionRepository.save(
        Solution.builder().content("System.out.println(\"Palindrom\")").createdAt(LocalDateTime.now()).task(taskRepository.findById(2L).orElseThrow(() -> new TaskNotFoundException(2L)))
            .user(userRepository.findById(2L).orElseThrow(() -> new UserNotFoundException(2L))).build());

    ratingRepository.save(
        Rating.builder().rating(UserRating.LIKE).user(userRepository.findById(1L).orElseThrow(() -> new UserNotFoundException(1L)))
        .task(taskRepository.findById(1L).orElseThrow(() -> new TaskNotFoundException(1L))).build());

    ratingRepository.save(
        Rating.builder().rating(UserRating.DISLIKE).user(userRepository.findById(2L).orElseThrow(() -> new UserNotFoundException(2L)))
            .task(taskRepository.findById(1L).orElseThrow(() -> new TaskNotFoundException(1L))).build());

    ratingRepository.save(
        Rating.builder().rating(UserRating.LIKE).user(userRepository.findById(1L).orElseThrow(() -> new UserNotFoundException(1L)))
            .task(taskRepository.findById(2L).orElseThrow(() -> new TaskNotFoundException(2L))).build());

  }
}
