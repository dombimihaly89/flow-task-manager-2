package hu.flowacademy.flowtaskmanager2.model;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "solutions")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Solution implements Rateable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String content;

  @Column
  private LocalDateTime createdAt;

  @Column
  private LocalDateTime updatedAt;

  @ManyToOne
  @JoinColumn(name = "task_id")
  private Task task;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

  @Column
  @OneToMany(fetch = FetchType.LAZY, mappedBy = "solution")
  private List<Rating> ratings;

  @Column
  @OneToMany(fetch = FetchType.LAZY, mappedBy = "solution")
  private List<Post> posts;

}
