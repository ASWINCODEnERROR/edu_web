import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

function Community() {
    const handleClick = () => {
        window.open('https://www.google.com/search?q=whatsapp+web&rlz=1C1YTUH_enIN1039IN1039&oq=wh&gs_lcrp=EgZjaHJvbWUqDggEEEUYJxg7GIAEGIoFMg8IABBFGDkYgwEYsQMYgAQyBggBEEUYPDIOCAIQRRgnGDsYgAQYigUyBggDEEUYOzIOCAQQRRgnGDsYgAQYigUyDQgFEAAYgwEYsQMYgAQyDQgGEAAYgwEYsQMYgAQyDQgHEAAYgwEYsQMYgATSAQg1NTg1ajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8')
    }
  return (
<div className="container">
    <div className="start-wrapper">
        <div className="start-img">
            <img src={tc} alt="" />
        </div>
        <div className="start-content">
            <h2 className='setion-title'>Join Our Free Tech Community</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis excepturi aut consectetur delectus culpa provident sunt dolorem, a sed vitae rem similique minus. Suscipit blanditiis autem harum corporis dolor consequatur.</p>
        <button className='register-btn' onClick={handleClick}>Join Now</button>
        </div>
    </div>
</div>
  )
}

export default Community
