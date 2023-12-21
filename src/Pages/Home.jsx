import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalAPI from "../Services/GlobalAPI"
import Banner from "../Components/Banner";

function Home() {
    const [allGameList, setAllGanmeList]=useState();
    useEffect(()=>{
        getAllGamesList();
    },[])
    const getAllGamesList=()=>{
        GlobalAPI.getAllGames.then((res)=>{
            setAllGanmeList(res.data.results);
        })
    }
  return (
    <div className="grid grid-cols-4">
        <div className="px-5 hidden md:block">
            <GenreList/>
        </div>
        <div className="col-span-4 md:col-span-3">
            {allGameList?.length>0 ?<Banner gameBanner={allGameList[0]}/>
            :null}
        </div>

    </div>
  )
}

export default Home