import React from 'react'
const Div = ({attr,children}) => {
  return (
    <div {...attr}>
      {children}
    </div>
  );
}


const Date = ( { className,children } ) => {
  let attr = {
    className:`date-field ${className}`,
    onClick:() => {alert("hello world!")},
  }
  return (<Div  attr={attr}>
  	{children}
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
