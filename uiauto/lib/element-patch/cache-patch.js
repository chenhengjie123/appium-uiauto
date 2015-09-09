/* globals ERROR */

(function () {
  CacheElement = function (ele, exp) {
    this.ele = ele;
    this.exp = exp;
  }

  CacheElement.prototype.getIns = function () {
    if (this.ele.name() === null) {
      $.debug("Element instance in cache is unavailable. Try to get it again using its expression " + this.exp + ".");
      // return object calculate by expression
      ele = eval(this.exp);
      if (typeof ele !== 'undefined') {
        $.debug("Return element instance " + ele + " with name " + ele.name() + " and type " + typeof ele)
        return ele;
      } else {
        $.debug("Cannot find element with expression '"+this.exp+"'. The element may not in current screen now.");
        throw new Error.StaleElementReference();
      }
    } else {
      return this.ele
    }
  };

  CacheElement.prototype.getExp = function () {
    return this.exp;
  };

  CacheElement.prototype.getEle = function () {
    return this.ele;
  };

})();