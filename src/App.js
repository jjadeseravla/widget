import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div>
      <Search/>
      {/* <Accordion items={items}/> */}
    </div>
  );
};