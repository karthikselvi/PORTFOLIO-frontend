import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Loader from './components/Loader'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice'
import Admin from './pages/Admin'
import Login from './pages/Admin/Login'

function App() {
  const { loading,portfolioData,reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading())
      const res = await axios.get("https://capstone-0wh7.onrender.com/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(res.data))
      dispatch(ReloadData(false))
      dispatch(HideLoading())
      //console.log(portfolioData)
    } catch (error) {
      dispatch(HideLoading())
    }
  }

  useEffect(() => {
    if(!portfolioData){
    getPortfolioData();
    // console.log(portfolioData)
    }
  }, [portfolioData]);

  useEffect(() => {
    if(reloadData){
      getPortfolioData();
    }
  }, [portfolioData])
  

// useEffect(()=>{
//   console.log(portfolioData )
// },[portfolioData ])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin-login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
