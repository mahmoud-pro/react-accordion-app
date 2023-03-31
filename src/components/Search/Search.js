import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTerm(term);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [term]);

  useEffect(() => {
    try {
      const search = async () => {
        const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: debouncedTerm,
          },
        });
        setResults(data.query.search);
      };
      if (debouncedTerm) {
        search();
      }
    } catch (error) {
      console.log(error);
    }
  }, [debouncedTerm]);

  
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            target="blank"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* prevent xss attack from api data */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            id="search"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
