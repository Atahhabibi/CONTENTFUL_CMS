import "./fetchProjects";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { projects, loading } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {projects.map((item) => {
          return (
            <a href={item.url} key={item.id} target="_blank" rel="noreferrer" className="project">
              <img src={item.imageUrl} alt={item.title} className="img" />
              <h5>{item.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
