import React from 'react'

function Stats() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <h1 className='fs-1 '>Trust with confidence </h1>

                        <h2 className='fs-3 pt-5'>Customer-first always</h2>
                        <p className='fs-5 text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments. </p>

                        <h2 className='fs-3 pt-4'>No spam or gimmicks</h2>
                        <p className='fs-5  text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                        <h2 className='fs-3 pt-4'>The Zerodha universe</h2>
                        <p className='fs-5  text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                        <h2 className='fs-3 pt-4 '>Do better with money</h2>
                        <p className='fs-5  text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>

                    </div>
                    <div className="col-6 mt-5 p-5">
                        <img src="\media\images\ecosystem.png" alt="" style={{width:"90%"}} />
                         
                         <div>
                            <a href="" className='mx-5 fs-5' style={{textDecoration:"none"}}>Explore Our Products<i class="fa-solid fa-arrow-right"></i></a>
                            <a href="" className='mx-5 fs-5'style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;