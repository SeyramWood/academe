import React from "react";
import axios from "axios";
const useFetchData = url => {
    const initialRender = React.useRef(true);
    const [state, setState] = React.useState({
        data: null,
        loading: false
    });
    const getData = async () => {
        try {
            const res = await axios.get(url);
            setState({ data: res.data, loading: false });
        } catch (error) {
            setState({ data: null, loading: false });
        }
    };
    React.useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            setState(state => ({ data: state.data, loading: true }));
            getData();
        }
    }, [url]);

    return [state.data, state.loading];
};

export default useFetchData;
