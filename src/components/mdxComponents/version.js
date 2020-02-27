import React, { useState, useEffect } from 'react';

export default ({ url = 'https://staging.myon.com/' }) => {
    const [version, setVersion] = useState('unknown');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url);
            setVersion(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            version {url} {version}
        </div>
    );
};
