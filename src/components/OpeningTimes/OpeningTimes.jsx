import "./OpeningTimes.css";

import ClockIcon from "./ClockIcon";

const OpeningTimes = ({ openingTimes }) => {
  return (
    <>
      <h2 className="opening-header">{openingTimes.title}</h2>
      <div className="opening-time">
        <div className="opening-time-box">
          <ClockIcon />
        </div>
        <div className="opening-text">
          {openingTimes.days.map((day) => {
            return (
              <div key={day.day}>
                <div className="day">{day.day}:</div>
                <div className="bottom-space">
                  {day.isClosed ? (
                    <i>Zárva</i>
                  ) : (
                    <i>
                      {day.from} - {day.to}
                    </i>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OpeningTimes;
