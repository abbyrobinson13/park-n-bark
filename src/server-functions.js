const dogFact = async () => {
  let serverReq = await fetch("/api/facts");
  let fact = await serverReq.json();
  console.log(fact);
  return fact;
};

const formSubmit = (e) => {
  e.preventDefault()
  console.log(e.target)
}

const listEvents = async() => {
  let serverReq = await fetch("/api/event")
  let events = await serverReq.json()
  console.log('events:', events)
  return events
}

const createEvent = async(e) => {
  let serverReq = await fetch("/api/event", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(e)
  })
  const newEvent = await serverReq.json()
  console.log(newEvent)
}

const updateEvent = async(e) => {
  let serverReq = await fetch("/api/event", {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(e)
  })
  const updatedEvent = await serverReq.json()
  console.log(updatedEvent)
}

const deleteEvent = async(e) => {
  let serverReq = await fetch("/api/event/", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(e)
  })
  const deletedEvent = await serverReq.json()
  console.log(deletedEvent)
}

const addFav = async(e, i) => {
  let serverReq = await fetch("/api/favorite", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      uid: i,
      park: e
    })
  })
  const newFav = await serverReq.json()
  console.log(newFav)
}

const deleteFav = async(p) => {
  let serverReq = await fetch("/api/favorite", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(p)
  })
  const deleted = await serverReq.json()
  console.log(deleted)
}

  export { dogFact, formSubmit, listEvents, createEvent, updateEvent, deleteEvent, addFav, deleteFav };
