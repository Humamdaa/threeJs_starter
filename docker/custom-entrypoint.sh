#!/bin/bash

# Set strict error handling
set -e

# Perform any setup or checks before starting the application
echo "Running custom entrypoint script..."
echo "NODE_ENV is set to ${NODE_ENV}"

# Execute the CMD provided in the Dockerfile
exec "$@"