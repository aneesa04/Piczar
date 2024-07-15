import React from 'react'

function ImageSlider({data}) {
  const array = data.tags.split(",");
  //<a href="https://www.flaticon.com/free-icons/image-analysis" title="image analysis icons">Image analysis icons created by Dewi Sari - Flaticon</a>
  return (
    <div className="bg-white w-48 py-3 shadow-lg space-y-1 px-2 rounded-md mb-4 m-2">
      <span>
      </span>
    <img src={data.webformatURL} alt="Images" className='rounded-sm '/>
    <p className="font-bold text-purple-500 text-sm">{data.user}</p>
    <ul className='text-xs'>
      <li><strong>Views :</strong>{data.views}</li>
      <li><strong>Downloads :</strong>{data.downloads}</li>
      <li><strong>Likes :</strong>{data.likes}</li>
    </ul>

    <div className='space-x-1'>
   {
    array.map(item => (<span className='bg-gray-200 font-bold text-center text-gray-800 text-xxs rounded-xl px-2 py-0.5'>{`#${item}`}</span> ))
   }

    </div>
   </div>
  )
}

export default ImageSlider
