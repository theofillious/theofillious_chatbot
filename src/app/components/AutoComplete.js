import React, { useState } from 'react';

const AutoComplete = ({ suggestions, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    onSelect(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query) {
      onSelect(query);
      setQuery('');
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
         onKeyPress={handleKeyPress}
        placeholder="Ask something..."
      />
      <div className="suggestions">
        {filteredSuggestions.map((suggestion, index) => (
          <div
            key={index}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;