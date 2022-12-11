import React from "react";
// import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import heyday from "../heyday.png";
import "./Onboarding.css";

const Onboarding = (props) => {
  const videoInfo = [
    {
      title: "Step 1: What To Expect",
      url: "L93hyPiltLA",
      button1: "Take Me To The Next Step (2/4)",
      button2: "Click Here To Go To The Next Step In The Onboarding",
      additionalInfo: null,
    },
    {
      title: "Step 2: Contract & Invoice Payment",
      url: "placeholder",
      button1: "Take Me To The Next Step (3/4)",
      button2: "Click Here To Go To The Next Step In The Onboarding",
      additionalInfo: null,
    },
    {
      title: "Step 3: Domain Access",
      url: "placeholder",
      button1: "Take Me To The Last Step (4/4)",
      button2: "Click Here To Go To The Last Step In The Onboarding",
      additionalInfo: {
        url: "https://www.godaddy.com/help/invite-a-delegate-to-access-my-godaddy-account-12376",
        words: "Link to GoDaddy delegate access instructions",
        words2:
          "If you used a different domain service and need help sharing access, feel free to let us know.",
      },
    },
    {
      title: "Step 4: Asset Access",
      url: "placeholder",
      button1: "Take Me Back To The First Step (1/4)",
      button2: "Click Here To Go To The First Step In The Onboarding",
      additionalInfo: null,
    },
  ];
  const params = useParams();

  const id = parseInt(params.id);

  console.log(id);

  let directory = "/onboarding/1";
  if (id === 4) {
    directory = "/onboarding/1";
  } else {
    directory = `/onboarding/${id + 1}`;
  }

  console.log(directory);

  return (
    <div className="onboardingdiv">
      <Link to="/home">
        <img className="logo logo2" src={heyday} alt="logo" />
      </Link>

      <div className="info-onboarding">
        <h1 className="Info onboardinginfo">{videoInfo[id - 1].title}</h1>
        <YouTube videoId={videoInfo[id - 1].url} />
        {videoInfo[id - 1].additionalInfo && (
          <div className="extra-div">
            <a
              className="Info onboarding-link"
              href={videoInfo[id - 1].additionalInfo.url}
            >
              {videoInfo[id - 1].additionalInfo.words}
            </a>
            <p className="onboarding-words">
              {videoInfo[id - 1].additionalInfo.words2}
            </p>
          </div>
        )}
        <Link style={{ textDecoration: "none" }} to={directory}>
          <div className="bookcontainer">
            <button className="bookButton onboardingButton">
              <p className="bookcall">{videoInfo[id - 1].button1}</p>
              <p className="clickhere click2">{videoInfo[id - 1].button2}</p>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
