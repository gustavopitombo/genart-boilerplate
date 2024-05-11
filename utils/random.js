class Random {

  constructor(hash="0x") {
    this.useA = false;

    let sfc32 = function (uint128Hex) {
      let a = parseInt(uint128Hex.substring(0, 8), 16);
      let b = parseInt(uint128Hex.substring(8, 16), 16);
      let c = parseInt(uint128Hex.substring(16, 24), 16);
      let d = parseInt(uint128Hex.substring(24, 32), 16);
      return function () {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        let t = (((a + b) | 0) + d) | 0;
        d = (d + 1) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    this.prngA = new sfc32(hash.substring(2, 34));
    this.prngB = new sfc32(hash.substring(34, 66));
    for (let i = 0; i < 1e6; i += 2) {
      this.prngA();
      this.prngB();
    }
  }
  
  random_dec() {
    this.useA = !this.useA;
    return this.useA ? this.prngA() : this.prngB();
  }
  
  random_num(a, b) {
    return a + (b - a) * this.random_dec();
  }
  
  random_int(a, b) {
    return Math.floor(this.random_num(a, b + 1));
  }
  
  random_bool(p) {
    return this.random_dec() < p;
  }

  random_choice(list) {
    return list[this.random_int(0, list.length - 1)];
  }
};
