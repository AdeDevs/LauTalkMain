import Link from "next/link";

export default function ProfileLayout({ children }) {
  return (
    <div className="profile-page">
      <div className="profile-side-bar">
        <Link className="profile-btn" href="/profile">My Talks</Link>
        <ul>
          <h1>Talks</h1>
          <Link href="/profile/create-talks"><span><img src="/assets/create.png" alt="" /></span> Create Talks</Link>
        </ul>
        <ul>
          <h1>Payment</h1>
          <Link href="/profile/payment">Make Payment</Link>
        </ul>
      </div>
      <div className="profile-content">
        {children}
      </div>
    </div>
  );
}
