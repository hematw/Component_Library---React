import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ children, allClassName, title, text }) {
    return (
        <div className={`card ${allClassName}`}>
            <div className="icon">
                <HiOutlineCloudUpload />
            </div>

            <h3>{title}</h3>
            <p>{text} </p>
        </div>
    )
}