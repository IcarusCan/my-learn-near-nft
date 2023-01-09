#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/metadata.ts build/metadata.wasm
near-sdk-js build src/internal.ts build/internal.wasm
near-sdk-js build src/mint.ts build/mint.wasm
near-sdk-js build src/nft_core.ts build/nft_core.wasm
near-sdk-js build src/enumeration.ts build/enumeration.wasm
near-sdk-js build src/approval.ts build/approval.wasm
near-sdk-js build src/royalty.ts build/royalty.wasm
near-sdk-js build src/contract.ts build/contract.wasm
