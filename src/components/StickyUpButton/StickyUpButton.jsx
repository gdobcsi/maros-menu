import "./StickyUpButton.css";
import StickyUpButtonIcon from "./StickyUpButtonIcon";

const StickyUpButton = ({ appRef }) => {
  const onClickHandler = () => {
    appRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button className="sticky-up-button" onClick={onClickHandler}>
      <StickyUpButtonIcon />
    </button>
  );
};

export default StickyUpButton;
