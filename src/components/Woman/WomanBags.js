import womanBag1 from '../../storage/womanBag-1.jpg'
import womanBag2 from '../../storage/womanBag-2.jpg'
import womanBag3 from '../../storage/womanBag-3.jpg'

export default function WomanBags(){
    const bags=[
        {price:'32$',
        src:womanBag1,},
        {price:'20$',
        src:womanBag2},
        {price:'25$',
        src:womanBag3}
    ]
    return(
        <div className="wrapper">
            <h3>Woman Bags</h3>
            <div className="container"> 
                {bags.map((e)=>(
                    <div>
                        <img className="item" src={e.src} alt=""/>
                        <p className="price">price: {e.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}