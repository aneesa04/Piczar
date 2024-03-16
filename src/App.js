import { useEffect, useState } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import LoadingBar from 'react-top-loading-bar';


function App() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [page,setPage] = useState(1);
  const [totalPages , setTotalPages] = useState(0);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(30)
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${term}&image_type=photo&page=${page}&per_page=30`
    )
      .then((response) => {
        setProgress(50)
        return response.json();
        })
      .then((data) => {
        setProgress(70);
        setData(data.hits);
        setTotalPages(Math.ceil(data.totalHits/30));
        setProgress(100);
      })
      .catch((err) => console.log(err));
      
  }, [page,term]);

  const nextPage = () =>{
    setPage(prevpage => prevpage + 1)
  }

  const prevPage = () =>{
    setPage(prevpage => prevpage - 1)
  }
  

  return (
    <div>
    <LoadingBar
        color='#000'
        progress={progress}
        onLoaderFinished={() => {setProgress(0)}}
      />
    <Search searchText={(text) => setTerm(text)}/>
    <div className="flex flex-wrap justify-center px-2">
      {data.map((item) => <ImageSlider data={item} key={item.id} />)}
    </div>
    <Pagination data={data} nextPage={nextPage} prevPage={prevPage} page={page} totalPages={totalPages}/>
  </div>
  );
}

export default App;
