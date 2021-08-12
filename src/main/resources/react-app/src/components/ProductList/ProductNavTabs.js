export const ProductNavTab = ({ category, stockVal, path, active }) => {
  return (
    <li>
      <a className={active} href={path}>
        <span className="category">{category}</span>
        <span className="available-stocks">{stockVal}</span>
      </a>
    </li>
  );
};
