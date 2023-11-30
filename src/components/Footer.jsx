import React from 'react'

function Footer() {
  return (
    <footer class="bg-base-200">
        <div className='footer w-11/12 mx-auto px-5 py-10 justify-between'>
            <aside>
                <img src="/Logo.png" alt="Logo Brand" className='h-[80px]'/>
                <p>PT.Western Corner<br/>Providing tasty food since 1992</p>
            </aside> 
            <nav>
                <header class="footer-title">Company</header> 
                <a class="link link-hover">Home</a>
                <a class="link link-hover">About Us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Menu</a>
            </nav> 
            <nav>
                <header class="footer-title">Company</header> 
                <a class="link link-hover">FAQ</a>
                <a class="link link-hover">Receip</a>
                <a class="link link-hover">Download</a>
                <a class="link link-hover">Contact</a>
            </nav> 
            <nav>
                <header class="footer-title">Support</header> 
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Feedback</a>
                <a class="link link-hover">Home Delivery</a>
            </nav>
            <nav>
                <header class="footer-title">Stay Up to Date</header>
                <div class="join">
                    <input class="input input-bordered join-item" placeholder="Email"/>
                    <button class="btn join-item rounded-r-full">Send</button>
                </div>
            </nav>
        </div>
        <div className='bg-[#1F222A] p-5'>
            <h1 className='text-center font-bold'>© 2023 Copyright - Muhammad Rizki</h1>
        </div>
    </footer>
  )
}

export default Footer