import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items}/>;
  }
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search/>;
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown/>;
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate/>;
  }
}

//could group it all together in one function, or in react make a component to do this
// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// }

export default () => {

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};