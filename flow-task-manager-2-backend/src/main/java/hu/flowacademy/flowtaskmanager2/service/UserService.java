package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.model.DTO.UserDTO;
import hu.flowacademy.flowtaskmanager2.repository.UserRepository;
import java.util.List;
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

}
