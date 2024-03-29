import React, { useState } from 'react';
import axios from 'axios';

const ReadButton = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8000/read',);
            console.log(response.data);
            setLoading(false);
        }
        catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <button onClick={handleClick} disabled={loading}>
            {loading ? 'Sending...' : 'Read'}
        </button>
    );
};

export default ReadButton;