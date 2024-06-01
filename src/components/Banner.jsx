import { AiFillWarning } from "react-icons/ai"
import { IoIosCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
export default function Banner({ title, text, type, firstColor, secondColor }) {

    let icon;

    if (type == "error") icon = <IoIosCloseCircle />;
    else if (type == "warning") icon = <AiFillWarning />;
    else if (type == "info") icon = <BsFillInfoCircleFill />;
    else icon = <FaCheckCircle />;


    const styles = {
        backgroundColor: secondColor,
        color: firstColor
    }

    return (
        <div className={`banner`} style={styles}>
            <div className="icon-box">
                {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}