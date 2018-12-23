import React from 'react';
import {Date,Day} from './DateField';
import moment from 'moment';
import './Calendar.css';

const DAYS = ['Monday','Thursday','Wednesday','Thursday','Friday','Saturday','Sunday'];

let dateCalculatar = {

}

class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: moment()
    }
  }

  getDate = () => {
    return this.state.date.format('M')
  }

  getDay = () => {
    return this.state.date.format('dddd')
  }

  getMonth = () => {
    return this.state.date.format('D')
  }

  getYear = () => {
    return this.state.date.format("YYYY")
  }

	createCalender = () => {
		let calendar = [];
    for (let i = 0; i < 7; i++ ) {
      //Adding days to Calendar
      calendar.push(<Day key={`day-${i}`} day={DAYS[i]} />);
    }

		for (let i = 0; i < 6*7; i++ ) {
      //Adding dates to Calendar
      calendar.push(<Date key={`date-${i}`} date={1} />);
		}
		return calendar;
	}

  render() {
    console.log(this.getDate(),this.getDay(),this.getMonth(),this.getYear());
    return (
    	<div>
      	<p> Hello Calendar</p>
      	<div className="calendar">
	      	{this.createCalender()}
	      </div>
      </div>
    );
  }
}





export default Calendar;
