import React, { useCallback, useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { ProjectCards } from "../components/Projects/ProjectCards";
import "../styles/projects.scss";
import { Repository } from "../types/repository";

const fetchRepos = async (
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  projectsData: Repository[],
  setProjectsData: React.Dispatch<React.SetStateAction<Repository[]>>,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
  hasNoMore: boolean,
  setHasNoMore: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    if (!hasNoMore) {
      setIsFetching(true);

      const res = await fetch(
        "https://api.github.com/users/floatkasemtan/repos?per_page=12&page=" +
          page
      );
      let data = await res.json();
      if (data.length !== 12) {
        setHasNoMore(true);
      }
      setProjectsData(projectsData.concat(data));
      setPage(page + 1);
      setIsFetching(false);
      return data;
    }
    return null;
  } catch (error) {
    setError("Github API error or limit reached");
    throw new Error("Github API error or limit reached");
  }
};
let lastProjectObsever: IntersectionObserver | null;
const Projects: React.FC = () => {
  const [page, setPage] = useState(1);
  const [projectsData, setProjectsData] = useState<Array<Repository>>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [hasNoMore, setHasNoMore] = useState<boolean>(false);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchRepos(
      page,
      setPage,
      projectsData,
      setProjectsData,
      setIsFetching,
      hasNoMore,
      setHasNoMore,
      setError
    ).then(() => {
      setIsPageLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (hasNoMore) {
      lastProjectObsever?.unobserve(
        document.querySelector(".project:last-child")!
      );
      lastProjectObsever = null;
    }
  }, [hasNoMore]);

  useEffect(() => {
    if (isPageLoaded) {
      lastProjectObsever = new IntersectionObserver(
        (entries) => {
          const lastElement = entries[0];
          if (lastElement.isIntersecting) {
            lastProjectObsever?.unobserve(lastElement.target);
            fetchRepos(
              page,
              setPage,
              projectsData,
              setProjectsData,
              setIsFetching,
              hasNoMore,
              setHasNoMore,
              setError
            );
            lastProjectObsever?.observe(
              document.querySelector(".project:last-child")!
            );
          }
        },
        { rootMargin: "200px" }
      );
      lastProjectObsever.observe(
        document.querySelector(".project:last-child")!
      );
    }
  }, [isPageLoaded]);

  return (
    <div className="min-h-screen relative lg:px-24">
      <div className="flex-center font-header topic">My Projects</div>
      {error === "" && ProjectCards(projectsData)}
      {isFetching && Loading()}
      {error !== "" && <div>{error}</div>}
    </div>
  );
};

export default Projects;
