import { useEffect, useState } from "react";

import "./StickyUpButton.css";
import StickyUpButtonIcon from "./StickyUpButtonIcon";

const StickyUpButton = ({ appRef, contentRef }) => {
  const [rightOffset, setRightOffset] = useState(8);

  useEffect(() => {
    const updatePosition = () => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();

      setRightOffset(window.innerWidth - rect.right + 8);
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [contentRef]);

  const onClickHandler = () => {
    appRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      className="sticky-up-button"
      style={{ right: `${rightOffset}px` }}
      onClick={onClickHandler}
    >
      <StickyUpButtonIcon />
    </button>
  );
};

export default StickyUpButton;
