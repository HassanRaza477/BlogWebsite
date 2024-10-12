import Link from "next/link";

export default function Responsive(){
    return(
        <div className="main-container">

            
            <div className="card">
                <div className="image"><img src="/images/destination-1.jpg"></img></div>
                <h1 className="title">Italy</h1>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Similique illo quia explicabo dolor sit amet</p>
                     <Link href="italy"><button className="btn">Read More</button></Link>
            </div>  

            <div className="card">
                <div className="image"><img src="/images/destination-2.jpg"></img></div>
                <h1 className="title">Australia</h1>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Similique illo quia explicabo dolor sit amet</p>
                     <Link href="australia"><button className="btn">Read More</button></Link>
            </div> 

            <div className="card">
                <div className="image"><img src="/images/destination-3.jpg"></img></div>
                <h1 className="title">Spain</h1>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Similique illo quia explicabo dolor sit amet</p>
                     <Link href="spain"><button className="btn">Read More</button></Link>
            </div> 

            <div className="card">
                <div className="image"><img src="/images/dubai.avif"></img></div>
                <h1 className="title">Dubai</h1>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Similique illo quia explicabo dolor sit amet</p>
                     <Link href="dubai"><button className="btn">Read More</button></Link>
            </div> 

            <div className="card">
                <div className="image"><img src="/images/new.avif"></img></div>
                <h1 className="title">Newzland</h1>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Similique illo quia explicabo dolor sit amet</p>
                     <Link href="newzland"><button className="btn">Read More</button></Link>
            </div> 

            <div className="card">
                <div className="image"><img src="/images/travel.jpg"></img></div>
                <h1 className="title">Turkey</h1>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Similique illo quia explicabo dolor sit amet</p>
                     <Link href="turkey"><button className="btn">Read More</button></Link>
            </div> 
        </div>
    )
}