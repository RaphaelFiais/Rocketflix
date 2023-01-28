import React from 'react'
import { useState } from 'react'
import Logo from '../../assets/logo.svg'

import Movie from '../Movie/index'
import * as A from './style'
const url = import.meta.env.VITE_BASE
const key = import.meta.env.VITE_KEY






 


 
function Home() {  

    const [movie,setMovie] = useState("")

    const getMovie = async() => {
        const randomMovie = `${url}${Math.floor(Math.random() * 90000)}?api_key=${key}&language=pt-BR`
        const data = await fetch(randomMovie).then(response => response.json())       
        console.log(data)       
        setMovie(data)
    }   
    
  

  return (
    <A.Container>
        <img className='logo' src={Logo} alt="" />
        <h1>Não sabe o que assistir?</h1>        
        {movie && <Movie movie={movie} />}
        
            

        <button onClick={getMovie}><img src={Logo} alt = "Foto do Filme"/>Encontra filme</button>
        <p>
            Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
        </p>
    </A.Container>
  )
}

export default Home