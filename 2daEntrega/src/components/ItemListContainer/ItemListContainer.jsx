import { useState, useEffect } from "react";
import { getProducts } from "../../services";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const params = useParams();
    console.log(params)

    useEffect (() => {
        getProducts().then((response) => {
            setItems(response);
        }

        )
    }, []);

    return <ItemList items = {items} />
}

export default ItemListContainer;