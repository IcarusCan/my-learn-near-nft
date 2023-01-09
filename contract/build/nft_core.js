//@ts-nocheck

//The Json token is what will be returned from view calls. 
class JsonToken {
  constructor({
    tokenId,
    ownerId,
    metadata
  }) {
    this.token_id = tokenId, this.owner_id = ownerId, this.metadata = metadata;
  }
}

//@ts-nocheck

//get the information for a specific token ID
function internalNftToken({
  contract,
  tokenId
}) {
  let token = contract.tokensById.get(tokenId);
  if (token == null) {
    return null;
  }
  let metadata = contract.tokenMetadataById.get(tokenId);
  let jsonToken = new JsonToken({
    tokenId: tokenId,
    ownerId: token.owner_id,
    metadata
  });
  return jsonToken;
}
function internalNftTransfer({
  contract,
  receiverId,
  tokenId,
  approvalId,
  memo
}) {
  /*
      FILL THIS IN
  */
}
function internalNftTransferCall({
  contract,
  receiverId,
  tokenId,
  approvalId,
  memo,
  msg
}) {
  /*
      FILL THIS IN
  */
}
function internalResolveTransfer({
  contract,
  authorizedId,
  ownerId,
  receiverId,
  tokenId,
  approvedAccountIds,
  memo
}) {
  /*
      FILL THIS IN
  */
}

export { internalNftToken, internalNftTransfer, internalNftTransferCall, internalResolveTransfer };
//# sourceMappingURL=nft_core.js.map
