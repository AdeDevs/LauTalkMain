"use client"
import "./styles/reset.css"
import "./styles/index.css"
import "./styles/home.css"
import "./styles/profile.css"
import Link from "next/link";
import { useState } from "react";

// export const metadata = {
//   title: "LauTalk",
//   description: "LauTalk Social Media App",
//   icons: {
//     icon: "/assets/lautalk.png"
//   },
// };

export default function RootLayout({ children }) {
  const [activeProfileMenu, setActiveProfileMenu] = useState(false)
  const toggleProfileMenu = () => {
    setActiveProfileMenu(!activeProfileMenu)
  }
  const conditionalToggle = () => {
    if (setActiveProfileMenu === true) {
      setActiveProfileMenu(false)
    } else {
      setActiveProfileMenu(false)
    }
  }
  return (
    <html lang="en">
      <head>
        <title>LauTalk</title>
        <meta name="description" content="LauTalk Social Media Site" />
        <link rel="icon" href="/assets/lautalk.png" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <script defer type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script defer noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body>
        <div className="parent">
          <div className="logo">
            <Link onClick={conditionalToggle} href="/"><img src="/assets/lautalk.png" alt="" /></Link>
          </div>
          <div className="nav">
            <h1>Salahudeen Sakirat</h1>
            <ul className="nav-links">
              <li><Link onClick={conditionalToggle} href="/">Home</Link></li>
              <li><Link onClick={conditionalToggle} href="/marketplace">Marketplace</Link></li>
            </ul>
            <ul className="btns">
              <form>
                <input type="text" placeholder="Want to make payment or purchase anything?" />
                <button id="srch-btn"></button>
              </form>
              <li><img src="/assets/bell.png" alt="" /></li>
              <li><img src="/assets/message.png" alt="" /></li>
              <li><img src="/assets/cart.png" alt="" /></li>
              <p onClick={toggleProfileMenu} href="/profile"><li className="avt"><img src="/assets/avatar.jpg" alt="avatar" /></li></p>
              <div className={`profile-overlay ${activeProfileMenu ? "active" : ""}`} onClick={toggleProfileMenu}></div>
              <div className={`profile-options ${activeProfileMenu ? "active" : ""}`}>
                {/* <img src="/assets/avatar.jpg" alt="avatar" /> */}
                <ul>
                  <Link onClick={toggleProfileMenu} href="/profile"><span><img src="/assets/profile.png" alt="icon" /></span>View Profile</Link>
                  <Link onClick={toggleProfileMenu} href=""><span><img src="/assets/profile.png" alt="icon" /></span>Edit Profile</Link>
                  <Link onClick={toggleProfileMenu} href=""><span><img src="/assets/profile.png" alt="icon" /></span>Notifications</Link>
                  <Link onClick={toggleProfileMenu} href=""><span><img src="/assets/profile.png" alt="icon" /></span>Course Rep Login</Link>
                  <Link onClick={toggleProfileMenu} href="" className="log-btn">Log Out</Link>
                  {/* <Link href="" className="log-btn"><span><img src="/assets/group.png" alt="icon" /></span>Log Out</Link> */}
                </ul>
              </div>
            </ul>
          </div>
          <div className="box oga">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
