// == Import npm
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
// == Composant
function Header({
  title, img, author, difficulty
}) {
  // console.log(props);
  return (
    <header className="header">
      <img
        className="header-image"
        alt="recette"
        src={img}
      />
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-infos">{author} - {difficulty}</p>
      </div>
    </header>
  );
}
Header.propTypes = {
  // nom de la prop: le type attendu
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default Header;
