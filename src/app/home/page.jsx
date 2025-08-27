"use client"
import { useEffect, useState } from "react"

export default function HomeFeed({ children }) {
    const [user, setUser] = useState({
        id: 1, name: "Daniel Boluwatife", follow: true, avatar: "/assets/dan.png"
    });

    const [post, setPost] = useState({
        id: 1, image: "/assets/sakirat.jpg", likes: `20,456`
    })

    const suggestedAccount = [
        { id: 1, name: "Salahudeen Shakirat", dept: "Computer Science", avatar: "/assets/sakirat.jpg" },
        { id: 2, name: "Batman Batman", dept: "Gotham", avatar: "/assets/bat.jpeg" },
        { id: 3, name: "Daniel Boluwatife", dept: "Computer Science", avatar: "/assets/dan.png" },
        { id: 4, name: "John Doe", dept: "Computer Science", avatar: "/assets/yemi.jpg" },
        { id: 5, name: "L", dept: "Death Note", avatar: "/assets/light.png" },
    ]

    const [isUserFollowed, setIsUserFollowed] = useState("Follow")
    const handleIsFollow = () => {
        if (user.follow === false) {
            setIsUserFollowed("Follow")
            setUser((prev) => {
                return { ...prev, follow: true }
            })
        } else if (user.follow === true) {
            setIsUserFollowed("Following")
            setUser((prev) => {
                return { ...prev, follow: false }
            })
        }
    }

    return (
        <section className="home-page">
            <section className="home-main">
                <div className="post">
                    <div className="post-profile">
                        <img src={user.avatar} alt="avatar" />
                        <ul>
                            <h1>{user.name}</h1>
                            <li>28 minutes ago</li>
                        </ul>
                        <p className="follow-btn" onClick={handleIsFollow}>{isUserFollowed}</p>
                    </div>
                    <div className="post-content">
                        <img src={post.image} alt="" />
                        <p>
                            Logo Design for Pinnacle <br />
                            Logo has been an Important part or brand Identity
                            <br /><br />
                            DM for your project
                        </p>
                    </div>
                    <div className="post-info">
                        <ul className="post-btns">
                            <li ><img src="/assets/heart.png" alt="icon" /></li>
                            <li><img src="/assets/comment.png" alt="icon" /></li>
                            <li><img src="/assets/repost.png" alt="icon" /></li>
                        </ul>
                        <span className="likes-counter">{post.likes} likes</span>
                        <span>View all comments</span>
                        <input type="text" className="add-cmnt" placeholder="Add your own comment..." />
                    </div>
                </div>
                <div className="post">
                    <div className="post-profile">
                        <img src={user.avatar} alt="avatar" />
                        <ul>
                            <h1>{user.name}</h1>
                            <li>28 minutes ago</li>
                        </ul>
                        <p className="follow-btn" onClick={handleIsFollow}>{isUserFollowed}</p>
                    </div>
                    <div className="post-content">
                        <img src={post.image} alt="" />
                        <p>
                            Logo Design for Pinnacle <br />
                            Logo has been an Important part or brand Identity
                            <br /><br />
                            DM for your project
                        </p>
                    </div>
                    <div className="post-info">
                        <ul className="post-btns">
                            <li ><img src="/assets/heart.png" alt="icon" /></li>
                            <li><img src="/assets/comment.png" alt="icon" /></li>
                            <li><img src="/assets/repost.png" alt="icon" /></li>
                        </ul>
                        <span className="likes-counter">{post.likes} likes</span>
                        <span>View all comments</span>
                        <input type="text" className="add-cmnt" placeholder="Add your own comment..." />
                    </div>
                </div>
                <div className="post">
                    <div className="post-profile">
                        <img src={user.avatar} alt="avatar" />
                        <ul>
                            <h1>{user.name}</h1>
                            <li>28 minutes ago</li>
                        </ul>
                        <p className="follow-btn" onClick={handleIsFollow}>{isUserFollowed}</p>
                    </div>
                    <div className="post-content">
                        <img src={post.image} alt="" />
                        <p>
                            Logo Design for Pinnacle <br />
                            Logo has been an Important part or brand Identity
                            <br /><br />
                            DM for your project
                        </p>
                    </div>
                    <div className="post-info">
                        <ul className="post-btns">
                            <li ><img src="/assets/heart.png" alt="icon" /></li>
                            <li><img src="/assets/comment.png" alt="icon" /></li>
                            <li><img src="/assets/repost.png" alt="icon" /></li>
                        </ul>
                        <span className="likes-counter">{post.likes} likes</span>
                        <span>View all comments</span>
                        <input type="text" className="add-cmnt" placeholder="Add your own comment..." />
                    </div>
                </div>
            </section>
            <section className="home-suggestions">
                <form>
                    <button><img src="/assets/srch.png" alt="" /></button>
                    <input type="text" placeholder="Search for Ladokites" />
                </form>
                <div className="suggested-accnts">
                    <div className="sgstd-nav">
                        <h1>Suggested for you <span>See All</span></h1>
                    </div>
                    {suggestedAccount.map((suggest, index) => {
                        return <div key={suggest.id} className="post-profile">
                            <div className="sgstd-profile">
                            <img src={suggest.avatar} alt="avatar" />
                            <ul>
                                <h1>{suggest.name}</h1>
                                <li>{suggest.dept}</li>
                            </ul>
                            </div>
                            <p className="follow-btn">Follow</p>
                        </div>
                    })}
                </div>
            </section>
        </section>
    )
}