'use client'

import React, { useEffect, useState } from 'react'
import ModalElement from './ModalElement';
import { useIngredientsContext } from "../contexts/IngredientsContext"
import Link from 'next/link';

export default function Modal() {

    const [modalClass, setModalClass] = useState('hidden')
    const [selectedVal, setSelectedVal] = useState('')
    const imagesPath = '/category_images/category_'
    const { ingredients, modalOpen, setModalOpen }:any = useIngredientsContext()

    useEffect(()=> {
        if(modalOpen){
            openModal();
        } else{
            closeModal();
        }
    }, [modalOpen])

    const closeModal = () => {
        setModalClass('hidden');
    }
    const openModal = () => {
        setModalClass('fixed')
    }
    
    function handleClick(val:any){
        setSelectedVal(val);
    }
    return (
        <div className={`${modalClass} left-0 top-0 h-screen w-screen z-20`}>
            <div onClick={() => { setModalOpen(false) }} className='absolute left-0 top-0 w-screen h-screen bg-black opacity-40'></div>
            <div className='bg-white relative mt-[5%] container mx-auto z-30 p-8'>
                <p onClick={() => { setModalOpen(false) }} className='text-black font-bold cursor-pointer absolute right-6 top-4'>X</p>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl w-full text-center pb-8'>Select your category</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center'>
                        <ModalElement src={"/design/category_images/category_breakfast.jpg"} func={handleClick} text="Breakfast" val="breakfast" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_soups.jpg"} func={handleClick} text="Soups" val="soups" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_dinner.jpg"} func={handleClick} text="Dinner" val="dinner" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_desserts.jpg"} func={handleClick} text="Desserts" val="desserts" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_salads.jpg"} func={handleClick} text="Salads" val="salads" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_quick.jpg"} func={handleClick} text="Quick & Easy" val="quick_and_easy" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_vegetarian.jpg"} func={handleClick} text="Vegetarian" val="vegetarian" selectedVal={selectedVal}/>
                        <ModalElement src={"/design/category_images/category_lunchbox.jpg"} func={handleClick} text="Lunch" val="lunch" selectedVal={selectedVal}/>
                    </div>
                    <Link href={{
                    pathname: "/results",
                    query: { 
                        ingredients: ingredients,
                        selectedCategory: selectedVal
                    }
                }} className='mt-8 bg-main text-white rounded px-8 py-2 text-lg'>Create recipe</Link>
            </div>
        </div>
    </div>
  )
}