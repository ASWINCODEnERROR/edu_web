import React from 'react'
import './Plans.css'
function Plans() {
    const pricingData = [
        {
            title:'Regular Member',
            price:'25000/',
            duration:'6-month',
            color:'#fff',
            features:[
                'Unlimited access to the courses',
                'Customer Support ',
                'Personal Monitor',
                'Standard Options',

            ]
        },
        {
            title:'Premium Member ',
            price:'35000/',
            duration:'12-month',
            color:'#6f55f2',
            features:[
                'Unlimited access to the courses',
                'Customer Support ',
                'Personal Monitor',
                'Standard Options',

            ]
        },
        {
            title:'standard Member',
            price:'30000/',
            duration:'6-month',
            color:'#fff',
            features:[
                'Unlimited access to the courses',
                'Customer Support ',
                'Personal Monitor',
                'Standard Options',

            ]
        },

    ]
  return (
     <div className="container">
        <div className="pricing_top">
            <h2 className='selection_title'>Premium Pricing Plans</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab repudiandae aliquam dolore veniam, doloremque nihil, delectus voluptatem dicta porro sapiente expedita laudantium architecto esse laborum repellat quasi. Nostrum, reiciendis.</p>
        </div>
        <div className="pricing_wrapper">
            {pricingData.map((pricingItem, index) => (
                <div className="pricing_item" key={index}>
                    <div className="pricing_card-top" style={{background:pricingItem.color}}>
                        <h2 className='section_title'>{pricingItem.title}</h2>
                        <h2 className='pricingItem.title'>
                            {pricingItem.price} <span>{pricingItem.duration}</span>
                        </h2>
                    </div>
                    <div className="services">
                        <ul>
                            {pricingItem.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                            
                        </ul>
                        <button className='register-btn'>join</button>
                    </div>

                </div>
            ))}
        </div>
     </div>
  )
}

export default Plans
