import styled from 'styled-components';
import logo from '../esset/logo.svg';

const Background = styled.div`
  background-color: rgb(36, 38, 41);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  padding-top: 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 4%;
  margin-right: 4%;
`;

const Log = styled.img`
  height: 35px;
  width: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const H2 = styled.div`
  color: hsl(210, 8%, 60%);
  margin-right: 15px;
  margin-bottom: 10px;
`;

const H1 = styled.h4`
  color: hsl(210, 8%, 75%);
  margin-right: 15px;
  margin-bottom: 10px;
`;
const H3 = styled.div`
  color: hsl(210, 8%, 60%);
  margin-right: 15px;
  margin-bottom: 220px;
`;

const SubText = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const SubText2 = styled.div`
  display: flex;
`;
export default function Footer() {
  return (
    <>
      <Background>
        <Content>
          <Log src={logo} alt="로고"></Log>
          <SubText>
            <H1>STACK OVERFLOW</H1>
            <H2>Questions</H2>
            <H2>Help</H2>
          </SubText>
          <SubText>
            <H1>PRODUCTS</H1>
            <H2>Teams</H2>
            <H2>Advertising</H2>
            <H2>Collectives</H2>
            <H2>Talent</H2>
          </SubText>
          <SubText>
            <H1>COMPANY</H1>
            <H2>About</H2>
            <H2>Press</H2>
            <H2>Work Here</H2>
            <H2>Legal</H2>
            <H2>Privacy Policy</H2>
            <H2>Terms of Service</H2>
            <H2>Contact Us</H2>
            <H2>Cookie Settings</H2>
            <H2>Cookie Policy</H2>
          </SubText>
          <SubText>
            <H1>STACK EXCHANGE NETWORK</H1>
            <H2>Technology</H2>
            <H2>Culture & recreation</H2>
            <H2>Life & arts</H2>
            <H2>Science</H2>
            <H2>Professional</H2>
            <H2>Business</H2>
            <div>
              <H2>API</H2>
              <H2>Data</H2>
            </div>
          </SubText>
          <div>
            <SubText2>
              <H3>Blog</H3>
              <H3>Facebook</H3>
              <H3>Twitter</H3>
              <H3>LinkedIn</H3>
              <H3>Instagram</H3>
            </SubText2>
            <H2>
              <div>Site design / logo © 2023 Stack Exchange Inc;</div>
              <div>user contributions</div>
              <div>licensed under CC BY-SA. rev 2023.2.17.43248</div>
            </H2>
          </div>
        </Content>
      </Background>
    </>
  );
}
