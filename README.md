# Example Subgraph

An example to help you get started with The Graph. For more information see the docs on https://thegraph.com/docs/.

# 1. spin up ganache UI on HTTP://0.0.0.0:8545

# 2. run script to restart graph-node server

#!/bin/bash

docker-compose down -v;

if [ -d "data" ]
then
echo "Found old data for the graph node - deleting it";

# we need to sudo this to remove system locked files

sudo rm -rf data/;
fi

docker-compose up;

# 3. truffle compile; truffle migrate; # to deploy smart contract and do some interactions

# 4. yarn && yarn codegen && yarn create-local && yarn deploy-local # to deploy goose subgraph locally
