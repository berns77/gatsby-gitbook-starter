import React, { useState, useEffect } from 'react';

export default ({ url = 'https://staging.myon.com/' }) => {
    const [version, setVersion] = useState('unknown');

    useEffect(async () => {
        const result = await fetch(url);

        console.log(result);

        setVersion('1.0');
    });

    return (
        <div>
            version {url} {version}
        </div>
    );
};
