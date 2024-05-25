import { AiFillWarning } from "react-icons/ai"

export default function Banner({ title, text, allClassName }) {
    return (
        <div className={`banner ${allClassName}`}>
            <div className="icon-box">
                <AiFillWarning />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}