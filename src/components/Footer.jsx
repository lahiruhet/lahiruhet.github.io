import { styled } from "styled-components";

export default function Footer() {
  const Container = styled.div`
    padding: 0 200px 50px 200px;
    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px;
      margin: 40px 0 0 0;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Footer = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #4e1c80;
    @media (max-width: 768px) {
      text-align: center;
    }
  `;
  return (
    <Container>
      <Wrapper>
        <Footer>
          Handcrafted by me © 2023. <br></br>Code is available on Github
        </Footer>
      </Wrapper>
    </Container>
  );
}
