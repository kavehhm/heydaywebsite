import './Founder-Section.css'
import kaveh from '../kaveh.jpg'

const Founder = () => {

    return (

        <div className="background1">
            <div className="category">
                <div className="summary">
                    <img className='kavehpic' src={kaveh} alt="founder"/>
                    <p className='name'>KAVEH MALEKZADEH</p>
                    <p className='desc'>FOUNDER</p>
                </div>

                <div className="details">
                    <p className='meet'>MEET THE FOUNDER</p>
                    <p className='writing'>Founded by Kaveh Malekzadeh who has spent 2 years developing and optimizing for Web3 projects online. </p>
                    <p className='writing'>As a result of being involved in many companies and projects, Kaveh has found many different talents from across the world. Our team prioritizes the client and will stop at nothing to make sure their demands are met.</p>
                    <p className='name2'>- Founder</p>
                </div>
            </div>
        </div>
    )
}

export default Founder