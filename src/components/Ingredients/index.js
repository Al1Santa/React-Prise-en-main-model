//  == Import : npm
import PropTypes, { shape } from 'prop-types';
// == Import
import './styles.scss';
// == Composant
function Ingredients({ ingredients }) {
  return (
    <ul className="ingredients">
      {ingredients.map((item) => (
        <li className="ingredient" key={item.id}>
          <span className="quantity">
            {item.quantity} {item.unit}
          </span> {item.name}
        </li>
      ))}
    </ul>
  );
}
Ingredients.prototype = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Ingredients;
