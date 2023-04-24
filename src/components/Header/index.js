// == Import npm
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
// == Composant
function Header({ title }) {
  // console.log(props);
  return (
    <header className="header">
      <img
        className="header-image"
        alt="recette"
        src="https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg"
      />
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-infos">John Doeuf - Très facile</p>
      </div>
    </header>
  );
}
Header.propTypes = {
  // nom de la prop: le type attendu
  title: PropTypes.string.isRequired,
};

// == Export
export default Header;
