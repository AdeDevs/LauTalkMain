"use client";

import Link from "next/link";
import { useState, useEffect } from "react"
// import NewShit from "../../../../lt_dashboard/src/app/layout"

export default function NavBar() {
    const [isMenuActive, setIsMenuActive] = useState(false)

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }
    useEffect(() => {
        if (isMenuActive) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isMenuActive])
    return (
        <div >
            <div className="parent">
                <div className="box logo">
                    <h1><img src="/assets/lautalk.png" alt="" /></h1>
                </div>
                <div className="box nav">
                    <h1>Salahudeen Sakirat</h1>
                    <ul className="links">
                        <li>Home</li>
                        <li>Marketplace</li>
                    </ul>
                    <ul className="btns">
                        <form>
                            <input type="text" />
                        </form>
                        <li><img src="/assets/bell.png" alt="" /></li>
                        <li><img src="/assets/message.png" alt="" /></li>
                        <li><img src="/assets/cart.png" alt="" /></li>
                        <li className="avt"><img src="/assets/avatar.jpg" alt="" /></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}