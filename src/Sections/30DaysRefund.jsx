import MainSection from "../components/MainSection";
import Input from "../components/Input";
import SettingIMG from "../assets/RiskSettings.png";
import DaysIMG from "../assets/TradingDays.png";
import HoursIMG from "../assets/TradingHours.png";

export default function Refund() {
  return (
    <>
      <MainSection id="refund">
        <Input inputName={"RISK SETTINGS"} inputImg={SettingIMG} />
        <Input inputName={"TRADING DAYS"} inputImg={DaysIMG} />
        <Input inputName={"TRADING HOURS"} inputImg={HoursIMG} />
      </MainSection>
      <MainSection id="guarantee">
        <article>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <path
              fill="#65a30d"
              d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
            />
          </svg>
          <h2>30 Day Risk Guarantee</h2>
        </article>
        <article>
          Here at FundedEA we want everyone to win. We are so confident in our
          EA that if you have been using the EA for 30 days and are not
          satisfied with the results and systems we have in place, we will pass
          your challenge ourselves for free with no extra cost to you! (This is
          something other providers charge 1000s for)
        </article>
      </MainSection>
    </>
  );
}
