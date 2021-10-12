import "./Sidebar.css";
import person from "../../imgs/person.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <h4 className="siderbarTitle">About Me</h4>
        <img className="img-fluid" src={person} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum qui
          dolore corrupti iusto, aut suscipit similique quae cupiditate. Debitis
          aperiam consequatur nam ratione error similique asperiores quia
          excepturi quasi veritatis.
        </p>
      </div>
      <div className="sidebaritem">
        <h4 className="siderbarTitle">Categories</h4>
        <ul className="list-group">
          <li className="list-group-item">Life</li>
          <li className="list-group-item">Music</li>
          <li className="list-group-item">Style</li>
          <li className="list-group-item">Sport</li>
          <li className="list-group-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <h4 className="siderbarTitle">Follow us</h4>
        <div className="sidebarSocial">
          <i className="fab fa-facebook icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i class="fab fa-pinterest icon"></i>
          <i class="fab fa-instagram-square icon"></i>
        </div>
      </div>
    </div>
  );
}
