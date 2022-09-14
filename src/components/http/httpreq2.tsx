import { useState, useEffect } from "react";



function Http(props: any) {
    const [imageToShow, setImageToShow] = useState("");
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState("");


    useEffect(() => {
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((responseJson) => {
                setImageToShow(responseJson.message);
                setLoading(false);
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });


    }, []);

    const handleClick =  () => {
        setLoading(true);
        try {
            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
            };
            fetch('https://reqres.in/api/posts', requestOptions)
                .then(response => response.json())
                .then(data => setResponse(data.id));
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    return <div>
        <img src={imageToShow} alt="" />
        <button onClick={handleClick}>Click ME!</button>
        <h3>{response}</h3>
    </div>
}

export default Http;