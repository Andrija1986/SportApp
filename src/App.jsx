import {useState, useEffect} from 'react'

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import DropDown from './components/DropDown';
import './App.css';

const App = () => {

  const [data, setData] = useState({
    results:null, 
    loading: true, 
    error:null});
  const [select, setSelect] = useState('');




  const API_KEY = process.env.REACT_APP_KEY_API_SCORE_BAT
  const URL = `https://www.scorebat.com/video-api/v3/feed/?token=${API_KEY}`


console.log(URL);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const results = await response.json();
        setData({results, loading:false, error:null})
      } catch (error) {
        setData({results:null, loading:false, error})
      }
    }
    fetchData()
  }, [URL])

  if(data.loading) return <p>Loading...</p>

  const filterList = data.results.response.filter(item => item.competition === select);


  return (
    <main>
      <Header/>
      <DropDown 
      data={data.results} 
      select={select} 
      setSelect={setSelect} />
      <Content 
      filterList={filterList}/>
      <Footer/>
    </main>
  );
}

export default App;

