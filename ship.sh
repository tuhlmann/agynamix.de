#!/bin/bash
now=$(date +"%Y%m%d")
file="agynamix.de.$now.tgz"

echo "Packing up public folder to $file..."
rm $file
tar czf $file public/
echo "Sending $file to remote"
scp -P 246 $file tuhlmann@agynamix.de:~/site
