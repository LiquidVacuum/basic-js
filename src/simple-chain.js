import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) this.chain = [];
    if (value === undefined) value = '';
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = '';
    for (const item of this.chain) {
      finish += !item ? '( )~~' : `( ${item} )~~`;
    }
    this.chain = [];
    return finish.slice(0, finish.length - 2);
  }
};
