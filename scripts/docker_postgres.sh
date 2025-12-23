#!/bin/bash

# Function to stop the Docker container
cleanup() {
    echo "Stopping Postgres container..."
    docker stop Postgres
    exit 0
}

# Trap signals to run cleanup function
trap cleanup SIGINT SIGTERM EXIT

# Check if container exists and start it if it's not running
if docker ps -a | grep -q Postgres; then
    # If container exists but is not running, start it
    if ! docker ps | grep -q Postgres; then
        docker start Postgres
    fi
else
    # If container doesn't exist, create and run it
    docker run \
    --name Postgres \
    --restart unless-stopped \
    -e POSTGRES_USER=postgres -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_PASSWORD=yourpassword \
    -p 5432:5432 \
    -d postgres
fi

# Keep the script running
echo "Postgres container is running. Press Ctrl+C to stop."
while true; do
    sleep 1
done