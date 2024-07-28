import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export const useFunctions = () => {
  const navigate = useNavigate();

  const toOtherPage = (event: MouseEvent<HTMLElement>) => {
    const pages = ["about", "skills", "hobby"];
    const path = event.currentTarget.textContent;

    const currentPath = pages.filter((page) => page === path);

    if (currentPath.length > 0) {
      navigate(`/${currentPath[0]}`);
    } else {
      navigate("/");
    }
  };

  return toOtherPage;
};
