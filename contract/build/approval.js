// @ts-nocheck

//approve an account ID to transfer a token on your behalf
function internalNftApprove({
  contract,
  tokenId,
  accountId,
  msg
}) {
  /*
      FILL THIS IN
  */
}

//check if the passed in account has access to approve the token ID
function internalNftIsApproved({
  contract,
  tokenId,
  approvedAccountId,
  approvalId
}) {
  /*
      FILL THIS IN
  */
}

//revoke a specific account from transferring the token on your behalf
function internalNftRevoke({
  contract,
  tokenId,
  accountId
}) {
  /*
      FILL THIS IN
  */
}

//revoke all accounts from transferring the token on your behalf
function internalNftRevokeAll({
  contract,
  tokenId
}) {
  /*
      FILL THIS IN
  */
}

export { internalNftApprove, internalNftIsApproved, internalNftRevoke, internalNftRevokeAll };
//# sourceMappingURL=approval.js.map
