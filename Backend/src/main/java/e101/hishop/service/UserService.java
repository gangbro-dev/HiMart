package e101.hishop.service;

import e101.hishop.domain.dto.request.CardSaveReqDto;
import e101.hishop.domain.dto.request.UserInfoReqDto;
import e101.hishop.domain.entity.Payment;
import e101.hishop.domain.entity.Users;
import org.springframework.stereotype.Service;

public interface UserService {

    Long cardSave(Payment payment, Long userId);
    Users getUserInfo(Long userPK);
    Users patchUserInfo(UserInfoReqDto dto, Long userPK);
}
