import styled from 'styled-components'
import leMelezePic1 from './assets/LeMelezePic1.png'
import leMelezePic2 from './assets/LeMelezePic2.png'

const ProjectsWrapper = styled.section`
  & h1 {
    align-self: flex-start;
    color: #87f5b4;
    text-decoration: underline;
  }
  & .project_pics {
    flex-direction: column;
    gap: 30px;
    & img {
        width: 50%;
    }
  }
`

function Projects() {
  return (
    <ProjectsWrapper>
      <div className="projects_container">
        <h3 id='projects_title'>Mes Projets</h3>
        <div className="project_div">
          <div className="project_pics">
            <img loading="lazy" src={leMelezePic1} alt="" />
            <img loading="lazy" src={leMelezePic2} alt="" />
          </div>
        </div>
      </div>
    </ProjectsWrapper>
  )
}

export default Projects
