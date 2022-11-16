const dogFact = async() => {
    let serverReq = await fetch('http://localhost:4000/facts')
    let fact = await serverReq.json()
    console.log(fact)
    return fact
}

export { dogFact }