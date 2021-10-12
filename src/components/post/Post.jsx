import './Post.css';

export default function Post() {
    return (
        <div className="post"> 
            <img className="postimg" src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <div className="postinfo">
                <div className="postcats">
                    <span>Music</span>
                    <span>Life</span>
                </div>
                <h5 className="postTitle"> Lorem ipsum dolor sit amet</h5>
                <hr />
                <p className="postDate">1 hour Ago</p>
            </div>
            <div className="postdesc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, illo, inventore nihil placeat minima nemo sed fuga molestias iste aut neque tempora quibusdam odio reprehenderit cupiditate! Optio, non soluta!</p>
            </div>
        </div>
    )
}
