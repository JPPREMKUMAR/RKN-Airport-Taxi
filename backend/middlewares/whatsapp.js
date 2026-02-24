



const whatsapp = () => {


    fetch("https://backend.chatmitra.com/api/client/send_template", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 6d9d8d3cc789164d20a74b10b6bc40d5:cc2cb4bfc7076097cb06ab94a72cccd3bf757b25845c05261f409d22aa96762ad6000936f535a11e8fcdbfb023fb63001c82f9b5ddf9555c167be991c5e7a6dd87667092fce76604e1a474bef1b9bcb3449fa08c82dc4d8dcb547079a3419d2b2db700116b771e992b92a8c6c1ea0c8c2680795973f9028b28941ace261b52be9a516bc74b2a01787c91913267c1b2e9cb6e7f7ea0eaadfe9719fa9bef744b920145a895e27680b120fcbadea8d7666f3bab2a46e8658884a430a6a122af75a3"
        },
        body: JSON.stringify({
            templateName: "undefined",
            language: "undefined",
            phoneNumber: "YOUR_PHONE_NUMBER",
            customer_name: "YOUR_CUSTOMER_NAME",
            components: []
        })
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
}




export default whatsapp