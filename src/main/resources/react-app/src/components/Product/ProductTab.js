import { useState } from 'react'
export const ProductTab = (test) => {
  let [active, setActive] = useState(false);
  let toggleClass = () => {
    setActive(!active);
  };
  return (
    <span
      onClick={() => toggleClass()}
      className={`main__product--tab ${active ? 'active' : ''}`}
    >
      Sample
    </span>
  );
};
