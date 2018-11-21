#!/bin/bash

IS_FAILED=1
tar czvf dist/load-gen.tar.gz .
IS_FAILED=$?

if [ $IS_FAILED -gt 0 ]
then
    exit 1
fi
