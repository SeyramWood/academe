import React from "react";
import axios from "axios";
const fetchData = url => {
    const [state, setState] = React.useState({ response: [], loading: true });
    const getData = async () => {
        try {
            const res = await axios.get(url);
            setState({ response: res.data, loading: false });
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        setState(state => ({ response: [], loading: true }));
        getData();
    }, [url]);
    return [state.response, state.loading];
};

export default fetchData;
