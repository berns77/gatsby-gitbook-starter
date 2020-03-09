import React from 'react';

export default ({ url = 'https://staging.myon.com/', version = 2 }) => {
    const stage = process.env;

    console.log(stage);

    return (
        <div>
            version {url} {version}
            <pre>{JSON.stringify(stage, null, 2)}</pre>
        </div>
    );
};
