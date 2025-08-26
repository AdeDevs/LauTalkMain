import "./styles/reset.css"
import "./styles/index.css"
import NavBar from "./nav/page";
import Link from "next/link";

export const metadata = {
  title: "LauTalk",
  description: "LauTalk Social Media App",
  icons: {
    icon: "/assets/lautalk.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

        <script defer type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script defer noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body>
        <div className="parent">
          <div className="box logo">
            <h1><img src="/assets/lautalk.png" alt="" /></h1>
          </div>
          <div className="box nav">
            <h1>Salahudeen Sakirat</h1>
            <ul className="links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
            </ul>
            <ul className="btns">
              <form>
                <input type="text" />
              </form>
              <li><img src="/assets/bell.png" alt="" /></li>
              <li><img src="/assets/message.png" alt="" /></li>
              <li><img src="/assets/cart.png" alt="" /></li>
              <Link href="/profile"><li className="avt"><img src="/assets/avatar.jpg" alt="" /></li></Link>
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
