import { useParams} from "react-router-dom";

import { connect } from "react-redux";
import { InAction, DeAction } from "../../actions";

import ravi from "../Images/logo1.png";
import audio from "../Audio/Audio File.mp3";
import video from "../Video/video.mp4";
import Spinner from "react-bootstrap/Spinner";


const Testing = ({ local_variable, InAction, DeAction }) => {
  const params = useParams();
  const { name } = params;

  const multiple = (e) => {
    console.log(e.target.size, e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      console.log("Selected file:", e.target.files[i].name);
    }
  };

  return (
    <div className="testingtainer">
      <center>
        <h1>
          {" "}
          Testing {name} {local_variable}
        </h1>
        <input type="file" onChange={multiple} multiple />
        <button
          style={{
            display: "inline",
            alignItems: "flex-start",
            height: "45px",
            width: "140px",
            marginBottom: "10px",
            color: "#fffff",
            background: "violet",
            borderRadius: "8px",
          }}
          onClick={InAction}
        >
          Increment
        </button>
        <button
          style={{
            display: "inline",
            alignItems: "flex-start",
            height: "45px",
            width: "140px",
            marginBottom: "10px",
            background: "violet",
            borderRadius: "8px",
          }}
          onClick={DeAction}
        >
          Decrement
        </button>
        <br />
      </center>
      <center>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div>
          <img src={ravi} alt="" />
          <br />
          <a
            href={ravi}
            download="raviImage"
            height="45"
            width="150"
            style={{
              background: "#032cfc",
              textDecoration: "none",
              padding: "7px",
              color: "#ffffff",
              marginTop: "10px",
              borderRadius: "4px",
            }}
          >
            click here to download
          </a>
        </div>
        <audio controls>
          <source src={audio} type="audio/ogg" />
        </audio>
        <video controls height="300" width="300">
          <source src={video} type="video/mp4" />
        </video>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_variable: state,
});

export default connect(mapStateToProps, { InAction, DeAction })(Testing);
