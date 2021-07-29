import React, {useState, useEffect} from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import axios from 'axios';
import {BACKEND_URL, SEND_EMAIL} from "../CONSTANTS";

function CreateMessageApp(props) {

    const [response, setResponse] = useState(null);
    const messages = useState(null)
    console.log("INIT")

    const data = {
        requestingNode: "Alice"
    }

    // axios.get(
    axios.post(
        BACKEND_URL + '/messages',
        data,
        {headers: {'Content-Type': 'application/json'}}
    ).then(res => {
        // const messages = res.data.messages;
        const messages = res.data.messages;
        // const messages = res.data.messages;

        // if (gameId !== null) {
        console.log("Hello, can you hear me?")
        console.log(messages)
        if (messages !== null) {
            const secret_msg = "CONSOLE LOGGED FROM /messages";
            console.log(secret_msg);

            if (!SEND_EMAIL) {
                alert(secret_msg);
            }

            setResponse(res);
        }
    });
    return (
        <p>Hello? {messages}{response}</p>
    )
}
export default withRouter(CreateMessageApp);
