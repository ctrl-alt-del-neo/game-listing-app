import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function GenreList() {
    useEffect(()=>{
        getGenereList();
    })
    const getGenereList=()=>{
        GlobalAPI.getGenereList.then((res)=>{
            console.log(res.data.results);
        })
    }
  return (
    <div>GenreList</div>
  )
}

export default GenreList