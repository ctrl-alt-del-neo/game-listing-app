import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalAPI from "../Services/GlobalAPI"
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

function Home() {
    const [allGameList, setAllGameList]=useState();
    const [gameListByGeneres, setGameListByGeneres]=useState([]);
    useEffect(()=>{
        getAllGamesList();
        getGameListByGenresId(4);
    },[])
    const getAllGamesList=()=>{
        GlobalAPI.getAllGames.then((res)=>{
            setAllGameList(res.data.results);
            
        })
    }

    const getGameListByGenresId=(id)=>{
        console.log("Genre ID", id)
        GlobalAPI.getGameListByGenreId(id).then((res)=>{
            console.log("Game list by Genre ID",res.data.results)
            setGameListByGeneres(res.data.results);
        })
    }
  return (
    <div className="grid grid-cols-4">
        <div className="px-5 hidden md:block">
            <GenreList genreId={(genreId)=>getGameListByGenresId(genreId)}/>
        </div>
        <div className="col-span-4 md:col-span-3">
            {allGameList?.length>0 && gameListByGeneres.length>0 ?
            <div>
                <Banner gameBanner={allGameList[0]}/>
                <TrendingGames gameList={allGameList}/>
                <GamesByGenreId gameList={gameListByGeneres}/>
            </div>
            :null}
        </div>

    </div>
  )
}

export default Home