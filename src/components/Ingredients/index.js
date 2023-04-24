// == Import
import './styles.scss';
// == Composant
function Ingredients() {
  return (
    <ul className="ingredients">
      <li className="ingredient">
        <span className="quantity">500g</span> de farine
      </li>
      <li className="ingredient">
        <span className="quantity">1 litre</span> de lait
      </li>
      <li className="ingredient">
        <span className="quantity">4</span> Oeufs
      </li>
      <li className="ingredient">
        <span className="quantity">4</span> cuillères d'huile
      </li>
      <li className="ingredient">
        <span className="quantity">1</span> pincée de sel
      </li>
    </ul>

  );
}
// 59.28 minute

export default Ingredients;
