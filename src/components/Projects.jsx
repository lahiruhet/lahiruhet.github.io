import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const Container = styled.div`
    padding: 0 100px 10px 100px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px;
      margin: 40px 0 0 0;
    }
  `;
  const Wrapper = styled.div`
    max-width: 1201.62px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  `;
  const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  `;
  const Title = styled.h2``;
  const Description = styled.p`
    @media (max-width: 768px) {
      text-align: center;
    }
  `;
  const Projects = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
    @media (max-width: 767px) {
      justify-content: center;
    }
  `;
  const GithubRed = styled.a`
    text-decoration: none;
    color: inherit;
  `;

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Projects</Title>
          <Description>
            These are my open source projects which are fetched directly from
            Github. <br></br>If you&apos;re a developer, feel free to make a
            pull request!
          </Description>
        </Header>
        <Projects>
          <GithubRed href="https://github.com/lahiruhet/lahiruhet.github.io">
            <ProjectCard
              title="Portfolio Website"
              description="Showcase of my projects built from the ground up in a flash, this portfolio embodies simplicity and efficiency."
              language="ReactJS"
              color="#08DDFF"
            />
          </GithubRed>
          <GithubRed href="https://github.com/lahiruhet/car-rental-management-system">
            <ProjectCard
              title="Rent A Car"
              description="A web-based car rental system which allows users to search for available cars, make reservations and much more."
              language="LAMP"
              color="#F37623"
            />
          </GithubRed>
          <GithubRed href="https://github.com/lahiruhet/EasyFedoraMedia">
            <ProjectCard
              title="EasyFedoraMedia"
              description="A script that automates the installation of multimedia packages and codecs on a fresh install of Fedora."
              language="Bash"
              color="#232C34"
            />
          </GithubRed>
          <GithubRed href="https://github.com/lahiruhet/JustAnotherBlog">
            <ProjectCard
              title="JustAnotherBlog"
              description="Simple blog where anyone can write and read blogs created using node/express and ejs."
              language="MERN"
              color="green"
            />
          </GithubRed>
          <GithubRed href="https://github.com/lahiruhet/amtshipping">
            <ProjectCard
              title="AMT Shipping"
              description="Modern and elgent website created for an imaginary transport company. Utilizes Bootstrap templates."
              language="Bootstrap/CSS"
              color="purple"
            />
          </GithubRed>
          <GithubRed href="#">
            <ProjectCard
              title="Wordle Clone"
              description="A functional clone of the popular NY Times Wordle created using Javascript, HTML and CSS."
              language="JavaScript"
              color="#EDD718"
            />
          </GithubRed>
        </Projects>
      </Wrapper>
    </Container>
  );
}
