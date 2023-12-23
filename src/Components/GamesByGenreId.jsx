import React, {useEffect} from 'react'

function GamesByGenreId({gameList, selectedGenre}) {
  useEffect(()=>{
    console.log("Game List", gameList);
  },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selectedGenre} Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {gameList.map((item)=>(
        <div className='bg-[#76a8f753] p-3 rounded-lg pb-10 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
          <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
          <h2 className='text-[20px] dark:text-white font-bold '>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
          <h2 className='text-gray-500 dark:text-gray-300'>   ⭐{item.rating}   💬{item.reviews_count}   🔥{item.suggestions_count}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GamesByGenreId