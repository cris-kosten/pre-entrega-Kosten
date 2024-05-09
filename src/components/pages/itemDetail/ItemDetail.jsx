import { CounterContainer } from "../../common/counter/CounterContainer"
import "./ItemDetail.css"


const ItemDetail = ({ item, onAdd }) => {
    return (
        <div>
            <div className={"containerItemDetail"}>
                <div className={"containerImage"}>
                    <img src={item.img} alt="" />
                </div>

                <div className={"containerDetail"}>
                    <h2 style={{ fontFamily: "monospace" }}>
                        <span style={{ fontSize: "22px" }}>Nombre: </span>{item.nombre}
                    </h2>

                    <h2 style={{ fontFamily: "monospace" }}>
                        <span style={{ fontSize: "22px" }}>Precio: </span>{item.precio}
                    </h2>

                    <h2 style={{ fontFamily: "monospace" }}>
                        <span style={{ fontSize: "22px" }}>Stock: </span>{item.stock}
                    </h2>
                </div>
            </div>

            <CounterContainer stock={item.stock} onAdd={onAdd} />

        </div>
    )
}

export default ItemDetail