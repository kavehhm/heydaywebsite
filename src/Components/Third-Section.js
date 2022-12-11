import instagram from "../ig-2.png";
import "./Third-Section.css";

const Third = () => {
  return (
    <div className="parting">
      <div className="heading">
        <h1 className="approach">OUR APPROACH</h1>
        <h1 className="advertising">"A website that you will love"</h1>
      </div>
      <div className="information">
        <div className="paragraphs">
          <p className="paragraph">What we do is very simple:</p>
          <p className="paragraph">
            We first take any inspiration and ideas from you then design a
            sleek user interface.
          </p>
          <p className="paragraph">
            After you are satisfied with the UI, we will code your website using
            modern web frameworks.
          </p>
          <p className="paragraph">
            We then handle hosting and connecting your website to the domain of
            your choice and giving you access to everything you may need.
          </p>

          <p className="paragraph">
            Once that's done, we go back and add the right keywords and tweaks
            to get your brand new website ranked highly on search engines and
            get you new eyeballs.
          </p>
        </div>
        <img className="instagram" src={instagram} alt="Instagram Marketing" />
      </div>
    </div>
  );
};

export default Third;
