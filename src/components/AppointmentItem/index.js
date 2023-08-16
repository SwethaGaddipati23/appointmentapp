const AppointmentItem = props => {
  const {eachVal, toggleIsFavorite} = props
  const {title, date, starred, id} = eachVal
  const image = starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const onClickFav = () => {
    toggleIsFavorite(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{date}</p>
      <button data-testId="star" type="button" onClick={onClickFav}>
        <img src={image} alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
