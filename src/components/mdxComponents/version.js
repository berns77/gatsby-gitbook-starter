import React from 'react';

export default ({ url = 'https://staging.myon.com/', env }) => {
    return (
        <div>
            version {url}
            <pre>{JSON.stringify(env.INCOMING_HOOK_BODY, null, 2)}</pre>
        </div>
    );
};
