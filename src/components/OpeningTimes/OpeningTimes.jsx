import "./OpeningTimes.css";

const OpeningTimes = ({ openingTimes, titleAs = "h2" }) => {
  const Title = titleAs;

  return (
    <div className="opening-times">
      <Title className="opening-times-title">{openingTimes.title}</Title>

      <div className="opening-times-days">
        {openingTimes.days.map((day) => (
          <div key={day.day} className="opening-times-day">
            <span>{day.day}:</span>
            <span>{day.isClosed ? "Zárva" : `${day.from} – ${day.to}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningTimes;
