class HashToken {
  constructor(id) {
    this.id = id;
    this.data = {};
    this.hash = "0x";
  }

  generate() {
    let hash = "0x";
    for (var i = 0; i < 64; i++) {
      hash += Math.floor(Math.random() * 16).toString(16);
    }
    this.hash = hash;

    let tokenId = (
      this.id * 1000000 +
      Math.floor(Math.random() * 1000)
    ).toString();

    this.data = { hash, tokenId };
  }

  setHash(hash) {
    this.hash = hash;
  }
};
