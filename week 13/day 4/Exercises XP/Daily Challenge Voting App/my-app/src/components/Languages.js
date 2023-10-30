

import '../App.css';
import {useState} from "react"

function Languages() {
  const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
  ])

  const add_vote = (name) =>{
    setLanguages(prev_languages => {
      return prev_languages.map((language) =>{
        if (language.name === name){
          return {...language, votes: language.votes+1}
        }
        return language
      })
    })
  }
  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      <header className="App-header">
        <div>
          <h3>
            <span> {languages[0].votes}  </span>
            PHP 
            <button name='Php' onClick={(e)=>add_vote(e.target.name)}>Click Here</button>
          </h3>
          <h3>
            <span>{languages[1].votes}  </span> 
            Python 
            <button name='Python' onClick={(e)=>add_vote(e.target.name)}>Click Here</button>
            </h3>
          <h3>
            <span>{languages[2].votes}  </span> 
            JavaSript <button name='JavaSript' onClick={(e)=>add_vote(e.target.name)}>Click Here</button>
            </h3>
          <h3>
            <span>{languages[3].votes}  </span> 
            Java <button name='Java' onClick={(e)=>add_vote(e.target.name)}>Click Here</button>
            </h3>
          
        </div>
      </header>
    </div>
  );
}
export default Languages;