package e101.hishop.domain.dto.request;


import e101.hishop.global.enumeration.Gender;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class UserInfoReqDto {

    @NotBlank
    @Pattern(regexp = "^[a-zA-Z0-9]{4,15}$", message = "아이디는 영문숫자 4~15자")
    private String loginId;
    @NotBlank
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$",message = "비밀번호는 영문숫자특수문자포함 8~25자")
    private String password;

    @NotBlank
    @Pattern(regexp = "^[가-힣a-zA-Z]{1,30}$", message = "한글영문 1~30자")
    private String name;

    @NotBlank
    private Gender gender;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthdate;

    private Long defaultCardId;

    @NotBlank
    @Pattern(regexp = "^\\d{3}-\\d{4}-\\d{4}$", message = "000-0000-0000형식")
    private String phone;

    @Email
    private String email;

    @NotNull
    private Boolean adSelect;

}
