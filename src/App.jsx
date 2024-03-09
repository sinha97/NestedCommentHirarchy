import Comments from './components/Comments'
import commentsData from './data/comments';
import './App.css';

function App() {

  return (
    <>
      <Comments commentData={commentsData}/>
    </>
  )
}

export default App
