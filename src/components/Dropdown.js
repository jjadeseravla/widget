import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener('click', (e) => { //close the dropdown menu whenever user clicks on ANYWHERE in document
  //     if (ref.current.contains(e.target)) { //ref.current sees whether the element that was clicked on is inside our component
  //       return;
  //     }
  //    setOpen(false);
  //   })
  // }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; //so selected option gets removed from dropdown menu
    }
    return (
      <div key={option.value} 
      className="item"
      onClick={() => {
        console.log('option click');
        onSelectedChange(option)
      }}>
        {option.label}
      </div>
    )
  });

  // console.log(ref.current); //get a reference to the most parent element that was clicked on

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">
          {label}
        </label>
        <div 
          onClick={() => {
            console.log('dropdown click');
            setOpen(!open)
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
          <i className="dropdown icon"></i>
          <div className="text">
            {selected.label}
          </div>
          <div className={`menu ${open? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Dropdown;