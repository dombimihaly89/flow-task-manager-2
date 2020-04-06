package hu.flowacademy.flowtaskmanager2.controller;

import hu.flowacademy.flowtaskmanager2.model.DTO.PostDTO;
import hu.flowacademy.flowtaskmanager2.model.Post;
import hu.flowacademy.flowtaskmanager2.service.PostService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/posts")
public class PostController {

  private PostService postService;

  @GetMapping
  public ResponseEntity<List<PostDTO>> findAll() {
    return new ResponseEntity(postService.findAll(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<PostDTO> findOne(@PathVariable Long id) {
    return postService.findOne(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<PostDTO> createPost(@RequestBody Post post) {
    return new ResponseEntity<>(postService.createPost(post), HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<PostDTO> updatePost(@PathVariable Long id, @RequestBody Post post) {
   return new ResponseEntity<>(postService.updatePost(id, post), HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deletePost(@PathVariable Long id) {
    postService.deletePost(id);
    return ResponseEntity.noContent().build();
  }

}
