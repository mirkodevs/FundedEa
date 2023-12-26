import { useRef , useEffect,useState} from "react";

export default function CircularProgressBar({ percent, vantage }) {
    const [isVisible, setIsVisible] = useState(false);

  const progressBarRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Rileva quando almeno il 50% della progress bar è visibile
    };

    const observer = new IntersectionObserver(([entry]) => {

      setIsVisible(entry.isIntersecting);
    }, options);

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  
    return (

      
    <section ref = {progressBarRef}>
      <div
      className="progress-bar"
        style={{
          background: `radial-gradient(closest-side, #191919 79%, transparent 80% 100%), conic-gradient(#65B741 ${ isVisible ? percent : "0%"}, #161616 0)`,
          transition: "all 2s ease-out"
        }}
      >
        <progress value="75" min="0" max="100"></progress>
        {percent}
      </div>
      <h4 style={{ marginTop: "30px" }}>{vantage}</h4>
    </section>
  );
}
