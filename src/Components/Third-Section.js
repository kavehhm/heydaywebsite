import instagram from "../ig-2.png";
import "./Third-Section.css";

const Third = () => {
  return (
    <div className="parting">
      <div className="heading">
        <h1 className="approach">OUR APPROACH</h1>
        <h1 className="advertising">"Advertising that works from day 1"</h1>
      </div>
      <div className="information">
        <div className="paragraphs">
          <p className="paragraph">What we do is very simple:</p>
          <p className="paragraph">
            We first study your audience to deeply understand their interests,
            behaviors, motivators and emotional drivers.
          </p>
          <p className="paragraph">
            Based on this data we work on your messaging by coming up with the
            best angles and hooks to use on your advertising campaigns.
          </p>
          <p className="paragraph">
            We then find the best interests and keywords to target on Facebook
            and Google in order to reach your exact target audience.
          </p>

          <p className="paragraph">
            Once that's done, we launch your advertising campaign with said
            assets and deploy our proprietary camapign strategy to ensure you
            get the best result out of every dollar that you invest.
          </p>
        </div>
        <img className="instagram" src={instagram} alt="Instagram Marketing" />
      </div>
    </div>
  );
};

export default Third;
