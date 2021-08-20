import "../App.css"

const Button = ({text, openLinks, color}) => {
    return (
        <div>
            <button className='searchStyle'
            style={{ backgroundColor: color}}
            onClick={openLinks}>
                {text}
            </button>
        </div>
    )
}

export default Button
