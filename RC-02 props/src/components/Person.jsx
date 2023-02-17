import Msg from "./Msg"

const Person = ({ name, tel, img }) => {
  //   console.log(props)

  //!   Destrc.
  //   const { name, tel, img } = props
  return (
    <div>
      {/* Msg componenti cagrildi */}
      <Msg name={name} />
      <img style={{ width: "300px" }} src={img} alt="" />
      <p>{tel}</p>
    </div>
  )
}

export default Person
