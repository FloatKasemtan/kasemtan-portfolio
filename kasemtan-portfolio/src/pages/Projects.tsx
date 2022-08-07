import React, { useCallback, useEffect, useState } from "react";
import { ProjectCards } from "../components/Projects/ProjectCards";
import "../styles/projects.scss";
import { Repository } from "../types/repository";

const loadingText = ["L", "O", "A", "D", "I", "N", "G", ".", ".", "."];

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
      if (data.length != 12) {
        limitSetter(true);
      }
      projectSetter([...projects, ...data]);
      pageSetter(page + 1);
      fetchingSetter(false);
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
    <div className="min-h-screen relative">
      {/* {isFetching && (
        <div className="h-screen w-screen fixed  flex justify-center items-center">
          <div className="fixed h-screen w-screen opacity-20 bg-black" />
          <div className="flex">
            {loadingText.map((char, i) => (
              <div
                className="animate-bounce mx-1"
                style={{
                  animationDelay: `${0.1 * i}s`,
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "rgb(101, 127, 222)",
                }}
              >
                {char}
              </div>
            ))}
          </div>
        </div>
      )} */}
      <div className="flex-center font-header topic">My Projects</div>
      {!isFetching && error === "" && ProjectCards(projectsData)}
      {isFetching && (
        <div className="flex m-16 justify-center">
          {loadingText.map((char, i) => (
            <div
              className="animate-bounce mx-1"
              style={{
                animationDelay: `${0.1 * i}s`,
                fontSize: "2rem",
                fontWeight: "bold",
                color: "rgb(101, 127, 222)",
              }}
            >
              {char}
            </div>
          ))}
        </div>
      )}
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
          lastProjectObsever.unobserve(lastElement.target);
          fetchRepos(
            setProjectsData,
            setIsFetching,
            setPage,
            setHasNoMore,
            setError,
            projectsData,
            page
          );
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
