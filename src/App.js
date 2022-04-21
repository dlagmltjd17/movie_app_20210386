function Iphone({name,picture})
{
  return <h1> I used {name}<br></br><img src={picture}></img></h1>;
}

const iPhoneIUsed = [
  {
    name: 'iPhone 3GS',
    image: 'http://www.madboxpc.com/wp-content/gallery/iphone3gs_hardware/photos-hardware-02-20090608.jpg'
  },
  {
    name: 'iPhone 6s',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.trustico.com%2Fwp-content%2Fuploads%2F2017%2F01%2F6s.jpg&f=1&nofb=1'
  },
  {
    name: 'iPhone XR',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheallapps.com%2Fwp-content%2Fuploads%2FiPhone-Xr-Color.jpg&f=1&nofb=1'
  },
  {
    name: 'iPhone SE (3rd Gen.)',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.macheat.com%2Fwp-content%2Fuploads%2F2021%2F03%2F2022-iphone-se-to-launch-with-the-same-iphone-8-inspired-design-5g-532307-2.jpg&f=1&nofb=1'
  }
];

function App() {
  return(
    <div>
      {iPhoneIUsed.map(dish => <Iphone key={dish.name} name={dish.name} picture={dish.image}/>)}
    </div>
  );
}
export default App;