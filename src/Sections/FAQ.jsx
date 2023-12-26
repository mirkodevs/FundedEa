import { useState } from "react";
import FaqData from "../FAQData";
import MainSection from "../components/MainSection";
export default function Faq(){
const [visibles,setVisible] = useState([])

function handleClick(clickedIndex){
const newVisibles = [...visibles];

const index = newVisibles.indexOf(clickedIndex);

if (index !== -1) {
  newVisibles.splice(index, 1);
  setVisible(newVisibles)
}else{
newVisibles.push(clickedIndex)
setVisible(newVisibles)

}



}
return(

<MainSection id = "faq">
<h2>
FAQ
</h2>
<button className="action-btn">PASS MY CHALLENGE! 
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
{FaqData.map((one,idx) => {
const isVisible = visibles.indexOf(idx) !== -1 
const dynamicClass = isVisible ? "answer-visible" : "answer-hidden"

return (
<article className={`question-and-answer ${dynamicClass}`} key={one.text}  onClick={() => handleClick(idx)}>

<section className="question">

{one.text}
{
isVisible ? 
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#65a30d" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"/></svg>
:
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#65a30d" d="M17 13H7v-2h10m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"/></svg>
}
</section>


<section className="answer">

{one.answer}

</section>

</article>
)


})


}
</MainSection>

)

}