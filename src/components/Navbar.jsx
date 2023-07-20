import { styled } from "styled-components";

export default function Navbar() {
  const Container = styled.div`
    height: 60px;
    padding: 20px 200px 20px 200px;
    width: 100vw;
    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px 0 20px;
      margin: 40px 0 0 0;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const Left = styled.div`
    flex: 1;
  `;
  const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  `;
  const Home = styled.a`
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    color: #ffffff;
  `;

  const Logo = styled.img`
    height: 45px;
    @media (max-width: 768px) {
      height: 35px;
    }
  `;

  const isMobileView = window.innerWidth <= 768;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Home href="#">lahiruhet</Home>
        </Left>
        <Right>
          {/* <List>
            <ListItem>About Me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Portfolio</ListItem>
          </List> */}
          {!isMobileView && <p>based on</p>}
          <Logo src="https://i.imgur.com/ffJ72Qm.png"></Logo>
        </Right>
      </Wrapper>
    </Container>
  );
}
