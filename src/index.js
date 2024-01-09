import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import User from './User/user';
import { Provider } from 'react-redux';
import store from './app/store';
import Cryptocurrencies from './Cryptocurrency/Cryptocurrencies';
import CryptoDetails from './Cryptocurrency/CryptoDetails';
import News from './News/News';

// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       },
//       {
//         path:'about',
//         element: <About />
//       }

//     ]
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='cryptocurrencies' element={<Cryptocurrencies/>}/>
      <Route path='crypto/:coinId' element={<CryptoDetails/>}/>
      <Route path='contact' element={<Contact/>} />
      <Route path='news' element={<News/>}/>
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
