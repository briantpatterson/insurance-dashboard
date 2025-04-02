#!/bin/bash

# Find and kill all Next.js development server processes
echo "Stopping any running Next.js development servers..."
lsof -i :3000 -i :3001 -i :3002 -i :3003 | grep LISTEN | awk '{print $2}' | xargs -r kill -9

# Wait a moment to ensure ports are released
sleep 1

# Start the development server on port 3000
echo "Starting Next.js development server on port 3000..."
next dev -p 3000 