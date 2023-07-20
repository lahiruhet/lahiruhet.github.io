import { styled } from "styled-components";

export default function Hero() {
  const Container = styled.div`
    padding: 10px 200px 10px 200px;
    margin: 80px 0 0 0;

    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px;
      margin: 40px 0 0 0;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  `;
  const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `;
  const Title = styled.h1``;
  const Subtitle = styled.p`
    font-size: 18px;
  `;
  const HeroImage = styled.img`
    width: 350px;
  `;
  const Span = styled.span`
    color: #4e1c80;
  `;

  const isMobileView = window.innerWidth <= 768;

  return (
    <Container>
      <Wrapper>
        <Text>
          <Title>
            Hi, I&apos;m Lahiru <Span>Hettiarachchi.</Span> An aspiring
            <Span> Full-Stack Developer.</Span>
          </Title>
          <Subtitle>
            A curiousity-driven coder with the passion and determination to
            charge through any steep learning curves.
          </Subtitle>
        </Text>
        {!isMobileView && (
          // Only render HeroImage on devices wider than 768px
          <HeroImage src="https://i.imgur.com/mR16FDn.png"></HeroImage>
        )}
      </Wrapper>
    </Container>
  );
}
