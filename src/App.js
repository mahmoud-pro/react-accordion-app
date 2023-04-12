import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
import Translate from './components/Translate/Translate';
import Route from './components/Route/Route';
import Header from './components/Header/Header';

import items from './components/Accordion/items';
import options from './components/Dropdown/options';

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
    <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select Sector"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </>
  );
};

export default App;
