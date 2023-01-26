package e101.hishop.domain.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Kiosk {

    @Id
    @GeneratedValue
    @Column(name = "kiosk_id")
    private Long id;

    @NotBlank
    private String name;

    private String address;

    private String tel;


}
