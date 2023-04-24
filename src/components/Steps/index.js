// == Import
import './styles.scss';

// == Composant
function Steps() {
  return (
    <ol className="steps">
      <li className="step">
        Ajouter du lait
      </li>
      <li className="step">
        Ajouter de la farine
      </li>
      <li className="step">
        Ajouter 4 oeufs
      </li>
      <li className="step">
        Ajouter 2 cuillères d'huile
      </li>
      <li className="step">
        Ajouter une pincée de sel
      </li>
    </ol>
  );
}

// Export
export default Steps;
