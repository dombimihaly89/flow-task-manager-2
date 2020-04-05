package hu.flowacademy.flowtaskmanager2.repository;

import hu.flowacademy.flowtaskmanager2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
