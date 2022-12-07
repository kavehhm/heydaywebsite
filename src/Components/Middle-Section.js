import "./Middle-Section.css";

const Middle = () => {
  return (
    <div className="background">
      <div className="top-info">
        <p className="revgen">TOTAL REVENUE GENERATED</p>
        <p className="topnum">$70,000</p>
      </div>
      <div className="card-div">
        <div className="card1">
          <p className="topnum">3</p>
          <p className="bottom">CLIENTS HELPED</p>
        </div>
        <div className="card1">
          <p className="topnum">7k</p>
          <p className="bottom">TOTAL AD SPEND</p>
        </div>
        <div className="card1">
          <p className="topnum">2</p>
          <p className="bottom">SERVICES OFFERED</p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
