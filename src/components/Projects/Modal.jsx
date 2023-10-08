import { GiCancel } from "react-icons/gi";
import "./Work.scss";

const Modal = ({ video_link, setModal }) => {
  console.log(video_link);
  return (
    <div className="modal">
      <div className="modal-content">
        <GiCancel
          className="w-6 h-6 cursor-pointer text-red-600"
          onClick={() => setModal(false)}
        />
        {video_link ? (
          <video controls className="w-[95%] h-[90%] m-auto">
            <source src={video_link}></source>
          </video>
        ) : (
          <h2 className="text-red-600">No video here</h2>
        )}
      </div>
    </div>
  );
};

export default Modal;
