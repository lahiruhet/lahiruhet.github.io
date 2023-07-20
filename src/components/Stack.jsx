import { styled } from "styled-components";

export default function Stack() {
  const Container = styled.div`
    padding: 10px 200px 10px 200px;
    margin: 80px 0 0 0;
    height: 300px;

    @media (max-width: 768px) {
      /* Adjust styles for smartphones */
      padding: 10px 20px;
      margin: 40px 0 0 0;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  `;
  const Title = styled.h2`
    text-align: left;
  `;
  const Badges = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
  `;
  const Badge = styled.img``;

  return (
    <Container>
      <Wrapper>
        <Title>Tech Stack</Title>
        <Badges>
          <Badge src="https://img.shields.io/badge/HTML-4e1c80?style=for-the-badge&logo=HTML5"></Badge>
          <Badge src="https://img.shields.io/badge/JavaScript-4e1c80?style=for-the-badge&logo=javascript"></Badge>
          <Badge src="https://img.shields.io/badge/ReactJS-4e1c80?style=for-the-badge&logo=react"></Badge>
          <Badge src="https://img.shields.io/badge/NodeJS-4e1c80?style=for-the-badge&logo=node.js"></Badge>
          <Badge src="https://img.shields.io/badge/PHP-4e1c80?style=for-the-badge&logo=php"></Badge>
          <Badge src="https://img.shields.io/badge/git-4e1c80?style=for-the-badge&logo=git"></Badge>
          <Badge src="https://img.shields.io/badge/MySQL-4e1c80?style=for-the-badge&logo=mysql"></Badge>
          <Badge src="https://img.shields.io/badge/MongoDB-4e1c80?style=for-the-badge&logo=mongodb"></Badge>
          <Badge src="https://img.shields.io/badge/PostgreSQL-4e1c80?style=for-the-badge&logo=PostgreSQL"></Badge>
          <Badge src="https://img.shields.io/badge/CSS-4e1c80?style=for-the-badge&logo=CSS3"></Badge>
          <Badge src="https://img.shields.io/badge/Styled_Components-4e1c80?style=for-the-badge&logo=styled-components"></Badge>
          <Badge src="https://img.shields.io/badge/Bootstrap-4e1c80?style=for-the-badge&logo=Bootstrap"></Badge>
          <Badge src="https://img.shields.io/badge/Bash-4e1c80.svg?style=for-the-badge&logo=image%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw%2FeHBhY2tldCBiZWdpbj0i77u%2FIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2BIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3MDg2QTAyQUZCMzExRTVBMkQxRDMzMkJDMUQ4RDk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3MDg2QTAzQUZCMzExRTVBMkQxRDMzMkJDMUQ4RDk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTcwODZBMDBBRkIzMTFFNUEyRDFEMzMyQkMxRDhEOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTcwODZBMDFBRkIzMTFFNUEyRDFEMzMyQkMxRDhEOTciLz4gPC9yZGY6RGVzY3JpcHRpb24%2BIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2BIDw%2FeHBhY2tldCBlbmQ9InIiPz6lm45hAAADkklEQVR42qyVa0yTVxzGn7d9Wy03MS2ii8s%2BeokYNQSVhCzOjXZOFNF4jx%2BMRmPUMEUEqVG36jo2thizLSQSMd4N8ZoQ8RKjJtooaCpK6ZoCtRXKpRempbTv5ey83bhkAUphz8fznvP8znn%2B%2F3NeEEJgNBoRRSmz0ub%2FfuxEacBg%2FDmYtiCjgo5NG2mBXq%2BH5I1ogMRk9Zbd%2BQU2e1ML6VPLOyf5tvBQ8yT1lG10imxsABm7SLs898GTpyYynEzP60hO3trHDKvMigUwdeaceacqzp7nOI4n0SSIIjl36ao4Z356OV07fSQAk6xJ3XGg%2BLCr1d1OYlVHp4eUHPnerU79ZA%2F1kuv1JQMAg%2BE4O2P23EumF3VkvHprsZKMzKwbRUXFEyTvSIEmTVbrysp%2BWr8wfQHGK6WChVa3bKUmdWou%2BjpArdGkzZ41c1zG%2Fu5uGH4swzd561F%2BuhIT4%2BLnSuPsv9%2BJKIpjNr9dXYOyk7%2FBZrcjIT4eCnoKgedJP4BEqhG77E3NKP31FO7cfQA5K0dSYuLgz2TwCWJSOBzG6crzKK%2BohNfni%2Bx6OMUMMNe%2Fgf7ocbw0v0acKg6J8Ql0q%2BT%2FAXR5PNi5dz9c71upuQqCKFAD%2BYhrZLEAmpodaHO3Qy6TI3NhBpbrshGtOWKOSMYwYGQM8nJzoFJNxP2HjyIQho4PewK6hBktoDcUwtIln4PjOWzflQ%2Be5yl0yCCYgYikTclGlxadio%2BBQCSiW1UXoVGrKYwH4RgMrjU1HAB4vR6LzWYfFUCKxfS8Ftk5qxHoCUQAUkRJaSEokkV6Y%2F%2BJUOC4hn6A39NVXVBYeNP8piH6HeA4fPbpdBQV5KOx0QaL1YppX3Jgk0TwH2Vg6S3u%2BdB91%2B%2FpuNYPYFl5uP5V7ZqvsrX7jxqMXR6ff3gCQSTzFI0a1TX3wIs8ul%2Bq4HuWAAiM39vhOuR1O1fQ2gT%2F26Z8Z5vrl2OHi9OXZn995nLV9aFfS6UC9JeJPfuK0NBohWpCHMSAAsFe74WWP%2BvT25wtP9Bpob6uGqqyDnOtaeumjRu%2ByFu36VntK%2FPA5umTJeUtPWZSU9BCgud661odVp3DZtkc7AnYR33RRC708PrVi1larW7XwZIjLnd7R6SgSqWSNjU1B3F72pz5TZbXmX5vV81Yb7Lg7XT%2FUXriu8XLVqw6c6XqWnBKiiYU%2BMt3wWF7u7i91XlSEITwSAZ%2FCzAAHsJVbwXYFFEAAAAASUVORK5CYII%3D"></Badge>
          <Badge src="https://img.shields.io/badge/Linux-4e1c80.svg?style=for-the-badge&logo=linux"></Badge>
          <Badge src="https://img.shields.io/badge/Figma-4e1c80.svg?style=for-the-badge&logo=figma"></Badge>
          <Badge src="https://img.shields.io/badge/Blender-4e1c80.svg?style=for-the-badge&logo=blender"></Badge>
          <Badge src="https://img.shields.io/badge/Photoshop-4e1c80.svg?style=for-the-badge&logo=adobephotoshop"></Badge>
          <Badge src="https://img.shields.io/badge/Google Cloud-4e1c80.svg?style=for-the-badge&logo=google-cloud"></Badge>
        </Badges>
      </Wrapper>
    </Container>
  );
}
