

const Card = (data) => {
  return (
    <div className="picture">
        <div className="image-container">
            <img src={data.src.large} alt="img" />
        </div>
        <div className="info">
            <p>{data.photographer}</p>
        </div>
    </div>
  )
}

export default Card