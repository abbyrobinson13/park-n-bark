const dogFact = async () => {
  let serverReq = await fetch("/facts");
  let fact = await serverReq.json();
  console.log(fact);
  return fact;
};

export { dogFact };
