function Card (props) {
    return (
<div>
    <h2> Hola {props.title}</h2>
    <p>Sabemos que tu color favorito es {props.color} </p>
</div>
    )
}

export default Card