export default function Badge({ children, allClassName }) {
    return (
        <div
            className={`badge ${allClassName}`}>
            {children}
        </div>
    )
}