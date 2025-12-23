#!/bin/bash

DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/postgres
VIA_DOCKER=true

export DATABASE_URL
export VIA_DOCKER

exec pnpm run "$@"
