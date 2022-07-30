import React, { useCallback, useEffect, useState } from "react";
import { ProjectCards } from "../components/Projects/ProjectCards";
import "../styles/projects.scss";
import { Repository } from "../types/repository";

const fetchRepos = (
  projectSetter: React.Dispatch<React.SetStateAction<Repository[]>>,
  fetchingSetter: React.Dispatch<React.SetStateAction<boolean>>,
  errorSetter: React.Dispatch<React.SetStateAction<string>>,
  projects: Array<Repository>,
  page: number
) => {
  fetchingSetter(true);
  fetch(
    "https://api.github.com/users/floatkasemtan/repos?per_page=12&page=" + page
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Github API error or limit reached");
    })
    .then((data) => {
      console.log(data);

      fetchingSetter(false);
      console.log([...projects, ...data]);

      projectSetter([...projects, ...data]);
    })
    .catch((err) => {
      errorSetter(err.message);
      console.log(err);
    });
};

const Projects: React.FC = () => {
  const [page, setPage] = useState(0);
  const [projectsData, setProjectsData] = useState<Array<Repository>>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRepos(setProjectsData, setIsFetching, setError, projectsData, page);
  }, []);

  useEffect(() => {
    if (!isFetching) {
      applyIntersectionObserver();
    }
  }, [isFetching]);

  const applyIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    const lastProjectObsever = new IntersectionObserver((entries) => {
      const lastElement = entries[0];
      if (lastElement.isIntersecting) {
        setPage(page + 1);
        fetchRepos(
          setProjectsData,
          setIsFetching,
          setError,
          projectsData,
          page
        );
        lastProjectObsever.unobserve(lastElement.target);
      }
    });

    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      observer.observe(project);
    });

    lastProjectObsever.observe(document.querySelector(".project:last-child")!);
  }, [page]);
  console.log(isFetching);

  return (
    <div className="min-h-screen">
      <div className="flex-center font-header topic">My Projects</div>
      {!isFetching && error === "" && ProjectCards(projectsData)}
      {error !== "" && <div>{error}</div>}
    </div>
  );
};

export default Projects;
