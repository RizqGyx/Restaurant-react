import React from 'react'

function Footer() {
  return (
    <footer className="bg-white text-black/50 font-bold">
        <div className='footer w-11/12 mx-auto px-5 py-10 justify-between'>
            <aside>
                <img src="/Logo.png" alt="Logo Brand" className='h-[80px]'/>
                <h1 className='text-2xl font-bold text-orange-600'>westCorner</h1> 
                <p>PT.Western Corner<br/>Providing tasty food since 1992</p>
            </aside> 
            <nav>
                <header className="footer-title text-xl text-black">Company</header> 
                <a className="link link-hover" href='/#'>Home</a>
                <a className="link link-hover" href='/#about'>About Us</a>
                <a className="link link-hover" href='/#restaurant'>Restaurant</a>
                <a className="link link-hover">Book</a>
            </nav> 
            <nav>
                <header className="footer-title text-xl text-black">Company</header> 
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Receipt</a>
                <a className="link link-hover">Download</a>
            </nav> 
            <nav>
                <header className="footer-title text-xl text-black">Support</header> 
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Home Delivery</a>
            </nav>
            <nav>
                <header className="footer-title text-xl text-black">Stay Up to Date</header>
                <div className="join">
                    <input className="input input-bordered join-item bg-white" placeholder="Email"/>
                    <button className="btn join-item rounded-r-full bg-orange-600 border-none hover:bg-orange-700 text-white">Send</button>
                </div>
            </nav>
        </div>
        <div className='bg-orange-600 text-white p-5'>
            <h1 className='text-center font-bold'>© 2023 Copyright - Muhammad Rizki</h1>
        </div>
    </footer>
  )
}

export default Footer