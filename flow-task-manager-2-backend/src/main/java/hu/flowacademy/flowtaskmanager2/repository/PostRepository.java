package hu.flowacademy.flowtaskmanager2.repository;

import hu.flowacademy.flowtaskmanager2.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

}
