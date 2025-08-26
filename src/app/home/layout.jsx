// app/home/layout.jsx
// import HomeSidebar from "@/components/HomeSidebar";

import Link from "next/link";

export default function HomeLayout({ children }) {
  return (
    <div className="children">
            <div className="side-bar">
                <ul>
                    <li><Link href="/"> home </Link></li>
                    <li><Link href="/marketplace"> market </Link></li>
                    <li><Link href="/create-post"> posts</Link></li>
                </ul>
            </div>
            <div className="content">
                <section className="child uno">
                    <h1>aro meta</h1>
                </section>
                {children}
            </div>
           </div>
  );
}
