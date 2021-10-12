import "./Header.css";
import bgimg from './bgimg.jpg';


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <h3>React & Node</h3>
        <h1>Blog</h1>
      </div>
      <div className="headerImg">
          <img src={bgimg} alt="" />
      </div>
    </div>
  );
}
