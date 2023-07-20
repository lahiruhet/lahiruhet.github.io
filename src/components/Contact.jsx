import { styled } from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  const Container = styled.div`
    padding: 0 200px 10px 200px;
    margin: 80px 0 50px 0;
    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px;
      margin: 40px 0 0 0;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  `;
  const Title = styled.h2``;
  const Subtitle = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    @media (max-width: 768px) {
      text-align: center;
    }
  `;
  const Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0 0 0;
  `;
  const Email = styled.a`
    color: inherit;
    font-weight: 600;
  `;
  const Logo = styled.a``;

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Subtitle>
          Feel free to reach out if you want a to build something together, have
          a question, or just want to connect.<br></br>
          <Email href="mailto:lahiru@tuta.io">lahiru@tuta.io</Email>
        </Subtitle>
        <Socials>
          <Logo href="https://github.com/lahiruhet">
            <GitHubIcon sx={{ color: "#4E1C80", fontSize: 30 }} />
          </Logo>
          <Logo href="https://www.linkedin.com/in/lahiruhet">
            <LinkedInIcon sx={{ color: "#4E1C80", fontSize: 33 }} />
          </Logo>
          <Logo href="https://twitter.com/lahiruhet">
            <TwitterIcon sx={{ color: "#4E1C80", fontSize: 30 }} />
          </Logo>
        </Socials>
      </Wrapper>
    </Container>
  );
}
