import './Magic.scss'
import { useState,useEffect } from 'react'


const Magic = () => {

const [ link , setLink ] = useState('')
const [ articleLink, setArticleLink ] = useState([])


const handleChange = (e) => {
    setLink(e.target.value)
}

const handleMagic = () => {
        if (link.trim() !== '') {

            
            //Saving history to the local storage


            let history = localStorage.getItem('history');
            let updatedHistory = [];
      
            if (history) {
              updatedHistory = JSON.parse(history);
              updatedHistory.push(link);
      
              if (updatedHistory.length > 5) {
                updatedHistory = updatedHistory.slice(updatedHistory.length - 5);
              }
            } else {
              updatedHistory = [link];
            }
      
        //Retrieving the history from the local storage

            localStorage.setItem('history', JSON.stringify(updatedHistory));
            setArticleLink(updatedHistory);
          }
}

const handleCopy = () => {

}

useEffect(()=>{
    const storedHistory = localStorage.getItem('history');
    if( storedHistory !== null )
    setArticleLink(JSON.parse(storedHistory));
},[])


  return (
    <>
        <section>
            <div className="magic_container">
                <div className="magic_input">
                    <div className="link_img">
                        <i className ="fa-solid fa-link"></i>
                    </div>
                    <input type="text" placeholder='Paste the article link.' onChange={ handleChange }/>
                    <button onClick={ handleMagic } disabled={ link.trim() === '' }>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                {
                    articleLink.map(( item,index )=>(
                        <div key={ index } className="magic_history">
                            <button onClick={ handleCopy }>
                                <i className="fa-regular fa-copy"></i>
                                <i className="fa-solid fa-check" style={{ display:'none' }}></i>
                            </button>
                            <input type="text" value={ item } readOnly/>
                        </div>
                    ))
                }

                <div className="magic_summery">
                    <div className="magic_sum_title">
                        <h4>Article <span>Summery</span></h4>
                    </div>
                    <div className="magic_sum_article">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus soluta nulla perspiciatis animi veniam, culpa recusandae voluptatibus et quas corporis perferendis dolor, eveniet molestiae voluptatem deserunt harum quos eum sit dicta dolorum eligendi consectetur? Mollitia delectus distinctio aperiam deserunt praesentium repudiandae molestiae, tempora voluptates sit odit alias omnis unde.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Magic