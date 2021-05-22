import { useState } from 'react'
import './App.css';

const App = () => {
  const stories = [
    {
      title:'React',
      url:'https://reactjs.org/',
      author:'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title:'Redux',
      url:'https://redux.js.org/',
      author:'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    },
  ];

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event){
    setSearchTerm(event.target.value)
  }

  const filteredStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div >
      <h1>My Hacker Stories</h1>
        <Search onSearch={handleSearch}/>
      <hr/>
      <div>
        <List list={filteredStories}/>
      </div>
    </div>
  );
}

const Search = ({onSearch}) => {
  return(
    <div>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text' onChange={onSearch}></input>   
    </div>
  )
}

const List = ({list}) => {
  return (
    <div>
      {list.map(item => {
        return(
          <div key={item.objectID}>
          <a href={item.url} target='__blank'>{item.title}</a>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
      </div>
        )
      })}
    </div>
  )
}

export default App;
