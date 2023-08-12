import UserProfile from './Component/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    name: 'kashas',
    roll: 'Software Engineer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 2,
    name: 'kashas',
    roll: 'Software Engineer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 3,
    name: 'kashas',
    roll: 'Software Engineer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 4,
    name: 'kashas',
    roll: 'Software Engineer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 5,
    name: 'kashas',
    roll: 'Software Engineer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
