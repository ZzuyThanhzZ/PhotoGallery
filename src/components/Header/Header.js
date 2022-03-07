import Form from './Form/Form';
import './Header.css';
import Navigation from './Navigation/Navigation'

function Header({handleSubmit}) {
  return (
    <div>
      <h1><a href="">Photo Gallery</a></h1>
      <Form handleSubmit={handleSubmit}/>
      <Navigation handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Header;
