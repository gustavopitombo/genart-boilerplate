
class HashUrl {
  constructor(hash) {
    const searchParams = this.getSearchParams();
    const hashParams = searchParams.get("hash");

    if (!hashParams) {
      this.update(hash);
      return;
    }

    this.hash = hashParams;
  }

  update(hash) {
    this.hash = hash;
    const searchParams = this.getSearchParams();
    searchParams.set("hash", hash);
    let newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState({}, "", newUrl);
  }

  refresh() {
    const searchParams = this.getSearchParams();
    this.hash = searchParams.get("hash");
  }
  
  getSearchParams() {
    return new URLSearchParams(window.location.search);
  }
};
