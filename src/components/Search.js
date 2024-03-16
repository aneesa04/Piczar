import React, { useState } from 'react'

function Search({searchText}) {

    const [text,setText] = useState('');

    const onSubmit = (e) =>{
    e.preventDefault();
    searchText(text);
    }
    return (
    <form className='flex justify-center space-x-2 mt-8' onSubmit={onSubmit}>
        <input type="text" value={text} placeholder='Enter text...' onChange={e => setText(e.target.value)} className='border border-1 border-gray-300 py-1 px-2 text-sm'/>
        <button type="submit" className='bg-black text-white px-3 font-bold active:bg-gray-800'>Search</button>
    </form>
  )
}

export default Search
