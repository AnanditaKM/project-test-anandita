import PropTypes from "prop-types"
import '../css/card.css';
import LazyLoad from 'react-lazyload';

export default function Card(props) {
  const date = new Date(props.text);

// Opsi untuk format tanggal
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};

// Mengubah format tanggal
const formattedDate = date.toLocaleDateString('id-ID', options);
  return (
      <div className="card">
        <LazyLoad>
          <img src={props.image} className="card-img-top" alt="..." />
        </LazyLoad>
        <div className="card-body">
          <p className="card-subtitle">{formattedDate}</p>
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired, // image is a required string
  title: PropTypes.string.isRequired, // title is a required string
  text: PropTypes.string.isRequired, // text is a required string
};