package com.codestate.membercontroller;

import com.codestate.server.member.controller.MemberController;
import com.codestate.server.member.dto.MemberResponseDto;
import com.codestate.server.member.mapper.MemberMapper;
import com.codestate.server.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;
import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;
import java.util.List;

@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;


    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberMapper mapper;



    @Test
    public void getMembersTest() throws Exception {
        // given
        int page = 2;
        int size = 3;

        List<MemberResponseDto> responses = List.of(
                new MemberResponseDto(1L, "sample1@gmail.com", "닉네임1", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(2L, "sample2@gmail.com", "닉네임2", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(3L, "sample3@gmail.com", "닉네임3", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(4L, "sample4@gmail.com", "닉네임4", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(5L, "sample5@gmail.com", "닉네임5", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(6L, "sample6@gmail.com", "닉네임6", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(7L, "sample7@gmail.com", "닉네임7", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(8L, "sample8@gmail.com", "닉네임8", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(9L, "sample9@gmail.com", "닉네임9", LocalDateTime.now(), LocalDateTime.now()),
                new MemberResponseDto(10L, "sample10@gmail.com", "닉네임10", LocalDateTime.now(), LocalDateTime.now())
        );


    }
}
