import React from 'react';

export default ({ url = 'https://staging.myon.com/', env }) => {
    return (
        <div>
            version {url}
            <pre>{JSON.stringify(env, null, 2)}</pre>
        </div>
    );
};
