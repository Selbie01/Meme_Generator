import React from 'react'
import trollFace from './Troll Face.png'

export default function Header(){
   return( 
   <div className='header'>
            <img src = {trollFace} alt = '' className='logo'/>
            <h1 className='title'>Meme Generator</h1>
            <p className='subtitle'>React Course - Project 4</p>
    </div>
   )
}