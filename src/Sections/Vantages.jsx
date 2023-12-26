import CircularProgressBar from "../components/CircularProgressBar";

export default function Vantages() {
  const DATAS = [
    {
      vantage: "MAX Drawdown",
      percent: "3.57%",
    },
    {
      vantage: "500+ Clients Funded",
      percent: "15%",
    },
    {
      vantage: "30 Day Risk Free Guarantee",
      percent: "96.2%",
    },
  ];
  return (
    <section id="vantages">
      <section id="vantages-section" className="main-section">
        <section>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" />
              </svg>
            </span>
            <h4>96%+ Challenge Pass Rate</h4>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#65a30d"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2 11.4l-1.564 1.251a.5.5 0 0 0-.041.744l1.239 1.239a2 2 0 0 1 .508.864l.175.613a1.8 1.8 0 0 0 1.017 1.163a8.021 8.021 0 0 0 2.533-1.835l-.234-1.877a2 2 0 0 0-1.09-1.54l-1.47-.736A1 1 0 0 0 14 13.4M12 4a7.987 7.987 0 0 0-6.335 3.114l-.165.221V9.02a3 3 0 0 0 1.945 2.809l.178.06l1.29.395c1.373.42 2.71-.697 2.577-2.096l-.019-.145l-.175-1.049a1 1 0 0 1 .656-1.108l.108-.03l.612-.14a2.667 2.667 0 0 0 1.989-3.263A7.987 7.987 0 0 0 12 4"
                  />
                </g>
              </svg>
            </span>
            <h4>500+ Clients Funded</h4>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.712T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z" />
              </svg>
            </span>
            <h4>30 Day Risk Free Guarantee</h4>
          </div>
        </section>
        <section id="progress-vatages">
          {DATAS.map((data) => {
            return (
             <CircularProgressBar 

key={data.vantage}
percent={data.percent}
vantage={data.vantage}/> 
            );
          })}
        </section>
      </section>
    </section>
  );
}
