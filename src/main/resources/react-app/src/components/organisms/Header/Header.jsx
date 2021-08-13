import Logo from "../../atoms/buttons/Logo/Logo";
import HeaderButtons from "../../molecules/header-buttons/HeaderButtons";

import './style.css';

const header = () => {
  return (
    <header className="header">
      <Logo />
      <HeaderButtons />
    </header>
  );
};

export default header;
