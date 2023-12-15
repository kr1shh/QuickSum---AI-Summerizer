import './Magic.scss'
import { useState } from 'react'


const Magic = () => {

const [ link , setLink ] = useState('')


const handleChange = (e) => {
    setLink(e.target.value)
}

const handleMagic = () => {

    //Saving history to the local storage

    let history = localStorage.getItem('history');

    if (history) {
        history = JSON.parse(history);
        history.push(link);

        if (history.length > 5) {
            history = history.slice(history.length - 5);
        }
    } else {
        history = [link];
    }
    localStorage.setItem('history', JSON.stringify(history));

    //Retrieving the history from the local storage

    console.log( localStorage.getItem( 'history' ) );

}

const handleCopy = () => {

}


  return (
    <>
        <section>
            <div className="magic_container">
                <div className="magic_input">
                    <div className="link_img">
                        <i className ="fa-solid fa-link"></i>
                    </div>
                    <input type="text" placeholder='Paste the article link.' onChange={ handleChange }/>
                    <button onClick={ handleMagic }>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div className="magic_history">
                    <button onClick={ handleCopy }>
                        <i className="fa-regular fa-copy"></i>
                        <i className="fa-solid fa-check" style={{ display:'none' }}></i>
                    </button>
                    <input type="text" value='' readOnly/>
                </div>

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