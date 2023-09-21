import proptypes from "prop-types";
import { useSnapshot } from "valtio";
import state from "@store";

function CustomButton({ type, title, handleClick, customStyles }) {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    } else if (type === "outlined") {
      return {
        backgroundColor: "transparent",
        color: "#000",
        border: "1px solid #000",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

CustomButton.propTypes = {
  type: proptypes.string,
  title: proptypes.string,
  handleClick: proptypes.func,
  customStyles: proptypes.string,
};

export default CustomButton;
