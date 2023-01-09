// @ts-nocheck

//calculates the payout for a token given the passed in balance. This is a view method
function internalNftPayout({
  contract,
  tokenId,
  balance,
  maxLenPayout
}) {
  /*
      FILL THIS IN
  */
}

//transfers the token to the receiver ID and returns the payout object that should be payed given the passed in balance. 
function internalNftTransferPayout({
  contract,
  receiverId,
  tokenId,
  approvalId,
  memo,
  balance,
  maxLenPayout
}) {
  /*
      FILL THIS IN
  */
}

export { internalNftPayout, internalNftTransferPayout };
//# sourceMappingURL=royalty.js.map
