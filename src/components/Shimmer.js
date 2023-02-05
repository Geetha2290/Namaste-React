const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15).fill().map((item, i) => <div className="shimmer-card" key={i}></div>)}
    </div>
  )
}

export default Shimmer;