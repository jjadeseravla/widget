import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'title1',
    content: 'content1'
  },
  {
    title: 'title2',
    content: 'content2'
  },
  {
    title: 'title3',
    content: 'content3'
  }
]

const options = [
  {
    label: 'the color red',
    value: 'red'
  },
  {
    label: 'the color green',
    value: 'green'
  },
  {
    label: 'the color blue',
    value: 'blue'
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown 
      selected={selected} 
      onSelectedChange={setSelected}
      options={options}
      />
      {/* <Search/> */}
      {/* <Accordion items={items}/> */}
    </div>
  );
};