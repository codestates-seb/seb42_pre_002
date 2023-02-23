package com.codestate.server.auth.userdetails;

import com.codestate.server.auth.utils.RoleAuthorityUtils;
import com.codestate.server.exception.BusinessLogicException;
import com.codestate.server.exception.ExceptionCode;
import com.codestate.server.member.entity.Member;
import com.codestate.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MemberUserDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final RoleAuthorityUtils authorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(()-> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new HelloUserDetails(findMember);
    }

    // HelloUserDetails 클래스 추가
    private final class HelloUserDetails extends Member implements UserDetails{
        HelloUserDetails(Member member){
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setNickname(member.getNickname());
            setPassword(member.getPassword());
        }

        public Collection<? extends GrantedAuthority> getAuthorities(){
            return authorityUtils.createAuthorities(this.getEmail()); // 리팩토링 포인트 (권한 설정)
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
