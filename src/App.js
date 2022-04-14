import PropTypes from "prop-types";

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Korean_cuisine-Kimchi-08.jpg/1280px-Korean_cuisine-Kimchi-08.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://blog.kakaocdn.net/dn/N1DaJ/btrxIMQ3Qkn/QS3dSXwBaAKeuUIjRhnKBK/img.jpg',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5c%2FBibimbap_(8111593238).jpg%2F180px-Bibimbap_(8111593238).jpg&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24346643560B93B729&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F182311514DA6AFEC19&f=1&nofb=1',
    rating: 5
  }
];

const renderFood = dish => <Food name={dish.name} picture={dish.image} />

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
    );
}

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
export default App;