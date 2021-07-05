import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

//could group it all together in one function, or in react make a component to do this
// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// }

const App = () => {

  const [selected, setSelected] = useState('');

  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a colour" 
          options={options} 
          selected={selected} 
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
};

export default App;