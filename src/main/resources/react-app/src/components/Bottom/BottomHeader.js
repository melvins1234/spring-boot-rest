export const BottomHeader = () => {
  return (
    <header className="bottom1__header">
      <h2>Best Seller</h2>
      <nav className="bottom1__nav">
        <ul>
          <li className="bottom1__menu bottom1__menu--active">
            <span>All</span>
          </li>
          <li className="bottom1__menu">
            <span>Mac</span>
          </li>
          <li className="bottom1__menu">
            <span>iPhone</span>
          </li>
          <li className="bottom1__menu">
            <span>iPad</span>
          </li>
          <li className="bottom1__menu">
            <span>iPod</span>
          </li>
          <li className="bottom1__menu">
            <span>Accessories</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
