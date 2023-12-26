import HeroIMG1 from "../assets/HeroImage1.png"
import HeroIMG2 from "../assets/HeroImage2.png"
export default function Hero() {
  return (
    <section id="hero">
      <section id="hero-section" className="main-section">
        <article>
          <h2>The Prop Firm Trading Bot</h2>
          <p>
            Pass your prop firm challenge with our trading bot for MT4! Works
            with all prop firms, comes with fully customizable risk settings and
            doesn’t use risky strategies.
          </p>
          <div id="rated">
            <h4>Rated</h4>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg>
            

            </div>
            <span>(5/5)</span>
          </div>


          <div>

<button className="action-btn">PASS MY CHALLENGE! <span>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path fill="#ffffff" d="M12 17q.825 0 1.413-.587T14 15q0-.825-.587-1.412T12 13q-.825 0-1.412.588T10 15q0 .825.588 1.413T12 17m-6 5q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h7V6q0-2.075 1.463-3.537T18 1q2.075 0 3.538 1.463T23 6h-2q0-1.25-.875-2.125T18 3q-1.25 0-2.125.875T15 6v2h3q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22z"/>
</svg>
</span>
</button>
<h3>LIMITED LICENSES LEFT...</h3>

          </div>
        </article>
        <aside>
          <section>
            <img src = {HeroIMG1} ></img>
          </section>
          <section>
            <img src = {HeroIMG2}></img>
          </section>
        </aside>
      </section>
    </section>
  );
}
