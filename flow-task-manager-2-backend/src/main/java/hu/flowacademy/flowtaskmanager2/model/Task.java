package hu.flowacademy.flowtaskmanager2.model;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@Table(name = "tasks")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Enumerated(EnumType.STRING)
    private Type type;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "task")
    private List<Solution> solutions;

    @Column
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "task")
    private List<Post> posts;

    @Column
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "task")
    private List<Rating> ratings;

    public enum Type {
        JAVA,
        JAVASCRIPT,
        SPRING,
        ANGULAR,
        LINUX,
        DATABASE
    }

    public enum Difficulty {
        EASY,
        MEDIUM,
        HARD
    }
}
