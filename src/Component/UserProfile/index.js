import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, roll} = userDetails
  return (
    <div className="user-card-container">
      <img src={imageUrl} alt="" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{roll}</p>
      </div>
    </div>
  )
}
export default UserProfile
