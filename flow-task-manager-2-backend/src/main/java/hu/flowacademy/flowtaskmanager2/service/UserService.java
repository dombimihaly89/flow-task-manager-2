package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.UserNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.UserDTO;
import hu.flowacademy.flowtaskmanager2.model.User;
import hu.flowacademy.flowtaskmanager2.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Transactional
@Service
@AllArgsConstructor
public class UserService {

  private UserRepository userRepository;

  public List<UserDTO> findAll() {
    return userRepository.findAllByOrderById().stream().map(UserDTO::new).collect(Collectors.toList());
  }

  public Optional<UserDTO> findOne(Long id) {
    return Optional.of(userRepository.findById(id).map(UserDTO::new)).orElseThrow(() -> new UserNotFoundException(id));
  }

  public UserDTO createUser(User user) {
    return new UserDTO(userRepository.save(user));
  }

  public void updateUser(Long id, User user) {
    User oldUser = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    oldUser.setFirstName(user.getFirstName());
    oldUser.setLastName(user.getLastName());
    oldUser.setDateOfBirth(user.getDateOfBirth());
    oldUser.setPassword(user.getPassword());
    userRepository.save(oldUser);
  }

  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }
}
