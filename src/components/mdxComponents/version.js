import React from 'react';

export default ({ url = 'https://staging.myon.com/', env = {} }) => {
    const { INCOMING_HOOK_BODY } = env;
    const str = decodeURI(INCOMING_HOOK_BODY);
    const payload=JSON.parse(str);
    console.log(payload);
    return (
        <div>
            version {url}
            <pre>{JSON.stringify(payload, null, 2)}</pre>
        </div>
    );
};
