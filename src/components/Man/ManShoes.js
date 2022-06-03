import manShoes1 from '../../storage/manShoes-1.jpg'
import manShoes2 from '../../storage/manShoes-2.jpg'
import manShoes3 from '../../storage/manShoes-3.jpg'

export default function manShoes(){
    const Shoess=[
        {price:'44$',
        src:manShoes1,},
        {price:'59$',
        src:manShoes2},
        {price:'50$',
        src:manShoes3}
    ]
    return(
        <div className="wrapper">
            <h3>Man Shoes</h3>
            <div className="container"> 
                {Shoess.map((e)=>(
                    <div>
                        <img className="item" src={e.src} alt=""/>
                        <p className="price">price: {e.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
