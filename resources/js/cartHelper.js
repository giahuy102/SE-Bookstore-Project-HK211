export const addToCart = (id, t) => {
    axios
        .post("/api/cart/store", {
            data: { book_id: id },
        })
        .then((responde) => {
            if (responde.status == 200) {
                t.$notify({
                    type: "success ",
                    group: "foo",
                    title: "Notifications",
                    text: responde.data,
                });
                console.log(responde.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    t.$root.$emit("changeTotalAmount", 1);
}