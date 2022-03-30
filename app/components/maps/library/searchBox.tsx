import * as React from 'react';

export const SearchBox = () => {
  let searchInput = React.useRef(null);
  const clearSearchBox = () => {};
  return (
    <div className="maps__wrapper">
      <input
        ref={searchInput}
        type="text"
        onFocus={clearSearchBox}
        placeholder="Enter a location"
      />
    </div>
  );
};
