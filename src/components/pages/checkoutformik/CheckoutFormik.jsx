import { Button, TextField } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup";


export const CheckoutFormik = () => {

    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            nombre: "",
            telefono: "",
            email: "",
            constraseña: "",
            confirmarContraseña: "",
        },


        onSubmit: (x) => {
            console.log(x)
        },

        //formularion con validaciones..
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required("campo obligatorio")
                .min(3, "minimo 3 caracteres"),
            telefono: Yup.number()
                .required("campo obligatorio")
                .min(6),
            email: Yup.string()
                .email("email invalido")
                .required("campo obligatorio"),
            contraseña: Yup.string()
                .required("campo obligatorio")
                .matches(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, "Al menos una mayuscula se requiere"),
            confirmarContraseña: Yup.string()
                .required("campo obligatorio")
                .oneOf([Yup.ref("contraseña")], "la contraseña no coinciden"),
        }),
        validateOnChange: false

    })

    // console.log(errors) // objeto vacio {}



    return (

        <div style={{ padding: "100px", }}>

            <form onSubmit={handleSubmit}>

                <TextField
                    variant="outlined"
                    type="text"
                    label="Nombre"
                    onChange={handleChange}
                    name="nombre"
                    error={errors.nombre ? true : false}
                    helperText={errors.nombre} />
                {/* <input type="text" /> */}

                <TextField
                    variant="outlined"
                    type="text"
                    label="Telefono"
                    onChange={handleChange}
                    name="telefono"
                    error={errors.telefono ? true : false}
                    helperText={errors.telefono}
                />

                <TextField
                    variant="outlined"
                    type="text"
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    error={errors.email ? true : false}
                    helperText={errors.email} />

                <TextField
                    variant="outlined"
                    type="text"
                    label="Contraseña"
                    onChange={handleChange}
                    name="contraseña"
                    error={errors.contraseña ? true : false}
                    helperText={errors.contraseña} />

                <TextField
                    variant="outlined"
                    type="text"
                    label="Confirmar"
                    onChange={handleChange}
                    name="confirmarContraseña"
                    error={errors.confirmarContraseña ? true : false}
                    helperText={errors.confirmarContraseña} />

                <Button
                    variant="contained"
                    type="submit">Enviar
                </Button>
            </form>

        </div>
    )
}

export default CheckoutFormik