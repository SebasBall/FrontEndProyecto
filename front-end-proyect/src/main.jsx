import React from 'react'
import ReactDOM from 'react-dom/client'
import { MenuBar } from './MenuBar.jsx'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './index.css'
import {Pagination} from "swiper/modules"
import {Autoplay} from 'swiper/modules'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import concierto1 from './Images/Concierto 1.png'
import concierto2 from './Images/Concierto 2.png'
import concierto3 from './Images/Concierto 3.png'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Home = () => {
  return(
    <>
      <Swiper 
        modules={[Pagination,Autoplay]}
        grabCursor
        centeredSlides
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        >
          <SwiperSlide>
            <img src={concierto1}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={concierto2}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={concierto3}/>
          </SwiperSlide>
      </Swiper> 

      <h1>PROMOCIONES</h1>

      <Swiper 
        modules={[Pagination,Autoplay]}
        grabCursor
        centeredSlides
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        >
          <SwiperSlide>
            <img src={concierto1}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={concierto2}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={concierto3}/>
          </SwiperSlide>
        </Swiper>
    </>
  )
}

const Eventos = () =>{
  return(
    <>
      <h1>EVENTOS</h1>
    </>
  )
}

const Contacto = () =>{
  return(
    <>
      <h1>CONTACTO</h1>
    </>
  )
}

const Nosotros = () =>{
  return(
    <>
      <h1>NOSOTROS</h1>
    </>
  )
}

const Perfil = () =>{
  return(
    <>
      <h1>PERFIL</h1>
    </>
  )
}

const Login = () =>{
  return(
    <>
      <h1>LOGIN</h1>
    </>
  )
}

const Registro = () =>{
  return(
    <>
      <h1>REGISTRO</h1>
    </>
  )
}

const App = () =>{
  return(
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  )
}



root.render(
  <>
  <App />
  </>
)
