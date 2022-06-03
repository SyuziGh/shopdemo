import womanDress1 from '../../storage/womanDress-1.jpg'
import womanDress2 from '../../storage/womanDress-2.jpg'
import womanDress3 from '../../storage/womanDress-3.jpg'

export default function WomanDresses(){
    const dresses=[
        {price:'54$',
        src:womanDress1,},
        {price:'78$',
        src:womanDress2},
        {price:'40$',
        src:womanDress3}
    ]
    return(
        <div className="wrapper">
            <h3>Woman dresses</h3>
            <div className="container"> 
                {dresses.map((e)=>(
                    <div>
                        <img className="item" src={e.src} alt=""/>
                        <p className="price">price: {e.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
