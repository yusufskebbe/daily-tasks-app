import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-TNDQCT4Z.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-KHI2B5NF.js";
import "./chunk-5TID76VL.js";

// node_modules/@omnedia/ngx-neon-underline/fesm2022/omnedia-ngx-neon-underline.mjs
var NgxNeonUnderlineComponent = class _NgxNeonUnderlineComponent {
  styleClass;
  set shimmerColor(color) {
    this.style["--om-neon-underline-middle-color"] = color;
  }
  set textColor(color) {
    this.style["--om-neon-underline-side-color"] = color;
  }
  set shimmerWidth(width) {
    this.style["--om-neon-underline-width"] = width;
  }
  style = {};
  static ɵfac = function NgxNeonUnderlineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxNeonUnderlineComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgxNeonUnderlineComponent,
    selectors: [["om-neon-underline"]],
    inputs: {
      styleClass: "styleClass",
      shimmerColor: [0, "middleColor", "shimmerColor"],
      textColor: [0, "sideColor", "textColor"],
      shimmerWidth: [0, "width", "shimmerWidth"]
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 5,
    vars: 2,
    consts: [[1, "om-neon-underline", 3, "ngStyle", "ngClass"], [1, "om-neon-underline-glow", "om-neon-underline-glow-1"], [1, "om-neon-underline-color", "om-neon-underline-color-1"], [1, "om-neon-underline-glow", "om-neon-underline-glow-2"], [1, "om-neon-underline-color", "om-neon-underline-color-2"]],
    template: function NgxNeonUnderlineComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle],
    styles: [".om-neon-underline[_ngcontent-%COMP%]{--om-neon-underline-middle-color: #0ea5e9;--om-neon-underline-side-color: #6366f1;--om-neon-underline-width: 75%;position:relative;width:100%}.om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-glow[_ngcontent-%COMP%], .om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-color[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;margin:auto}.om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-glow[_ngcontent-%COMP%]{filter:blur(4px)}.om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-glow-1[_ngcontent-%COMP%]{width:var(--om-neon-underline-width);height:2px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-side-color),transparent)}.om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-glow-2[_ngcontent-%COMP%]{width:calc(var(--om-neon-underline-width) * .3333333333);height:5px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-middle-color),transparent)}.om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-color-1[_ngcontent-%COMP%]{width:var(--om-neon-underline-width);height:1px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-side-color),transparent)}.om-neon-underline[_ngcontent-%COMP%]   .om-neon-underline-color-2[_ngcontent-%COMP%]{width:calc(var(--om-neon-underline-width) * .3333333333);height:1px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-middle-color),transparent)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxNeonUnderlineComponent, [{
    type: Component,
    args: [{
      selector: "om-neon-underline",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-neon-underline" [ngStyle]="style" [ngClass]="styleClass">\r\n  <div class="om-neon-underline-glow om-neon-underline-glow-1"></div>\r\n  <div class="om-neon-underline-color om-neon-underline-color-1"></div>\r\n  <div class="om-neon-underline-glow om-neon-underline-glow-2"></div>\r\n  <div class="om-neon-underline-color om-neon-underline-color-2"></div>\r\n</div>\r\n',
      styles: [".om-neon-underline{--om-neon-underline-middle-color: #0ea5e9;--om-neon-underline-side-color: #6366f1;--om-neon-underline-width: 75%;position:relative;width:100%}.om-neon-underline .om-neon-underline-glow,.om-neon-underline .om-neon-underline-color{position:absolute;top:0;left:0;right:0;margin:auto}.om-neon-underline .om-neon-underline-glow{filter:blur(4px)}.om-neon-underline .om-neon-underline-glow-1{width:var(--om-neon-underline-width);height:2px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-side-color),transparent)}.om-neon-underline .om-neon-underline-glow-2{width:calc(var(--om-neon-underline-width) * .3333333333);height:5px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-middle-color),transparent)}.om-neon-underline .om-neon-underline-color-1{width:var(--om-neon-underline-width);height:1px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-side-color),transparent)}.om-neon-underline .om-neon-underline-color-2{width:calc(var(--om-neon-underline-width) * .3333333333);height:1px;background-image:linear-gradient(to right,transparent,var(--om-neon-underline-middle-color),transparent)}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    shimmerColor: [{
      type: Input,
      args: ["middleColor"]
    }],
    textColor: [{
      type: Input,
      args: ["sideColor"]
    }],
    shimmerWidth: [{
      type: Input,
      args: ["width"]
    }]
  });
})();
export {
  NgxNeonUnderlineComponent
};
//# sourceMappingURL=@omnedia_ngx-neon-underline.js.map
