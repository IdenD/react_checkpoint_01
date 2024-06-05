import { product } from "../product";
import '../App.css'

function Image () {

    return(
        <img 
            className="image"
            src={product.image}
            alt={product.name}
        />
    )
} 

export default Image