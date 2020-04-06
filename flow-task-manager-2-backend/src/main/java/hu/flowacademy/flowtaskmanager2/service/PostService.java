package hu.flowacademy.flowtaskmanager2.service;

import hu.flowacademy.flowtaskmanager2.exception.PostNotFoundException;
import hu.flowacademy.flowtaskmanager2.model.DTO.PostDTO;
import hu.flowacademy.flowtaskmanager2.model.Post;
import hu.flowacademy.flowtaskmanager2.repository.PostRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Transactional
public class PostService {

  private PostRepository postRepository;

  public List<PostDTO> findAll() {
    return postRepository.findAll().stream().map(PostDTO::new).collect(Collectors.toList());
  }

  public Optional<PostDTO> findOne(Long id) {
    return Optional.of(postRepository.findById(id).map(PostDTO::new)).orElseThrow(() -> new PostNotFoundException(id));
  }

  public PostDTO createPost(Post post) {
    post.setCreatedAt(LocalDateTime.now());
    return new PostDTO(postRepository.save(post));
  }

  public PostDTO updatePost(Long id, Post post) {
    Post oldPost = postRepository.findById(id).orElseThrow(() -> new PostNotFoundException(id));
    oldPost.setUpdatedAt(LocalDateTime.now());
    oldPost.setContent(post.getContent());
    return new PostDTO(postRepository.save(post));
  }

  public void deletePost(Long id) {
    postRepository.deleteById(id);
  }

}
