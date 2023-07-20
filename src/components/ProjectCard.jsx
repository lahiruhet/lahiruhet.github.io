import { styled } from "styled-components";
import { RepoIcon } from "@primer/octicons-react";

// eslint-disable-next-line react/prop-types
export default function ProjectCard({ title, description, language, color }) {
  const Container = styled.div`
    height: 150px;
    width: 290px;
  `;
  const Wrapper = styled.div`
    height: 100%;
    padding: 10px;
    border: 2px solid #4e1c80;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
    background-color: #4e1c80;
  `;
  const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `;
  const Title = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #cabad9;
  `;
  const Description = styled.p`
    font-size: 13px;
  `;
  const Language = styled.div`
    margin: 5px 0 0 0;
    display: flex;
    align-items: center;
    gap: 5px;
  `;
  const Span = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${color};
    border-radius: 50%;
    display: inline-block;
  `;
  const Text = styled.p`
    font-size: 12px;
  `;
  return (
    <Container>
      <Wrapper>
        <Header>
          <RepoIcon size={16} />
          <Title>{title}</Title>
        </Header>
        <Description>{description}</Description>
        <Language>
          <Span></Span>
          <Text>{language}</Text>
        </Language>
      </Wrapper>
    </Container>
  );
}
