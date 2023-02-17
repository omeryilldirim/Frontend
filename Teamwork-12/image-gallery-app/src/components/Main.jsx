import data from "../utils/data";
import Card from "./Card"

const Main = () => {
  return (
    <div className="pictures">
        {data.map((item)=> <Card {...item}/>)}
    </div>
  )
}

export default Main