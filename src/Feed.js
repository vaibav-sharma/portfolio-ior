import React from "react"
import MessageSender from "./MessageSender";
import "./Feed.css"
import Reel from "./Reel"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <Reel />
            <MessageSender />

            <Post 
                profilePic="https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"
                message="This works! WOW!"
                timestamp="This is a timestamp"
                username="Vaibav Sharma"
                image="https://wallpapercave.com/wp/wp9413100.jpg"
            />

            <Post 
                profilePic="https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"
                message="This works! WOW!"
                timestamp="This is a timestamp"
                username="Vaibav Sharma"
                image="https://wallpapercave.com/wp/wp9413100.jpg"
            />

        </div>
    );
}

export default Feed
