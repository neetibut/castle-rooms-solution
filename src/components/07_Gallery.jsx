import Nook from "./08_Nook";
import PropTypes from "prop-types";

const Gallery = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>Gallery</h1>
      <p>Message for JSD7: {message1}</p>
      <Nook message1={message1} onReply={onReply} />
    </div>
  );
};

Gallery.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Gallery;
