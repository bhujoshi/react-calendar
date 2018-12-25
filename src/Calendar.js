import React from 'react';
import {Date,Day} from './DateField';
import moment from 'moment';
import './Calendar.css';

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentMonthFirstDate: moment().startOf('month')
    }
  }

  getInitDate = () => {
  	let daysIndex = {};
  	for (let i in DAYS) {
  		daysIndex[DAYS[i]] = parseInt(i);
  	}
  	let newDate = moment(this.state.currentMonthFirstDate);
  	return newDate.subtract(daysIndex[this.state.currentMonthFirstDate.format('dddd')], 'days');
  }

  getClassName = (date) => {
  	let className = '';
  	if(date.format('MMMM') === this.state.currentMonthFirstDate.format('MMMM')){
  		className = 'active';
  		if(date.format('YYYY/MM/DD') === moment().format('YYYY/MM/DD')){
  			className = 'current';
  		}
  	}else{
  		className = 'in-active';
  	}
  	return className;
  }

  preMonth = () => {
  	this.setState({currentMonthFirstDate:this.state.currentMonthFirstDate.subtract(1, 'months')});
  }

  nextMonth = () => {
  	this.setState({currentMonthFirstDate:this.state.currentMonthFirstDate.add(1, 'months')});
  }

	createCalender = () => {
		let calendar = [];
    for (let i = 0; i < 7; i++ ) {
      //Adding days to Calendar
      calendar.push(<Day key={`day-${i}`} day={DAYS[i]} />);
    }

    let initDate = this.getInitDate();
		for (let i = 0; i < 6*7; i++ ) {
      //Adding dates to Calendar
      calendar.push(
      	<Date key={`date-${i}`} className={this.getClassName(initDate)}  >
      		<div className="date">
			      {initDate.format('D')}
			    </div>
      	</Date>
      );
      initDate.add(1,"days");
		}
		return calendar;
	}

  render() {
  	console.log(this.state.currentMonthFirstDate);
    return (
    	<div className="calendar">
      	<div>
      		<button onClick={this.preMonth}> {'<'} </button> <button onClick={this.nextMonth}> {'>'} </button>
      		<span> Today </span>
      		{this.state.currentMonthFirstDate.format("MMMM")} {this.state.currentMonthFirstDate.format("YYYY")}
      	</div>
      	<div className="calendar">
	      	{this.createCalender()}
	      </div>
      </div>
    );
  }
}





export default Calendar;
