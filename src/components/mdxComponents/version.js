import React from 'react';

export default ({ url = 'https://staging.myon.com/', env = {} }) => {
    const { INCOMING_HOOK_BODY } = env;
    let str = decodeURI(INCOMING_HOOK_BODY);
    str = decodeURI(str);
    console.log(str);
    let payload = 'unknown';
    try {
        JSON.parse(str);
    } catch (e) {}
    console.log(payload);
    return (
        <div>
            version {url}
            <pre>{JSON.stringify(payload, null, 2)}</pre>
        </div>
    );
};
