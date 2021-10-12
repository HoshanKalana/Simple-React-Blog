import "./Singlepost.css";

export default function singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          className="singlepostimg"
          src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <h1 className="singleposttitle">
          Lorem ipsum dolor sit amet.
          <div className="singlepostedit">
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author : <b>Kalana</b>
          </span>
          <span> 1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione
          voluptas ipsam repudiandae, earum facere iure obcaecati soluta
          assumenda explicabo reprehenderit perferendis, dolor quod velit harum
          id ex, beatae et? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dolorem accusamus aut laborum necessitatibus omnis et nihil
          cumque, libero eveniet, architecto obcaecati dolorum esse in fuga
          repellendus repellat natus. Odio, quibusdam. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Quia eius eveniet, numquam
          accusamus incidunt ut rem reiciendis, excepturi voluptatum harum
          facilis aperiam aspernatur amet ad laudantium perspiciatis id alias
          enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magni.
          Magni, fuga. Magnam impedit excepturi eos eum laboriosam dolores odit
          veritatis quibusdam? Quia quidem saepe natus reprehenderit ullam vel
          cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet amet architecto blanditiis, deserunt labore ducimus
          praesentium vero reiciendis minima accusantium dolorum fugit
          consectetur voluptate optio, tempora omnis magnam nam debitis! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi,
          porro nobis illum magni reprehenderit. Enim, exercitationem dolorum
          sit corrupti provident necessitatibus et, ullam est, consequuntur eius
          doloremque quod cum!
        </p>
      </div>
    </div>
  );
}
