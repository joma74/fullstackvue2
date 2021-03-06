// See https://medium.com/@hayavuk/using-jsx-with-vue-js-and-typescript-d6963e44de48
import Vue, { VNode } from "vue";
import { Component } from "vue/types/options";
declare global {
  declare namespace JSX {
    interface Element extends VNode { }
    interface ElementClass extends Vue { }
    
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}