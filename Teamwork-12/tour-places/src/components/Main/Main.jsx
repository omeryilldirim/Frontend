import "./Main.css"
import {data} from "../../helpers/data"

const Main = ()=>{
    return (
        <div className="cards-container">
            {data.map((city)=> {
                return (
                    <div key={city.id} className="card">
                        <h2>{city.title}</h2>
                            <div className="image">
                                <img src={city.image} alt="" />
                                <div className="description">
                                    <p>{city.desc}</p>
                                </div>
                            </div>

                    </div>
                )
            } )}
        </div>
    )
}

export default Main