import React from 'react';

export default ({ url = 'https://staging.myon.com/', env = {} }) => {
    const { INCOMING_HOOK_BODY } = env;
    console.log(INCOMING_HOOK_BODY);
    return (
        <div>
            version {url}
            <pre>{JSON.stringify(INCOMING_HOOK_BODY, null, 2)}</pre>
        </div>
    );
};
