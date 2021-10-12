import Singlepost from '../../singlepost/Singlepost';
import Sidebar from '../../sidebar/Sidebar';
import './Single.css';

export default function single() {
    return (
        <div className="single">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                    <Singlepost />
                    </div>
                    <div className="col-3 singlesidebar">
                    <Sidebar/>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
