import { useEffect, useState } from "react";

import "./StickyUpButton.css";
import StickyUpButtonIcon from "./StickyUpButtonIcon";

const StickyUpButton = ({ appRef, contentRef, footerRef }) => {
  const [rightOffset, setRightOffset] = useState(8);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();

      const offset = window.innerWidth < 576 ? 3 : 8;
      setRightOffset(window.innerWidth - rect.right + offset);
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [contentRef]);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    });

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, [footerRef]);

  const onClickHandler = () => {
    appRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      className={`sticky-up-button ${isFooterVisible ? "is-footer-visible" : ""}`}
      style={{ right: `${rightOffset}px` }}
      onClick={onClickHandler}
      aria-label="Scroll to top"
    >
      <StickyUpButtonIcon />
    </button>
  );
};

export default StickyUpButton;
