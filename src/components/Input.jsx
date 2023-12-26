export default function Input({ inputName, inputImg }) {
  return (
    <div className="oneInput">
      <h4>INPUT YOUR OWN</h4>
      <h3>{inputName}</h3>
      <img src={inputImg}></img>
    </div>
  );
}
