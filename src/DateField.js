import React from 'react'
const Div = ({attr,children}) => {
  return (
    <div {...attr}>
      {children}
    </div>
  );
}


const Date = ( { date } ) => {
  let attr = {
    className:`date-field`,
    onClick:() => {alert("hello world!")},
  }
  return (<Div  attr={attr}>
    <div className="date">
      {date}
    </div>
  </Div>);
}


const Day = ( { day } ) => {
  let attr = {
    className:`day-field `,
  }
  return (<Div  attr={attr}>
    <div >
      {day}
    </div>
  </Div>);
}

export {Date,Day};
