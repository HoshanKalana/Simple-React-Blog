import Post from '../post/Post';
import './Posts.css';

export default function posts() {
    return (
        <div className="posts">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Post/>
                    </div>
                    <div className="col-6">
                        <Post/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Post/>
                    </div>
                    <div className="col-6">
                        <Post/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Post/>
                    </div>
                    <div className="col-6">
                        <Post/>
                    </div>
                </div>
            </div>
        </div>
    )
}
