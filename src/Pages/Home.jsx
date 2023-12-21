import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalAPI from "../Services/GlobalAPI"
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";

function Home() {
    const [allGameList, setAllGameList]=useState();
    useEffect(()=>{
        getAllGamesList();
    },[])
    const getAllGamesList=()=>{
        GlobalAPI.getAllGames.then((res)=>{
            setAllGameList(res.data.results);
        })
    }
  return (
    <div className="grid grid-cols-4">
        <div className="px-5 hidden md:block">
            <GenreList/>
        </div>
        <div className="col-span-4 md:col-span-3">
            {allGameList?.length>0 ?
            <div>
                <Banner gameBanner={allGameList[0]}/>
                <TrendingGames gameList={allGameList}/>
            </div>
            :null}
        </div>

    </div>
  )
}

export default Home