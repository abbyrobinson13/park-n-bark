import { useState, useEffect} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import { createEvent, deleteEvent, listEvents, updateEvent } from '../server-functions'

const DnDCalendar = withDragAndDrop(Calendar)

const Events = () => {
  const myLocalizer = momentLocalizer(moment)
  const dayLayoutAlgorithm = 'no-overlap'
  const [myEvents, setMyEvents] = useState([])

  const getEvents = async() => {
    const events = await listEvents()
    const newEvents = events.map(e => {
      const newStart = new Date(e.start)
      const newEnd = new Date(e.end)
      return({_id: e._id, title: e.title, start: newStart, end: newEnd })
    })
    setMyEvents(newEvents)
  }
  
  useEffect(() => {
    getEvents()
  }, [])

  const handleSelectSlot = async({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        await createEvent({ start, end, title })
        await getEvents()
      }
    }

  const handleSelectEvent = async(event) => {
      let selectedEvent = event.title
      let r = window.confirm(`${selectedEvent} \nWould you like to delete this event?`)
    if(r !== false) {
        await deleteEvent(event)
        await getEvents()
      }
  }

  const moveEvent = async ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event
      const id = event._id
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }
      await updateEvent({start, end, id})
      await getEvents()
    }

  const resizeEvent = async({ start, end, event }) => {
      const id = event._id
      await updateEvent({start, end, id})
      await getEvents()
    }

  return (
    <header className="App-header">
    <div className='calendar-holder'>
      <DnDCalendar
        localizer={myLocalizer}
        dayLayoutAlgorithm={dayLayoutAlgorithm}
        defaultDate={new Date()}
        defaultView="month"
        events={myEvents}
        draggableAccessor={(event) => true}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        popup
        resizable
      />
  </div>
  </header>
)
}

export default Events