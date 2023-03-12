import React from 'react'
import { cards } from '../data/data'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {cards.map((card) => (
         <div className='rounded-xl relative' key={card.id}>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
               <p className='font-bold text-2xl px-2 pt-4 text-orange-600 '>{card.title}</p>
               <p className='px-2'>{card.content}</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white hover:border-0'>{card.btn}</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl ' src={card.img} alt="card img" />
         </div>
      ))}
    </div>
  )
}

export default HeadlineCards