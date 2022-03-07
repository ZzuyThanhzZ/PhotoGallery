import Container from "./Container";

const Item = ({ searchTerm }) => {

  return (
    <div>
      <h2>
          {(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)).replace('%20', ' ')} Pictures
      </h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;