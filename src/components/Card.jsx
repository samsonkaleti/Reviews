import React, { useState } from 'react' 
import reviews from './Reviews'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Card = () => { 
    const [index, setIndex] = useState(0) 
    const { image, name, text, job } = reviews[index] 

    const CheckNumber = (number) => { 
        if (number > reviews.length - 1) {
            return 0 
        } 
        if (number < 0) {
            return reviews.length - 1
        } 
        return number
    
}

    const prevButton = () => {
        setIndex((index) => {
            let newIndex = index - 1 
            return CheckNumber(newIndex)
        })
    } 

    const nexButton = () => {
        setIndex((index) => {
            let newIndex = index + 1 
            return CheckNumber(newIndex)
            
        })
    } 

    const RandomPerson = () => {
        let randomNum = Math.floor(Math.random() * reviews.length)
        if (randomNum === index) {
            randomNum = index + 1
        }

        setIndex(CheckNumber(randomNum))
    };
    
  return (
    <div className='flex justify-between flex-col items-center'>
          <img src={image} alt={name} className='w-40 h-40 rounded-full' />
          <h1 className='text-4xl'>{name}</h1>  
          <h3 className='text-xl text-blue-400 font-semibold'>{job}</h3> 
          <p className='text-lg text-gray-400  text-center'>{text}</p>
          <div className="mt-4"> 
              <button onClick={prevButton} className='mr-6'><FaChevronLeft /></button> 
              <button onClick={nexButton}><FaChevronRight /></button> 

              
            
          
          </div> 

          <button onClick={RandomPerson}  className='mt-6 py-2 px-4 hover:bg-purple-500 rounded-lg text-white bg-purple-400 m-2'>Random</button>
          
    </div>
  )
}

export default Card
