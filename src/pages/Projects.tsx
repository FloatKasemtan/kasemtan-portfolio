import React, { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import Card from "../components/Projects/Card";
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
      setProjectsData([...projectsData, ...data]);
      setPage(page + 1);
      setIsFetching(false);
    }
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
    document.title = "FloatyKT · Projects";
  }, []);

  useEffect(() => {
    if (hasNoMore) {
      document.querySelectorAll(".project")!.forEach((project) => {
        lastProjectObsever?.unobserve(project);
      });
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
            ).then(() => {
              console.log(projectsData);

              lastProjectObsever?.observe(
                document.querySelector(".project:last-child")!
              );
            });
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
    <div className="relative min-h-screen lg:px-24">
      <div className="text-xl flex-center topic">My Projects</div>
      {error === "" && (
        <div className="p-10 gap-y-4 columns-1 md:columns-2 lg:columns-3 max-w-[1100px] mx-auto">
          {projectsData.map((project, i) => (
            <Card project={project} key={i} />
          ))}
        </div>
      )}
      {isFetching && error == "" && Loading()}
      {error !== "" && <div className="mt-20 flex-center">{error}</div>}
    </div>
  );
};

export default Projects;
