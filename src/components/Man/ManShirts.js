import manShirt1 from '../../storage/manShirt-1.jpg'
import manShirt2 from '../../storage/manShirt-2.jpg'
import manShirt3 from '../../storage/manShirt-3.jpg'

export default function manShirts(){
    const shirts=[
        {price:'54$',
        src:manShirt1,},
        {price:'38$',
        src:manShirt2},
        {price:'40$',
        src:manShirt3}
    ]
    return(
        <div className="wrapper">
            <h3>Man Shirts</h3>
            <div className="container"> 
                {shirts.map((e)=>(
                    <div>
                        <img className="item" src={e.src} alt=""/>
                        <p className="price">price: {e.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
