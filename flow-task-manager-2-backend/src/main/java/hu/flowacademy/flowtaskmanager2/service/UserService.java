package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.UserNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.UserDTO;
import hu.flowacademy.flowtaskmanager2.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
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

}
