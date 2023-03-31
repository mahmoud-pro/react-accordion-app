import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle
      </button>
      {showDropdown && (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      )}
    </>
  );
};

export default App;
