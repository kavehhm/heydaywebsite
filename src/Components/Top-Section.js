import heyday from "../heyday.png";
import computer from "../computer-blue.png";
import "./Top-Section.css";

const Top = (props) => {
  const buttonHandler = () => {
    props.resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main-body">
      <img className="logo" src={heyday} alt="logo" />
      <div className="section">
        <div className="interactives">
          <p className="header">WHAT WE DO..</p>
          <h1 className="Info">
            We Help Dentists Successfully Set Up What They Need To Take Their
            Company Online
          </h1>
          <img className="computer1" src={computer} alt="computer" />
          <div className="bookcontainer">
            <button onClick={buttonHandler} className="bookButton">
              <p className="bookcall">Book Your Call Now</p>
              <p className="clickhere">Click here to book a call with us</p>
            </button>
          </div>
        </div>
        <img className="computer" src={computer} alt="computer" />
      </div>
    </div>
  );
};

export default Top;
