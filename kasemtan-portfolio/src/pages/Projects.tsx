import React, { useCallback, useEffect, useState } from "react";
import { ProjectCards } from "../components/Projects/ProjectCards";
import "../styles/projects.scss";
import { Repository } from "../types/repository";

const fetchRepos = (
  projectSetter: React.Dispatch<React.SetStateAction<Repository[]>>,
  fetchingSetter: React.Dispatch<React.SetStateAction<boolean>>,
  pageSetter: React.Dispatch<React.SetStateAction<number>>,
  limitSetter: React.Dispatch<React.SetStateAction<boolean>>,
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
        console.log("Fetched page ", page);

        return res.json();
      }
      throw new Error("Github API error or limit reached");
    })
    .then((data) => {
      if (data.length === 0) {
        limitSetter(true);
      }
      fetchingSetter(false);
      projectSetter([...projects, ...data]);
      pageSetter(page + 1);
    })
    .catch((err) => {
      errorSetter(err.message);
    });
};

const Projects: React.FC = () => {
  const [page, setPage] = useState(1);
  const [projectsData, setProjectsData] = useState<Array<Repository>>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [hasNoMore, setHasNoMore] = useState(false);

  useEffect(() => {
    fetchRepos(
      setProjectsData,
      setIsFetching,
      setPage,
      setHasNoMore,
      setError,
      projectsData,
      page
    );
  }, []);

  useEffect(() => {
    if (!isFetching && !hasNoMore) {
      applyIntersectionObserver();
    }
  }, [page]);

  const applyIntersectionObserver = useCallback(
    intersectionObserverHandler(
      setProjectsData,
      setIsFetching,
      setPage,
      setHasNoMore,
      setError,
      projectsData,
      page
    ),
    [page]
  );

  console.log(page);

  return (
    <div className="min-h-screen">
      <div className="flex-center font-header topic">My Projects</div>
      {!isFetching && error === "" && ProjectCards(projectsData)}
      {error !== "" && <div>{error}</div>}
    </div>
  );
};

export default Projects;
function intersectionObserverHandler(
  setProjectsData: React.Dispatch<React.SetStateAction<Repository[]>>,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setHasNoMore: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  projectsData: Repository[],
  page: number
): () => void {
  return () => {
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add("fade-in");
    //       }
    //     });
    //   },
    //   { threshold: 0.5 }
    // );
    const lastProjectObsever = new IntersectionObserver(
      (entries) => {
        const lastElement = entries[0];
        if (lastElement.isIntersecting) {
          fetchRepos(
            setProjectsData,
            setIsFetching,
            setPage,
            setHasNoMore,
            setError,
            projectsData,
            page
          );
          lastProjectObsever.unobserve(lastElement.target);
          lastProjectObsever.observe(
            document.querySelector(".project:last-child")!
          );
        }
      },
      { rootMargin: "200px" }
    );

    // const projects = document.querySelectorAll(".project");
    // projects.forEach((project) => {
    //   observer.observe(project);
    // });
    console.log(document.querySelector(".project:last-child")!);

    lastProjectObsever.observe(document.querySelector(".project:last-child")!);
  };
}
