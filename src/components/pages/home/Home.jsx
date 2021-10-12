import { Fragment } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./Home.css";


export default function Home() {
    return (
        <Fragment>
            <Header />
            <div className="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-9 homepost">
                            <Posts/>
                        </div>
                        <div className="col-12 col-lg-3 homesidebar">
                            <Sidebar/>
                        </div>
                        </div>    
                </div>  
            </div>
        </Fragment>

    )
}
