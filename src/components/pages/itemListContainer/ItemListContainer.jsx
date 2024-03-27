import { AirplaneTicketTwoTone } from "@mui/icons-material";

const ItemListContainer = ({ gretting }) => {
    return (
        <div>
            <h2
                style={{
                    color: "dodgerblue",
                    textAlign: "center",
                    fontFamily: AirplaneTicketTwoTone,
                }}
            >
                {gretting}
            </h2>
        </div>
    );
};

export default ItemListContainer;
