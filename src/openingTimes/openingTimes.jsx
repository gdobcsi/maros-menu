import "./openingTimes.css";

import ClockIcon from "../header/icons/clock";

const OpeningTimes = () => {
  return (
    <>
      <h2 className="opening-header">Nyári Nyitvatartás:</h2>
      <div className="opening-time">
        {/* Test */}
        {/* <div className="opening-time"> */}
        <div className="opening-time-box">{/* <ClockIcon /> */}</div>
        <div className="opening-text">
          <div className="day-group">
            <div className="day">Péntek:</div>
            <div className="bottom-space">
              <i>12:00 - 20:00</i>
            </div>
          </div>
          <div className="day-group">
            <div className="day">Szombat:</div>
            <div className="bottom-space">
              <i>12:00 - 20:00</i>
            </div>
          </div>
          <div className="day-group">
            <div className="day">Vasárnap:</div>
            <div className="bottom-space">
              <i>12:00 - 19:00</i>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default OpeningTimes;
