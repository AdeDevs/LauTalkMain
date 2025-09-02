import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="profile-home">
      <section className="profile-top-bar">
        <p>My Talks</p>
        <ul className="top-bar-extra">
          <li className="latest-btn">Latest <span><img src="/assets/dropdown.png" alt="" /></span></li>
          <li className="ellip">...</li>
        </ul>
      </section>
      <section className="profile-main">
        <div className="profile-welcome">
          <h1>Welcome to your space</h1>
          <p>This is where you'll see fresh posts from <br /> friends and your marketplace.</p>
          <Link href="/profile/create-talks">Drop your first post now.</Link>
        </div>
      </section>
    </div>
  )
}