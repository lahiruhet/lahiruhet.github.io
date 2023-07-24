import { styled } from "styled-components";

export default function Navbar() {
  const Container = styled.div`
    height: 60px;
    padding: 20px 200px 20px 200px;
    width: 100vw;
    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px 0 20px;
      margin: 20px 0 0 0;
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

  const List = styled.ul``;
  const ListItem = styled.li``;
  const Anchor = styled.a`
    list-style: none;
    color: inherit;
    text-decoration: none;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Home href="#">lahiruhet</Home>
        </Left>
        <Right>
          <List>
            <Anchor href="https://drive.google.com/file/d/1ol7SNq8XY0vJkjx0mXpmAjn21-6LESZW/view?usp=sharing">
              <ListItem>Resume</ListItem>
            </Anchor>
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
}
