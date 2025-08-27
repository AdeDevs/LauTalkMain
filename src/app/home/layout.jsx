import Link from "next/link";

export default function HomeLayout({ children }) {
    return (
        <div className="children">
            <div className="side-bar">
                <section className="side-bar-btns">
                    <Link href="/">Home Page</Link>
                    <Link href="/create-post" className="sdb-btn"><span><img src="/assets/create.png" alt="create" /></span>Create Post</Link>
                </section>
                <section className="side-bar-links">
                    <ul className="pmnt">
                        <li className="sdb-special">Payment</li>
                        <li><Link href="/payment">Make Payment</Link></li>
                        <li><Link href="/manuals">Get Manuals</Link></li>
                    </ul>
                    <ul className="mrktplace">
                        <li className="sdb-special">Marketplace</li>
                        <li><Link href="/marketplace"><span><img src="/assets/notif.png" alt="icon" /></span>All Products</Link></li>
                        <li><a href=""><span><img src="/assets/notif.png" alt="icon" /></span>Inbox</a></li>
                        <li><a href=""><span><img src="/assets/notif.png" alt="icon" /></span>Notifications</a></li>
                        <li><a href=""><span><img src="/assets/buy.png" alt="icon" /></span>Buying</a></li>
                        <li><a href=""><span><img src="/assets/sell.png" alt="icon" /></span>Selling</a></li>
                    </ul>
                </section>
            </div>
            <div className="content">
                <section className="top-bar">
                    <p>Recent Talks</p>
                    <ul className="top-bar-extra">
                        <li className="latest-btn">Latest <span><img src="/assets/dropdown.png" alt="" /></span></li>
                        <li>...</li>
                    </ul>
                </section>
                {children}
            </div>
        </div>
    );
}
