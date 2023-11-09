import React, { useRef } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    // Check if the inputRef is not null before accessing its value
    if (inputRef.current) {
      const textLength = inputRef.current.value.length;
      // Update the character count based on textLength
    }
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {inputRef.current ? inputRef.current.value.length : 0}</p>
    </div>
  );
}

export default CharacterCounter;
