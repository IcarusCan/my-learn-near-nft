// @ts-nocheck

//Query for the total supply of NFTs on the contract
function internalTotalSupply({
  contract
}) {
  /*
      FILL THIS IN
  */
}

//Query for nft tokens on the contract regardless of the owner using pagination
function internalNftTokens({
  contract,
  fromIndex,
  limit
}) {
  /*
      FILL THIS IN
  */
}

//get the total supply of NFTs for a given owner
function internalSupplyForOwner({
  contract,
  accountId
}) {
  /*
      FILL THIS IN
  */
}

//Query for all the tokens for an owner
function internalTokensForOwner({
  contract,
  accountId,
  fromIndex,
  limit
}) {
  /*
      FILL THIS IN
  */
}

export { internalNftTokens, internalSupplyForOwner, internalTokensForOwner, internalTotalSupply };
//# sourceMappingURL=enumeration.js.map
