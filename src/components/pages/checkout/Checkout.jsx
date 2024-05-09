import { useState } from "react"
import { Button, TextField } from "@mui/material";

const Checkout = () => {

    const [info, setInfo] = useState({
        nombre: "",
        telefono: "",
        email: "",

    });

    const handleChange = (event) => {
        let { name, value } = event.target //desestructuramos
        setInfo({ ...info, [name]: value }) // esta es la formula correcta de la refacturarizacion
    }

    const handleSubmit = (event) => {
        event.preventDefault() // permite q no se actualice la pagina
        console.log(info)
    };


    return (
        <div style={{ padding: "100px", }}>
            <form onSubmit={handleSubmit}>

                <TextField
                    variant="outlined" type="text" label="Nombre" onChange={handleChange} name="nombre" />

                <TextField
                    variant="outlined" type="text" label="Telefono" onChange={handleChange} name="Telefono" />

                <TextField
                    variant="outlined" type="text" label="Email" onChange={handleChange} name="email" />

                <Button variant="contained" type="submit">Enviar</Button>
            </form>
        </div>
    )
}

export default Checkout