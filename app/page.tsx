'use client'
import Image from 'next/image'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Modal from './Components/Modal'
import Community from './Components/Community'
import Latest from './Components/Latest'
import { IngredientsContextProvider } from "./contexts/IngredientsContext";



export default function Home() {


  return (

    <IngredientsContextProvider>

    <main className='pt-[79.62px]'>
      <Header/>
      <Latest/>
      <Community/>
      <Modal/>
    </main>

    </IngredientsContextProvider>

     

  )
}
