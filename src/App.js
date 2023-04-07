import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
import Translate from './components/Translate/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is front end javascript library.',
  },
  {
    title: 'Why use React?',
    content: 'React is favorite javascript library among developers.',
  },
  {
    title: 'How do use React?',
    content: 'You use React by creating components.',
  },
];

const App = () => {
  return (
    <>
      <Translate />
    </>
  );
};

export default App;
