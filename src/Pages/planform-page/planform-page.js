import { useState } from "react";
import NextButton from "../../components/button/next-button/next-btn";
import Footer from "../../components/footer/footer";
import BasicHeader from "../../components/header/basicHeader/basic-header";
import PlanLock from "../../components/icons/plan-lock";
import Tick from "../../components/icons/tick";
import PlanFormTableRow from "../../components/planform-table/planform-table-row/planform_table-row";
import StepsText from "../../components/step-text/stepsText";
import TickList from "../../components/tick-list/tick-list";
import "./_planform-page.scss";

function PlanFormPage() {
  const list = [
    "Watch all you want.",
    "Recommendations just for you.",
    "Change or cancel your plan anytime.",
  ];

  const [basic, standard, premium, selected] = [
    "basic",
    "standard",
    "premium",
    "selected",
  ];
  const tick_fill = "rgba(51, 51, 51, 0.7)";

  const [plan, setPlan] = useState("");

  const setPlanHandler = function (p) {
    // console.log(p);
    setPlan(p);
  };

  return (
    <>
      <BasicHeader
        btn_txt={"sign in"}
        btn_modifiers={"btn--transparent"}
        modifiers="basic-header--white"
      />
      <div className="planform-page">
        <div className="planform-page__pitch">
          <StepsText current={1} max={3} />
          <h1 className="planform-page__title">
            Choose the plan that's right for you
          </h1>
          <TickList listItems={list} />
        </div>

        <div className="planform">
          <table className="planform__table">
            <thead>
              <tr className="planform__row">
                <th className="planform__feature-cell"></th>
                <th className="planform__head-value-cell">
                  <button
                    onClick={setPlanHandler.bind(undefined, basic)}
                    className={`planform__plan-btn ${
                      plan === basic ? selected : ""
                    }`}
                  >
                    Basic with ads
                  </button>
                </th>
                <th className="planform__head-value-cell">
                  <button
                    onClick={setPlanHandler.bind(undefined, standard)}
                    className={`planform__plan-btn ${
                      plan === standard ? selected : ""
                    }`}
                  >
                    Standard
                  </button>
                </th>
                <th className="planform__head-value-cell">
                  <button
                    onClick={setPlanHandler.bind(undefined, premium)}
                    className={`planform__plan-btn ${
                      plan === premium ? selected : ""
                    }`}
                  >
                    Premium
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <PlanFormTableRow
                feature="Monthly price"
                basic="$6.99"
                standard="$15.49"
                premium="$19.99"
                plan={plan}
                onSelect={setPlanHandler}
              />
              <PlanFormTableRow
                feature="Video quality"
                basic="Good"
                standard="Better"
                premium="Best"
                plan={plan}
                onSelect={setPlanHandler}
              />
              <PlanFormTableRow
                feature="Resolution"
                basic="720p"
                standard="1080p"
                premium="4K+HDR"
                plan={plan}
                onSelect={setPlanHandler}
              />
              <PlanFormTableRow
                feature="Watch on your TV, computer, mobile phone and tablet"
                basic={<Tick fill={tick_fill} />}
                standard={<Tick fill={tick_fill} />}
                premium={<Tick fill={tick_fill} />}
                plan={plan}
                onSelect={setPlanHandler}
              />
              <PlanFormTableRow
                feature="Downloads"
                basic={"-"}
                standard={<Tick fill={tick_fill} />}
                premium={<Tick fill={tick_fill} />}
                plan={plan}
                onSelect={setPlanHandler}
              />
            </tbody>
          </table>

          <div className="planform__info">
            <div className="planform__restriction">
              <span>
                <PlanLock />
              </span>

              <span>
                Basic with ads has a limited number of movies and TV shows
                unavailable due to licensing restrictions. Some location and
                device restrictions also apply.{" "}
              </span>
            </div>
            <div className="planform__disclaimer">
              Want more options? <a href="http://">See all plans</a>
            </div>
            <div>
              If you select Basic with ads, you will be required to provide your
              date of birth for ads personalization and other purposes
              consistent with the Netflix{" "}
              <a href="http://">Privacy Statement.</a>
            </div>
            <div>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our{" "}
              <a href="http://">Terms of Use</a>
            </div>
            <div>
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard
              and 1 with Basic or Basic with ads.
            </div>
          </div>

          <div className="planform__btn">
            <NextButton />
          </div>
        </div>
      </div>
      <Footer isMinimized={true} modifiers="footer--white" />
    </>
  );
}

export default PlanFormPage;
