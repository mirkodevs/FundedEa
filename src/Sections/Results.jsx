import ResultImage from "../assets/resultImage.jpg";
export default function Results() {
  return (
    <>
      <section id="results">
        <section className="main-section">
          <section>
            <h2>CLIENT RESULTS</h2>
            <button
              className="action-btn"
              style={{ maxWidth: "1000px", margin: "15px auto" }}
            >
              Result channel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
                />
              </svg>
            </button>

            <section>
              <img
                src={ResultImage}
                width={"100%"}
                height={"auto"}
                style={{ maxWidth: "1000px", margin: "15px auto" }}
              ></img>
            </section>
          </section>
        </section>
      </section>
      <section id="results-stat">
        <article className="main-section">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 256 256"
            >
              <path
                fill="#65a30d"
                d="M100 52H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28a12 12 0 0 0 0 24a52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80H44V76h52Zm120-80h-60a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28a12 12 0 0 0 0 24a52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80h-52V76h52Z"
              />
            </svg>
            <h2>90% of traders fail the challenge</h2>
          </div>
          <div>
            <p>
              According to FTMO, only 10% of people who try their challenges
              actually pass them. We know how hard it is to pass prop firm
              challenges. The odds are not in your favor and the rules make it
              very hard for most traders to make any progress. That’s why we
              specifically designed an automated trading system (EA) to pass
              your challenge so you can relax and watch it do its job. Once
              purchased you can use the trading bot for as many challenges as
              you wish and you can even let it trade on your funded account for
              passive income!
            </p>
          </div>
        </article>
      </section>
      <section id="results-clients">
        <article className="main-section">
          <section>
            <div>
              <h5>500+</h5>
              <p>Clients</p>
            </div>
            <div>
              <h5>1,000+</h5>
              <p>Challenges Passed</p>
            </div>
          </section>
          <section>
         <p>


         Are you feeling discouraged by a previous prop firm challenge failure or intimidated by the high failure rate? Stress no more! We’re here to provide you with access to our cutting-edge automated trading system that will effortlessly pass your prop firm challenge – no need to lift a finger!

With an outstanding 96% success rate, we have already supported more than 500 traders in obtaining a fully funded account, propelling them towards the path of financial freedom!


         </p>  
         <button className="action-btn-sec">

            PASS MY CHALLENGE!
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path fill="#ffffff" d="M12 17q.825 0 1.413-.587T14 15q0-.825-.587-1.412T12 13q-.825 0-1.412.588T10 15q0 .825.588 1.413T12 17m-6 5q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h7V6q0-2.075 1.463-3.537T18 1q2.075 0 3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3q-1.25 0-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22z"/>
</svg>
         </button> 
          </section>
        </article>
      </section>
    </>
  );
}
