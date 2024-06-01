
export default function Card({ icon, title, text, firstColor, secondColor, textColor }) {

    const styles = {
        backgroundColor: secondColor,
        color: firstColor
    }

    return (
        <div className={`card`}
            style={{
                backgroundColor: secondColor || "#fff",
                color: textColor
            }}>
            <div className="icon"
                style={{
                    backgroundColor: firstColor
                }}>
                {icon}
            </div>

            <h3>{title}</h3>
            <p>{text} </p>
        </div>
    )
}