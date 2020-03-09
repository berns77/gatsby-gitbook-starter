import React from 'react';

export default ({ url = 'https://staging.myon.com/', env = {} }) => {
    const { INCOMING_HOOK_BODY } = env;
    const str = decodeURI(INCOMING_HOOK_BODY);
    console.log(str);
    return (
        <div>
            version {url}
            <pre>{JSON.stringify(str, null, 2)}</pre>
        </div>
    );
};
