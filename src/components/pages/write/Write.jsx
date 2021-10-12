import "./Write.css";

export default function Write() {
  return (
    <div className="write">
      <div className="container">
        <img
          className="writeimg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeform">
          <div className="writeformGroup">
            <label htmlFor="fileinput">
              <i class="writeicon fas fa-plus-circle"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeinput"
              autoFocus={true}
            />
          </div>
          <div className="writeformgroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeinput writetext"
            ></textarea>
          </div>
          <button className="writesubmit"> publish</button>
        </form>
      </div>
    </div>
  );
}
