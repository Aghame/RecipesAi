import Image from 'next/image'
import React, { useState } from 'react'

export default function ResultElement({title, prepTime, ingredients, prepDetails, category}:any) {

    const [openDivClasses, setOpenDivClasses] = useState({
        pClass: 'hidden',
        divClass: '',
        buttonContent: 'Preparation',
        buttonClasses: 'bg-main text-white border-white'
    })

    function togglePrep(){
        if(openDivClasses.pClass == 'hidden'){
            setOpenDivClasses({pClass: 'block', divClass: "border-2 border-main", buttonContent: 'Close', buttonClasses: 'bg-white text-main border-main'})
        }else{
            setOpenDivClasses({pClass: 'hidden', divClass: '', buttonContent: 'Preparation', buttonClasses: 'bg-main text-white border-white'})
        }
    }

    function handleClick(){
        togglePrep();
    }

  return (
    <div className={`text-black flex gap-4 p-4 rounded-3xl bg-white shadow-md ${openDivClasses.divClass}`}>
        <Image className='w-[200px] h-[200px] rounded-3xl object-cover shadow-lg -ml-12 border-main border-2' src={`/design/category_images/category_${category}.jpg`} alt='img recipe' width={300} height={300}/>
        <div className='flex flex-col gap-4 w-full p-4'>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='text-xl font-semibold'>Preparation time: {prepTime}</p>
            <p className='text-xl font-semibold'>Ingredients: {`${ ingredients.map((el:any)=>{
                return ` ${el}`
            })}`}</p>
            <p className={`${openDivClasses.pClass} max-w-3xl font-semibold text-lg`}>{prepDetails}</p>
        </div>
            <button onClick={handleClick} className={`${openDivClasses.buttonClasses} border-2 px-8 py-2 rounded-3xl self-end font-semibold -mb-8`}>{openDivClasses.buttonContent}</button>
    </div>
  )
}
