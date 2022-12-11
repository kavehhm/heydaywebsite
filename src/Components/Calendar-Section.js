import { InlineWidget } from "react-calendly";
import "./Calendar-Section.css";
import Check from "../checkmark.svg";
import { forwardRef } from "react";

const Calendar = forwardRef((props, ref) => {
  // const auth = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjY5NzkyNzY3LCJqdGkiOiJlMGIzOGJiNi0zY2M4LTQ2YmEtYjY1ZC04ZDMwMDNlZDQ5MDYiLCJ1c2VyX3V1aWQiOiIyMGYzODBlMC1kMjNjLTQ3NmItYTFjZi1lMDM2ZWQ2NTY3YzkifQ.a4lAUBax1nPafqfJQGA_QeLbVKRrmH54BUbr5CFTOTrs1XR0Q0QUKmQ9tzsMHzkataBOsfCFm-uboAu-lO7MuQ'
  return (
    <div className="appointment">
      <div className="widget" ref={ref}>
        <InlineWidget
          styles={{
            height: "50rem",
            width: "90%",
          }}
          url="https://calendly.com/kavehmal/15min"
        />
      </div>
      <div className="schedule-info">
        <p className="sched-w-kaveh">SCHEDULE YOUR CALL WITH KAVEH</p>
        <h1 className="free-demo">Free 15-Minute Demo Call</h1>
        <p className="text-block">
          By the end of this Audit call, you will have a clear understanding of
          the next steps you can take for your business to refresh its online
          presence.
        </p>
        <p className="text-block">
          Find a time on Kaveh’s calendar to schedule your call today and we
          look forward to speaking to you soon!
        </p>
        <h1 className="perfect-for">
          <b>THIS AUDIT CALL IS PERFECT FOR:</b>
        </h1>
        <ul>
          <li>
            <img src={Check} alt="Check" />
            <p>
              Businesses looking to convert their current website into a{" "}
              <b>high quality & streamlined funnel format.</b>
            </p>
          </li>
          <li>
            <img src={Check} alt="Check" />
            <p>
              Businesses looking to take their offline business <b>online.</b>
            </p>
          </li>
          <li>
            <img src={Check} alt="Check" />
            <p>
              ​Businesses looking to increase their{" "}
              <b> revenue potential </b> with new design & search engine
              optimization.
            </p>
          </li>
          <li>
            <img src={Check} alt="Check" />
            <p>
              Businesses looking to{" "}
              <b>maximize their online conversion rates & eyeballs reached.</b>
            </p>
          </li>
          <li>
            <img src={Check} alt="Check" />
            <p>
              ​Businesses looking for a reliable agency that can{" "}
              <b>make their company a priority.</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Calendar;
