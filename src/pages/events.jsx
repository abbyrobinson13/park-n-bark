import { useState, useCallback} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'

const DnDCalendar = withDragAndDrop(Calendar)

const Events = () => {
  const myLocalizer = momentLocalizer(moment)

  let events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2022, 10, 1),
      end: new Date(2022, 10, 12),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2022, 10, 7),
      end: new Date(2022, 10, 10),
    },
  
    {
      id: 2,
      title: 'This week gets an event',
      start: new Date(2022, 10, 13, 0, 0, 0),
      end: new Date(2022, 10, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: 'Project 2 Due',
      start: new Date(2022, 11, 2),
      end: new Date(2022, 11, 2)
    }
  ]

  const [myEvents, setMyEvents] = useState(events)

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setMyEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setMyEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, allDay }]
      })
    },
    [setMyEvents]
  )

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
    },
    [setMyEvents]
  )

  return (
    <header className="App-header">
    <div className='calendar-holder'>
      <DnDCalendar
        localizer={myLocalizer}
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