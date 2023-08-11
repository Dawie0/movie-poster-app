import { useState } from "react"
import Card from "./Card"
import axios from 'axios'


const SearchForm = () => {
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(false)

    const getMovieCard = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`https://movie-pro-backend.vercel.app/api/title/${keyword}`)
         
          const { data } = res;
          setLoading(false);
          setResponse(data);
        } catch (error) {
          setLoading(false);
          console.error(error)
        }
      }
      console.log(response)

    return (
        <div className="row d-flex mt-4 justify-content-center">
            <div className="row justify-content-center">
                <div className="col-8 mb-3">
                    <input
                        type="text"
                        value={keyword}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Search Movies"
                        onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className='col-8 d-flex m-3 justify-content-center'>
                    <button className='btn'
                        onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        getMovieCard()}}
                        >
                        {loading ? <>Loading...</> : <>Search</>}
                    </button>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>      
            {response && <Card movie={response}/>}
          </div>
        </div>
    )
}

export default SearchForm