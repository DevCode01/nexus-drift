#!/usr/bin/env bash
# Auto-generated test harness — run after cloning to verify the build.
set -uo pipefail
FAIL=0

echo "-- syntax/build check --"
if npm install --silent --cache /tmp/npmcache-hermes --fetch-retries=1 && npx tsc --noEmit; then echo "  ok"; else echo "  FAIL"; FAIL=1; fi

if [ "$FAIL" = "1" ]; then echo; echo "FAILED"; exit 1; fi
echo; echo "All tests passed."
