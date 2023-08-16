import {format} from 'date-fns'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const newContentList = []
class Appointments extends Component {
  state = {title: '', date: '', contentList: newContentList}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      starred: false,
    }

    this.setState(prevState => ({
      contentList: [...prevState.contentList, ...newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      contentList: prevState.contentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, starred: !eachItem.starred}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {contentList} = this.state
    return (
      <div className="container">
        <div>
          <h1>Add Appointment</h1>
          <form>
            <label htmlFor="titleId">Title:</label>
            <br />
            <input type="text" id="titleId" onChange={this.onChangeTitle} />
            <br />
            <br />
            <label htmlFor="dateId">Date:</label>
            <br />
            <input type="date" id="dateId" onChange={this.onChangeDate} />
            <br />
            <button type="submit" onClick={this.addAppointment}>
              Add
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
        </div>
        <hr />
        <h1>Appointments</h1>
        <ul>
          {contentList.map(eachItem => (
            <AppointmentItem
              itemVal={eachItem}
              key={eachItem.id}
              toggleIsFavorite={this.toggleIsFavorite}
            />
          ))}
        </ul>

        <button type="button">Starred</button>
      </div>
    )
  }
}
export default Appointments
