const Home = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '14f40359d2msh28143880a2e9bd2p16da5djsn567556c91318',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

   return <a href='#'>Press</a>;
};

export default Home;
