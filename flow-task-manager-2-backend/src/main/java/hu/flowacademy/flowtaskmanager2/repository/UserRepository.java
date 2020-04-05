package hu.flowacademy.flowtaskmanager2.repository;

import hu.flowacademy.flowtaskmanager2.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findAllByOrderById();

}
