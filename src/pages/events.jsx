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
      end: new Date(2022, 10, 30),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2022, 10, 7),
      end: new Date(2022, 10, 10),
    },
  
    {
      id: 2,
      title: 'DTS STARTS',
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

  return (
    <header className="App-header">
    <div className='calendar-holder'>
      <DnDCalendar
        localizer={myLocalizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        draggableAccessor={(event) => true}
      />
  </div>
  </header>
)
}

export default Events