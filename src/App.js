import React from 'react';

function Food() {
  return <h1>I like kimchi </h1>;
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Korean_cuisine-Kimchi-08.jpg/1280px-Korean_cuisine-Kimchi-08.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://blog.kakaocdn.net/dn/N1DaJ/btrxIMQ3Qkn/QS3dSXwBaAKeuUIjRhnKBK/img.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5c%2FBibimbap_(8111593238).jpg%2F180px-Bibimbap_(8111593238).jpg&f=1&nofb=1'
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24346643560B93B729&f=1&nofb=1'
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F182311514DA6AFEC19&f=1&nofb=1'
  }
];

const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

function App() {
  return (
    <div> 
      {foodILike.map{dish => <Food Key={dish.name} name={dish.name} picture={dish.image}/>}}
    </div>
    );
}

export default App;