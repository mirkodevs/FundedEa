import MainSection from "../components/MainSection";
import IMG from "../assets/GetFunded.png";
export default function GetStarted() {
  return (
    <MainSection id="get-started">
      <article>
        <h2>SEND THE WORD EA TO GET STARTED</h2>
        <p>
          Tired of failing prop firm challenges? Let our FundedEA trading bot do
          it for you!
        </p>
        <p>Lifetime License – 100% Automated</p>
        <button className="action-btn">
          {" "}
          SEND US EA ON TELEGRAM{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
          </svg>{" "}
        </button>
        <h3>LIMITED LICENSES LEFT... </h3>
        <p></p>
      </article>
      <aside>
        <img src={IMG} width={312}></img>
      </aside>
    </MainSection>
  );
}
