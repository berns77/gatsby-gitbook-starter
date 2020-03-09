#!/usr/bin/env bash

a=$(curl https://staging.myon.com/)
pat=' \| (v[0-9.]+ \([^)]+\)) \| '

[[ "$a" =~ $pat ]]
staging="${BASH_REMATCH[1]}"
echo $staging

curl -X POST -d "staging=$staging" https://api.netlify.com/build_hooks/5e66937524627bd09fb3305a
