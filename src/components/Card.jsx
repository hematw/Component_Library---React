
export default function Card({ icon, allClassName, title, text }) {
    return (
        <div className={`card ${allClassName}`}>
            <div className="icon">
                {icon}
            </div>

            <h3>{title}</h3>
            <p>{text} </p>
        </div>
    )
}