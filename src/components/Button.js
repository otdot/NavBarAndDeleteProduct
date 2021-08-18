import "../App.css"

const Button = ({text, openLinks, color}) => {
    return (
        <button className='searchStyle'
        style={{ backgroundColor: color}}
        onClick={openLinks}>
            {text}
        </button>
    )
}

export default Button
