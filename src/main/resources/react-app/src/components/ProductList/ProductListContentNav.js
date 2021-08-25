import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";

export const ProductListContetNav = () => {
  return (
    <nav className="product-listing__products__sort">
      <nav className="product-listing__products__sort__options">
        <div>
          <span id="filter-result-number">13</span> Items
        </div>
        <div>
          <label id="sort-by-label">Sort By</label>
          <select name="" id="product-listing--sort-by">
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div>
          <label id="items-per-page">Show</label>
          <select name="" id="product-listing--items-per-page">
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </div>
      </nav>
      <nav className="product-listing__products__sort__display-choices">
        <button id="display-as-grid" className="active">
          <i className="fas fa-th">
            <FontAwesomeIcon icon={faTh} />
          </i>
        </button>
        <button id="display-as-list">
          <i className="fas fa-bars">
            <FontAwesomeIcon icon={faBars} />
          </i>
        </button>
      </nav>
    </nav>
  );
};
