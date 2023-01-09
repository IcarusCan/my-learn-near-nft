//@ts-nocheck

class NFTContractMetadata {
  constructor({
    spec,
    name,
    symbol,
    icon,
    baseUri,
    reference,
    referenceHash
  }) {
    this.spec = spec;
    this.name = name;
    this.symbol = symbol;
    this.icon = icon;
    this.base_uri = baseUri;
    this.reference = reference;
    this.reference_hash = referenceHash;
  }
}
class TokenMetadata {
  constructor({
    title,
    description,
    media,
    mediaHash,
    copies,
    issuedAt,
    expiresAt,
    startsAt,
    updatedAt,
    extra,
    reference,
    referenceHash
  }) {
    this.title = title;
    this.description = description;
    this.media = media;
    this.media_hash = mediaHash;
    this.copies = copies;
    this.issued_at = issuedAt;
    this.expires_at = expiresAt;
    this.starts_at = startsAt;
    this.updated_at = updatedAt;
    this.extra = extra;
    this.reference = reference;
    this.reference_hash = referenceHash;
  }
}
class Token {
  constructor({
    ownerId
  }) {
    this.owner_id = ownerId;
  }
}

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

//get the information for a specific token ID
function internalNftMetadata({
  contract
}) {
  return contract.metadata;
}
class Payout {
  constructor({
    payout
  }) {
    this.payout = payout;
  }
}

export { JsonToken, NFTContractMetadata, Payout, Token, TokenMetadata, internalNftMetadata };
//# sourceMappingURL=metadata.js.map
