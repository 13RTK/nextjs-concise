# Find all node_modules and delete them
find . -name "node_modules" -exec rm -rf {} \;

# Find all dist and delete them
find . -name "dist" -exec rm -rf {} \;

# Find all .next folder and delete them
find . -name ".next" -exec rm -rf {} \;