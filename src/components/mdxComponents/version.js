import React from 'react';

export default ({ url = 'https://staging.myon.com/', version = 2 }) => {
    const stage = process.env.INCOMING_HOOK_BODY || 'unknown';

    console.log(stage);

    return (
        <div>
            version {url} {version}
            <pre>{JSON.stringify(stage)}</pre>
        </div>
    );
};
