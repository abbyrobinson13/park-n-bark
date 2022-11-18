const dogFact = async () => {
  let serverReq = await fetch("/facts");
  let fact = await serverReq.json();
  console.log(fact);
  return fact;
};



const formSubmit = (e) => {
  e.preventDefault()
  console.log(e.target)}
export { dogFact, formSubmit };
