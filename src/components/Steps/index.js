//  == Import : npm
import PropTypes from 'prop-types';
// == Import
import './styles.scss';

// == Composant
function Steps({ steps }) {

  console.log(steps);
  // On veut transformer chaque element du tableau en un <li>
  const liElements = steps.map((item) => (
    <li className="step" key={item}>
      {item}
    </li>
  ));
  console.log(liElements);
  return (
    <ol className="steps">
      {liElements}
    </ol>
  );
}

Steps.prototype = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Export
export default Steps;
