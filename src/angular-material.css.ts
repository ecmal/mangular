export default `
/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.0.5
 */


html, body {
  height: 100%;
  color: rgba(0, 0, 0, 0.87);
  background: white;
  position: relative; }

body {
  margin: 0;
  padding: 0; }

[tabindex='-1']:focus {
  outline: none; }

.inset {
  padding: 10px; }

button.md-no-style {
  font-weight: normal;
  background-color: inherit;
  text-align: left;
  border: none;
  padding: 0;
  margin: 0; }

select,
button,
textarea,
input {
  vertical-align: baseline; }

input[type="reset"],
input[type="submit"],
html input[type="button"],
button {
  cursor: pointer;
  -webkit-appearance: button; }
  input[type="reset"][disabled],
  input[type="submit"][disabled],
  html input[type="button"][disabled],
  button[disabled] {
    cursor: default; }

textarea {
  vertical-align: top;
  overflow: auto; }

input[type="search"] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
  -webkit-box-sizing: content-box; }
  input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none; }

.md-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  text-transform: none;
  width: 1px; }

.md-shadow {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  pointer-events: none; }

.md-shadow-bottom-z-1 {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }

.md-shadow-bottom-z-2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); }

.md-shadow-animated.md-shadow {
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); }

/*
 * A container inside of a rippling element (eg a button),
 * which contains all of the individual ripples
 */
.md-ripple-container {
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }

.md-ripple {
  position: absolute;
  -webkit-transform: translate(-50%, -50%) scale(0);
          transform: translate(-50%, -50%) scale(0);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  opacity: 0;
  border-radius: 50%; }
  .md-ripple.md-ripple-placed {
    transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1); }
  .md-ripple.md-ripple-scaled {
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1); }
  .md-ripple.md-ripple-active, .md-ripple.md-ripple-full, .md-ripple.md-ripple-visible {
    opacity: 0.20; }

.md-padding {
  padding: 8px; }

.md-margin {
  margin: 8px; }

.md-scroll-mask {
  position: absolute;
  background-color: transparent;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }
  .md-scroll-mask > .md-scroll-mask-bar {
    display: block;
    position: absolute;
    background-color: #fafafa;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 65;
    box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.3); }

@media (min-width: 960px) {
  .md-padding {
    padding: 16px; } }

html, body {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

/************
 * Headings
 ************/
.md-display-4 {
  font-size: 112px;
  font-weight: 300;
  letter-spacing: -0.010em;
  line-height: 112px; }

.md-display-3 {
  font-size: 56px;
  font-weight: 400;
  letter-spacing: -0.005em;
  line-height: 56px; }

.md-display-2 {
  font-size: 45px;
  font-weight: 400;
  line-height: 64px; }

.md-display-1 {
  font-size: 34px;
  font-weight: 400;
  line-height: 40px; }

.md-headline {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px; }

.md-title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.005em; }

.md-subhead {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.010em;
  line-height: 24px; }

/************
 * Body Copy
 ************/
.md-body-1 {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.010em;
  line-height: 20px; }

.md-body-2 {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.010em;
  line-height: 24px; }

.md-caption {
  font-size: 12px;
  letter-spacing: 0.020em; }

.md-button {
  letter-spacing: 0.010em; }

/************
 * Defaults
 ************/
button,
select,
html,
textarea,
input {
  font-family: Roboto, "Helvetica Neue", sans-serif; }

select,
button,
textarea,
input {
  font-size: 100%; }

/*
*
*  Responsive attributes
*
*  References:
*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex
*  2) https://css-tricks.com/almanac/properties/f/flex/
*  3) https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*  4) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items
*  5) http://godban.com.ua/projects/flexgrid
*
*
*/
@-moz-document url-prefix() {
  .layout-fill {
    margin: 0;
    width: 100%;
    min-height: 100%;
    height: 100%; } }

/*
 *  Apply Mixins to create Layout/Flexbox styles
 *
 */
.flex-order {
  -webkit-order: 0;
      -ms-flex-order: 0;
          order: 0; }

.flex-order--20 {
  -webkit-order: -20;
      -ms-flex-order: -20;
          order: -20; }

.flex-order--19 {
  -webkit-order: -19;
      -ms-flex-order: -19;
          order: -19; }

.flex-order--18 {
  -webkit-order: -18;
      -ms-flex-order: -18;
          order: -18; }

.flex-order--17 {
  -webkit-order: -17;
      -ms-flex-order: -17;
          order: -17; }

.flex-order--16 {
  -webkit-order: -16;
      -ms-flex-order: -16;
          order: -16; }

.flex-order--15 {
  -webkit-order: -15;
      -ms-flex-order: -15;
          order: -15; }

.flex-order--14 {
  -webkit-order: -14;
      -ms-flex-order: -14;
          order: -14; }

.flex-order--13 {
  -webkit-order: -13;
      -ms-flex-order: -13;
          order: -13; }

.flex-order--12 {
  -webkit-order: -12;
      -ms-flex-order: -12;
          order: -12; }

.flex-order--11 {
  -webkit-order: -11;
      -ms-flex-order: -11;
          order: -11; }

.flex-order--10 {
  -webkit-order: -10;
      -ms-flex-order: -10;
          order: -10; }

.flex-order--9 {
  -webkit-order: -9;
      -ms-flex-order: -9;
          order: -9; }

.flex-order--8 {
  -webkit-order: -8;
      -ms-flex-order: -8;
          order: -8; }

.flex-order--7 {
  -webkit-order: -7;
      -ms-flex-order: -7;
          order: -7; }

.flex-order--6 {
  -webkit-order: -6;
      -ms-flex-order: -6;
          order: -6; }

.flex-order--5 {
  -webkit-order: -5;
      -ms-flex-order: -5;
          order: -5; }

.flex-order--4 {
  -webkit-order: -4;
      -ms-flex-order: -4;
          order: -4; }

.flex-order--3 {
  -webkit-order: -3;
      -ms-flex-order: -3;
          order: -3; }

.flex-order--2 {
  -webkit-order: -2;
      -ms-flex-order: -2;
          order: -2; }

.flex-order--1 {
  -webkit-order: -1;
      -ms-flex-order: -1;
          order: -1; }

.flex-order-0 {
  -webkit-order: 0;
      -ms-flex-order: 0;
          order: 0; }

.flex-order-1 {
  -webkit-order: 1;
      -ms-flex-order: 1;
          order: 1; }

.flex-order-2 {
  -webkit-order: 2;
      -ms-flex-order: 2;
          order: 2; }

.flex-order-3 {
  -webkit-order: 3;
      -ms-flex-order: 3;
          order: 3; }

.flex-order-4 {
  -webkit-order: 4;
      -ms-flex-order: 4;
          order: 4; }

.flex-order-5 {
  -webkit-order: 5;
      -ms-flex-order: 5;
          order: 5; }

.flex-order-6 {
  -webkit-order: 6;
      -ms-flex-order: 6;
          order: 6; }

.flex-order-7 {
  -webkit-order: 7;
      -ms-flex-order: 7;
          order: 7; }

.flex-order-8 {
  -webkit-order: 8;
      -ms-flex-order: 8;
          order: 8; }

.flex-order-9 {
  -webkit-order: 9;
      -ms-flex-order: 9;
          order: 9; }

.flex-order-10 {
  -webkit-order: 10;
      -ms-flex-order: 10;
          order: 10; }

.flex-order-11 {
  -webkit-order: 11;
      -ms-flex-order: 11;
          order: 11; }

.flex-order-12 {
  -webkit-order: 12;
      -ms-flex-order: 12;
          order: 12; }

.flex-order-13 {
  -webkit-order: 13;
      -ms-flex-order: 13;
          order: 13; }

.flex-order-14 {
  -webkit-order: 14;
      -ms-flex-order: 14;
          order: 14; }

.flex-order-15 {
  -webkit-order: 15;
      -ms-flex-order: 15;
          order: 15; }

.flex-order-16 {
  -webkit-order: 16;
      -ms-flex-order: 16;
          order: 16; }

.flex-order-17 {
  -webkit-order: 17;
      -ms-flex-order: 17;
          order: 17; }

.flex-order-18 {
  -webkit-order: 18;
      -ms-flex-order: 18;
          order: 18; }

.flex-order-19 {
  -webkit-order: 19;
      -ms-flex-order: 19;
          order: 19; }

.flex-order-20 {
  -webkit-order: 20;
      -ms-flex-order: 20;
          order: 20; }

.offset-0, .flex-offset-0 {
  margin-left: 0%; }

.offset-5, .flex-offset-5 {
  margin-left: 5%; }

.offset-10, .flex-offset-10 {
  margin-left: 10%; }

.offset-15, .flex-offset-15 {
  margin-left: 15%; }

.offset-20, .flex-offset-20 {
  margin-left: 20%; }

.offset-25, .flex-offset-25 {
  margin-left: 25%; }

.offset-30, .flex-offset-30 {
  margin-left: 30%; }

.offset-35, .flex-offset-35 {
  margin-left: 35%; }

.offset-40, .flex-offset-40 {
  margin-left: 40%; }

.offset-45, .flex-offset-45 {
  margin-left: 45%; }

.offset-50, .flex-offset-50 {
  margin-left: 50%; }

.offset-55, .flex-offset-55 {
  margin-left: 55%; }

.offset-60, .flex-offset-60 {
  margin-left: 60%; }

.offset-65, .flex-offset-65 {
  margin-left: 65%; }

.offset-70, .flex-offset-70 {
  margin-left: 70%; }

.offset-75, .flex-offset-75 {
  margin-left: 75%; }

.offset-80, .flex-offset-80 {
  margin-left: 80%; }

.offset-85, .flex-offset-85 {
  margin-left: 85%; }

.offset-90, .flex-offset-90 {
  margin-left: 90%; }

.offset-95, .flex-offset-95 {
  margin-left: 95%; }

.offset-33, .flex-offset-33 {
  margin-left: calc(100% / 3); }

.offset-66, .flex-offset-66 {
  margin-left: calc(200% / 3); }

.layout-align {
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
          align-content: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch; }

.layout-align-start,
.layout-align-start-start,
.layout-align-start-center,
.layout-align-start-end,
.layout-align-start-stretch {
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start; }

.layout-align-center,
.layout-align-center-start,
.layout-align-center-center,
.layout-align-center-end,
.layout-align-center-stretch {
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center; }

.layout-align-end,
.layout-align-end-start,
.layout-align-end-center,
.layout-align-end-end,
.layout-align-end-stretch {
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end; }

.layout-align-space-around,
.layout-align-space-around-center,
.layout-align-space-around-start,
.layout-align-space-around-end,
.layout-align-space-around-stretch {
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around; }

.layout-align-space-between,
.layout-align-space-between-center,
.layout-align-space-between-start,
.layout-align-space-between-end,
.layout-align-space-between-stretch {
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between; }

.layout-align-start-start,
.layout-align-center-start,
.layout-align-end-start,
.layout-align-space-between-start,
.layout-align-space-around-start {
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-align-content: flex-start;
      -ms-flex-line-pack: start;
          align-content: flex-start; }

.layout-align-start-center,
.layout-align-center-center,
.layout-align-end-center,
.layout-align-space-between-center,
.layout-align-space-around-center {
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center;
  max-width: 100%; }

.layout-align-start-center > *,
.layout-align-center-center > *,
.layout-align-end-center > *,
.layout-align-space-between-center > *,
.layout-align-space-around-center > * {
  max-width: 100%;
  box-sizing: border-box; }

.layout-align-start-end,
.layout-align-center-end,
.layout-align-end-end,
.layout-align-space-between-end,
.layout-align-space-around-end {
  -webkit-align-items: flex-end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-align-content: flex-end;
      -ms-flex-line-pack: end;
          align-content: flex-end; }

.layout-align-start-stretch,
.layout-align-center-stretch,
.layout-align-end-stretch,
.layout-align-space-between-stretch,
.layout-align-space-around-stretch {
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
          align-content: stretch; }

.flex {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  box-sizing: border-box; }

@media screen\0 {
  .flex {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

.flex-grow {
  -webkit-flex: 1 1 100%;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  box-sizing: border-box; }

.flex-initial {
  -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
          flex: 0 1 auto;
  box-sizing: border-box; }

.flex-auto {
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  box-sizing: border-box; }

.flex-none {
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  box-sizing: border-box; }

.flex-noshrink {
  -webkit-flex: 1 0 auto;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  box-sizing: border-box; }

.flex-nogrow {
  -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
          flex: 0 1 auto;
  box-sizing: border-box; }

.flex-0 {
  -webkit-flex: 1 1 0%;
      -ms-flex: 1 1 0%;
          flex: 1 1 0%;
  max-width: 0%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-0,
.layout-row > .flex-0 {
  -webkit-flex: 1 1 0%;
      -ms-flex: 1 1 0%;
          flex: 1 1 0%;
  max-width: 0%;
  max-height: 100%;
  box-sizing: border-box;
  min-width: 0; }

.layout-column > .flex-0,
.layout-column > .flex-0 {
  -webkit-flex: 1 1 0%;
      -ms-flex: 1 1 0%;
          flex: 1 1 0%;
  max-width: 100%;
  max-height: 0%;
  box-sizing: border-box;
  min-height: 0; }

.flex-5 {
  -webkit-flex: 1 1 5%;
      -ms-flex: 1 1 5%;
          flex: 1 1 5%;
  max-width: 5%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-5,
.layout-row > .flex-5 {
  -webkit-flex: 1 1 5%;
      -ms-flex: 1 1 5%;
          flex: 1 1 5%;
  max-width: 5%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-5,
.layout-column > .flex-5 {
  -webkit-flex: 1 1 5%;
      -ms-flex: 1 1 5%;
          flex: 1 1 5%;
  max-width: 100%;
  max-height: 5%;
  box-sizing: border-box; }

.flex-10 {
  -webkit-flex: 1 1 10%;
      -ms-flex: 1 1 10%;
          flex: 1 1 10%;
  max-width: 10%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-10,
.layout-row > .flex-10 {
  -webkit-flex: 1 1 10%;
      -ms-flex: 1 1 10%;
          flex: 1 1 10%;
  max-width: 10%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-10,
.layout-column > .flex-10 {
  -webkit-flex: 1 1 10%;
      -ms-flex: 1 1 10%;
          flex: 1 1 10%;
  max-width: 100%;
  max-height: 10%;
  box-sizing: border-box; }

.flex-15 {
  -webkit-flex: 1 1 15%;
      -ms-flex: 1 1 15%;
          flex: 1 1 15%;
  max-width: 15%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-15,
.layout-row > .flex-15 {
  -webkit-flex: 1 1 15%;
      -ms-flex: 1 1 15%;
          flex: 1 1 15%;
  max-width: 15%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-15,
.layout-column > .flex-15 {
  -webkit-flex: 1 1 15%;
      -ms-flex: 1 1 15%;
          flex: 1 1 15%;
  max-width: 100%;
  max-height: 15%;
  box-sizing: border-box; }

.flex-20 {
  -webkit-flex: 1 1 20%;
      -ms-flex: 1 1 20%;
          flex: 1 1 20%;
  max-width: 20%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-20,
.layout-row > .flex-20 {
  -webkit-flex: 1 1 20%;
      -ms-flex: 1 1 20%;
          flex: 1 1 20%;
  max-width: 20%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-20,
.layout-column > .flex-20 {
  -webkit-flex: 1 1 20%;
      -ms-flex: 1 1 20%;
          flex: 1 1 20%;
  max-width: 100%;
  max-height: 20%;
  box-sizing: border-box; }

.flex-25 {
  -webkit-flex: 1 1 25%;
      -ms-flex: 1 1 25%;
          flex: 1 1 25%;
  max-width: 25%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-25,
.layout-row > .flex-25 {
  -webkit-flex: 1 1 25%;
      -ms-flex: 1 1 25%;
          flex: 1 1 25%;
  max-width: 25%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-25,
.layout-column > .flex-25 {
  -webkit-flex: 1 1 25%;
      -ms-flex: 1 1 25%;
          flex: 1 1 25%;
  max-width: 100%;
  max-height: 25%;
  box-sizing: border-box; }

.flex-30 {
  -webkit-flex: 1 1 30%;
      -ms-flex: 1 1 30%;
          flex: 1 1 30%;
  max-width: 30%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-30,
.layout-row > .flex-30 {
  -webkit-flex: 1 1 30%;
      -ms-flex: 1 1 30%;
          flex: 1 1 30%;
  max-width: 30%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-30,
.layout-column > .flex-30 {
  -webkit-flex: 1 1 30%;
      -ms-flex: 1 1 30%;
          flex: 1 1 30%;
  max-width: 100%;
  max-height: 30%;
  box-sizing: border-box; }

.flex-35 {
  -webkit-flex: 1 1 35%;
      -ms-flex: 1 1 35%;
          flex: 1 1 35%;
  max-width: 35%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-35,
.layout-row > .flex-35 {
  -webkit-flex: 1 1 35%;
      -ms-flex: 1 1 35%;
          flex: 1 1 35%;
  max-width: 35%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-35,
.layout-column > .flex-35 {
  -webkit-flex: 1 1 35%;
      -ms-flex: 1 1 35%;
          flex: 1 1 35%;
  max-width: 100%;
  max-height: 35%;
  box-sizing: border-box; }

.flex-40 {
  -webkit-flex: 1 1 40%;
      -ms-flex: 1 1 40%;
          flex: 1 1 40%;
  max-width: 40%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-40,
.layout-row > .flex-40 {
  -webkit-flex: 1 1 40%;
      -ms-flex: 1 1 40%;
          flex: 1 1 40%;
  max-width: 40%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-40,
.layout-column > .flex-40 {
  -webkit-flex: 1 1 40%;
      -ms-flex: 1 1 40%;
          flex: 1 1 40%;
  max-width: 100%;
  max-height: 40%;
  box-sizing: border-box; }

.flex-45 {
  -webkit-flex: 1 1 45%;
      -ms-flex: 1 1 45%;
          flex: 1 1 45%;
  max-width: 45%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-45,
.layout-row > .flex-45 {
  -webkit-flex: 1 1 45%;
      -ms-flex: 1 1 45%;
          flex: 1 1 45%;
  max-width: 45%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-45,
.layout-column > .flex-45 {
  -webkit-flex: 1 1 45%;
      -ms-flex: 1 1 45%;
          flex: 1 1 45%;
  max-width: 100%;
  max-height: 45%;
  box-sizing: border-box; }

.flex-50 {
  -webkit-flex: 1 1 50%;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
  max-width: 50%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-50,
.layout-row > .flex-50 {
  -webkit-flex: 1 1 50%;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
  max-width: 50%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-50,
.layout-column > .flex-50 {
  -webkit-flex: 1 1 50%;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
  max-width: 100%;
  max-height: 50%;
  box-sizing: border-box; }

.flex-55 {
  -webkit-flex: 1 1 55%;
      -ms-flex: 1 1 55%;
          flex: 1 1 55%;
  max-width: 55%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-55,
.layout-row > .flex-55 {
  -webkit-flex: 1 1 55%;
      -ms-flex: 1 1 55%;
          flex: 1 1 55%;
  max-width: 55%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-55,
.layout-column > .flex-55 {
  -webkit-flex: 1 1 55%;
      -ms-flex: 1 1 55%;
          flex: 1 1 55%;
  max-width: 100%;
  max-height: 55%;
  box-sizing: border-box; }

.flex-60 {
  -webkit-flex: 1 1 60%;
      -ms-flex: 1 1 60%;
          flex: 1 1 60%;
  max-width: 60%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-60,
.layout-row > .flex-60 {
  -webkit-flex: 1 1 60%;
      -ms-flex: 1 1 60%;
          flex: 1 1 60%;
  max-width: 60%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-60,
.layout-column > .flex-60 {
  -webkit-flex: 1 1 60%;
      -ms-flex: 1 1 60%;
          flex: 1 1 60%;
  max-width: 100%;
  max-height: 60%;
  box-sizing: border-box; }

.flex-65 {
  -webkit-flex: 1 1 65%;
      -ms-flex: 1 1 65%;
          flex: 1 1 65%;
  max-width: 65%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-65,
.layout-row > .flex-65 {
  -webkit-flex: 1 1 65%;
      -ms-flex: 1 1 65%;
          flex: 1 1 65%;
  max-width: 65%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-65,
.layout-column > .flex-65 {
  -webkit-flex: 1 1 65%;
      -ms-flex: 1 1 65%;
          flex: 1 1 65%;
  max-width: 100%;
  max-height: 65%;
  box-sizing: border-box; }

.flex-70 {
  -webkit-flex: 1 1 70%;
      -ms-flex: 1 1 70%;
          flex: 1 1 70%;
  max-width: 70%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-70,
.layout-row > .flex-70 {
  -webkit-flex: 1 1 70%;
      -ms-flex: 1 1 70%;
          flex: 1 1 70%;
  max-width: 70%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-70,
.layout-column > .flex-70 {
  -webkit-flex: 1 1 70%;
      -ms-flex: 1 1 70%;
          flex: 1 1 70%;
  max-width: 100%;
  max-height: 70%;
  box-sizing: border-box; }

.flex-75 {
  -webkit-flex: 1 1 75%;
      -ms-flex: 1 1 75%;
          flex: 1 1 75%;
  max-width: 75%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-75,
.layout-row > .flex-75 {
  -webkit-flex: 1 1 75%;
      -ms-flex: 1 1 75%;
          flex: 1 1 75%;
  max-width: 75%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-75,
.layout-column > .flex-75 {
  -webkit-flex: 1 1 75%;
      -ms-flex: 1 1 75%;
          flex: 1 1 75%;
  max-width: 100%;
  max-height: 75%;
  box-sizing: border-box; }

.flex-80 {
  -webkit-flex: 1 1 80%;
      -ms-flex: 1 1 80%;
          flex: 1 1 80%;
  max-width: 80%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-80,
.layout-row > .flex-80 {
  -webkit-flex: 1 1 80%;
      -ms-flex: 1 1 80%;
          flex: 1 1 80%;
  max-width: 80%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-80,
.layout-column > .flex-80 {
  -webkit-flex: 1 1 80%;
      -ms-flex: 1 1 80%;
          flex: 1 1 80%;
  max-width: 100%;
  max-height: 80%;
  box-sizing: border-box; }

.flex-85 {
  -webkit-flex: 1 1 85%;
      -ms-flex: 1 1 85%;
          flex: 1 1 85%;
  max-width: 85%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-85,
.layout-row > .flex-85 {
  -webkit-flex: 1 1 85%;
      -ms-flex: 1 1 85%;
          flex: 1 1 85%;
  max-width: 85%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-85,
.layout-column > .flex-85 {
  -webkit-flex: 1 1 85%;
      -ms-flex: 1 1 85%;
          flex: 1 1 85%;
  max-width: 100%;
  max-height: 85%;
  box-sizing: border-box; }

.flex-90 {
  -webkit-flex: 1 1 90%;
      -ms-flex: 1 1 90%;
          flex: 1 1 90%;
  max-width: 90%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-90,
.layout-row > .flex-90 {
  -webkit-flex: 1 1 90%;
      -ms-flex: 1 1 90%;
          flex: 1 1 90%;
  max-width: 90%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-90,
.layout-column > .flex-90 {
  -webkit-flex: 1 1 90%;
      -ms-flex: 1 1 90%;
          flex: 1 1 90%;
  max-width: 100%;
  max-height: 90%;
  box-sizing: border-box; }

.flex-95 {
  -webkit-flex: 1 1 95%;
      -ms-flex: 1 1 95%;
          flex: 1 1 95%;
  max-width: 95%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-95,
.layout-row > .flex-95 {
  -webkit-flex: 1 1 95%;
      -ms-flex: 1 1 95%;
          flex: 1 1 95%;
  max-width: 95%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-95,
.layout-column > .flex-95 {
  -webkit-flex: 1 1 95%;
      -ms-flex: 1 1 95%;
          flex: 1 1 95%;
  max-width: 100%;
  max-height: 95%;
  box-sizing: border-box; }

.flex-100 {
  -webkit-flex: 1 1 100%;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-100,
.layout-row > .flex-100 {
  -webkit-flex: 1 1 100%;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-column > .flex-100,
.layout-column > .flex-100 {
  -webkit-flex: 1 1 100%;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-33, .layout-row > .flex-33, .layout-row > .flex-33, .layout-row > .flex-33 {
  -webkit-flex: 1 1 33.33%;
      -ms-flex: 1 1 33.33%;
          flex: 1 1 33.33%;
  max-width: 33.33%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex-66, .layout-row > .flex-66, .layout-row > .flex-66, .layout-row > .flex-66 {
  -webkit-flex: 1 1 66.66%;
      -ms-flex: 1 1 66.66%;
          flex: 1 1 66.66%;
  max-width: 66.66%;
  max-height: 100%;
  box-sizing: border-box; }

.layout-row > .flex, .layout-row > .flex {
  min-width: 0; }

.layout-column > .flex-33, .layout-column > .flex-33, .layout-column > .flex-33, .layout-column > .flex-33 {
  -webkit-flex: 1 1 33.33%;
      -ms-flex: 1 1 33.33%;
          flex: 1 1 33.33%;
  max-width: 100%;
  max-height: 33.33%;
  box-sizing: border-box; }

.layout-column > .flex-66, .layout-column > .flex-66, .layout-column > .flex-66, .layout-column > .flex-66 {
  -webkit-flex: 1 1 66.66%;
      -ms-flex: 1 1 66.66%;
          flex: 1 1 66.66%;
  max-width: 100%;
  max-height: 66.66%;
  box-sizing: border-box; }

.layout-column > .flex, .layout-column > .flex {
  min-height: 0; }

.layout, .layout-column, .layout-row {
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }

.layout-column {
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.layout-row {
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row; }

.layout-padding-sm > *,
.layout-padding > .flex-sm {
  padding: 4px; }

.layout-padding,
.layout-padding-gt-sm,
.layout-padding-md,
.layout-padding > *,
.layout-padding-gt-sm > *,
.layout-padding-md > *,
.layout-padding > .flex,
.layout-padding > .flex-gt-sm,
.layout-padding > .flex-md {
  padding: 8px; }

.layout-padding-gt-md > *,
.layout-padding-lg > *,
.layout-padding-gt-lg > *,
.layout-padding > .flex-gt-md,
.layout-padding > .flex-lg,
.layout-padding > .flex-lg,
.layout-padding > .flex-gt-lg {
  padding: 16px; }

.layout-margin-sm > *,
.layout-margin > .flex-sm {
  margin: 4px; }

.layout-margin,
.layout-margin-gt-sm,
.layout-margin-md,
.layout-margin > *,
.layout-margin-gt-sm > *,
.layout-margin-md > *,
.layout-margin > .flex,
.layout-margin > .flex-gt-sm,
.layout-margin > .flex-md {
  margin: 8px; }

.layout-margin-gt-md > *,
.layout-margin-lg > *,
.layout-margin-gt-lg > *,
.layout-margin > .flex-gt-md,
.layout-margin > .flex-lg,
.layout-margin > .flex-gt-lg {
  margin: 16px; }

.layout-wrap {
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }

.layout-nowrap {
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }

.layout-fill {
  margin: 0;
  width: 100%;
  min-height: 100%;
  height: 100%; }


@media (max-width: 599px) {
  .hide-xs:not(.show-xs):not(.show), .hide:not(.show-xs):not(.show) {
    display: none; }
  .flex-order-xs--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-xs--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-xs--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-xs--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-xs--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-xs--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-xs--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-xs--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-xs--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-xs--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-xs--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-xs--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-xs--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-xs--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-xs--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-xs--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-xs--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-xs--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-xs--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-xs--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-xs-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-xs-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-xs-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-xs-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-xs-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-xs-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-xs-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-xs-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-xs-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-xs-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-xs-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-xs-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-xs-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-xs-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-xs-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-xs-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-xs-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-xs-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-xs-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-xs-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-xs-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-xs-0, .flex-offset-xs-0 {
    margin-left: 0%; }
  .offset-xs-5, .flex-offset-xs-5 {
    margin-left: 5%; }
  .offset-xs-10, .flex-offset-xs-10 {
    margin-left: 10%; }
  .offset-xs-15, .flex-offset-xs-15 {
    margin-left: 15%; }
  .offset-xs-20, .flex-offset-xs-20 {
    margin-left: 20%; }
  .offset-xs-25, .flex-offset-xs-25 {
    margin-left: 25%; }
  .offset-xs-30, .flex-offset-xs-30 {
    margin-left: 30%; }
  .offset-xs-35, .flex-offset-xs-35 {
    margin-left: 35%; }
  .offset-xs-40, .flex-offset-xs-40 {
    margin-left: 40%; }
  .offset-xs-45, .flex-offset-xs-45 {
    margin-left: 45%; }
  .offset-xs-50, .flex-offset-xs-50 {
    margin-left: 50%; }
  .offset-xs-55, .flex-offset-xs-55 {
    margin-left: 55%; }
  .offset-xs-60, .flex-offset-xs-60 {
    margin-left: 60%; }
  .offset-xs-65, .flex-offset-xs-65 {
    margin-left: 65%; }
  .offset-xs-70, .flex-offset-xs-70 {
    margin-left: 70%; }
  .offset-xs-75, .flex-offset-xs-75 {
    margin-left: 75%; }
  .offset-xs-80, .flex-offset-xs-80 {
    margin-left: 80%; }
  .offset-xs-85, .flex-offset-xs-85 {
    margin-left: 85%; }
  .offset-xs-90, .flex-offset-xs-90 {
    margin-left: 90%; }
  .offset-xs-95, .flex-offset-xs-95 {
    margin-left: 95%; }
  .offset-xs-33, .flex-offset-xs-33 {
    margin-left: calc(100% / 3); }
  .offset-xs-66, .flex-offset-xs-66 {
    margin-left: calc(200% / 3); }
  .layout-align-xs {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-xs-start,
  .layout-align-xs-start-start,
  .layout-align-xs-start-center,
  .layout-align-xs-start-end,
  .layout-align-xs-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-xs-center,
  .layout-align-xs-center-start,
  .layout-align-xs-center-center,
  .layout-align-xs-center-end,
  .layout-align-xs-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-xs-end,
  .layout-align-xs-end-start,
  .layout-align-xs-end-center,
  .layout-align-xs-end-end,
  .layout-align-xs-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-xs-space-around,
  .layout-align-xs-space-around-center,
  .layout-align-xs-space-around-start,
  .layout-align-xs-space-around-end,
  .layout-align-xs-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-xs-space-between,
  .layout-align-xs-space-between-center,
  .layout-align-xs-space-between-start,
  .layout-align-xs-space-between-end,
  .layout-align-xs-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-xs-start-start,
  .layout-align-xs-center-start,
  .layout-align-xs-end-start,
  .layout-align-xs-space-between-start,
  .layout-align-xs-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-xs-start-center,
  .layout-align-xs-center-center,
  .layout-align-xs-end-center,
  .layout-align-xs-space-between-center,
  .layout-align-xs-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-xs-start-center > *,
  .layout-align-xs-center-center > *,
  .layout-align-xs-end-center > *,
  .layout-align-xs-space-between-center > *,
  .layout-align-xs-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-xs-start-end,
  .layout-align-xs-center-end,
  .layout-align-xs-end-end,
  .layout-align-xs-space-between-end,
  .layout-align-xs-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-xs-start-stretch,
  .layout-align-xs-center-stretch,
  .layout-align-xs-end-stretch,
  .layout-align-xs-space-between-stretch,
  .layout-align-xs-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-xs {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (max-width: 599px) {
  .flex-xs {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (max-width: 599px) {
  .flex-xs-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-xs-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-xs-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-xs-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-xs-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-xs-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-xs-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-0,
  .layout-xs-row > .flex-xs-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-xs-0,
  .layout-xs-column > .flex-xs-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-xs-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-5,
  .layout-xs-row > .flex-xs-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-5,
  .layout-xs-column > .flex-xs-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-xs-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-10,
  .layout-xs-row > .flex-xs-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-10,
  .layout-xs-column > .flex-xs-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-xs-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-15,
  .layout-xs-row > .flex-xs-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-15,
  .layout-xs-column > .flex-xs-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-xs-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-20,
  .layout-xs-row > .flex-xs-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-20,
  .layout-xs-column > .flex-xs-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-xs-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-25,
  .layout-xs-row > .flex-xs-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-25,
  .layout-xs-column > .flex-xs-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-xs-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-30,
  .layout-xs-row > .flex-xs-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-30,
  .layout-xs-column > .flex-xs-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-xs-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-35,
  .layout-xs-row > .flex-xs-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-35,
  .layout-xs-column > .flex-xs-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-xs-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-40,
  .layout-xs-row > .flex-xs-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-40,
  .layout-xs-column > .flex-xs-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-xs-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-45,
  .layout-xs-row > .flex-xs-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-45,
  .layout-xs-column > .flex-xs-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-xs-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-50,
  .layout-xs-row > .flex-xs-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-50,
  .layout-xs-column > .flex-xs-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-xs-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-55,
  .layout-xs-row > .flex-xs-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-55,
  .layout-xs-column > .flex-xs-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-xs-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-60,
  .layout-xs-row > .flex-xs-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-60,
  .layout-xs-column > .flex-xs-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-xs-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-65,
  .layout-xs-row > .flex-xs-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-65,
  .layout-xs-column > .flex-xs-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-xs-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-70,
  .layout-xs-row > .flex-xs-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-70,
  .layout-xs-column > .flex-xs-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-xs-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-75,
  .layout-xs-row > .flex-xs-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-75,
  .layout-xs-column > .flex-xs-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-xs-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-80,
  .layout-xs-row > .flex-xs-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-80,
  .layout-xs-column > .flex-xs-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-xs-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-85,
  .layout-xs-row > .flex-xs-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-85,
  .layout-xs-column > .flex-xs-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-xs-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-90,
  .layout-xs-row > .flex-xs-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-90,
  .layout-xs-column > .flex-xs-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-xs-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-95,
  .layout-xs-row > .flex-xs-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-95,
  .layout-xs-column > .flex-xs-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-xs-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-100,
  .layout-xs-row > .flex-xs-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-100,
  .layout-xs-column > .flex-xs-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-33, .layout-row > .flex-xs-33, .layout-xs-row > .flex-xs-33, .layout-xs-row > .flex-xs-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xs-66, .layout-row > .flex-xs-66, .layout-xs-row > .flex-xs-66, .layout-xs-row > .flex-xs-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-xs-row > .flex {
    min-width: 0; }
  .layout-column > .flex-xs-33, .layout-column > .flex-xs-33, .layout-xs-column > .flex-xs-33, .layout-xs-column > .flex-xs-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-xs-66, .layout-column > .flex-xs-66, .layout-xs-column > .flex-xs-66, .layout-xs-column > .flex-xs-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-xs-column > .flex {
    min-height: 0; }
  .layout-xs, .layout-xs-column, .layout-xs-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-xs-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-xs-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 600px) {
  .flex-order-gt-xs--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-gt-xs--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-gt-xs--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-gt-xs--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-gt-xs--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-gt-xs--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-gt-xs--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-gt-xs--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-gt-xs--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-gt-xs--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-gt-xs--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-gt-xs--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-gt-xs--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-gt-xs--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-gt-xs--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-gt-xs--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-gt-xs--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-gt-xs--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-gt-xs--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-gt-xs--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-gt-xs-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-gt-xs-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-gt-xs-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-gt-xs-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-gt-xs-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-gt-xs-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-gt-xs-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-gt-xs-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-gt-xs-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-gt-xs-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-gt-xs-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-gt-xs-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-gt-xs-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-gt-xs-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-gt-xs-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-gt-xs-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-gt-xs-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-gt-xs-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-gt-xs-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-gt-xs-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-gt-xs-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-gt-xs-0, .flex-offset-gt-xs-0 {
    margin-left: 0%; }
  .offset-gt-xs-5, .flex-offset-gt-xs-5 {
    margin-left: 5%; }
  .offset-gt-xs-10, .flex-offset-gt-xs-10 {
    margin-left: 10%; }
  .offset-gt-xs-15, .flex-offset-gt-xs-15 {
    margin-left: 15%; }
  .offset-gt-xs-20, .flex-offset-gt-xs-20 {
    margin-left: 20%; }
  .offset-gt-xs-25, .flex-offset-gt-xs-25 {
    margin-left: 25%; }
  .offset-gt-xs-30, .flex-offset-gt-xs-30 {
    margin-left: 30%; }
  .offset-gt-xs-35, .flex-offset-gt-xs-35 {
    margin-left: 35%; }
  .offset-gt-xs-40, .flex-offset-gt-xs-40 {
    margin-left: 40%; }
  .offset-gt-xs-45, .flex-offset-gt-xs-45 {
    margin-left: 45%; }
  .offset-gt-xs-50, .flex-offset-gt-xs-50 {
    margin-left: 50%; }
  .offset-gt-xs-55, .flex-offset-gt-xs-55 {
    margin-left: 55%; }
  .offset-gt-xs-60, .flex-offset-gt-xs-60 {
    margin-left: 60%; }
  .offset-gt-xs-65, .flex-offset-gt-xs-65 {
    margin-left: 65%; }
  .offset-gt-xs-70, .flex-offset-gt-xs-70 {
    margin-left: 70%; }
  .offset-gt-xs-75, .flex-offset-gt-xs-75 {
    margin-left: 75%; }
  .offset-gt-xs-80, .flex-offset-gt-xs-80 {
    margin-left: 80%; }
  .offset-gt-xs-85, .flex-offset-gt-xs-85 {
    margin-left: 85%; }
  .offset-gt-xs-90, .flex-offset-gt-xs-90 {
    margin-left: 90%; }
  .offset-gt-xs-95, .flex-offset-gt-xs-95 {
    margin-left: 95%; }
  .offset-gt-xs-33, .flex-offset-gt-xs-33 {
    margin-left: calc(100% / 3); }
  .offset-gt-xs-66, .flex-offset-gt-xs-66 {
    margin-left: calc(200% / 3); }
  .layout-align-gt-xs {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-gt-xs-start,
  .layout-align-gt-xs-start-start,
  .layout-align-gt-xs-start-center,
  .layout-align-gt-xs-start-end,
  .layout-align-gt-xs-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-gt-xs-center,
  .layout-align-gt-xs-center-start,
  .layout-align-gt-xs-center-center,
  .layout-align-gt-xs-center-end,
  .layout-align-gt-xs-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-gt-xs-end,
  .layout-align-gt-xs-end-start,
  .layout-align-gt-xs-end-center,
  .layout-align-gt-xs-end-end,
  .layout-align-gt-xs-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-gt-xs-space-around,
  .layout-align-gt-xs-space-around-center,
  .layout-align-gt-xs-space-around-start,
  .layout-align-gt-xs-space-around-end,
  .layout-align-gt-xs-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-gt-xs-space-between,
  .layout-align-gt-xs-space-between-center,
  .layout-align-gt-xs-space-between-start,
  .layout-align-gt-xs-space-between-end,
  .layout-align-gt-xs-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-gt-xs-start-start,
  .layout-align-gt-xs-center-start,
  .layout-align-gt-xs-end-start,
  .layout-align-gt-xs-space-between-start,
  .layout-align-gt-xs-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-gt-xs-start-center,
  .layout-align-gt-xs-center-center,
  .layout-align-gt-xs-end-center,
  .layout-align-gt-xs-space-between-center,
  .layout-align-gt-xs-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-gt-xs-start-center > *,
  .layout-align-gt-xs-center-center > *,
  .layout-align-gt-xs-end-center > *,
  .layout-align-gt-xs-space-between-center > *,
  .layout-align-gt-xs-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-gt-xs-start-end,
  .layout-align-gt-xs-center-end,
  .layout-align-gt-xs-end-end,
  .layout-align-gt-xs-space-between-end,
  .layout-align-gt-xs-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-gt-xs-start-stretch,
  .layout-align-gt-xs-center-stretch,
  .layout-align-gt-xs-end-stretch,
  .layout-align-gt-xs-space-between-stretch,
  .layout-align-gt-xs-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-gt-xs {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 600px) {
  .flex-gt-xs {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 600px) {
  .flex-gt-xs-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-gt-xs-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-xs-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-gt-xs-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-gt-xs-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-gt-xs-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-xs-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-0,
  .layout-gt-xs-row > .flex-gt-xs-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-gt-xs-0,
  .layout-gt-xs-column > .flex-gt-xs-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-gt-xs-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-5,
  .layout-gt-xs-row > .flex-gt-xs-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-5,
  .layout-gt-xs-column > .flex-gt-xs-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-gt-xs-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-10,
  .layout-gt-xs-row > .flex-gt-xs-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-10,
  .layout-gt-xs-column > .flex-gt-xs-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-gt-xs-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-15,
  .layout-gt-xs-row > .flex-gt-xs-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-15,
  .layout-gt-xs-column > .flex-gt-xs-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-gt-xs-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-20,
  .layout-gt-xs-row > .flex-gt-xs-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-20,
  .layout-gt-xs-column > .flex-gt-xs-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-gt-xs-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-25,
  .layout-gt-xs-row > .flex-gt-xs-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-25,
  .layout-gt-xs-column > .flex-gt-xs-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-gt-xs-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-30,
  .layout-gt-xs-row > .flex-gt-xs-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-30,
  .layout-gt-xs-column > .flex-gt-xs-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-gt-xs-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-35,
  .layout-gt-xs-row > .flex-gt-xs-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-35,
  .layout-gt-xs-column > .flex-gt-xs-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-gt-xs-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-40,
  .layout-gt-xs-row > .flex-gt-xs-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-40,
  .layout-gt-xs-column > .flex-gt-xs-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-gt-xs-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-45,
  .layout-gt-xs-row > .flex-gt-xs-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-45,
  .layout-gt-xs-column > .flex-gt-xs-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-gt-xs-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-50,
  .layout-gt-xs-row > .flex-gt-xs-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-50,
  .layout-gt-xs-column > .flex-gt-xs-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-gt-xs-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-55,
  .layout-gt-xs-row > .flex-gt-xs-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-55,
  .layout-gt-xs-column > .flex-gt-xs-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-gt-xs-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-60,
  .layout-gt-xs-row > .flex-gt-xs-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-60,
  .layout-gt-xs-column > .flex-gt-xs-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-gt-xs-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-65,
  .layout-gt-xs-row > .flex-gt-xs-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-65,
  .layout-gt-xs-column > .flex-gt-xs-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-gt-xs-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-70,
  .layout-gt-xs-row > .flex-gt-xs-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-70,
  .layout-gt-xs-column > .flex-gt-xs-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-gt-xs-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-75,
  .layout-gt-xs-row > .flex-gt-xs-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-75,
  .layout-gt-xs-column > .flex-gt-xs-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-gt-xs-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-80,
  .layout-gt-xs-row > .flex-gt-xs-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-80,
  .layout-gt-xs-column > .flex-gt-xs-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-gt-xs-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-85,
  .layout-gt-xs-row > .flex-gt-xs-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-85,
  .layout-gt-xs-column > .flex-gt-xs-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-gt-xs-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-90,
  .layout-gt-xs-row > .flex-gt-xs-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-90,
  .layout-gt-xs-column > .flex-gt-xs-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-gt-xs-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-95,
  .layout-gt-xs-row > .flex-gt-xs-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-95,
  .layout-gt-xs-column > .flex-gt-xs-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-gt-xs-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-100,
  .layout-gt-xs-row > .flex-gt-xs-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-100,
  .layout-gt-xs-column > .flex-gt-xs-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-33, .layout-row > .flex-gt-xs-33, .layout-gt-xs-row > .flex-gt-xs-33, .layout-gt-xs-row > .flex-gt-xs-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-xs-66, .layout-row > .flex-gt-xs-66, .layout-gt-xs-row > .flex-gt-xs-66, .layout-gt-xs-row > .flex-gt-xs-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-gt-xs-row > .flex {
    min-width: 0; }
  .layout-column > .flex-gt-xs-33, .layout-column > .flex-gt-xs-33, .layout-gt-xs-column > .flex-gt-xs-33, .layout-gt-xs-column > .flex-gt-xs-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-xs-66, .layout-column > .flex-gt-xs-66, .layout-gt-xs-column > .flex-gt-xs-66, .layout-gt-xs-column > .flex-gt-xs-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-gt-xs-column > .flex {
    min-height: 0; }
  .layout-gt-xs, .layout-gt-xs-column, .layout-gt-xs-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-gt-xs-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-gt-xs-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 600px) and (max-width: 959px) {
  .hide:not(.show-gt-xs):not(.show-sm):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-sm):not(.show) {
    display: none; }
  .hide-sm:not(.show-gt-xs):not(.show-sm):not(.show) {
    display: none; }
  .flex-order-sm--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-sm--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-sm--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-sm--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-sm--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-sm--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-sm--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-sm--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-sm--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-sm--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-sm--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-sm--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-sm--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-sm--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-sm--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-sm--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-sm--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-sm--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-sm--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-sm--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-sm-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-sm-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-sm-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-sm-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-sm-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-sm-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-sm-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-sm-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-sm-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-sm-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-sm-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-sm-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-sm-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-sm-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-sm-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-sm-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-sm-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-sm-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-sm-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-sm-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-sm-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-sm-0, .flex-offset-sm-0 {
    margin-left: 0%; }
  .offset-sm-5, .flex-offset-sm-5 {
    margin-left: 5%; }
  .offset-sm-10, .flex-offset-sm-10 {
    margin-left: 10%; }
  .offset-sm-15, .flex-offset-sm-15 {
    margin-left: 15%; }
  .offset-sm-20, .flex-offset-sm-20 {
    margin-left: 20%; }
  .offset-sm-25, .flex-offset-sm-25 {
    margin-left: 25%; }
  .offset-sm-30, .flex-offset-sm-30 {
    margin-left: 30%; }
  .offset-sm-35, .flex-offset-sm-35 {
    margin-left: 35%; }
  .offset-sm-40, .flex-offset-sm-40 {
    margin-left: 40%; }
  .offset-sm-45, .flex-offset-sm-45 {
    margin-left: 45%; }
  .offset-sm-50, .flex-offset-sm-50 {
    margin-left: 50%; }
  .offset-sm-55, .flex-offset-sm-55 {
    margin-left: 55%; }
  .offset-sm-60, .flex-offset-sm-60 {
    margin-left: 60%; }
  .offset-sm-65, .flex-offset-sm-65 {
    margin-left: 65%; }
  .offset-sm-70, .flex-offset-sm-70 {
    margin-left: 70%; }
  .offset-sm-75, .flex-offset-sm-75 {
    margin-left: 75%; }
  .offset-sm-80, .flex-offset-sm-80 {
    margin-left: 80%; }
  .offset-sm-85, .flex-offset-sm-85 {
    margin-left: 85%; }
  .offset-sm-90, .flex-offset-sm-90 {
    margin-left: 90%; }
  .offset-sm-95, .flex-offset-sm-95 {
    margin-left: 95%; }
  .offset-sm-33, .flex-offset-sm-33 {
    margin-left: calc(100% / 3); }
  .offset-sm-66, .flex-offset-sm-66 {
    margin-left: calc(200% / 3); }
  .layout-align-sm {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-sm-start,
  .layout-align-sm-start-start,
  .layout-align-sm-start-center,
  .layout-align-sm-start-end,
  .layout-align-sm-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-sm-center,
  .layout-align-sm-center-start,
  .layout-align-sm-center-center,
  .layout-align-sm-center-end,
  .layout-align-sm-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-sm-end,
  .layout-align-sm-end-start,
  .layout-align-sm-end-center,
  .layout-align-sm-end-end,
  .layout-align-sm-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-sm-space-around,
  .layout-align-sm-space-around-center,
  .layout-align-sm-space-around-start,
  .layout-align-sm-space-around-end,
  .layout-align-sm-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-sm-space-between,
  .layout-align-sm-space-between-center,
  .layout-align-sm-space-between-start,
  .layout-align-sm-space-between-end,
  .layout-align-sm-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-sm-start-start,
  .layout-align-sm-center-start,
  .layout-align-sm-end-start,
  .layout-align-sm-space-between-start,
  .layout-align-sm-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-sm-start-center,
  .layout-align-sm-center-center,
  .layout-align-sm-end-center,
  .layout-align-sm-space-between-center,
  .layout-align-sm-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-sm-start-center > *,
  .layout-align-sm-center-center > *,
  .layout-align-sm-end-center > *,
  .layout-align-sm-space-between-center > *,
  .layout-align-sm-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-sm-start-end,
  .layout-align-sm-center-end,
  .layout-align-sm-end-end,
  .layout-align-sm-space-between-end,
  .layout-align-sm-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-sm-start-stretch,
  .layout-align-sm-center-stretch,
  .layout-align-sm-end-stretch,
  .layout-align-sm-space-between-stretch,
  .layout-align-sm-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-sm {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 600px) and (max-width: 959px) {
  .flex-sm {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 600px) and (max-width: 959px) {
  .flex-sm-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-sm-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-sm-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-sm-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-sm-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-sm-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-sm-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-0,
  .layout-sm-row > .flex-sm-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-sm-0,
  .layout-sm-column > .flex-sm-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-sm-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-5,
  .layout-sm-row > .flex-sm-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-5,
  .layout-sm-column > .flex-sm-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-sm-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-10,
  .layout-sm-row > .flex-sm-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-10,
  .layout-sm-column > .flex-sm-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-sm-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-15,
  .layout-sm-row > .flex-sm-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-15,
  .layout-sm-column > .flex-sm-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-sm-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-20,
  .layout-sm-row > .flex-sm-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-20,
  .layout-sm-column > .flex-sm-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-sm-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-25,
  .layout-sm-row > .flex-sm-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-25,
  .layout-sm-column > .flex-sm-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-sm-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-30,
  .layout-sm-row > .flex-sm-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-30,
  .layout-sm-column > .flex-sm-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-sm-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-35,
  .layout-sm-row > .flex-sm-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-35,
  .layout-sm-column > .flex-sm-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-sm-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-40,
  .layout-sm-row > .flex-sm-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-40,
  .layout-sm-column > .flex-sm-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-sm-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-45,
  .layout-sm-row > .flex-sm-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-45,
  .layout-sm-column > .flex-sm-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-sm-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-50,
  .layout-sm-row > .flex-sm-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-50,
  .layout-sm-column > .flex-sm-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-sm-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-55,
  .layout-sm-row > .flex-sm-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-55,
  .layout-sm-column > .flex-sm-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-sm-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-60,
  .layout-sm-row > .flex-sm-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-60,
  .layout-sm-column > .flex-sm-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-sm-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-65,
  .layout-sm-row > .flex-sm-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-65,
  .layout-sm-column > .flex-sm-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-sm-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-70,
  .layout-sm-row > .flex-sm-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-70,
  .layout-sm-column > .flex-sm-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-sm-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-75,
  .layout-sm-row > .flex-sm-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-75,
  .layout-sm-column > .flex-sm-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-sm-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-80,
  .layout-sm-row > .flex-sm-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-80,
  .layout-sm-column > .flex-sm-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-sm-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-85,
  .layout-sm-row > .flex-sm-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-85,
  .layout-sm-column > .flex-sm-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-sm-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-90,
  .layout-sm-row > .flex-sm-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-90,
  .layout-sm-column > .flex-sm-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-sm-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-95,
  .layout-sm-row > .flex-sm-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-95,
  .layout-sm-column > .flex-sm-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-sm-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-100,
  .layout-sm-row > .flex-sm-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-100,
  .layout-sm-column > .flex-sm-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-33, .layout-row > .flex-sm-33, .layout-sm-row > .flex-sm-33, .layout-sm-row > .flex-sm-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-sm-66, .layout-row > .flex-sm-66, .layout-sm-row > .flex-sm-66, .layout-sm-row > .flex-sm-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-sm-row > .flex {
    min-width: 0; }
  .layout-column > .flex-sm-33, .layout-column > .flex-sm-33, .layout-sm-column > .flex-sm-33, .layout-sm-column > .flex-sm-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-sm-66, .layout-column > .flex-sm-66, .layout-sm-column > .flex-sm-66, .layout-sm-column > .flex-sm-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-sm-column > .flex {
    min-height: 0; }
  .layout-sm, .layout-sm-column, .layout-sm-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-sm-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-sm-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 960px) {
  .flex-order-gt-sm--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-gt-sm--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-gt-sm--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-gt-sm--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-gt-sm--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-gt-sm--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-gt-sm--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-gt-sm--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-gt-sm--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-gt-sm--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-gt-sm--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-gt-sm--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-gt-sm--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-gt-sm--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-gt-sm--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-gt-sm--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-gt-sm--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-gt-sm--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-gt-sm--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-gt-sm--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-gt-sm-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-gt-sm-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-gt-sm-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-gt-sm-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-gt-sm-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-gt-sm-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-gt-sm-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-gt-sm-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-gt-sm-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-gt-sm-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-gt-sm-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-gt-sm-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-gt-sm-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-gt-sm-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-gt-sm-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-gt-sm-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-gt-sm-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-gt-sm-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-gt-sm-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-gt-sm-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-gt-sm-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-gt-sm-0, .flex-offset-gt-sm-0 {
    margin-left: 0%; }
  .offset-gt-sm-5, .flex-offset-gt-sm-5 {
    margin-left: 5%; }
  .offset-gt-sm-10, .flex-offset-gt-sm-10 {
    margin-left: 10%; }
  .offset-gt-sm-15, .flex-offset-gt-sm-15 {
    margin-left: 15%; }
  .offset-gt-sm-20, .flex-offset-gt-sm-20 {
    margin-left: 20%; }
  .offset-gt-sm-25, .flex-offset-gt-sm-25 {
    margin-left: 25%; }
  .offset-gt-sm-30, .flex-offset-gt-sm-30 {
    margin-left: 30%; }
  .offset-gt-sm-35, .flex-offset-gt-sm-35 {
    margin-left: 35%; }
  .offset-gt-sm-40, .flex-offset-gt-sm-40 {
    margin-left: 40%; }
  .offset-gt-sm-45, .flex-offset-gt-sm-45 {
    margin-left: 45%; }
  .offset-gt-sm-50, .flex-offset-gt-sm-50 {
    margin-left: 50%; }
  .offset-gt-sm-55, .flex-offset-gt-sm-55 {
    margin-left: 55%; }
  .offset-gt-sm-60, .flex-offset-gt-sm-60 {
    margin-left: 60%; }
  .offset-gt-sm-65, .flex-offset-gt-sm-65 {
    margin-left: 65%; }
  .offset-gt-sm-70, .flex-offset-gt-sm-70 {
    margin-left: 70%; }
  .offset-gt-sm-75, .flex-offset-gt-sm-75 {
    margin-left: 75%; }
  .offset-gt-sm-80, .flex-offset-gt-sm-80 {
    margin-left: 80%; }
  .offset-gt-sm-85, .flex-offset-gt-sm-85 {
    margin-left: 85%; }
  .offset-gt-sm-90, .flex-offset-gt-sm-90 {
    margin-left: 90%; }
  .offset-gt-sm-95, .flex-offset-gt-sm-95 {
    margin-left: 95%; }
  .offset-gt-sm-33, .flex-offset-gt-sm-33 {
    margin-left: calc(100% / 3); }
  .offset-gt-sm-66, .flex-offset-gt-sm-66 {
    margin-left: calc(200% / 3); }
  .layout-align-gt-sm {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-gt-sm-start,
  .layout-align-gt-sm-start-start,
  .layout-align-gt-sm-start-center,
  .layout-align-gt-sm-start-end,
  .layout-align-gt-sm-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-gt-sm-center,
  .layout-align-gt-sm-center-start,
  .layout-align-gt-sm-center-center,
  .layout-align-gt-sm-center-end,
  .layout-align-gt-sm-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-gt-sm-end,
  .layout-align-gt-sm-end-start,
  .layout-align-gt-sm-end-center,
  .layout-align-gt-sm-end-end,
  .layout-align-gt-sm-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-gt-sm-space-around,
  .layout-align-gt-sm-space-around-center,
  .layout-align-gt-sm-space-around-start,
  .layout-align-gt-sm-space-around-end,
  .layout-align-gt-sm-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-gt-sm-space-between,
  .layout-align-gt-sm-space-between-center,
  .layout-align-gt-sm-space-between-start,
  .layout-align-gt-sm-space-between-end,
  .layout-align-gt-sm-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-gt-sm-start-start,
  .layout-align-gt-sm-center-start,
  .layout-align-gt-sm-end-start,
  .layout-align-gt-sm-space-between-start,
  .layout-align-gt-sm-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-gt-sm-start-center,
  .layout-align-gt-sm-center-center,
  .layout-align-gt-sm-end-center,
  .layout-align-gt-sm-space-between-center,
  .layout-align-gt-sm-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-gt-sm-start-center > *,
  .layout-align-gt-sm-center-center > *,
  .layout-align-gt-sm-end-center > *,
  .layout-align-gt-sm-space-between-center > *,
  .layout-align-gt-sm-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-gt-sm-start-end,
  .layout-align-gt-sm-center-end,
  .layout-align-gt-sm-end-end,
  .layout-align-gt-sm-space-between-end,
  .layout-align-gt-sm-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-gt-sm-start-stretch,
  .layout-align-gt-sm-center-stretch,
  .layout-align-gt-sm-end-stretch,
  .layout-align-gt-sm-space-between-stretch,
  .layout-align-gt-sm-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-gt-sm {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 960px) {
  .flex-gt-sm {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 960px) {
  .flex-gt-sm-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-gt-sm-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-sm-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-gt-sm-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-gt-sm-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-gt-sm-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-sm-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-0,
  .layout-gt-sm-row > .flex-gt-sm-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-gt-sm-0,
  .layout-gt-sm-column > .flex-gt-sm-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-gt-sm-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-5,
  .layout-gt-sm-row > .flex-gt-sm-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-5,
  .layout-gt-sm-column > .flex-gt-sm-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-gt-sm-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-10,
  .layout-gt-sm-row > .flex-gt-sm-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-10,
  .layout-gt-sm-column > .flex-gt-sm-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-gt-sm-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-15,
  .layout-gt-sm-row > .flex-gt-sm-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-15,
  .layout-gt-sm-column > .flex-gt-sm-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-gt-sm-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-20,
  .layout-gt-sm-row > .flex-gt-sm-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-20,
  .layout-gt-sm-column > .flex-gt-sm-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-gt-sm-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-25,
  .layout-gt-sm-row > .flex-gt-sm-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-25,
  .layout-gt-sm-column > .flex-gt-sm-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-gt-sm-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-30,
  .layout-gt-sm-row > .flex-gt-sm-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-30,
  .layout-gt-sm-column > .flex-gt-sm-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-gt-sm-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-35,
  .layout-gt-sm-row > .flex-gt-sm-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-35,
  .layout-gt-sm-column > .flex-gt-sm-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-gt-sm-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-40,
  .layout-gt-sm-row > .flex-gt-sm-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-40,
  .layout-gt-sm-column > .flex-gt-sm-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-gt-sm-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-45,
  .layout-gt-sm-row > .flex-gt-sm-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-45,
  .layout-gt-sm-column > .flex-gt-sm-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-gt-sm-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-50,
  .layout-gt-sm-row > .flex-gt-sm-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-50,
  .layout-gt-sm-column > .flex-gt-sm-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-gt-sm-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-55,
  .layout-gt-sm-row > .flex-gt-sm-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-55,
  .layout-gt-sm-column > .flex-gt-sm-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-gt-sm-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-60,
  .layout-gt-sm-row > .flex-gt-sm-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-60,
  .layout-gt-sm-column > .flex-gt-sm-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-gt-sm-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-65,
  .layout-gt-sm-row > .flex-gt-sm-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-65,
  .layout-gt-sm-column > .flex-gt-sm-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-gt-sm-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-70,
  .layout-gt-sm-row > .flex-gt-sm-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-70,
  .layout-gt-sm-column > .flex-gt-sm-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-gt-sm-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-75,
  .layout-gt-sm-row > .flex-gt-sm-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-75,
  .layout-gt-sm-column > .flex-gt-sm-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-gt-sm-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-80,
  .layout-gt-sm-row > .flex-gt-sm-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-80,
  .layout-gt-sm-column > .flex-gt-sm-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-gt-sm-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-85,
  .layout-gt-sm-row > .flex-gt-sm-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-85,
  .layout-gt-sm-column > .flex-gt-sm-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-gt-sm-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-90,
  .layout-gt-sm-row > .flex-gt-sm-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-90,
  .layout-gt-sm-column > .flex-gt-sm-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-gt-sm-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-95,
  .layout-gt-sm-row > .flex-gt-sm-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-95,
  .layout-gt-sm-column > .flex-gt-sm-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-gt-sm-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-100,
  .layout-gt-sm-row > .flex-gt-sm-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-100,
  .layout-gt-sm-column > .flex-gt-sm-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-33, .layout-row > .flex-gt-sm-33, .layout-gt-sm-row > .flex-gt-sm-33, .layout-gt-sm-row > .flex-gt-sm-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-sm-66, .layout-row > .flex-gt-sm-66, .layout-gt-sm-row > .flex-gt-sm-66, .layout-gt-sm-row > .flex-gt-sm-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-gt-sm-row > .flex {
    min-width: 0; }
  .layout-column > .flex-gt-sm-33, .layout-column > .flex-gt-sm-33, .layout-gt-sm-column > .flex-gt-sm-33, .layout-gt-sm-column > .flex-gt-sm-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-sm-66, .layout-column > .flex-gt-sm-66, .layout-gt-sm-column > .flex-gt-sm-66, .layout-gt-sm-column > .flex-gt-sm-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-gt-sm-column > .flex {
    min-height: 0; }
  .layout-gt-sm, .layout-gt-sm-column, .layout-gt-sm-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-gt-sm-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-gt-sm-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 960px) and (max-width: 1279px) {
  .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show), .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show) {
    display: none; }
  .hide-md:not(.show-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {
    display: none; }
  .flex-order-md--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-md--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-md--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-md--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-md--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-md--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-md--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-md--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-md--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-md--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-md--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-md--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-md--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-md--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-md--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-md--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-md--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-md--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-md--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-md--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-md-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-md-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-md-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-md-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-md-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-md-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-md-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-md-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-md-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-md-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-md-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-md-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-md-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-md-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-md-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-md-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-md-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-md-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-md-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-md-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-md-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-md-0, .flex-offset-md-0 {
    margin-left: 0%; }
  .offset-md-5, .flex-offset-md-5 {
    margin-left: 5%; }
  .offset-md-10, .flex-offset-md-10 {
    margin-left: 10%; }
  .offset-md-15, .flex-offset-md-15 {
    margin-left: 15%; }
  .offset-md-20, .flex-offset-md-20 {
    margin-left: 20%; }
  .offset-md-25, .flex-offset-md-25 {
    margin-left: 25%; }
  .offset-md-30, .flex-offset-md-30 {
    margin-left: 30%; }
  .offset-md-35, .flex-offset-md-35 {
    margin-left: 35%; }
  .offset-md-40, .flex-offset-md-40 {
    margin-left: 40%; }
  .offset-md-45, .flex-offset-md-45 {
    margin-left: 45%; }
  .offset-md-50, .flex-offset-md-50 {
    margin-left: 50%; }
  .offset-md-55, .flex-offset-md-55 {
    margin-left: 55%; }
  .offset-md-60, .flex-offset-md-60 {
    margin-left: 60%; }
  .offset-md-65, .flex-offset-md-65 {
    margin-left: 65%; }
  .offset-md-70, .flex-offset-md-70 {
    margin-left: 70%; }
  .offset-md-75, .flex-offset-md-75 {
    margin-left: 75%; }
  .offset-md-80, .flex-offset-md-80 {
    margin-left: 80%; }
  .offset-md-85, .flex-offset-md-85 {
    margin-left: 85%; }
  .offset-md-90, .flex-offset-md-90 {
    margin-left: 90%; }
  .offset-md-95, .flex-offset-md-95 {
    margin-left: 95%; }
  .offset-md-33, .flex-offset-md-33 {
    margin-left: calc(100% / 3); }
  .offset-md-66, .flex-offset-md-66 {
    margin-left: calc(200% / 3); }
  .layout-align-md {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-md-start,
  .layout-align-md-start-start,
  .layout-align-md-start-center,
  .layout-align-md-start-end,
  .layout-align-md-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-md-center,
  .layout-align-md-center-start,
  .layout-align-md-center-center,
  .layout-align-md-center-end,
  .layout-align-md-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-md-end,
  .layout-align-md-end-start,
  .layout-align-md-end-center,
  .layout-align-md-end-end,
  .layout-align-md-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-md-space-around,
  .layout-align-md-space-around-center,
  .layout-align-md-space-around-start,
  .layout-align-md-space-around-end,
  .layout-align-md-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-md-space-between,
  .layout-align-md-space-between-center,
  .layout-align-md-space-between-start,
  .layout-align-md-space-between-end,
  .layout-align-md-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-md-start-start,
  .layout-align-md-center-start,
  .layout-align-md-end-start,
  .layout-align-md-space-between-start,
  .layout-align-md-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-md-start-center,
  .layout-align-md-center-center,
  .layout-align-md-end-center,
  .layout-align-md-space-between-center,
  .layout-align-md-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-md-start-center > *,
  .layout-align-md-center-center > *,
  .layout-align-md-end-center > *,
  .layout-align-md-space-between-center > *,
  .layout-align-md-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-md-start-end,
  .layout-align-md-center-end,
  .layout-align-md-end-end,
  .layout-align-md-space-between-end,
  .layout-align-md-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-md-start-stretch,
  .layout-align-md-center-stretch,
  .layout-align-md-end-stretch,
  .layout-align-md-space-between-stretch,
  .layout-align-md-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-md {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 960px) and (max-width: 1279px) {
  .flex-md {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 960px) and (max-width: 1279px) {
  .flex-md-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-md-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-md-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-md-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-md-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-md-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-md-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-0,
  .layout-md-row > .flex-md-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-md-0,
  .layout-md-column > .flex-md-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-md-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-5,
  .layout-md-row > .flex-md-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-5,
  .layout-md-column > .flex-md-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-md-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-10,
  .layout-md-row > .flex-md-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-10,
  .layout-md-column > .flex-md-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-md-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-15,
  .layout-md-row > .flex-md-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-15,
  .layout-md-column > .flex-md-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-md-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-20,
  .layout-md-row > .flex-md-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-20,
  .layout-md-column > .flex-md-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-md-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-25,
  .layout-md-row > .flex-md-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-25,
  .layout-md-column > .flex-md-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-md-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-30,
  .layout-md-row > .flex-md-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-30,
  .layout-md-column > .flex-md-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-md-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-35,
  .layout-md-row > .flex-md-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-35,
  .layout-md-column > .flex-md-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-md-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-40,
  .layout-md-row > .flex-md-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-40,
  .layout-md-column > .flex-md-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-md-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-45,
  .layout-md-row > .flex-md-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-45,
  .layout-md-column > .flex-md-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-md-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-50,
  .layout-md-row > .flex-md-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-50,
  .layout-md-column > .flex-md-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-md-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-55,
  .layout-md-row > .flex-md-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-55,
  .layout-md-column > .flex-md-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-md-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-60,
  .layout-md-row > .flex-md-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-60,
  .layout-md-column > .flex-md-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-md-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-65,
  .layout-md-row > .flex-md-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-65,
  .layout-md-column > .flex-md-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-md-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-70,
  .layout-md-row > .flex-md-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-70,
  .layout-md-column > .flex-md-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-md-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-75,
  .layout-md-row > .flex-md-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-75,
  .layout-md-column > .flex-md-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-md-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-80,
  .layout-md-row > .flex-md-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-80,
  .layout-md-column > .flex-md-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-md-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-85,
  .layout-md-row > .flex-md-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-85,
  .layout-md-column > .flex-md-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-md-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-90,
  .layout-md-row > .flex-md-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-90,
  .layout-md-column > .flex-md-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-md-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-95,
  .layout-md-row > .flex-md-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-95,
  .layout-md-column > .flex-md-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-md-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-100,
  .layout-md-row > .flex-md-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-md-100,
  .layout-md-column > .flex-md-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-33, .layout-row > .flex-md-33, .layout-md-row > .flex-md-33, .layout-md-row > .flex-md-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-md-66, .layout-row > .flex-md-66, .layout-md-row > .flex-md-66, .layout-md-row > .flex-md-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-md-row > .flex {
    min-width: 0; }
  .layout-column > .flex-md-33, .layout-column > .flex-md-33, .layout-md-column > .flex-md-33, .layout-md-column > .flex-md-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-md-66, .layout-column > .flex-md-66, .layout-md-column > .flex-md-66, .layout-md-column > .flex-md-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-md-column > .flex {
    min-height: 0; }
  .layout-md, .layout-md-column, .layout-md-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-md-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-md-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 1280px) {
  .flex-order-gt-md--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-gt-md--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-gt-md--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-gt-md--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-gt-md--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-gt-md--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-gt-md--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-gt-md--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-gt-md--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-gt-md--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-gt-md--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-gt-md--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-gt-md--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-gt-md--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-gt-md--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-gt-md--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-gt-md--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-gt-md--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-gt-md--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-gt-md--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-gt-md-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-gt-md-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-gt-md-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-gt-md-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-gt-md-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-gt-md-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-gt-md-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-gt-md-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-gt-md-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-gt-md-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-gt-md-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-gt-md-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-gt-md-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-gt-md-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-gt-md-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-gt-md-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-gt-md-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-gt-md-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-gt-md-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-gt-md-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-gt-md-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-gt-md-0, .flex-offset-gt-md-0 {
    margin-left: 0%; }
  .offset-gt-md-5, .flex-offset-gt-md-5 {
    margin-left: 5%; }
  .offset-gt-md-10, .flex-offset-gt-md-10 {
    margin-left: 10%; }
  .offset-gt-md-15, .flex-offset-gt-md-15 {
    margin-left: 15%; }
  .offset-gt-md-20, .flex-offset-gt-md-20 {
    margin-left: 20%; }
  .offset-gt-md-25, .flex-offset-gt-md-25 {
    margin-left: 25%; }
  .offset-gt-md-30, .flex-offset-gt-md-30 {
    margin-left: 30%; }
  .offset-gt-md-35, .flex-offset-gt-md-35 {
    margin-left: 35%; }
  .offset-gt-md-40, .flex-offset-gt-md-40 {
    margin-left: 40%; }
  .offset-gt-md-45, .flex-offset-gt-md-45 {
    margin-left: 45%; }
  .offset-gt-md-50, .flex-offset-gt-md-50 {
    margin-left: 50%; }
  .offset-gt-md-55, .flex-offset-gt-md-55 {
    margin-left: 55%; }
  .offset-gt-md-60, .flex-offset-gt-md-60 {
    margin-left: 60%; }
  .offset-gt-md-65, .flex-offset-gt-md-65 {
    margin-left: 65%; }
  .offset-gt-md-70, .flex-offset-gt-md-70 {
    margin-left: 70%; }
  .offset-gt-md-75, .flex-offset-gt-md-75 {
    margin-left: 75%; }
  .offset-gt-md-80, .flex-offset-gt-md-80 {
    margin-left: 80%; }
  .offset-gt-md-85, .flex-offset-gt-md-85 {
    margin-left: 85%; }
  .offset-gt-md-90, .flex-offset-gt-md-90 {
    margin-left: 90%; }
  .offset-gt-md-95, .flex-offset-gt-md-95 {
    margin-left: 95%; }
  .offset-gt-md-33, .flex-offset-gt-md-33 {
    margin-left: calc(100% / 3); }
  .offset-gt-md-66, .flex-offset-gt-md-66 {
    margin-left: calc(200% / 3); }
  .layout-align-gt-md {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-gt-md-start,
  .layout-align-gt-md-start-start,
  .layout-align-gt-md-start-center,
  .layout-align-gt-md-start-end,
  .layout-align-gt-md-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-gt-md-center,
  .layout-align-gt-md-center-start,
  .layout-align-gt-md-center-center,
  .layout-align-gt-md-center-end,
  .layout-align-gt-md-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-gt-md-end,
  .layout-align-gt-md-end-start,
  .layout-align-gt-md-end-center,
  .layout-align-gt-md-end-end,
  .layout-align-gt-md-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-gt-md-space-around,
  .layout-align-gt-md-space-around-center,
  .layout-align-gt-md-space-around-start,
  .layout-align-gt-md-space-around-end,
  .layout-align-gt-md-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-gt-md-space-between,
  .layout-align-gt-md-space-between-center,
  .layout-align-gt-md-space-between-start,
  .layout-align-gt-md-space-between-end,
  .layout-align-gt-md-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-gt-md-start-start,
  .layout-align-gt-md-center-start,
  .layout-align-gt-md-end-start,
  .layout-align-gt-md-space-between-start,
  .layout-align-gt-md-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-gt-md-start-center,
  .layout-align-gt-md-center-center,
  .layout-align-gt-md-end-center,
  .layout-align-gt-md-space-between-center,
  .layout-align-gt-md-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-gt-md-start-center > *,
  .layout-align-gt-md-center-center > *,
  .layout-align-gt-md-end-center > *,
  .layout-align-gt-md-space-between-center > *,
  .layout-align-gt-md-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-gt-md-start-end,
  .layout-align-gt-md-center-end,
  .layout-align-gt-md-end-end,
  .layout-align-gt-md-space-between-end,
  .layout-align-gt-md-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-gt-md-start-stretch,
  .layout-align-gt-md-center-stretch,
  .layout-align-gt-md-end-stretch,
  .layout-align-gt-md-space-between-stretch,
  .layout-align-gt-md-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-gt-md {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 1280px) {
  .flex-gt-md {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 1280px) {
  .flex-gt-md-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-gt-md-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-md-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-gt-md-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-gt-md-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-gt-md-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-md-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-0,
  .layout-gt-md-row > .flex-gt-md-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-gt-md-0,
  .layout-gt-md-column > .flex-gt-md-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-gt-md-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-5,
  .layout-gt-md-row > .flex-gt-md-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-5,
  .layout-gt-md-column > .flex-gt-md-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-gt-md-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-10,
  .layout-gt-md-row > .flex-gt-md-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-10,
  .layout-gt-md-column > .flex-gt-md-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-gt-md-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-15,
  .layout-gt-md-row > .flex-gt-md-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-15,
  .layout-gt-md-column > .flex-gt-md-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-gt-md-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-20,
  .layout-gt-md-row > .flex-gt-md-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-20,
  .layout-gt-md-column > .flex-gt-md-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-gt-md-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-25,
  .layout-gt-md-row > .flex-gt-md-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-25,
  .layout-gt-md-column > .flex-gt-md-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-gt-md-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-30,
  .layout-gt-md-row > .flex-gt-md-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-30,
  .layout-gt-md-column > .flex-gt-md-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-gt-md-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-35,
  .layout-gt-md-row > .flex-gt-md-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-35,
  .layout-gt-md-column > .flex-gt-md-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-gt-md-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-40,
  .layout-gt-md-row > .flex-gt-md-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-40,
  .layout-gt-md-column > .flex-gt-md-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-gt-md-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-45,
  .layout-gt-md-row > .flex-gt-md-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-45,
  .layout-gt-md-column > .flex-gt-md-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-gt-md-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-50,
  .layout-gt-md-row > .flex-gt-md-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-50,
  .layout-gt-md-column > .flex-gt-md-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-gt-md-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-55,
  .layout-gt-md-row > .flex-gt-md-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-55,
  .layout-gt-md-column > .flex-gt-md-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-gt-md-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-60,
  .layout-gt-md-row > .flex-gt-md-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-60,
  .layout-gt-md-column > .flex-gt-md-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-gt-md-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-65,
  .layout-gt-md-row > .flex-gt-md-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-65,
  .layout-gt-md-column > .flex-gt-md-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-gt-md-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-70,
  .layout-gt-md-row > .flex-gt-md-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-70,
  .layout-gt-md-column > .flex-gt-md-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-gt-md-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-75,
  .layout-gt-md-row > .flex-gt-md-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-75,
  .layout-gt-md-column > .flex-gt-md-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-gt-md-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-80,
  .layout-gt-md-row > .flex-gt-md-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-80,
  .layout-gt-md-column > .flex-gt-md-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-gt-md-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-85,
  .layout-gt-md-row > .flex-gt-md-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-85,
  .layout-gt-md-column > .flex-gt-md-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-gt-md-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-90,
  .layout-gt-md-row > .flex-gt-md-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-90,
  .layout-gt-md-column > .flex-gt-md-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-gt-md-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-95,
  .layout-gt-md-row > .flex-gt-md-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-95,
  .layout-gt-md-column > .flex-gt-md-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-gt-md-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-100,
  .layout-gt-md-row > .flex-gt-md-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-100,
  .layout-gt-md-column > .flex-gt-md-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-33, .layout-row > .flex-gt-md-33, .layout-gt-md-row > .flex-gt-md-33, .layout-gt-md-row > .flex-gt-md-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-md-66, .layout-row > .flex-gt-md-66, .layout-gt-md-row > .flex-gt-md-66, .layout-gt-md-row > .flex-gt-md-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-gt-md-row > .flex {
    min-width: 0; }
  .layout-column > .flex-gt-md-33, .layout-column > .flex-gt-md-33, .layout-gt-md-column > .flex-gt-md-33, .layout-gt-md-column > .flex-gt-md-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-md-66, .layout-column > .flex-gt-md-66, .layout-gt-md-column > .flex-gt-md-66, .layout-gt-md-column > .flex-gt-md-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-gt-md-column > .flex {
    min-height: 0; }
  .layout-gt-md, .layout-gt-md-column, .layout-gt-md-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-gt-md-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-gt-md-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 1280px) and (max-width: 1919px) {
  .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show) {
    display: none; }
  .hide-lg:not(.show-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {
    display: none; }
  .flex-order-lg--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-lg--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-lg--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-lg--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-lg--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-lg--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-lg--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-lg--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-lg--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-lg--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-lg--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-lg--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-lg--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-lg--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-lg--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-lg--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-lg--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-lg--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-lg--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-lg--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-lg-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-lg-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-lg-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-lg-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-lg-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-lg-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-lg-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-lg-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-lg-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-lg-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-lg-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-lg-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-lg-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-lg-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-lg-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-lg-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-lg-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-lg-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-lg-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-lg-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-lg-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-lg-0, .flex-offset-lg-0 {
    margin-left: 0%; }
  .offset-lg-5, .flex-offset-lg-5 {
    margin-left: 5%; }
  .offset-lg-10, .flex-offset-lg-10 {
    margin-left: 10%; }
  .offset-lg-15, .flex-offset-lg-15 {
    margin-left: 15%; }
  .offset-lg-20, .flex-offset-lg-20 {
    margin-left: 20%; }
  .offset-lg-25, .flex-offset-lg-25 {
    margin-left: 25%; }
  .offset-lg-30, .flex-offset-lg-30 {
    margin-left: 30%; }
  .offset-lg-35, .flex-offset-lg-35 {
    margin-left: 35%; }
  .offset-lg-40, .flex-offset-lg-40 {
    margin-left: 40%; }
  .offset-lg-45, .flex-offset-lg-45 {
    margin-left: 45%; }
  .offset-lg-50, .flex-offset-lg-50 {
    margin-left: 50%; }
  .offset-lg-55, .flex-offset-lg-55 {
    margin-left: 55%; }
  .offset-lg-60, .flex-offset-lg-60 {
    margin-left: 60%; }
  .offset-lg-65, .flex-offset-lg-65 {
    margin-left: 65%; }
  .offset-lg-70, .flex-offset-lg-70 {
    margin-left: 70%; }
  .offset-lg-75, .flex-offset-lg-75 {
    margin-left: 75%; }
  .offset-lg-80, .flex-offset-lg-80 {
    margin-left: 80%; }
  .offset-lg-85, .flex-offset-lg-85 {
    margin-left: 85%; }
  .offset-lg-90, .flex-offset-lg-90 {
    margin-left: 90%; }
  .offset-lg-95, .flex-offset-lg-95 {
    margin-left: 95%; }
  .offset-lg-33, .flex-offset-lg-33 {
    margin-left: calc(100% / 3); }
  .offset-lg-66, .flex-offset-lg-66 {
    margin-left: calc(200% / 3); }
  .layout-align-lg {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-lg-start,
  .layout-align-lg-start-start,
  .layout-align-lg-start-center,
  .layout-align-lg-start-end,
  .layout-align-lg-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-lg-center,
  .layout-align-lg-center-start,
  .layout-align-lg-center-center,
  .layout-align-lg-center-end,
  .layout-align-lg-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-lg-end,
  .layout-align-lg-end-start,
  .layout-align-lg-end-center,
  .layout-align-lg-end-end,
  .layout-align-lg-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-lg-space-around,
  .layout-align-lg-space-around-center,
  .layout-align-lg-space-around-start,
  .layout-align-lg-space-around-end,
  .layout-align-lg-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-lg-space-between,
  .layout-align-lg-space-between-center,
  .layout-align-lg-space-between-start,
  .layout-align-lg-space-between-end,
  .layout-align-lg-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-lg-start-start,
  .layout-align-lg-center-start,
  .layout-align-lg-end-start,
  .layout-align-lg-space-between-start,
  .layout-align-lg-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-lg-start-center,
  .layout-align-lg-center-center,
  .layout-align-lg-end-center,
  .layout-align-lg-space-between-center,
  .layout-align-lg-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-lg-start-center > *,
  .layout-align-lg-center-center > *,
  .layout-align-lg-end-center > *,
  .layout-align-lg-space-between-center > *,
  .layout-align-lg-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-lg-start-end,
  .layout-align-lg-center-end,
  .layout-align-lg-end-end,
  .layout-align-lg-space-between-end,
  .layout-align-lg-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-lg-start-stretch,
  .layout-align-lg-center-stretch,
  .layout-align-lg-end-stretch,
  .layout-align-lg-space-between-stretch,
  .layout-align-lg-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-lg {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 1280px) and (max-width: 1919px) {
  .flex-lg {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 1280px) and (max-width: 1919px) {
  .flex-lg-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-lg-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-lg-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-lg-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-lg-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-lg-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-lg-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-0,
  .layout-lg-row > .flex-lg-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-lg-0,
  .layout-lg-column > .flex-lg-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-lg-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-5,
  .layout-lg-row > .flex-lg-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-5,
  .layout-lg-column > .flex-lg-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-lg-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-10,
  .layout-lg-row > .flex-lg-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-10,
  .layout-lg-column > .flex-lg-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-lg-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-15,
  .layout-lg-row > .flex-lg-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-15,
  .layout-lg-column > .flex-lg-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-lg-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-20,
  .layout-lg-row > .flex-lg-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-20,
  .layout-lg-column > .flex-lg-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-lg-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-25,
  .layout-lg-row > .flex-lg-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-25,
  .layout-lg-column > .flex-lg-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-lg-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-30,
  .layout-lg-row > .flex-lg-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-30,
  .layout-lg-column > .flex-lg-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-lg-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-35,
  .layout-lg-row > .flex-lg-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-35,
  .layout-lg-column > .flex-lg-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-lg-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-40,
  .layout-lg-row > .flex-lg-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-40,
  .layout-lg-column > .flex-lg-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-lg-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-45,
  .layout-lg-row > .flex-lg-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-45,
  .layout-lg-column > .flex-lg-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-lg-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-50,
  .layout-lg-row > .flex-lg-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-50,
  .layout-lg-column > .flex-lg-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-lg-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-55,
  .layout-lg-row > .flex-lg-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-55,
  .layout-lg-column > .flex-lg-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-lg-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-60,
  .layout-lg-row > .flex-lg-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-60,
  .layout-lg-column > .flex-lg-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-lg-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-65,
  .layout-lg-row > .flex-lg-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-65,
  .layout-lg-column > .flex-lg-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-lg-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-70,
  .layout-lg-row > .flex-lg-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-70,
  .layout-lg-column > .flex-lg-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-lg-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-75,
  .layout-lg-row > .flex-lg-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-75,
  .layout-lg-column > .flex-lg-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-lg-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-80,
  .layout-lg-row > .flex-lg-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-80,
  .layout-lg-column > .flex-lg-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-lg-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-85,
  .layout-lg-row > .flex-lg-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-85,
  .layout-lg-column > .flex-lg-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-lg-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-90,
  .layout-lg-row > .flex-lg-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-90,
  .layout-lg-column > .flex-lg-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-lg-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-95,
  .layout-lg-row > .flex-lg-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-95,
  .layout-lg-column > .flex-lg-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-lg-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-100,
  .layout-lg-row > .flex-lg-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-100,
  .layout-lg-column > .flex-lg-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-33, .layout-row > .flex-lg-33, .layout-lg-row > .flex-lg-33, .layout-lg-row > .flex-lg-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-lg-66, .layout-row > .flex-lg-66, .layout-lg-row > .flex-lg-66, .layout-lg-row > .flex-lg-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-lg-row > .flex {
    min-width: 0; }
  .layout-column > .flex-lg-33, .layout-column > .flex-lg-33, .layout-lg-column > .flex-lg-33, .layout-lg-column > .flex-lg-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-lg-66, .layout-column > .flex-lg-66, .layout-lg-column > .flex-lg-66, .layout-lg-column > .flex-lg-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-lg-column > .flex {
    min-height: 0; }
  .layout-lg, .layout-lg-column, .layout-lg-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-lg-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-lg-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; } }

@media (min-width: 1920px) {
  .flex-order-gt-lg--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-gt-lg--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-gt-lg--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-gt-lg--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-gt-lg--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-gt-lg--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-gt-lg--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-gt-lg--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-gt-lg--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-gt-lg--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-gt-lg--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-gt-lg--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-gt-lg--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-gt-lg--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-gt-lg--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-gt-lg--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-gt-lg--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-gt-lg--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-gt-lg--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-gt-lg--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-gt-lg-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-gt-lg-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-gt-lg-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-gt-lg-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-gt-lg-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-gt-lg-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-gt-lg-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-gt-lg-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-gt-lg-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-gt-lg-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-gt-lg-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-gt-lg-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-gt-lg-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-gt-lg-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-gt-lg-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-gt-lg-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-gt-lg-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-gt-lg-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-gt-lg-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-gt-lg-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-gt-lg-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-gt-lg-0, .flex-offset-gt-lg-0 {
    margin-left: 0%; }
  .offset-gt-lg-5, .flex-offset-gt-lg-5 {
    margin-left: 5%; }
  .offset-gt-lg-10, .flex-offset-gt-lg-10 {
    margin-left: 10%; }
  .offset-gt-lg-15, .flex-offset-gt-lg-15 {
    margin-left: 15%; }
  .offset-gt-lg-20, .flex-offset-gt-lg-20 {
    margin-left: 20%; }
  .offset-gt-lg-25, .flex-offset-gt-lg-25 {
    margin-left: 25%; }
  .offset-gt-lg-30, .flex-offset-gt-lg-30 {
    margin-left: 30%; }
  .offset-gt-lg-35, .flex-offset-gt-lg-35 {
    margin-left: 35%; }
  .offset-gt-lg-40, .flex-offset-gt-lg-40 {
    margin-left: 40%; }
  .offset-gt-lg-45, .flex-offset-gt-lg-45 {
    margin-left: 45%; }
  .offset-gt-lg-50, .flex-offset-gt-lg-50 {
    margin-left: 50%; }
  .offset-gt-lg-55, .flex-offset-gt-lg-55 {
    margin-left: 55%; }
  .offset-gt-lg-60, .flex-offset-gt-lg-60 {
    margin-left: 60%; }
  .offset-gt-lg-65, .flex-offset-gt-lg-65 {
    margin-left: 65%; }
  .offset-gt-lg-70, .flex-offset-gt-lg-70 {
    margin-left: 70%; }
  .offset-gt-lg-75, .flex-offset-gt-lg-75 {
    margin-left: 75%; }
  .offset-gt-lg-80, .flex-offset-gt-lg-80 {
    margin-left: 80%; }
  .offset-gt-lg-85, .flex-offset-gt-lg-85 {
    margin-left: 85%; }
  .offset-gt-lg-90, .flex-offset-gt-lg-90 {
    margin-left: 90%; }
  .offset-gt-lg-95, .flex-offset-gt-lg-95 {
    margin-left: 95%; }
  .offset-gt-lg-33, .flex-offset-gt-lg-33 {
    margin-left: calc(100% / 3); }
  .offset-gt-lg-66, .flex-offset-gt-lg-66 {
    margin-left: calc(200% / 3); }
  .layout-align-gt-lg {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-gt-lg-start,
  .layout-align-gt-lg-start-start,
  .layout-align-gt-lg-start-center,
  .layout-align-gt-lg-start-end,
  .layout-align-gt-lg-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-gt-lg-center,
  .layout-align-gt-lg-center-start,
  .layout-align-gt-lg-center-center,
  .layout-align-gt-lg-center-end,
  .layout-align-gt-lg-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-gt-lg-end,
  .layout-align-gt-lg-end-start,
  .layout-align-gt-lg-end-center,
  .layout-align-gt-lg-end-end,
  .layout-align-gt-lg-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-gt-lg-space-around,
  .layout-align-gt-lg-space-around-center,
  .layout-align-gt-lg-space-around-start,
  .layout-align-gt-lg-space-around-end,
  .layout-align-gt-lg-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-gt-lg-space-between,
  .layout-align-gt-lg-space-between-center,
  .layout-align-gt-lg-space-between-start,
  .layout-align-gt-lg-space-between-end,
  .layout-align-gt-lg-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-gt-lg-start-start,
  .layout-align-gt-lg-center-start,
  .layout-align-gt-lg-end-start,
  .layout-align-gt-lg-space-between-start,
  .layout-align-gt-lg-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-gt-lg-start-center,
  .layout-align-gt-lg-center-center,
  .layout-align-gt-lg-end-center,
  .layout-align-gt-lg-space-between-center,
  .layout-align-gt-lg-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-gt-lg-start-center > *,
  .layout-align-gt-lg-center-center > *,
  .layout-align-gt-lg-end-center > *,
  .layout-align-gt-lg-space-between-center > *,
  .layout-align-gt-lg-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-gt-lg-start-end,
  .layout-align-gt-lg-center-end,
  .layout-align-gt-lg-end-end,
  .layout-align-gt-lg-space-between-end,
  .layout-align-gt-lg-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-gt-lg-start-stretch,
  .layout-align-gt-lg-center-stretch,
  .layout-align-gt-lg-end-stretch,
  .layout-align-gt-lg-space-between-stretch,
  .layout-align-gt-lg-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-gt-lg {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 1920px) {
  .flex-gt-lg {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 1920px) {
  .flex-gt-lg-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-gt-lg-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-lg-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-gt-lg-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-gt-lg-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-gt-lg-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-gt-lg-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-0,
  .layout-gt-lg-row > .flex-gt-lg-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-gt-lg-0,
  .layout-gt-lg-column > .flex-gt-lg-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-gt-lg-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-5,
  .layout-gt-lg-row > .flex-gt-lg-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-5,
  .layout-gt-lg-column > .flex-gt-lg-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-gt-lg-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-10,
  .layout-gt-lg-row > .flex-gt-lg-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-10,
  .layout-gt-lg-column > .flex-gt-lg-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-gt-lg-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-15,
  .layout-gt-lg-row > .flex-gt-lg-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-15,
  .layout-gt-lg-column > .flex-gt-lg-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-gt-lg-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-20,
  .layout-gt-lg-row > .flex-gt-lg-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-20,
  .layout-gt-lg-column > .flex-gt-lg-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-gt-lg-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-25,
  .layout-gt-lg-row > .flex-gt-lg-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-25,
  .layout-gt-lg-column > .flex-gt-lg-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-gt-lg-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-30,
  .layout-gt-lg-row > .flex-gt-lg-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-30,
  .layout-gt-lg-column > .flex-gt-lg-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-gt-lg-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-35,
  .layout-gt-lg-row > .flex-gt-lg-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-35,
  .layout-gt-lg-column > .flex-gt-lg-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-gt-lg-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-40,
  .layout-gt-lg-row > .flex-gt-lg-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-40,
  .layout-gt-lg-column > .flex-gt-lg-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-gt-lg-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-45,
  .layout-gt-lg-row > .flex-gt-lg-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-45,
  .layout-gt-lg-column > .flex-gt-lg-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-gt-lg-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-50,
  .layout-gt-lg-row > .flex-gt-lg-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-50,
  .layout-gt-lg-column > .flex-gt-lg-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-gt-lg-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-55,
  .layout-gt-lg-row > .flex-gt-lg-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-55,
  .layout-gt-lg-column > .flex-gt-lg-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-gt-lg-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-60,
  .layout-gt-lg-row > .flex-gt-lg-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-60,
  .layout-gt-lg-column > .flex-gt-lg-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-gt-lg-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-65,
  .layout-gt-lg-row > .flex-gt-lg-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-65,
  .layout-gt-lg-column > .flex-gt-lg-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-gt-lg-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-70,
  .layout-gt-lg-row > .flex-gt-lg-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-70,
  .layout-gt-lg-column > .flex-gt-lg-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-gt-lg-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-75,
  .layout-gt-lg-row > .flex-gt-lg-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-75,
  .layout-gt-lg-column > .flex-gt-lg-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-gt-lg-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-80,
  .layout-gt-lg-row > .flex-gt-lg-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-80,
  .layout-gt-lg-column > .flex-gt-lg-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-gt-lg-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-85,
  .layout-gt-lg-row > .flex-gt-lg-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-85,
  .layout-gt-lg-column > .flex-gt-lg-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-gt-lg-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-90,
  .layout-gt-lg-row > .flex-gt-lg-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-90,
  .layout-gt-lg-column > .flex-gt-lg-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-gt-lg-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-95,
  .layout-gt-lg-row > .flex-gt-lg-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-95,
  .layout-gt-lg-column > .flex-gt-lg-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-gt-lg-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-100,
  .layout-gt-lg-row > .flex-gt-lg-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-100,
  .layout-gt-lg-column > .flex-gt-lg-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-33, .layout-row > .flex-gt-lg-33, .layout-gt-lg-row > .flex-gt-lg-33, .layout-gt-lg-row > .flex-gt-lg-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-gt-lg-66, .layout-row > .flex-gt-lg-66, .layout-gt-lg-row > .flex-gt-lg-66, .layout-gt-lg-row > .flex-gt-lg-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-gt-lg-row > .flex {
    min-width: 0; }
  .layout-column > .flex-gt-lg-33, .layout-column > .flex-gt-lg-33, .layout-gt-lg-column > .flex-gt-lg-33, .layout-gt-lg-column > .flex-gt-lg-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-gt-lg-66, .layout-column > .flex-gt-lg-66, .layout-gt-lg-column > .flex-gt-lg-66, .layout-gt-lg-column > .flex-gt-lg-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-gt-lg-column > .flex {
    min-height: 0; }
  .layout-gt-lg, .layout-gt-lg-column, .layout-gt-lg-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-gt-lg-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-gt-lg-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
  .flex-order-xl--20 {
    -webkit-order: -20;
        -ms-flex-order: -20;
            order: -20; }
  .flex-order-xl--19 {
    -webkit-order: -19;
        -ms-flex-order: -19;
            order: -19; }
  .flex-order-xl--18 {
    -webkit-order: -18;
        -ms-flex-order: -18;
            order: -18; }
  .flex-order-xl--17 {
    -webkit-order: -17;
        -ms-flex-order: -17;
            order: -17; }
  .flex-order-xl--16 {
    -webkit-order: -16;
        -ms-flex-order: -16;
            order: -16; }
  .flex-order-xl--15 {
    -webkit-order: -15;
        -ms-flex-order: -15;
            order: -15; }
  .flex-order-xl--14 {
    -webkit-order: -14;
        -ms-flex-order: -14;
            order: -14; }
  .flex-order-xl--13 {
    -webkit-order: -13;
        -ms-flex-order: -13;
            order: -13; }
  .flex-order-xl--12 {
    -webkit-order: -12;
        -ms-flex-order: -12;
            order: -12; }
  .flex-order-xl--11 {
    -webkit-order: -11;
        -ms-flex-order: -11;
            order: -11; }
  .flex-order-xl--10 {
    -webkit-order: -10;
        -ms-flex-order: -10;
            order: -10; }
  .flex-order-xl--9 {
    -webkit-order: -9;
        -ms-flex-order: -9;
            order: -9; }
  .flex-order-xl--8 {
    -webkit-order: -8;
        -ms-flex-order: -8;
            order: -8; }
  .flex-order-xl--7 {
    -webkit-order: -7;
        -ms-flex-order: -7;
            order: -7; }
  .flex-order-xl--6 {
    -webkit-order: -6;
        -ms-flex-order: -6;
            order: -6; }
  .flex-order-xl--5 {
    -webkit-order: -5;
        -ms-flex-order: -5;
            order: -5; }
  .flex-order-xl--4 {
    -webkit-order: -4;
        -ms-flex-order: -4;
            order: -4; }
  .flex-order-xl--3 {
    -webkit-order: -3;
        -ms-flex-order: -3;
            order: -3; }
  .flex-order-xl--2 {
    -webkit-order: -2;
        -ms-flex-order: -2;
            order: -2; }
  .flex-order-xl--1 {
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1; }
  .flex-order-xl-0 {
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0; }
  .flex-order-xl-1 {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1; }
  .flex-order-xl-2 {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2; }
  .flex-order-xl-3 {
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3; }
  .flex-order-xl-4 {
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4; }
  .flex-order-xl-5 {
    -webkit-order: 5;
        -ms-flex-order: 5;
            order: 5; }
  .flex-order-xl-6 {
    -webkit-order: 6;
        -ms-flex-order: 6;
            order: 6; }
  .flex-order-xl-7 {
    -webkit-order: 7;
        -ms-flex-order: 7;
            order: 7; }
  .flex-order-xl-8 {
    -webkit-order: 8;
        -ms-flex-order: 8;
            order: 8; }
  .flex-order-xl-9 {
    -webkit-order: 9;
        -ms-flex-order: 9;
            order: 9; }
  .flex-order-xl-10 {
    -webkit-order: 10;
        -ms-flex-order: 10;
            order: 10; }
  .flex-order-xl-11 {
    -webkit-order: 11;
        -ms-flex-order: 11;
            order: 11; }
  .flex-order-xl-12 {
    -webkit-order: 12;
        -ms-flex-order: 12;
            order: 12; }
  .flex-order-xl-13 {
    -webkit-order: 13;
        -ms-flex-order: 13;
            order: 13; }
  .flex-order-xl-14 {
    -webkit-order: 14;
        -ms-flex-order: 14;
            order: 14; }
  .flex-order-xl-15 {
    -webkit-order: 15;
        -ms-flex-order: 15;
            order: 15; }
  .flex-order-xl-16 {
    -webkit-order: 16;
        -ms-flex-order: 16;
            order: 16; }
  .flex-order-xl-17 {
    -webkit-order: 17;
        -ms-flex-order: 17;
            order: 17; }
  .flex-order-xl-18 {
    -webkit-order: 18;
        -ms-flex-order: 18;
            order: 18; }
  .flex-order-xl-19 {
    -webkit-order: 19;
        -ms-flex-order: 19;
            order: 19; }
  .flex-order-xl-20 {
    -webkit-order: 20;
        -ms-flex-order: 20;
            order: 20; }
  .offset-xl-0, .flex-offset-xl-0 {
    margin-left: 0%; }
  .offset-xl-5, .flex-offset-xl-5 {
    margin-left: 5%; }
  .offset-xl-10, .flex-offset-xl-10 {
    margin-left: 10%; }
  .offset-xl-15, .flex-offset-xl-15 {
    margin-left: 15%; }
  .offset-xl-20, .flex-offset-xl-20 {
    margin-left: 20%; }
  .offset-xl-25, .flex-offset-xl-25 {
    margin-left: 25%; }
  .offset-xl-30, .flex-offset-xl-30 {
    margin-left: 30%; }
  .offset-xl-35, .flex-offset-xl-35 {
    margin-left: 35%; }
  .offset-xl-40, .flex-offset-xl-40 {
    margin-left: 40%; }
  .offset-xl-45, .flex-offset-xl-45 {
    margin-left: 45%; }
  .offset-xl-50, .flex-offset-xl-50 {
    margin-left: 50%; }
  .offset-xl-55, .flex-offset-xl-55 {
    margin-left: 55%; }
  .offset-xl-60, .flex-offset-xl-60 {
    margin-left: 60%; }
  .offset-xl-65, .flex-offset-xl-65 {
    margin-left: 65%; }
  .offset-xl-70, .flex-offset-xl-70 {
    margin-left: 70%; }
  .offset-xl-75, .flex-offset-xl-75 {
    margin-left: 75%; }
  .offset-xl-80, .flex-offset-xl-80 {
    margin-left: 80%; }
  .offset-xl-85, .flex-offset-xl-85 {
    margin-left: 85%; }
  .offset-xl-90, .flex-offset-xl-90 {
    margin-left: 90%; }
  .offset-xl-95, .flex-offset-xl-95 {
    margin-left: 95%; }
  .offset-xl-33, .flex-offset-xl-33 {
    margin-left: calc(100% / 3); }
  .offset-xl-66, .flex-offset-xl-66 {
    margin-left: calc(200% / 3); }
  .layout-align-xl {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch; }
  .layout-align-xl-start,
  .layout-align-xl-start-start,
  .layout-align-xl-start-center,
  .layout-align-xl-start-end,
  .layout-align-xl-start-stretch {
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
  .layout-align-xl-center,
  .layout-align-xl-center-start,
  .layout-align-xl-center-center,
  .layout-align-xl-center-end,
  .layout-align-xl-center-stretch {
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .layout-align-xl-end,
  .layout-align-xl-end-start,
  .layout-align-xl-end-center,
  .layout-align-xl-end-end,
  .layout-align-xl-end-stretch {
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
  .layout-align-xl-space-around,
  .layout-align-xl-space-around-center,
  .layout-align-xl-space-around-start,
  .layout-align-xl-space-around-end,
  .layout-align-xl-space-around-stretch {
    -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
            justify-content: space-around; }
  .layout-align-xl-space-between,
  .layout-align-xl-space-between-center,
  .layout-align-xl-space-between-start,
  .layout-align-xl-space-between-end,
  .layout-align-xl-space-between-stretch {
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .layout-align-xl-start-start,
  .layout-align-xl-center-start,
  .layout-align-xl-end-start,
  .layout-align-xl-space-between-start,
  .layout-align-xl-space-around-start {
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start; }
  .layout-align-xl-start-center,
  .layout-align-xl-center-center,
  .layout-align-xl-end-center,
  .layout-align-xl-space-between-center,
  .layout-align-xl-space-around-center {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-align-content: center;
        -ms-flex-line-pack: center;
            align-content: center;
    max-width: 100%; }
  .layout-align-xl-start-center > *,
  .layout-align-xl-center-center > *,
  .layout-align-xl-end-center > *,
  .layout-align-xl-space-between-center > *,
  .layout-align-xl-space-around-center > * {
    max-width: 100%;
    box-sizing: border-box; }
  .layout-align-xl-start-end,
  .layout-align-xl-center-end,
  .layout-align-xl-end-end,
  .layout-align-xl-space-between-end,
  .layout-align-xl-space-around-end {
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
            align-content: flex-end; }
  .layout-align-xl-start-stretch,
  .layout-align-xl-center-stretch,
  .layout-align-xl-end-stretch,
  .layout-align-xl-space-between-stretch,
  .layout-align-xl-space-around-stretch {
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
            align-content: stretch; }
  .flex-xl {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    box-sizing: border-box; } }

@media screen\0  and (min-width: 1920px) {
  .flex-xl {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%; } }

@media (min-width: 1920px) {
  .flex-xl-grow {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    box-sizing: border-box; }
  .flex-xl-initial {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-xl-auto {
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    box-sizing: border-box; }
  .flex-xl-none {
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    box-sizing: border-box; }
  .flex-xl-noshrink {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    box-sizing: border-box; }
  .flex-xl-nogrow {
    -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    box-sizing: border-box; }
  .flex-xl-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-0,
  .layout-xl-row > .flex-xl-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0; }
  .layout-column > .flex-xl-0,
  .layout-xl-column > .flex-xl-0 {
    -webkit-flex: 1 1 0%;
        -ms-flex: 1 1 0%;
            flex: 1 1 0%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0; }
  .flex-xl-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-5,
  .layout-xl-row > .flex-xl-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-5,
  .layout-xl-column > .flex-xl-5 {
    -webkit-flex: 1 1 5%;
        -ms-flex: 1 1 5%;
            flex: 1 1 5%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box; }
  .flex-xl-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-10,
  .layout-xl-row > .flex-xl-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-10,
  .layout-xl-column > .flex-xl-10 {
    -webkit-flex: 1 1 10%;
        -ms-flex: 1 1 10%;
            flex: 1 1 10%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box; }
  .flex-xl-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-15,
  .layout-xl-row > .flex-xl-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-15,
  .layout-xl-column > .flex-xl-15 {
    -webkit-flex: 1 1 15%;
        -ms-flex: 1 1 15%;
            flex: 1 1 15%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box; }
  .flex-xl-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-20,
  .layout-xl-row > .flex-xl-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-20,
  .layout-xl-column > .flex-xl-20 {
    -webkit-flex: 1 1 20%;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box; }
  .flex-xl-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-25,
  .layout-xl-row > .flex-xl-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-25,
  .layout-xl-column > .flex-xl-25 {
    -webkit-flex: 1 1 25%;
        -ms-flex: 1 1 25%;
            flex: 1 1 25%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box; }
  .flex-xl-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-30,
  .layout-xl-row > .flex-xl-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-30,
  .layout-xl-column > .flex-xl-30 {
    -webkit-flex: 1 1 30%;
        -ms-flex: 1 1 30%;
            flex: 1 1 30%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box; }
  .flex-xl-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-35,
  .layout-xl-row > .flex-xl-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-35,
  .layout-xl-column > .flex-xl-35 {
    -webkit-flex: 1 1 35%;
        -ms-flex: 1 1 35%;
            flex: 1 1 35%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box; }
  .flex-xl-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-40,
  .layout-xl-row > .flex-xl-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-40,
  .layout-xl-column > .flex-xl-40 {
    -webkit-flex: 1 1 40%;
        -ms-flex: 1 1 40%;
            flex: 1 1 40%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box; }
  .flex-xl-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-45,
  .layout-xl-row > .flex-xl-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-45,
  .layout-xl-column > .flex-xl-45 {
    -webkit-flex: 1 1 45%;
        -ms-flex: 1 1 45%;
            flex: 1 1 45%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box; }
  .flex-xl-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-50,
  .layout-xl-row > .flex-xl-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-50,
  .layout-xl-column > .flex-xl-50 {
    -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
            flex: 1 1 50%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box; }
  .flex-xl-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-55,
  .layout-xl-row > .flex-xl-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-55,
  .layout-xl-column > .flex-xl-55 {
    -webkit-flex: 1 1 55%;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box; }
  .flex-xl-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-60,
  .layout-xl-row > .flex-xl-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-60,
  .layout-xl-column > .flex-xl-60 {
    -webkit-flex: 1 1 60%;
        -ms-flex: 1 1 60%;
            flex: 1 1 60%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box; }
  .flex-xl-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-65,
  .layout-xl-row > .flex-xl-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-65,
  .layout-xl-column > .flex-xl-65 {
    -webkit-flex: 1 1 65%;
        -ms-flex: 1 1 65%;
            flex: 1 1 65%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box; }
  .flex-xl-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-70,
  .layout-xl-row > .flex-xl-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-70,
  .layout-xl-column > .flex-xl-70 {
    -webkit-flex: 1 1 70%;
        -ms-flex: 1 1 70%;
            flex: 1 1 70%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box; }
  .flex-xl-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-75,
  .layout-xl-row > .flex-xl-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-75,
  .layout-xl-column > .flex-xl-75 {
    -webkit-flex: 1 1 75%;
        -ms-flex: 1 1 75%;
            flex: 1 1 75%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box; }
  .flex-xl-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-80,
  .layout-xl-row > .flex-xl-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-80,
  .layout-xl-column > .flex-xl-80 {
    -webkit-flex: 1 1 80%;
        -ms-flex: 1 1 80%;
            flex: 1 1 80%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box; }
  .flex-xl-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-85,
  .layout-xl-row > .flex-xl-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-85,
  .layout-xl-column > .flex-xl-85 {
    -webkit-flex: 1 1 85%;
        -ms-flex: 1 1 85%;
            flex: 1 1 85%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box; }
  .flex-xl-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-90,
  .layout-xl-row > .flex-xl-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-90,
  .layout-xl-column > .flex-xl-90 {
    -webkit-flex: 1 1 90%;
        -ms-flex: 1 1 90%;
            flex: 1 1 90%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box; }
  .flex-xl-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-95,
  .layout-xl-row > .flex-xl-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-95,
  .layout-xl-column > .flex-xl-95 {
    -webkit-flex: 1 1 95%;
        -ms-flex: 1 1 95%;
            flex: 1 1 95%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box; }
  .flex-xl-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-100,
  .layout-xl-row > .flex-xl-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-100,
  .layout-xl-column > .flex-xl-100 {
    -webkit-flex: 1 1 100%;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-33, .layout-row > .flex-xl-33, .layout-xl-row > .flex-xl-33, .layout-xl-row > .flex-xl-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex-xl-66, .layout-row > .flex-xl-66, .layout-xl-row > .flex-xl-66, .layout-xl-row > .flex-xl-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box; }
  .layout-row > .flex, .layout-xl-row > .flex {
    min-width: 0; }
  .layout-column > .flex-xl-33, .layout-column > .flex-xl-33, .layout-xl-column > .flex-xl-33, .layout-xl-column > .flex-xl-33 {
    -webkit-flex: 1 1 33.33%;
        -ms-flex: 1 1 33.33%;
            flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box; }
  .layout-column > .flex-xl-66, .layout-column > .flex-xl-66, .layout-xl-column > .flex-xl-66, .layout-xl-column > .flex-xl-66 {
    -webkit-flex: 1 1 66.66%;
        -ms-flex: 1 1 66.66%;
            flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box; }
  .layout-column > .flex, .layout-xl-column > .flex {
    min-height: 0; }
  .layout-xl, .layout-xl-column, .layout-xl-row {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .layout-xl-column {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
  .layout-xl-row {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
  .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show), .hide-gt-lg:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show) {
    display: none; }
  .hide-xl:not(.show-xl):not(.show-gt-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {
    display: none; } }

@-webkit-keyframes md-autocomplete-list-out {
  0% {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear; }
  50% {
    opacity: 0;
    height: 40px;
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in; }
  100% {
    height: 0;
    opacity: 0; } }

@keyframes md-autocomplete-list-out {
  0% {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear; }
  50% {
    opacity: 0;
    height: 40px;
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in; }
  100% {
    height: 0;
    opacity: 0; } }

@-webkit-keyframes md-autocomplete-list-in {
  0% {
    opacity: 0;
    height: 0;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out; }
  50% {
    opacity: 0;
    height: 40px; }
  100% {
    opacity: 1;
    height: 40px; } }

@keyframes md-autocomplete-list-in {
  0% {
    opacity: 0;
    height: 0;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out; }
  50% {
    opacity: 0;
    height: 40px; }
  100% {
    opacity: 1;
    height: 40px; } }

md-autocomplete {
  border-radius: 2px;
  display: block;
  height: 40px;
  position: relative;
  overflow: visible;
  min-width: 190px; }
  md-autocomplete[disabled] input {
    cursor: default; }
  md-autocomplete[md-floating-label] {
    border-radius: 0;
    background: transparent;
    height: auto; }
    md-autocomplete[md-floating-label] md-input-container {
      padding-bottom: 26px; }
      md-autocomplete[md-floating-label] md-input-container.md-input-has-messages {
        padding-bottom: 2px; }
    md-autocomplete[md-floating-label] md-autocomplete-wrap {
      height: auto; }
    md-autocomplete[md-floating-label] button {
      position: absolute;
      top: auto;
      bottom: 0;
      right: 0;
      width: 30px;
      height: 30px; }
  md-autocomplete md-autocomplete-wrap {
    display: block;
    position: relative;
    overflow: visible;
    height: 40px; }
    md-autocomplete md-autocomplete-wrap.md-menu-showing {
      z-index: 51; }
    md-autocomplete md-autocomplete-wrap md-progress-linear {
      position: absolute;
      bottom: -2px;
      left: 0; }
      md-autocomplete md-autocomplete-wrap md-progress-linear.md-inline {
        bottom: 40px;
        right: 2px;
        left: 2px;
        width: auto; }
      md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        transition: none; }
        md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate .md-container {
          transition: none;
          height: 3px; }
        md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter {
          transition: opacity 0.15s linear; }
          md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter.ng-enter-active {
            opacity: 1; }
        md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave {
          transition: opacity 0.15s linear; }
          md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave.ng-leave-active {
            opacity: 0; }
  md-autocomplete input:not(.md-input) {
    font-size: 14px;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
    outline: none;
    background: transparent;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    height: 40px; }
    md-autocomplete input:not(.md-input)::-ms-clear {
      display: none; }
  md-autocomplete button {
    position: relative;
    line-height: 20px;
    text-align: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    padding: 0;
    font-size: 12px;
    background: transparent;
    margin: auto 5px; }
    md-autocomplete button:after {
      content: '';
      position: absolute;
      top: -6px;
      right: -6px;
      bottom: -6px;
      left: -6px;
      border-radius: 50%;
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
    md-autocomplete button:focus {
      outline: none; }
      md-autocomplete button:focus:after {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1; }
    md-autocomplete button md-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0) scale(0.9);
              transform: translate3d(-50%, -50%, 0) scale(0.9); }
      md-autocomplete button md-icon path {
        stroke-width: 0; }
    md-autocomplete button.ng-enter {
      -webkit-transform: scale(0);
              transform: scale(0);
      transition: -webkit-transform 0.15s ease-out;
      transition: transform 0.15s ease-out; }
      md-autocomplete button.ng-enter.ng-enter-active {
        -webkit-transform: scale(1);
                transform: scale(1); }
    md-autocomplete button.ng-leave {
      transition: -webkit-transform 0.15s ease-out;
      transition: transform 0.15s ease-out; }
      md-autocomplete button.ng-leave.ng-leave-active {
        -webkit-transform: scale(0);
                transform: scale(0); }
  @media screen and (-ms-high-contrast: active) {
    md-autocomplete input {
      border: 1px solid #fff; }
    md-autocomplete li:focus {
      color: #fff; } }

.md-virtual-repeat-container.md-autocomplete-suggestions-container {
  position: absolute;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  height: 225.5px;
  max-height: 225.5px;
  z-index: 100; }

.md-virtual-repeat-container.md-not-found {
  height: 48px; }

.md-autocomplete-suggestions {
  margin: 0;
  list-style: none;
  padding: 0; }
  .md-autocomplete-suggestions li {
    font-size: 14px;
    overflow: hidden;
    padding: 0 15px;
    line-height: 48px;
    height: 48px;
    transition: background 0.15s linear;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis; }
    .md-autocomplete-suggestions li:focus {
      outline: none; }
    .md-autocomplete-suggestions li:not(.md-not-found-wrapper) {
      cursor: pointer; }

@media screen and (-ms-high-contrast: active) {
  md-autocomplete,
  .md-autocomplete-suggestions {
    border: 1px solid #fff; } }

md-backdrop {
  transition: opacity 450ms;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50; }
  md-backdrop.md-menu-backdrop {
    position: fixed !important;
    z-index: 99; }
  md-backdrop.md-select-backdrop {
    z-index: 81;
    transition-duration: 0; }
  md-backdrop.md-dialog-backdrop {
    z-index: 79; }
  md-backdrop.md-bottom-sheet-backdrop {
    z-index: 69; }
  md-backdrop.md-sidenav-backdrop {
    z-index: 59; }
  md-backdrop.md-click-catcher {
    position: absolute; }
  md-backdrop.md-opaque {
    opacity: .48; }
    md-backdrop.md-opaque.ng-enter {
      opacity: 0; }
    md-backdrop.md-opaque.ng-enter.md-opaque.ng-enter-active {
      opacity: .48; }
    md-backdrop.md-opaque.ng-leave {
      opacity: .48;
      transition: opacity 400ms; }
    md-backdrop.md-opaque.ng-leave.md-opaque.ng-leave-active {
      opacity: 0; }

md-bottom-sheet {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8px 16px 88px 16px;
  z-index: 70;
  border-top-width: 1px;
  border-top-style: solid;
  -webkit-transform: translate3d(0, 80px, 0);
          transform: translate3d(0, 80px, 0);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: -webkit-transform;
  transition-property: transform; }
  md-bottom-sheet.md-has-header {
    padding-top: 0; }
  md-bottom-sheet.ng-enter {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0); }
  md-bottom-sheet.ng-enter-active {
    opacity: 1;
    display: block;
    -webkit-transform: translate3d(0, 80px, 0) !important;
            transform: translate3d(0, 80px, 0) !important; }
  md-bottom-sheet.ng-leave-active {
    -webkit-transform: translate3d(0, 100%, 0) !important;
            transform: translate3d(0, 100%, 0) !important;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
  md-bottom-sheet .md-subheader {
    background-color: transparent;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    line-height: 56px;
    padding: 0;
    white-space: nowrap; }
  md-bottom-sheet md-inline-icon {
    display: inline-block;
    height: 24px;
    width: 24px;
    fill: #444; }
  md-bottom-sheet md-list-item {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    outline: none; }
    md-bottom-sheet md-list-item:hover {
      cursor: pointer; }
  md-bottom-sheet.md-list md-list-item {
    padding: 0;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    height: 48px; }
    md-bottom-sheet.md-list md-list-item div.md-icon-container {
      display: inline-block;
      height: 24px;
      margin-right: 32px; }
  md-bottom-sheet.md-grid {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0; }
    md-bottom-sheet.md-grid md-list {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
              flex-wrap: wrap;
      transition: all 0.5s;
      -webkit-align-items: center;
          -ms-flex-align: center;
              align-items: center; }
    md-bottom-sheet.md-grid md-list-item {
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-align-items: center;
          -ms-flex-align: center;
              align-items: center;
      transition: all 0.5s;
      height: 96px;
      margin-top: 8px;
      margin-bottom: 8px;
      /* Mixin for how many grid items to show per row */ }
      @media screen and (max-width: 960px) {
        md-bottom-sheet.md-grid md-list-item {
          -webkit-flex: 1 1 33.33333%;
              -ms-flex: 1 1 33.33333%;
                  flex: 1 1 33.33333%;
          max-width: 33.33333%; }
          md-bottom-sheet.md-grid md-list-item:nth-of-type(3n + 1) {
            -webkit-align-items: flex-start;
                -ms-flex-align: start;
                    align-items: flex-start; }
          md-bottom-sheet.md-grid md-list-item:nth-of-type(3n) {
            -webkit-align-items: flex-end;
                -ms-flex-align: end;
                    align-items: flex-end; } }
      @media screen and (min-width: 960px) and (max-width: 1279px) {
        md-bottom-sheet.md-grid md-list-item {
          -webkit-flex: 1 1 25%;
              -ms-flex: 1 1 25%;
                  flex: 1 1 25%;
          max-width: 25%; } }
      @media screen and (min-width: 1280px) and (max-width: 1919px) {
        md-bottom-sheet.md-grid md-list-item {
          -webkit-flex: 1 1 16.66667%;
              -ms-flex: 1 1 16.66667%;
                  flex: 1 1 16.66667%;
          max-width: 16.66667%; } }
      @media screen and (min-width: 1920px) {
        md-bottom-sheet.md-grid md-list-item {
          -webkit-flex: 1 1 14.28571%;
              -ms-flex: 1 1 14.28571%;
                  flex: 1 1 14.28571%;
          max-width: 14.28571%; } }
      md-bottom-sheet.md-grid md-list-item .md-list-item-content {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-align-items: center;
            -ms-flex-align: center;
                align-items: center;
        width: 48px;
        padding-bottom: 16px; }
      md-bottom-sheet.md-grid md-list-item .md-grid-item-content {
        border: 1px solid transparent;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-align-items: center;
            -ms-flex-align: center;
                align-items: center;
        width: 80px; }
      md-bottom-sheet.md-grid md-list-item .md-icon-container {
        display: inline-block;
        box-sizing: border-box;
        height: 48px;
        width: 48px;
        margin: 0 0; }
      md-bottom-sheet.md-grid md-list-item .md-grid-text {
        font-weight: 400;
        line-height: 16px;
        font-size: 13px;
        margin: 0;
        white-space: nowrap;
        width: 64px;
        text-align: center;
        text-transform: none;
        padding-top: 8px; }

@media screen and (-ms-high-contrast: active) {
  md-bottom-sheet {
    border: 1px solid #fff; } }

button.md-button::-moz-focus-inner {
  border: 0; }

.md-button {
  border-radius: 3px;
  box-sizing: border-box;
  color: currentColor;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: relative;
  outline: none;
  border: 0;
  display: inline-block;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0 6px;
  margin: 6px 8px;
  line-height: 36px;
  min-height: 36px;
  background: transparent;
  white-space: nowrap;
  min-width: 88px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  font-style: inherit;
  font-variant: inherit;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
  .md-button:focus {
    outline: none; }
  .md-button:hover, .md-button:focus {
    text-decoration: none; }
  .md-button.ng-hide, .md-button.ng-leave {
    transition: none; }
  .md-button.md-cornered {
    border-radius: 0; }
  .md-button.md-icon {
    padding: 0;
    background: none; }
  .md-button.md-raised:not([disabled]) {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }
  .md-button.md-icon-button {
    margin: 0 6px;
    height: 40px;
    min-width: 0;
    line-height: 24px;
    padding: 8px;
    width: 40px;
    border-radius: 50%; }
    .md-button.md-icon-button .md-ripple-container {
      border-radius: 50%;
      background-clip: padding-box;
      overflow: hidden;
      -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"); }
  .md-button.md-fab {
    z-index: 20;
    line-height: 56px;
    min-width: 0;
    width: 56px;
    height: 56px;
    vertical-align: middle;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 50%;
    background-clip: padding-box;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition-property: background-color, box-shadow, -webkit-transform;
    transition-property: background-color, box-shadow, transform; }
    .md-button.md-fab.md-fab-bottom-right {
      top: auto;
      right: 20px;
      bottom: 20px;
      left: auto;
      position: absolute; }
    .md-button.md-fab.md-fab-bottom-left {
      top: auto;
      right: auto;
      bottom: 20px;
      left: 20px;
      position: absolute; }
    .md-button.md-fab.md-fab-top-right {
      top: 20px;
      right: 20px;
      bottom: auto;
      left: auto;
      position: absolute; }
    .md-button.md-fab.md-fab-top-left {
      top: 20px;
      right: auto;
      bottom: auto;
      left: 20px;
      position: absolute; }
    .md-button.md-fab .md-ripple-container {
      border-radius: 50%;
      background-clip: padding-box;
      overflow: hidden;
      -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"); }
    .md-button.md-fab.md-mini {
      line-height: 40px;
      width: 40px;
      height: 40px; }
    .md-button.md-fab.ng-hide, .md-button.md-fab.ng-leave {
      transition: none; }
  .md-button:not([disabled]).md-raised.md-focused, .md-button:not([disabled]).md-fab.md-focused {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }
  .md-button:not([disabled]).md-raised:active, .md-button:not([disabled]).md-fab:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); }
  .md-button .md-ripple-container {
    border-radius: 3px;
    background-clip: padding-box;
    overflow: hidden;
    -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC"); }

.md-toast-open-top .md-button.md-fab-top-left,
.md-toast-open-top .md-button.md-fab-top-right {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-transform: translate3d(0, 42px, 0);
          transform: translate3d(0, 42px, 0); }
  .md-toast-open-top .md-button.md-fab-top-left:not([disabled]).md-focused, .md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,
  .md-toast-open-top .md-button.md-fab-top-right:not([disabled]).md-focused,
  .md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover {
    -webkit-transform: translate3d(0, 41px, 0);
            transform: translate3d(0, 41px, 0); }

.md-toast-open-bottom .md-button.md-fab-bottom-left,
.md-toast-open-bottom .md-button.md-fab-bottom-right {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-transform: translate3d(0, -42px, 0);
          transform: translate3d(0, -42px, 0); }
  .md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]).md-focused, .md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,
  .md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]).md-focused,
  .md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover {
    -webkit-transform: translate3d(0, -43px, 0);
            transform: translate3d(0, -43px, 0); }

.md-button-group {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 100%; }

.md-button-group > .md-button {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: block;
  overflow: hidden;
  width: 0;
  border-width: 1px 0px 1px 1px;
  border-radius: 0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap; }
  .md-button-group > .md-button:first-child {
    border-radius: 2px 0px 0px 2px; }
  .md-button-group > .md-button:last-child {
    border-right-width: 1px;
    border-radius: 0px 2px 2px 0px; }

@media screen and (-ms-high-contrast: active) {
  .md-button.md-raised,
  .md-button.md-fab {
    border: 1px solid #fff; } }

md-card {
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  margin: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }
  md-card md-card-header {
    padding: 16px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
    md-card md-card-header:first-child md-card-avatar {
      margin-right: 12px; }
    md-card md-card-header:last-child md-card-avatar {
      margin-left: 12px; }
    md-card md-card-header md-card-avatar {
      width: 40px;
      height: 40px; }
      md-card md-card-header md-card-avatar .md-user-avatar,
      md-card md-card-header md-card-avatar md-icon {
        border-radius: 50%; }
      md-card md-card-header md-card-avatar md-icon {
        padding: 8px; }
      md-card md-card-header md-card-avatar + md-card-header-text {
        max-height: 40px; }
        md-card md-card-header md-card-avatar + md-card-header-text .md-title {
          font-size: 14px; }
    md-card md-card-header md-card-header-text {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column; }
      md-card md-card-header md-card-header-text .md-subhead {
        font-size: 14px; }
  md-card > img,
  md-card > :not(md-card-content) img {
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: 100%;
    height: auto; }
  md-card md-card-title {
    padding: 24px 16px 16px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
    md-card md-card-title + md-card-content {
      padding-top: 0; }
    md-card md-card-title md-card-title-text {
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex; }
      md-card md-card-title md-card-title-text .md-subhead {
        padding-top: 0;
        font-size: 14px; }
      md-card md-card-title md-card-title-text:only-child .md-subhead {
        padding-top: 12px; }
    md-card md-card-title md-card-title-media {
      margin-top: -8px; }
      md-card md-card-title md-card-title-media .md-media-sm {
        height: 80px;
        width: 80px; }
      md-card md-card-title md-card-title-media .md-media-md {
        height: 112px;
        width: 112px; }
      md-card md-card-title md-card-title-media .md-media-lg {
        height: 152px;
        width: 152px; }
  md-card md-card-content {
    display: block;
    padding: 16px; }
    md-card md-card-content > p:first-child {
      margin-top: 0; }
    md-card md-card-content > p:last-child {
      margin-bottom: 0; }
    md-card md-card-content .md-media-xl {
      height: 240px;
      width: 240px; }
  md-card .md-actions, md-card md-card-actions {
    margin: 8px; }
    md-card .md-actions.layout-column .md-button:not(.md-icon-button), md-card md-card-actions.layout-column .md-button:not(.md-icon-button) {
      margin: 2px 0; }
      md-card .md-actions.layout-column .md-button:not(.md-icon-button):first-of-type, md-card md-card-actions.layout-column .md-button:not(.md-icon-button):first-of-type {
        margin-top: 0; }
      md-card .md-actions.layout-column .md-button:not(.md-icon-button):last-of-type, md-card md-card-actions.layout-column .md-button:not(.md-icon-button):last-of-type {
        margin-bottom: 0; }
    md-card .md-actions.layout-column .md-button.md-icon-button, md-card md-card-actions.layout-column .md-button.md-icon-button {
      margin-top: 6px;
      margin-bottom: 6px; }
    md-card .md-actions md-card-icon-actions, md-card md-card-actions md-card-icon-actions {
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
      -webkit-justify-content: flex-start;
          -ms-flex-pack: start;
              justify-content: flex-start;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
          -ms-flex-direction: row;
              flex-direction: row; }
    md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button), md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button) {
      margin: 0 4px; }
      md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type, md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {
        margin-left: 0; }
      md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type, md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {
        margin-right: 0; }
    md-card .md-actions:not(.layout-column) .md-button.md-icon-button, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button {
      margin-left: 6px;
      margin-right: 6px; }
      md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {
        margin-left: 12px; }
      md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type, md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {
        margin-right: 12px; }
    md-card .md-actions:not(.layout-column) .md-button + md-card-icon-actions, md-card md-card-actions:not(.layout-column) .md-button + md-card-icon-actions {
      -webkit-flex: 1;
          -ms-flex: 1;
              flex: 1;
      -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
              justify-content: flex-end;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
          -ms-flex-direction: row;
              flex-direction: row; }
  md-card md-card-footer {
    margin-top: auto;
    padding: 16px; }

@media screen and (-ms-high-contrast: active) {
  md-card {
    border: 1px solid #fff; } }

.md-inline-form md-checkbox {
  margin: 19px 0 18px; }

md-checkbox {
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 16px;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  margin-left: inherit;
  margin-right: 16px; }
  html[dir=rtl] md-checkbox {
    margin-left: 16px;
    unicode-bidi: embed; }
  body[dir=rtl] md-checkbox {
    margin-left: 16px;
    unicode-bidi: embed; }
  md-checkbox bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-checkbox bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  html[dir=rtl] md-checkbox {
    margin-right: inherit;
    unicode-bidi: embed; }
  body[dir=rtl] md-checkbox {
    margin-right: inherit;
    unicode-bidi: embed; }
  md-checkbox bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-checkbox bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  md-checkbox:last-of-type {
    margin-left: inherit;
    margin-right: 0; }
    html[dir=rtl] md-checkbox:last-of-type {
      margin-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-checkbox:last-of-type {
      margin-left: 0;
      unicode-bidi: embed; }
    md-checkbox:last-of-type bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-checkbox:last-of-type bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-checkbox:last-of-type {
      margin-right: inherit;
      unicode-bidi: embed; }
    body[dir=rtl] md-checkbox:last-of-type {
      margin-right: inherit;
      unicode-bidi: embed; }
    md-checkbox:last-of-type bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-checkbox:last-of-type bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-checkbox.md-focused:not([disabled]) .md-container:before {
    left: -8px;
    top: -8px;
    right: -8px;
    bottom: -8px; }
  md-checkbox.md-focused:not([disabled]):not(.md-checked) .md-container:before {
    background-color: rgba(0, 0, 0, 0.12); }
  md-checkbox .md-container {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    left: 0;
    right: auto; }
    html[dir=rtl] md-checkbox .md-container {
      left: auto;
      unicode-bidi: embed; }
    body[dir=rtl] md-checkbox .md-container {
      left: auto;
      unicode-bidi: embed; }
    md-checkbox .md-container bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-checkbox .md-container bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-checkbox .md-container {
      right: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-checkbox .md-container {
      right: 0;
      unicode-bidi: embed; }
    md-checkbox .md-container bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-checkbox .md-container bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    md-checkbox .md-container:before {
      box-sizing: border-box;
      background-color: transparent;
      border-radius: 50%;
      content: '';
      position: absolute;
      display: block;
      height: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all 0.5s;
      width: auto; }
    md-checkbox .md-container:after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px; }
    md-checkbox .md-container .md-ripple-container {
      position: absolute;
      display: block;
      width: auto;
      height: auto;
      left: -15px;
      top: -15px;
      right: -15px;
      bottom: -15px; }
  md-checkbox.md-align-top-left > div.md-container {
    top: 12px; }
  md-checkbox .md-icon {
    box-sizing: border-box;
    transition: 240ms;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-style: solid;
    border-radius: 2px; }
  md-checkbox.md-checked .md-icon {
    border: none; }
  md-checkbox[disabled] {
    cursor: default; }
  md-checkbox.md-checked .md-icon:after {
    box-sizing: border-box;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    position: absolute;
    left: 6.66667px;
    top: 2.22222px;
    display: table;
    width: 6.66667px;
    height: 13.33333px;
    border-width: 2px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    content: ''; }
  md-checkbox .md-label {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
    margin-left: 30px;
    margin-right: 0; }
    html[dir=rtl] md-checkbox .md-label {
      margin-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-checkbox .md-label {
      margin-left: 0;
      unicode-bidi: embed; }
    md-checkbox .md-label bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-checkbox .md-label bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-checkbox .md-label {
      margin-right: 30px;
      unicode-bidi: embed; }
    body[dir=rtl] md-checkbox .md-label {
      margin-right: 30px;
      unicode-bidi: embed; }
    md-checkbox .md-label bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-checkbox .md-label bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }

.md-contact-chips .md-chips .md-chip {
  padding: 0 25px 0 0; }
  .md-contact-chips .md-chips .md-chip .md-contact-avatar {
    float: left; }
    .md-contact-chips .md-chips .md-chip .md-contact-avatar img {
      height: 32px;
      border-radius: 16px; }
  .md-contact-chips .md-chips .md-chip .md-contact-name {
    display: inline-block;
    height: 32px;
    margin-left: 8px; }

.md-contact-suggestion {
  height: 56px; }
  .md-contact-suggestion img {
    height: 40px;
    border-radius: 20px;
    margin-top: 8px; }
  .md-contact-suggestion .md-contact-name {
    margin-left: 8px;
    width: 120px; }
  .md-contact-suggestion .md-contact-name, .md-contact-suggestion .md-contact-email {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis; }

.md-contact-chips-suggestions li {
  height: 100%; }

.md-chips {
  display: block;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  padding: 0 0 8px 3px;
  vertical-align: middle; }
  .md-chips:after {
    content: '';
    display: table;
    clear: both; }
  .md-chips:not(.md-readonly) {
    cursor: text; }
    .md-chips:not(.md-readonly) .md-chip:not(.md-readonly) {
      padding-right: 22px; }
      .md-chips:not(.md-readonly) .md-chip:not(.md-readonly) .md-chip-content {
        padding-right: 4px; }
  .md-chips .md-chip {
    cursor: default;
    border-radius: 16px;
    display: block;
    height: 32px;
    line-height: 32px;
    margin: 8px 8px 0 0;
    padding: 0 12px 0 12px;
    float: left;
    box-sizing: border-box;
    max-width: 100%;
    position: relative; }
    .md-chips .md-chip .md-chip-content {
      display: block;
      float: left;
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis; }
      .md-chips .md-chip .md-chip-content:focus {
        outline: none; }
    .md-chips .md-chip .md-chip-remove-container {
      position: absolute;
      right: 0;
      line-height: 22px; }
    .md-chips .md-chip .md-chip-remove {
      text-align: center;
      width: 32px;
      height: 32px;
      min-width: 0;
      padding: 0;
      background: transparent;
      border: none;
      box-shadow: none;
      margin: 0;
      position: relative; }
      .md-chips .md-chip .md-chip-remove md-icon {
        height: 18px;
        width: 18px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
                transform: translate3d(-50%, -50%, 0); }
  .md-chips .md-chip-input-container {
    display: block;
    line-height: 32px;
    margin: 8px 8px 0 0;
    padding: 0;
    float: left; }
    .md-chips .md-chip-input-container input:not([type]), .md-chips .md-chip-input-container input[type="email"], .md-chips .md-chip-input-container input[type="number"], .md-chips .md-chip-input-container input[type="tel"], .md-chips .md-chip-input-container input[type="url"], .md-chips .md-chip-input-container input[type="text"] {
      border: 0;
      height: 32px;
      line-height: 32px;
      padding: 0; }
      .md-chips .md-chip-input-container input:not([type]):focus, .md-chips .md-chip-input-container input[type="email"]:focus, .md-chips .md-chip-input-container input[type="number"]:focus, .md-chips .md-chip-input-container input[type="tel"]:focus, .md-chips .md-chip-input-container input[type="url"]:focus, .md-chips .md-chip-input-container input[type="text"]:focus {
        outline: none; }
    .md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {
      background: transparent;
      height: 32px; }
    .md-chips .md-chip-input-container md-autocomplete md-autocomplete-wrap {
      box-shadow: none; }
    .md-chips .md-chip-input-container md-autocomplete input {
      position: relative; }
    .md-chips .md-chip-input-container input {
      border: 0;
      height: 32px;
      line-height: 32px;
      padding: 0; }
      .md-chips .md-chip-input-container input:focus {
        outline: none; }
    .md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {
      height: 32px; }
    .md-chips .md-chip-input-container md-autocomplete {
      box-shadow: none; }
      .md-chips .md-chip-input-container md-autocomplete input {
        position: relative; }
    .md-chips .md-chip-input-container:not(:first-child) {
      margin: 8px 8px 0 0; }
    .md-chips .md-chip-input-container input {
      background: transparent;
      border-width: 0; }
  .md-chips md-autocomplete button {
    display: none; }

@media screen and (-ms-high-contrast: active) {
  .md-chip-input-container,
  md-chip {
    border: 1px solid #fff; }
  .md-chip-input-container md-autocomplete {
    border: none; } }

md-content {
  display: block;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch; }
  md-content[md-scroll-y] {
    overflow-y: auto;
    overflow-x: hidden; }
  md-content[md-scroll-x] {
    overflow-x: auto;
    overflow-y: hidden; }
  md-content.autoScroll {
    -webkit-overflow-scrolling: auto; }

/** Styles for mdCalendar. */
md-calendar {
  font-size: 13px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; }

.md-calendar-scroll-mask {
  display: inline-block;
  overflow: hidden;
  height: 308px; }
  .md-calendar-scroll-mask .md-virtual-repeat-scroller {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch; }
    .md-calendar-scroll-mask .md-virtual-repeat-scroller::-webkit-scrollbar {
      display: none; }
  .md-calendar-scroll-mask .md-virtual-repeat-offsetter {
    width: 100%; }

.md-calendar-scroll-container {
  box-shadow: inset -3px 3px 6px rgba(0, 0, 0, 0.2);
  display: inline-block;
  height: 308px;
  width: 346px; }

.md-calendar-date {
  height: 44px;
  width: 44px;
  text-align: center;
  padding: 0;
  border: none; }
  .md-calendar-date:first-child {
    padding-left: 16px; }
  .md-calendar-date:last-child {
    padding-right: 16px; }
  .md-calendar-date.md-calendar-date-disabled {
    cursor: default; }

.md-calendar-date-selection-indicator {
  transition: background-color, color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px; }
  .md-calendar-date:not(.md-disabled) .md-calendar-date-selection-indicator {
    cursor: pointer; }

.md-calendar-month-label {
  height: 44px;
  font-size: 14px;
  font-weight: 500;
  padding: 0 0 0 24px; }

.md-calendar-day-header {
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: collapse; }
  .md-calendar-day-header th {
    height: 44px;
    width: 44px;
    text-align: center;
    padding: 0;
    border: none;
    font-weight: normal;
    height: 40px; }
    .md-calendar-day-header th:first-child {
      padding-left: 16px; }
    .md-calendar-day-header th:last-child {
      padding-right: 16px; }

.md-calendar {
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: collapse; }
  .md-calendar tr:last-child td {
    border-bottom-width: 1px;
    border-bottom-style: solid; }
  .md-calendar:first-child {
    border-top: 1px solid transparent; }

/** Styles for mdDatepicker. */
md-datepicker {
  white-space: nowrap;
  overflow: hidden;
  padding-right: 18px;
  margin-right: -18px;
  vertical-align: middle; }

.md-inline-form md-datepicker {
  margin-top: 12px; }

.md-datepicker-button {
  display: inline-block;
  box-sizing: border-box;
  background: none; }

.md-datepicker-input {
  font-size: 14px;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
  outline: none;
  background: transparent;
  min-width: 120px;
  max-width: 328px; }
  .md-datepicker-input::-ms-clear {
    display: none; }

.md-datepicker-input-container {
  position: relative;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  display: inline-block;
  width: auto;
  margin-left: 12px; }
  .md-datepicker-input-container.md-datepicker-focused {
    border-bottom-width: 2px; }

.md-datepicker-calendar-pane {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  border-width: 1px;
  border-style: solid;
  background: transparent;
  -webkit-transform: scale(0);
          transform: scale(0);
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  transition: -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }
  .md-datepicker-calendar-pane.md-pane-open {
    -webkit-transform: scale(1);
            transform: scale(1); }

.md-datepicker-input-mask {
  height: 40px;
  width: 340px;
  position: relative;
  background: transparent;
  pointer-events: none;
  cursor: text; }

.md-datepicker-input-mask-opaque {
  position: absolute;
  right: 0;
  left: 120px;
  height: 100%; }

.md-datepicker-calendar {
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.25, 1); }
  .md-pane-open .md-datepicker-calendar {
    opacity: 1; }
  .md-datepicker-calendar md-calendar:focus {
    outline: none; }

.md-datepicker-expand-triangle {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid; }

.md-datepicker-triangle-button {
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform: translateY(-25%) translateX(45%);
          transform: translateY(-25%) translateX(45%); }

.md-datepicker-triangle-button.md-button.md-icon-button {
  height: 100%;
  width: 36px;
  position: absolute; }

md-datepicker[disabled] .md-datepicker-input-container {
  border-bottom-color: transparent; }

md-datepicker[disabled] .md-datepicker-triangle-button {
  display: none; }

.md-datepicker-open .md-datepicker-input-container {
  margin-left: -12px;
  border: none; }

.md-datepicker-open .md-datepicker-input {
  margin-left: 24px;
  height: 40px; }

.md-datepicker-open .md-datepicker-triangle-button {
  display: none; }

.md-datepicker-pos-adjusted .md-datepicker-input-mask {
  display: none; }

.md-datepicker-calendar-pane .md-calendar {
  -webkit-transform: translateY(-85px);
          transform: translateY(-85px);
  transition: -webkit-transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0.125s; }

.md-datepicker-calendar-pane.md-pane-open .md-calendar {
  -webkit-transform: translateY(0);
          transform: translateY(0); }

.md-dialog-is-showing {
  max-height: 100%; }

.md-dialog-container {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 80;
  overflow: hidden; }

md-dialog {
  opacity: 0;
  min-width: 240px;
  max-width: 80%;
  max-height: 80%;
  position: relative;
  overflow: auto;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  md-dialog.md-transition-in {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform: translate(0, 0) scale(1);
            transform: translate(0, 0) scale(1); }
  md-dialog.md-transition-out {
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform: translate(0, 100%) scale(0.2);
            transform: translate(0, 100%) scale(0.2); }
  md-dialog > form {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    overflow: auto; }
  md-dialog .md-dialog-content {
    padding: 24px; }
  md-dialog md-dialog-content {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    overflow: auto;
    -webkit-overflow-scrolling: touch; }
    md-dialog md-dialog-content:not([layout=row]) > *:first-child:not(.md-subheader) {
      margin-top: 0; }
    md-dialog md-dialog-content:focus {
      outline: none; }
    md-dialog md-dialog-content .md-subheader {
      margin: 0; }
      md-dialog md-dialog-content .md-subheader.sticky-clone {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16); }
    md-dialog md-dialog-content.sticky-container {
      padding: 0; }
      md-dialog md-dialog-content.sticky-container > div {
        padding: 24px;
        padding-top: 0; }
    md-dialog md-dialog-content .md-dialog-content-body {
      width: 100%; }
  md-dialog .md-actions, md-dialog md-dialog-actions {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2;
    box-sizing: border-box;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    margin-bottom: 0;
    padding-right: 8px;
    padding-left: 16px;
    min-height: 52px;
    overflow: hidden; }
    md-dialog .md-actions .md-button, md-dialog md-dialog-actions .md-button {
      margin-bottom: 8px;
      margin-left: 8px;
      margin-right: 0;
      margin-top: 8px; }
  md-dialog.md-content-overflow .md-actions, md-dialog.md-content-overflow md-dialog-actions {
    border-top-width: 1px;
    border-top-style: solid; }

@media screen and (-ms-high-contrast: active) {
  md-dialog {
    border: 1px solid #fff; } }

@media (max-width: 959px) {
  md-dialog.md-dialog-fullscreen {
    min-height: 100%;
    min-width: 100%;
    border-radius: 0; } }

md-divider {
  display: block;
  border-top-width: 1px;
  border-top-style: solid;
  margin: 0; }
  md-divider[md-inset] {
    margin-left: 80px; }

.layout-row > md-divider {
  border-top-width: 0;
  border-right-width: 1px;
  border-right-style: solid; }

md-fab-speed-dial {
  position: relative;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 20;
  /*
   * Hide some graphics glitches if switching animation types
   */
  /*
   * Handle the animations
   */ }
  md-fab-speed-dial.md-fab-bottom-right {
    top: auto;
    right: 20px;
    bottom: 20px;
    left: auto;
    position: absolute; }
  md-fab-speed-dial.md-fab-bottom-left {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    position: absolute; }
  md-fab-speed-dial.md-fab-top-right {
    top: 20px;
    right: 20px;
    bottom: auto;
    left: auto;
    position: absolute; }
  md-fab-speed-dial.md-fab-top-left {
    top: 20px;
    right: auto;
    bottom: auto;
    left: 20px;
    position: absolute; }
  md-fab-speed-dial:not(.md-hover-full) {
    pointer-events: none; }
    md-fab-speed-dial:not(.md-hover-full) md-fab-trigger, md-fab-speed-dial:not(.md-hover-full) .md-fab-action-item {
      pointer-events: auto; }
    md-fab-speed-dial:not(.md-hover-full).md-is-open {
      pointer-events: auto; }
  md-fab-speed-dial .md-css-variables {
    z-index: 20; }
  md-fab-speed-dial.md-is-open .md-fab-action-item {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center; }
  md-fab-speed-dial md-fab-actions {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: auto; }
    md-fab-speed-dial md-fab-actions .md-fab-action-item {
      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
  md-fab-speed-dial.md-down {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
    md-fab-speed-dial.md-down md-fab-trigger {
      -webkit-order: 1;
          -ms-flex-order: 1;
              order: 1; }
    md-fab-speed-dial.md-down md-fab-actions {
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-order: 2;
          -ms-flex-order: 2;
              order: 2; }
  md-fab-speed-dial.md-up {
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column; }
    md-fab-speed-dial.md-up md-fab-trigger {
      -webkit-order: 2;
          -ms-flex-order: 2;
              order: 2; }
    md-fab-speed-dial.md-up md-fab-actions {
      -webkit-flex-direction: column-reverse;
          -ms-flex-direction: column-reverse;
              flex-direction: column-reverse;
      -webkit-order: 1;
          -ms-flex-order: 1;
              order: 1; }
  md-fab-speed-dial.md-left {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
    md-fab-speed-dial.md-left md-fab-trigger {
      -webkit-order: 2;
          -ms-flex-order: 2;
              order: 2; }
    md-fab-speed-dial.md-left md-fab-actions {
      -webkit-flex-direction: row-reverse;
          -ms-flex-direction: row-reverse;
              flex-direction: row-reverse;
      -webkit-order: 1;
          -ms-flex-order: 1;
              order: 1; }
      md-fab-speed-dial.md-left md-fab-actions .md-fab-action-item {
        transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
  md-fab-speed-dial.md-right {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
    md-fab-speed-dial.md-right md-fab-trigger {
      -webkit-order: 1;
          -ms-flex-order: 1;
              order: 1; }
    md-fab-speed-dial.md-right md-fab-actions {
      -webkit-flex-direction: row;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-order: 2;
          -ms-flex-order: 2;
              order: 2; }
      md-fab-speed-dial.md-right md-fab-actions .md-fab-action-item {
        transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
  md-fab-speed-dial.md-fling-remove .md-fab-action-item > *, md-fab-speed-dial.md-scale-remove .md-fab-action-item > * {
    visibility: hidden; }
  md-fab-speed-dial.md-fling .md-fab-action-item {
    opacity: 1; }
  md-fab-speed-dial.md-fling.md-animations-waiting .md-fab-action-item {
    opacity: 0;
    transition-duration: 0s; }
  md-fab-speed-dial.md-scale .md-fab-action-item {
    -webkit-transform: scale(0);
            transform: scale(0);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition-duration: 0.14286s; }

md-fab-toolbar {
  display: block;
  /*
   * Closed styling
   */
  /*
   * Hover styling
   */ }
  md-fab-toolbar.md-fab-bottom-right {
    top: auto;
    right: 20px;
    bottom: 20px;
    left: auto;
    position: absolute; }
  md-fab-toolbar.md-fab-bottom-left {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    position: absolute; }
  md-fab-toolbar.md-fab-top-right {
    top: 20px;
    right: 20px;
    bottom: auto;
    left: auto;
    position: absolute; }
  md-fab-toolbar.md-fab-top-left {
    top: 20px;
    right: auto;
    bottom: auto;
    left: 20px;
    position: absolute; }
  md-fab-toolbar .md-fab-toolbar-wrapper {
    display: block;
    position: relative;
    overflow: hidden;
    height: 68px; }
  md-fab-toolbar md-fab-trigger {
    position: absolute;
    z-index: 20; }
    md-fab-toolbar md-fab-trigger button {
      overflow: visible !important; }
    md-fab-toolbar md-fab-trigger .md-fab-toolbar-background {
      display: block;
      position: absolute;
      z-index: 21;
      opacity: 1;
      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
    md-fab-toolbar md-fab-trigger md-icon {
      position: relative;
      z-index: 22;
      opacity: 1;
      transition: all 200ms ease-in; }
  md-fab-toolbar.md-left md-fab-trigger {
    right: 0; }
  md-fab-toolbar.md-left .md-toolbar-tools {
    -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse; }
    md-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {
      margin-right: 0.6rem; }
    md-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {
      margin-left: -0.8rem; }
    md-fab-toolbar.md-left .md-toolbar-tools > .md-button:last-child {
      margin-right: 8px; }
  md-fab-toolbar.md-right md-fab-trigger {
    left: 0; }
  md-fab-toolbar.md-right .md-toolbar-tools {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
  md-fab-toolbar md-toolbar {
    background-color: transparent !important;
    pointer-events: none;
    z-index: 23; }
    md-fab-toolbar md-toolbar .md-toolbar-tools {
      padding: 0 20px;
      margin-top: 3px; }
    md-fab-toolbar md-toolbar .md-fab-action-item {
      opacity: 0;
      -webkit-transform: scale(0);
              transform: scale(0);
      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
      transition-duration: 0.15s; }
  md-fab-toolbar.md-is-open md-fab-trigger > button {
    box-shadow: none; }
    md-fab-toolbar.md-is-open md-fab-trigger > button md-icon {
      opacity: 0; }
  md-fab-toolbar.md-is-open .md-fab-action-item {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); }

md-grid-list {
  box-sizing: border-box;
  display: block;
  position: relative; }
  md-grid-list md-grid-tile,
  md-grid-list md-grid-tile > figure,
  md-grid-list md-grid-tile-header,
  md-grid-list md-grid-tile-footer {
    box-sizing: border-box; }
  md-grid-list md-grid-tile {
    display: block;
    position: absolute; }
    md-grid-list md-grid-tile figure {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-justify-content: center;
          -ms-flex-pack: center;
              justify-content: center;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0; }
    md-grid-list md-grid-tile md-grid-tile-header,
    md-grid-list md-grid-tile md-grid-tile-footer {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-align-items: center;
          -ms-flex-align: center;
              align-items: center;
      height: 48px;
      color: #fff;
      background: rgba(0, 0, 0, 0.18);
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0; }
      md-grid-list md-grid-tile md-grid-tile-header h3,
      md-grid-list md-grid-tile md-grid-tile-header h4,
      md-grid-list md-grid-tile md-grid-tile-footer h3,
      md-grid-list md-grid-tile md-grid-tile-footer h4 {
        font-weight: 400;
        margin: 0 0 0 16px; }
      md-grid-list md-grid-tile md-grid-tile-header h3,
      md-grid-list md-grid-tile md-grid-tile-footer h3 {
        font-size: 14px; }
      md-grid-list md-grid-tile md-grid-tile-header h4,
      md-grid-list md-grid-tile md-grid-tile-footer h4 {
        font-size: 12px; }
    md-grid-list md-grid-tile md-grid-tile-header {
      top: 0; }
    md-grid-list md-grid-tile md-grid-tile-footer {
      bottom: 0; }

@media screen and (-ms-high-contrast: active) {
  md-grid-tile {
    border: 1px solid #fff; }
  md-grid-tile-footer {
    border-top: 1px solid #fff; } }

md-icon {
  margin: auto;
  background-repeat: no-repeat no-repeat;
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  height: 24px;
  width: 24px; }
  md-icon svg {
    pointer-events: none;
    display: block; }
  md-icon[md-font-icon] {
    line-height: 1;
    width: auto; }

md-input-container {
  display: inline-block;
  position: relative;
  padding: 2px;
  margin: 18px 0;
  vertical-align: middle;
  /*
   * The .md-input class is added to the input/textarea
   */ }
  md-input-container:after {
    content: '';
    display: table;
    clear: both; }
  md-input-container.md-block {
    display: block; }
  md-input-container .md-errors-spacer {
    float: right;
    min-height: 24px;
    min-width: 1px; }
    html[dir=rtl] md-input-container .md-errors-spacer {
      float: left;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container .md-errors-spacer {
      float: left;
      unicode-bidi: embed; }
    md-input-container .md-errors-spacer bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container .md-errors-spacer bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-input-container > md-icon {
    position: absolute;
    top: 5px;
    left: 2px;
    right: auto; }
    html[dir=rtl] md-input-container > md-icon {
      left: auto;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container > md-icon {
      left: auto;
      unicode-bidi: embed; }
    md-input-container > md-icon bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container > md-icon bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container > md-icon {
      right: 2px;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container > md-icon {
      right: 2px;
      unicode-bidi: embed; }
    md-input-container > md-icon bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container > md-icon bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-input-container textarea,
  md-input-container input[type="text"],
  md-input-container input[type="password"],
  md-input-container input[type="datetime"],
  md-input-container input[type="datetime-local"],
  md-input-container input[type="date"],
  md-input-container input[type="month"],
  md-input-container input[type="time"],
  md-input-container input[type="week"],
  md-input-container input[type="number"],
  md-input-container input[type="email"],
  md-input-container input[type="url"],
  md-input-container input[type="search"],
  md-input-container input[type="tel"],
  md-input-container input[type="color"] {
    /* remove default appearance from all input/textarea */
    -moz-appearance: none;
    -webkit-appearance: none; }
  md-input-container input[type="date"],
  md-input-container input[type="datetime-local"],
  md-input-container input[type="month"],
  md-input-container input[type="time"],
  md-input-container input[type="week"] {
    min-height: 26px; }
  md-input-container textarea {
    resize: none;
    overflow: hidden; }
  md-input-container textarea.md-input {
    min-height: 26px;
    -ms-flex-preferred-size: auto; }
  md-input-container label:not(.md-container-ignore) {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: auto; }
    html[dir=rtl] md-input-container label:not(.md-container-ignore) {
      left: auto;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container label:not(.md-container-ignore) {
      left: auto;
      unicode-bidi: embed; }
    md-input-container label:not(.md-container-ignore) bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container label:not(.md-container-ignore) bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container label:not(.md-container-ignore) {
      right: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container label:not(.md-container-ignore) {
      right: 0;
      unicode-bidi: embed; }
    md-input-container label:not(.md-container-ignore) bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container label:not(.md-container-ignore) bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-input-container label:not(.md-no-float):not(.md-container-ignore),
  md-input-container .md-placeholder {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
    pointer-events: none;
    -webkit-font-smoothing: antialiased;
    padding-left: 3px;
    padding-right: 0;
    z-index: 1;
    -webkit-transform: translate3d(0, 28px, 0) scale(1);
            transform: translate3d(0, 28px, 0) scale(1);
    transition: -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;
    transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;
    -webkit-transform-origin: left top;
            transform-origin: left top; }
    html[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), html[dir=rtl]
    md-input-container .md-placeholder {
      padding-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), body[dir=rtl]
    md-input-container .md-placeholder {
      padding-left: 0;
      unicode-bidi: embed; }
    md-input-container label:not(.md-no-float):not(.md-container-ignore) bdo[dir=rtl],
    md-input-container .md-placeholder bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container label:not(.md-no-float):not(.md-container-ignore) bdo[dir=ltr],
    md-input-container .md-placeholder bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), html[dir=rtl]
    md-input-container .md-placeholder {
      padding-right: 3px;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), body[dir=rtl]
    md-input-container .md-placeholder {
      padding-right: 3px;
      unicode-bidi: embed; }
    md-input-container label:not(.md-no-float):not(.md-container-ignore) bdo[dir=rtl],
    md-input-container .md-placeholder bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container label:not(.md-no-float):not(.md-container-ignore) bdo[dir=ltr],
    md-input-container .md-placeholder bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), html[dir=rtl]
    md-input-container .md-placeholder {
      -webkit-transform-origin: right top;
              transform-origin: right top;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore), body[dir=rtl]
    md-input-container .md-placeholder {
      -webkit-transform-origin: right top;
              transform-origin: right top;
      unicode-bidi: embed; }
    md-input-container label:not(.md-no-float):not(.md-container-ignore) bdo[dir=rtl],
    md-input-container .md-placeholder bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container label:not(.md-no-float):not(.md-container-ignore) bdo[dir=ltr],
    md-input-container .md-placeholder bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-input-container .md-placeholder {
    position: absolute;
    top: 0;
    opacity: 0;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    -webkit-transform: translate3d(0, 30px, 0);
            transform: translate3d(0, 30px, 0); }
  md-input-container.md-input-focused .md-placeholder {
    opacity: 1;
    -webkit-transform: translate3d(0, 24px, 0);
            transform: translate3d(0, 24px, 0); }
  md-input-container.md-input-has-value .md-placeholder {
    transition: none;
    opacity: 0; }
  md-input-container:not(.md-input-has-value) input:not(:focus),
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field,
  md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text {
    color: transparent; }
  md-input-container .md-input {
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2;
    display: block;
    margin-top: 0;
    background: none;
    padding-top: 2px;
    padding-bottom: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border-width: 0 0 1px 0;
    line-height: 26px;
    height: 30px;
    -ms-flex-preferred-size: 26px;
    border-radius: 0;
    border-style: solid;
    width: 100%;
    box-sizing: border-box;
    float: left; }
    html[dir=rtl] md-input-container .md-input {
      float: right;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container .md-input {
      float: right;
      unicode-bidi: embed; }
    md-input-container .md-input bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container .md-input bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    md-input-container .md-input:focus {
      outline: none; }
    md-input-container .md-input:invalid {
      outline: none;
      box-shadow: none; }
    md-input-container .md-input.md-no-flex {
      -webkit-flex: none !important;
          -ms-flex: none !important;
              flex: none !important; }
  md-input-container .md-char-counter {
    text-align: right;
    padding-right: 2px;
    padding-left: 0; }
    html[dir=rtl] md-input-container .md-char-counter {
      text-align: left;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container .md-char-counter {
      text-align: left;
      unicode-bidi: embed; }
    md-input-container .md-char-counter bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container .md-char-counter bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container .md-char-counter {
      padding-right: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container .md-char-counter {
      padding-right: 0;
      unicode-bidi: embed; }
    md-input-container .md-char-counter bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container .md-char-counter bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container .md-char-counter {
      padding-left: 2px;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container .md-char-counter {
      padding-left: 2px;
      unicode-bidi: embed; }
    md-input-container .md-char-counter bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container .md-char-counter bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-input-container ng-messages, md-input-container data-ng-messages, md-input-container x-ng-messages,
  md-input-container [ng-messages], md-input-container [data-ng-messages], md-input-container [x-ng-messages] {
    position: relative;
    -webkit-order: 4;
        -ms-flex-order: 4;
            order: 4;
    overflow: hidden;
    clear: left; }
    html[dir=rtl] md-input-container ng-messages, html[dir=rtl] md-input-container data-ng-messages, html[dir=rtl] md-input-container x-ng-messages, html[dir=rtl]
    md-input-container [ng-messages], html[dir=rtl] md-input-container [data-ng-messages], html[dir=rtl] md-input-container [x-ng-messages] {
      clear: right;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container ng-messages, body[dir=rtl] md-input-container data-ng-messages, body[dir=rtl] md-input-container x-ng-messages, body[dir=rtl]
    md-input-container [ng-messages], body[dir=rtl] md-input-container [data-ng-messages], body[dir=rtl] md-input-container [x-ng-messages] {
      clear: right;
      unicode-bidi: embed; }
    md-input-container ng-messages bdo[dir=rtl], md-input-container data-ng-messages bdo[dir=rtl], md-input-container x-ng-messages bdo[dir=rtl],
    md-input-container [ng-messages] bdo[dir=rtl], md-input-container [data-ng-messages] bdo[dir=rtl], md-input-container [x-ng-messages] bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container ng-messages bdo[dir=ltr], md-input-container data-ng-messages bdo[dir=ltr], md-input-container x-ng-messages bdo[dir=ltr],
    md-input-container [ng-messages] bdo[dir=ltr], md-input-container [data-ng-messages] bdo[dir=ltr], md-input-container [x-ng-messages] bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    md-input-container ng-messages.ng-enter ng-message, md-input-container ng-messages.ng-enter data-ng-message, md-input-container ng-messages.ng-enter x-ng-message,
    md-input-container ng-messages.ng-enter [ng-message], md-input-container ng-messages.ng-enter [data-ng-message], md-input-container ng-messages.ng-enter [x-ng-message],
    md-input-container ng-messages.ng-enter [ng-message-exp], md-input-container ng-messages.ng-enter [data-ng-message-exp], md-input-container ng-messages.ng-enter [x-ng-message-exp], md-input-container data-ng-messages.ng-enter ng-message, md-input-container data-ng-messages.ng-enter data-ng-message, md-input-container data-ng-messages.ng-enter x-ng-message,
    md-input-container data-ng-messages.ng-enter [ng-message], md-input-container data-ng-messages.ng-enter [data-ng-message], md-input-container data-ng-messages.ng-enter [x-ng-message],
    md-input-container data-ng-messages.ng-enter [ng-message-exp], md-input-container data-ng-messages.ng-enter [data-ng-message-exp], md-input-container data-ng-messages.ng-enter [x-ng-message-exp], md-input-container x-ng-messages.ng-enter ng-message, md-input-container x-ng-messages.ng-enter data-ng-message, md-input-container x-ng-messages.ng-enter x-ng-message,
    md-input-container x-ng-messages.ng-enter [ng-message], md-input-container x-ng-messages.ng-enter [data-ng-message], md-input-container x-ng-messages.ng-enter [x-ng-message],
    md-input-container x-ng-messages.ng-enter [ng-message-exp], md-input-container x-ng-messages.ng-enter [data-ng-message-exp], md-input-container x-ng-messages.ng-enter [x-ng-message-exp],
    md-input-container [ng-messages].ng-enter ng-message,
    md-input-container [ng-messages].ng-enter data-ng-message,
    md-input-container [ng-messages].ng-enter x-ng-message,
    md-input-container [ng-messages].ng-enter [ng-message],
    md-input-container [ng-messages].ng-enter [data-ng-message],
    md-input-container [ng-messages].ng-enter [x-ng-message],
    md-input-container [ng-messages].ng-enter [ng-message-exp],
    md-input-container [ng-messages].ng-enter [data-ng-message-exp],
    md-input-container [ng-messages].ng-enter [x-ng-message-exp], md-input-container [data-ng-messages].ng-enter ng-message, md-input-container [data-ng-messages].ng-enter data-ng-message, md-input-container [data-ng-messages].ng-enter x-ng-message,
    md-input-container [data-ng-messages].ng-enter [ng-message], md-input-container [data-ng-messages].ng-enter [data-ng-message], md-input-container [data-ng-messages].ng-enter [x-ng-message],
    md-input-container [data-ng-messages].ng-enter [ng-message-exp], md-input-container [data-ng-messages].ng-enter [data-ng-message-exp], md-input-container [data-ng-messages].ng-enter [x-ng-message-exp], md-input-container [x-ng-messages].ng-enter ng-message, md-input-container [x-ng-messages].ng-enter data-ng-message, md-input-container [x-ng-messages].ng-enter x-ng-message,
    md-input-container [x-ng-messages].ng-enter [ng-message], md-input-container [x-ng-messages].ng-enter [data-ng-message], md-input-container [x-ng-messages].ng-enter [x-ng-message],
    md-input-container [x-ng-messages].ng-enter [ng-message-exp], md-input-container [x-ng-messages].ng-enter [data-ng-message-exp], md-input-container [x-ng-messages].ng-enter [x-ng-message-exp] {
      opacity: 0;
      margin-top: -100px; }
  md-input-container ng-message, md-input-container data-ng-message, md-input-container x-ng-message,
  md-input-container [ng-message], md-input-container [data-ng-message], md-input-container [x-ng-message],
  md-input-container [ng-message-exp], md-input-container [data-ng-message-exp], md-input-container [x-ng-message-exp],
  md-input-container .md-char-counter {
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    opacity: 1;
    margin-top: 0;
    padding-top: 5px; }
    md-input-container ng-message:not(.md-char-counter), md-input-container data-ng-message:not(.md-char-counter), md-input-container x-ng-message:not(.md-char-counter),
    md-input-container [ng-message]:not(.md-char-counter), md-input-container [data-ng-message]:not(.md-char-counter), md-input-container [x-ng-message]:not(.md-char-counter),
    md-input-container [ng-message-exp]:not(.md-char-counter), md-input-container [data-ng-message-exp]:not(.md-char-counter), md-input-container [x-ng-message-exp]:not(.md-char-counter),
    md-input-container .md-char-counter:not(.md-char-counter) {
      padding-right: 5px;
      padding-left: 0; }
      html[dir=rtl] md-input-container ng-message:not(.md-char-counter), html[dir=rtl] md-input-container data-ng-message:not(.md-char-counter), html[dir=rtl] md-input-container x-ng-message:not(.md-char-counter), html[dir=rtl]
      md-input-container [ng-message]:not(.md-char-counter), html[dir=rtl] md-input-container [data-ng-message]:not(.md-char-counter), html[dir=rtl] md-input-container [x-ng-message]:not(.md-char-counter), html[dir=rtl]
      md-input-container [ng-message-exp]:not(.md-char-counter), html[dir=rtl] md-input-container [data-ng-message-exp]:not(.md-char-counter), html[dir=rtl] md-input-container [x-ng-message-exp]:not(.md-char-counter), html[dir=rtl]
      md-input-container .md-char-counter:not(.md-char-counter) {
        padding-right: 0;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container ng-message:not(.md-char-counter), body[dir=rtl] md-input-container data-ng-message:not(.md-char-counter), body[dir=rtl] md-input-container x-ng-message:not(.md-char-counter), body[dir=rtl]
      md-input-container [ng-message]:not(.md-char-counter), body[dir=rtl] md-input-container [data-ng-message]:not(.md-char-counter), body[dir=rtl] md-input-container [x-ng-message]:not(.md-char-counter), body[dir=rtl]
      md-input-container [ng-message-exp]:not(.md-char-counter), body[dir=rtl] md-input-container [data-ng-message-exp]:not(.md-char-counter), body[dir=rtl] md-input-container [x-ng-message-exp]:not(.md-char-counter), body[dir=rtl]
      md-input-container .md-char-counter:not(.md-char-counter) {
        padding-right: 0;
        unicode-bidi: embed; }
      md-input-container ng-message:not(.md-char-counter) bdo[dir=rtl], md-input-container data-ng-message:not(.md-char-counter) bdo[dir=rtl], md-input-container x-ng-message:not(.md-char-counter) bdo[dir=rtl],
      md-input-container [ng-message]:not(.md-char-counter) bdo[dir=rtl], md-input-container [data-ng-message]:not(.md-char-counter) bdo[dir=rtl], md-input-container [x-ng-message]:not(.md-char-counter) bdo[dir=rtl],
      md-input-container [ng-message-exp]:not(.md-char-counter) bdo[dir=rtl], md-input-container [data-ng-message-exp]:not(.md-char-counter) bdo[dir=rtl], md-input-container [x-ng-message-exp]:not(.md-char-counter) bdo[dir=rtl],
      md-input-container .md-char-counter:not(.md-char-counter) bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container ng-message:not(.md-char-counter) bdo[dir=ltr], md-input-container data-ng-message:not(.md-char-counter) bdo[dir=ltr], md-input-container x-ng-message:not(.md-char-counter) bdo[dir=ltr],
      md-input-container [ng-message]:not(.md-char-counter) bdo[dir=ltr], md-input-container [data-ng-message]:not(.md-char-counter) bdo[dir=ltr], md-input-container [x-ng-message]:not(.md-char-counter) bdo[dir=ltr],
      md-input-container [ng-message-exp]:not(.md-char-counter) bdo[dir=ltr], md-input-container [data-ng-message-exp]:not(.md-char-counter) bdo[dir=ltr], md-input-container [x-ng-message-exp]:not(.md-char-counter) bdo[dir=ltr],
      md-input-container .md-char-counter:not(.md-char-counter) bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
      html[dir=rtl] md-input-container ng-message:not(.md-char-counter), html[dir=rtl] md-input-container data-ng-message:not(.md-char-counter), html[dir=rtl] md-input-container x-ng-message:not(.md-char-counter), html[dir=rtl]
      md-input-container [ng-message]:not(.md-char-counter), html[dir=rtl] md-input-container [data-ng-message]:not(.md-char-counter), html[dir=rtl] md-input-container [x-ng-message]:not(.md-char-counter), html[dir=rtl]
      md-input-container [ng-message-exp]:not(.md-char-counter), html[dir=rtl] md-input-container [data-ng-message-exp]:not(.md-char-counter), html[dir=rtl] md-input-container [x-ng-message-exp]:not(.md-char-counter), html[dir=rtl]
      md-input-container .md-char-counter:not(.md-char-counter) {
        padding-left: 5px;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container ng-message:not(.md-char-counter), body[dir=rtl] md-input-container data-ng-message:not(.md-char-counter), body[dir=rtl] md-input-container x-ng-message:not(.md-char-counter), body[dir=rtl]
      md-input-container [ng-message]:not(.md-char-counter), body[dir=rtl] md-input-container [data-ng-message]:not(.md-char-counter), body[dir=rtl] md-input-container [x-ng-message]:not(.md-char-counter), body[dir=rtl]
      md-input-container [ng-message-exp]:not(.md-char-counter), body[dir=rtl] md-input-container [data-ng-message-exp]:not(.md-char-counter), body[dir=rtl] md-input-container [x-ng-message-exp]:not(.md-char-counter), body[dir=rtl]
      md-input-container .md-char-counter:not(.md-char-counter) {
        padding-left: 5px;
        unicode-bidi: embed; }
      md-input-container ng-message:not(.md-char-counter) bdo[dir=rtl], md-input-container data-ng-message:not(.md-char-counter) bdo[dir=rtl], md-input-container x-ng-message:not(.md-char-counter) bdo[dir=rtl],
      md-input-container [ng-message]:not(.md-char-counter) bdo[dir=rtl], md-input-container [data-ng-message]:not(.md-char-counter) bdo[dir=rtl], md-input-container [x-ng-message]:not(.md-char-counter) bdo[dir=rtl],
      md-input-container [ng-message-exp]:not(.md-char-counter) bdo[dir=rtl], md-input-container [data-ng-message-exp]:not(.md-char-counter) bdo[dir=rtl], md-input-container [x-ng-message-exp]:not(.md-char-counter) bdo[dir=rtl],
      md-input-container .md-char-counter:not(.md-char-counter) bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container ng-message:not(.md-char-counter) bdo[dir=ltr], md-input-container data-ng-message:not(.md-char-counter) bdo[dir=ltr], md-input-container x-ng-message:not(.md-char-counter) bdo[dir=ltr],
      md-input-container [ng-message]:not(.md-char-counter) bdo[dir=ltr], md-input-container [data-ng-message]:not(.md-char-counter) bdo[dir=ltr], md-input-container [x-ng-message]:not(.md-char-counter) bdo[dir=ltr],
      md-input-container [ng-message-exp]:not(.md-char-counter) bdo[dir=ltr], md-input-container [data-ng-message-exp]:not(.md-char-counter) bdo[dir=ltr], md-input-container [x-ng-message-exp]:not(.md-char-counter) bdo[dir=ltr],
      md-input-container .md-char-counter:not(.md-char-counter) bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
  md-input-container:not(.md-input-invalid) .md-auto-hide .md-input-message-animation {
    opacity: 0;
    margin-top: -100px; }
  md-input-container .md-auto-hide .md-input-message-animation:not(.ng-animate) {
    opacity: 0;
    margin-top: -100px; }
  md-input-container .md-input-message-animation.ng-enter {
    opacity: 0;
    margin-top: -100px; }
  md-input-container.md-input-focused label:not(.md-no-float), md-input-container.md-input-has-placeholder label:not(.md-no-float), md-input-container.md-input-has-value label:not(.md-no-float) {
    -webkit-transform: translate3d(0, 6px, 0) scale(0.75);
            transform: translate3d(0, 6px, 0) scale(0.75); }
  md-input-container.md-input-has-value label {
    transition: none; }
  md-input-container.md-input-focused .md-input,
  md-input-container .md-input.ng-invalid.ng-dirty {
    padding-bottom: 0;
    border-width: 0 0 2px 0; }
  md-input-container .md-input[disabled],
  [disabled] md-input-container .md-input {
    background-position: 0 bottom;
    background-size: 4px 1px;
    background-repeat: repeat-x;
    margin-bottom: -1px; }
  md-input-container.md-icon-float {
    transition: margin-top 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); }
    md-input-container.md-icon-float > label {
      pointer-events: none;
      position: absolute; }
    md-input-container.md-icon-float > md-icon {
      top: 2px;
      left: 2px;
      right: auto; }
      html[dir=rtl] md-input-container.md-icon-float > md-icon {
        left: auto;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container.md-icon-float > md-icon {
        left: auto;
        unicode-bidi: embed; }
      md-input-container.md-icon-float > md-icon bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container.md-icon-float > md-icon bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
      html[dir=rtl] md-input-container.md-icon-float > md-icon {
        right: 2px;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container.md-icon-float > md-icon {
        right: 2px;
        unicode-bidi: embed; }
      md-input-container.md-icon-float > md-icon bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container.md-icon-float > md-icon bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
    md-input-container.md-icon-float.md-input-focused label, md-input-container.md-icon-float.md-input-has-value label {
      -webkit-transform: translate3d(0, 6px, 0) scale(0.75);
              transform: translate3d(0, 6px, 0) scale(0.75);
      transition: -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;
      transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s; }
  md-input-container.md-icon-left {
    padding-left: 36px;
    padding-right: 0; }
    html[dir=rtl] md-input-container.md-icon-left {
      padding-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container.md-icon-left {
      padding-left: 0;
      unicode-bidi: embed; }
    md-input-container.md-icon-left bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container.md-icon-left bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container.md-icon-left {
      padding-right: 36px;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container.md-icon-left {
      padding-right: 36px;
      unicode-bidi: embed; }
    md-input-container.md-icon-left bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container.md-icon-left bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    md-input-container.md-icon-left > label {
      left: 36px;
      right: auto; }
      html[dir=rtl] md-input-container.md-icon-left > label {
        left: auto;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container.md-icon-left > label {
        left: auto;
        unicode-bidi: embed; }
      md-input-container.md-icon-left > label bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container.md-icon-left > label bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
      html[dir=rtl] md-input-container.md-icon-left > label {
        right: 36px;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container.md-icon-left > label {
        right: 36px;
        unicode-bidi: embed; }
      md-input-container.md-icon-left > label bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container.md-icon-left > label bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
  md-input-container.md-icon-right {
    padding-left: 0;
    padding-right: 36px; }
    html[dir=rtl] md-input-container.md-icon-right {
      padding-left: 36px;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container.md-icon-right {
      padding-left: 36px;
      unicode-bidi: embed; }
    md-input-container.md-icon-right bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container.md-icon-right bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-input-container.md-icon-right {
      padding-right: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-input-container.md-icon-right {
      padding-right: 0;
      unicode-bidi: embed; }
    md-input-container.md-icon-right bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-input-container.md-icon-right bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    md-input-container.md-icon-right > md-icon:last-of-type {
      margin: 0;
      right: 2px;
      left: auto; }
      html[dir=rtl] md-input-container.md-icon-right > md-icon:last-of-type {
        right: auto;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container.md-icon-right > md-icon:last-of-type {
        right: auto;
        unicode-bidi: embed; }
      md-input-container.md-icon-right > md-icon:last-of-type bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container.md-icon-right > md-icon:last-of-type bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
      html[dir=rtl] md-input-container.md-icon-right > md-icon:last-of-type {
        left: 2px;
        unicode-bidi: embed; }
      body[dir=rtl] md-input-container.md-icon-right > md-icon:last-of-type {
        left: 2px;
        unicode-bidi: embed; }
      md-input-container.md-icon-right > md-icon:last-of-type bdo[dir=rtl] {
        direction: rtl;
        unicode-bidi: bidi-override; }
      md-input-container.md-icon-right > md-icon:last-of-type bdo[dir=ltr] {
        direction: ltr;
        unicode-bidi: bidi-override; }
  md-input-container.md-icon-left.md-icon-right {
    padding-left: 36px;
    padding-right: 36px; }

@media screen and (-ms-high-contrast: active) {
  md-input-container.md-default-theme > md-icon {
    fill: #fff; } }

md-list {
  display: block;
  padding: 8px 0px 8px 0px; }
  md-list .md-subheader {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.010em;
    line-height: 1.2em; }

md-list-item {
  position: relative; }
  md-list-item.md-proxy-focus.md-focused .md-no-style {
    transition: background-color 0.15s linear; }
  md-list-item.md-no-proxy,
  md-list-item .md-no-style {
    position: relative;
    padding: 0px 16px;
    -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto; }
    md-list-item.md-no-proxy.md-button,
    md-list-item .md-no-style.md-button {
      font-size: inherit;
      height: inherit;
      text-align: left;
      text-transform: none;
      width: 100%;
      white-space: normal;
      -webkit-flex-direction: inherit;
          -ms-flex-direction: inherit;
              flex-direction: inherit;
      -webkit-align-items: inherit;
          -ms-flex-align: inherit;
              align-items: inherit;
      border-radius: 0; }
      md-list-item.md-no-proxy.md-button > .md-ripple-container,
      md-list-item .md-no-style.md-button > .md-ripple-container {
        border-radius: 0; }
    md-list-item.md-no-proxy:focus,
    md-list-item .md-no-style:focus {
      outline: none; }
  md-list-item.md-with-secondary {
    position: relative; }
  md-list-item.md-clickable:hover {
    cursor: pointer; }
  md-list-item md-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; }
    md-list-item md-divider[md-inset] {
      left: 96px;
      width: calc(100% - 96px);
      margin: 0; }

md-list-item, md-list-item .md-list-item-inner {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  min-height: 48px;
  height: auto; }
  md-list-item > div.md-primary > md-icon:not(.md-avatar-icon),
  md-list-item > div.md-secondary > md-icon:not(.md-avatar-icon),
  md-list-item > md-icon:first-child:not(.md-avatar-icon),
  md-list-item > md-icon.md-secondary:not(.md-avatar-icon), md-list-item .md-list-item-inner > div.md-primary > md-icon:not(.md-avatar-icon),
  md-list-item .md-list-item-inner > div.md-secondary > md-icon:not(.md-avatar-icon),
  md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon),
  md-list-item .md-list-item-inner > md-icon.md-secondary:not(.md-avatar-icon) {
    width: 24px;
    margin-top: 16px;
    margin-bottom: 12px;
    box-sizing: content-box; }
  md-list-item > div.md-primary > md-checkbox,
  md-list-item > div.md-secondary > md-checkbox,
  md-list-item > md-checkbox,
  md-list-item md-checkbox.md-secondary, md-list-item .md-list-item-inner > div.md-primary > md-checkbox,
  md-list-item .md-list-item-inner > div.md-secondary > md-checkbox,
  md-list-item .md-list-item-inner > md-checkbox,
  md-list-item .md-list-item-inner md-checkbox.md-secondary {
    -webkit-align-self: center;
        -ms-flex-item-align: center;
            align-self: center; }
    md-list-item > div.md-primary > md-checkbox .md-label,
    md-list-item > div.md-secondary > md-checkbox .md-label,
    md-list-item > md-checkbox .md-label,
    md-list-item md-checkbox.md-secondary .md-label, md-list-item .md-list-item-inner > div.md-primary > md-checkbox .md-label,
    md-list-item .md-list-item-inner > div.md-secondary > md-checkbox .md-label,
    md-list-item .md-list-item-inner > md-checkbox .md-label,
    md-list-item .md-list-item-inner md-checkbox.md-secondary .md-label {
      display: none; }
  md-list-item > md-icon:first-child:not(.md-avatar-icon), md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon) {
    margin-right: 32px; }
  md-list-item > md-checkbox, md-list-item .md-list-item-inner > md-checkbox {
    width: 24px;
    margin-left: 3px;
    margin-right: 29px;
    margin-top: 16px; }
  md-list-item .md-avatar, md-list-item .md-avatar-icon, md-list-item .md-list-item-inner .md-avatar, md-list-item .md-list-item-inner .md-avatar-icon {
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 16px;
    border-radius: 50%;
    box-sizing: content-box; }
  md-list-item .md-avatar, md-list-item .md-list-item-inner .md-avatar {
    width: 40px;
    height: 40px; }
  md-list-item .md-avatar-icon, md-list-item .md-list-item-inner .md-avatar-icon {
    padding: 8px; }
  md-list-item md-checkbox.md-secondary,
  md-list-item md-switch.md-secondary, md-list-item .md-list-item-inner md-checkbox.md-secondary,
  md-list-item .md-list-item-inner md-switch.md-secondary {
    margin-top: 0;
    margin-bottom: 0; }
  md-list-item md-checkbox.md-secondary, md-list-item .md-list-item-inner md-checkbox.md-secondary {
    margin-right: 0; }
  md-list-item md-switch.md-secondary, md-list-item .md-list-item-inner md-switch.md-secondary {
    margin-right: -6px; }
  md-list-item button.md-button.md-secondary-container, md-list-item .md-list-item-inner button.md-button.md-secondary-container {
    background-color: transparent;
    -webkit-align-self: center;
        -ms-flex-item-align: center;
            align-self: center;
    border-radius: 50%;
    margin: 0px;
    min-width: 0px; }
    md-list-item button.md-button.md-secondary-container .md-ripple,
    md-list-item button.md-button.md-secondary-container .md-ripple-container, md-list-item .md-list-item-inner button.md-button.md-secondary-container .md-ripple,
    md-list-item .md-list-item-inner button.md-button.md-secondary-container .md-ripple-container {
      border-radius: 50%; }
    md-list-item button.md-button.md-secondary-container.md-icon-button, md-list-item .md-list-item-inner button.md-button.md-secondary-container.md-icon-button {
      margin-right: -12px; }
  md-list-item .md-secondary-container,
  md-list-item .md-secondary, md-list-item .md-list-item-inner .md-secondary-container,
  md-list-item .md-list-item-inner .md-secondary {
    position: absolute;
    top: 50%;
    right: 16px;
    margin: 0 0 0 16px;
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0); }
  md-list-item > .md-button.md-secondary-container > .md-secondary, md-list-item .md-list-item-inner > .md-button.md-secondary-container > .md-secondary {
    margin-left: 0;
    position: static; }
  md-list-item > p, md-list-item > .md-list-item-inner > p, md-list-item .md-list-item-inner > p, md-list-item .md-list-item-inner > .md-list-item-inner > p {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    margin: 0; }

md-list-item.md-2-line,
md-list-item.md-2-line > .md-no-style,
md-list-item.md-3-line,
md-list-item.md-3-line > .md-no-style {
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center; }
  md-list-item.md-2-line .md-list-item-text,
  md-list-item.md-2-line > .md-no-style .md-list-item-text,
  md-list-item.md-3-line .md-list-item-text,
  md-list-item.md-3-line > .md-no-style .md-list-item-text {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    margin: auto;
    text-overflow: ellipsis; }
    md-list-item.md-2-line .md-list-item-text.md-offset,
    md-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset,
    md-list-item.md-3-line .md-list-item-text.md-offset,
    md-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {
      margin-left: 56px; }
    md-list-item.md-2-line .md-list-item-text h3,
    md-list-item.md-2-line > .md-no-style .md-list-item-text h3,
    md-list-item.md-3-line .md-list-item-text h3,
    md-list-item.md-3-line > .md-no-style .md-list-item-text h3 {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.010em;
      margin: 0 0 0px 0;
      line-height: 1.2em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; }
    md-list-item.md-2-line .md-list-item-text h4,
    md-list-item.md-2-line > .md-no-style .md-list-item-text h4,
    md-list-item.md-3-line .md-list-item-text h4,
    md-list-item.md-3-line > .md-no-style .md-list-item-text h4 {
      font-size: 14px;
      letter-spacing: 0.010em;
      margin: 3px 0 1px 0;
      font-weight: 400;
      line-height: 1.2em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; }
    md-list-item.md-2-line .md-list-item-text p,
    md-list-item.md-2-line > .md-no-style .md-list-item-text p,
    md-list-item.md-3-line .md-list-item-text p,
    md-list-item.md-3-line > .md-no-style .md-list-item-text p {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.010em;
      margin: 0 0 0 0;
      line-height: 1.6em; }

md-list-item.md-2-line,
md-list-item.md-2-line > .md-no-style {
  height: auto;
  min-height: 72px; }
  md-list-item.md-2-line.md-long-text,
  md-list-item.md-2-line > .md-no-style.md-long-text {
    margin: 1.6em; }
  md-list-item.md-2-line > .md-avatar, md-list-item.md-2-line .md-avatar-icon,
  md-list-item.md-2-line > .md-no-style > .md-avatar,
  md-list-item.md-2-line > .md-no-style .md-avatar-icon {
    margin-top: 12px; }
  md-list-item.md-2-line > md-icon:first-child,
  md-list-item.md-2-line > .md-no-style > md-icon:first-child {
    -webkit-align-self: flex-start;
        -ms-flex-item-align: start;
            align-self: flex-start; }
  md-list-item.md-2-line .md-list-item-text,
  md-list-item.md-2-line > .md-no-style .md-list-item-text {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1; }

md-list-item.md-3-line,
md-list-item.md-3-line > .md-no-style {
  height: auto;
  min-height: 88px; }
  md-list-item.md-3-line.md-long-text,
  md-list-item.md-3-line > .md-no-style.md-long-text {
    margin: 1.6em; }
  md-list-item.md-3-line > md-icon:first-child,
  md-list-item.md-3-line > .md-avatar,
  md-list-item.md-3-line > .md-no-style > md-icon:first-child,
  md-list-item.md-3-line > .md-no-style > .md-avatar {
    margin-top: 16px; }

.md-open-menu-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  opacity: 0;
  border-radius: 2px; }
  .md-open-menu-container md-menu-divider {
    margin-top: 4px;
    margin-bottom: 4px;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    width: 100%; }
  .md-open-menu-container md-menu-content > * {
    opacity: 0; }
  .md-open-menu-container:not(.md-clickable) {
    pointer-events: none; }
  .md-open-menu-container.md-active {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 200ms; }
    .md-open-menu-container.md-active > md-menu-content > * {
      opacity: 1;
      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
      transition-duration: 200ms;
      transition-delay: 100ms; }
  .md-open-menu-container.md-leave {
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition-duration: 250ms; }

md-menu-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 8px 0;
  max-height: 304px;
  overflow-y: auto; }
  md-menu-content.md-dense {
    max-height: 208px; }
    md-menu-content.md-dense md-menu-item {
      height: 32px;
      min-height: 0px; }

md-menu-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  min-height: 48px;
  height: 48px;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start; }
  md-menu-item > * {
    width: 100%;
    margin: auto 0;
    padding-left: 16px;
    padding-right: 16px; }
  md-menu-item > a.md-button {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  md-menu-item > .md-button {
    border-radius: 0;
    margin: auto 0;
    font-size: 15px;
    text-transform: none;
    font-weight: 400;
    text-align: left;
    text-align: start;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
    display: inline-block;
    -webkit-align-items: baseline;
        -ms-flex-align: baseline;
            align-items: baseline;
    -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
            align-content: flex-start;
    width: 100%; }
    md-menu-item > .md-button md-icon {
      margin: auto 16px auto 0; }
    md-menu-item > .md-button p {
      display: inline-block;
      margin: auto; }
    md-menu-item > .md-button span {
      margin-top: auto;
      margin-bottom: auto; }
    md-menu-item > .md-button .md-ripple-container {
      border-radius: inherit; }

.md-menu {
  padding: 8px 0; }

md-toolbar .md-menu {
  height: auto;
  margin: auto;
  padding: 0; }

@media (max-width: 959px) {
  md-menu-content {
    min-width: 112px; }
  md-menu-content[width="3"] {
    min-width: 168px; }
  md-menu-content[width="4"] {
    min-width: 224px; }
  md-menu-content[width="5"] {
    min-width: 280px; }
  md-menu-content[width="6"] {
    min-width: 336px; }
  md-menu-content[width="7"] {
    min-width: 392px; } }

@media (min-width: 960px) {
  md-menu-content {
    min-width: 96px; }
  md-menu-content[width="3"] {
    min-width: 192px; }
  md-menu-content[width="4"] {
    min-width: 256px; }
  md-menu-content[width="5"] {
    min-width: 320px; }
  md-menu-content[width="6"] {
    min-width: 384px; }
  md-menu-content[width="7"] {
    min-width: 448px; } }

md-toolbar.md-menu-toolbar h2.md-toolbar-tools {
  line-height: 1rem;
  height: auto;
  padding: 28px;
  padding-bottom: 12px; }

md-menu-bar {
  padding: 0 20px;
  display: block;
  position: relative;
  z-index: 2; }
  md-menu-bar .md-menu {
    display: inline-block;
    padding: 0;
    position: relative; }
  md-menu-bar button {
    font-size: 14px;
    padding: 0 10px;
    margin: 0;
    border: 0;
    background-color: transparent;
    height: 40px; }
  md-menu-bar md-backdrop.md-menu-backdrop {
    z-index: -2; }

md-menu-content.md-menu-bar-menu.md-dense {
  max-height: none;
  padding: 16px 0; }
  md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent {
    position: relative; }
    md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > md-icon {
      position: absolute;
      padding: 0;
      width: 24px;
      top: 6px;
      left: 24px; }
    md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > .md-button, md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu > .md-button {
      padding: 0 32px 0 64px; }
  md-menu-content.md-menu-bar-menu.md-dense .md-button {
    min-height: 0;
    height: 32px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
    md-menu-content.md-menu-bar-menu.md-dense .md-button span {
      -webkit-flex-grow: 1;
          -ms-flex-positive: 1;
              flex-grow: 1; }
    md-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {
      -webkit-flex-grow: 0;
          -ms-flex-positive: 0;
              flex-grow: 0;
      -webkit-align-self: flex-end;
          -ms-flex-item-align: end;
              align-self: flex-end;
      margin: 0 8px; }
  md-menu-content.md-menu-bar-menu.md-dense md-menu-divider {
    margin: 8px 0; }
  md-menu-content.md-menu-bar-menu.md-dense md-menu-item > .md-button, md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {
    text-align: left;
    text-align: start; }
  md-menu-content.md-menu-bar-menu.md-dense .md-menu {
    padding: 0; }
    md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {
      position: relative;
      margin: 0;
      width: 100%;
      text-transform: none;
      font-weight: normal;
      border-radius: 0px;
      padding-left: 16px; }
      md-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button:after {
        display: block;
        content: '\25BC';
        position: absolute;
        top: 0px;
        speak: none;
        -webkit-transform: rotate(270deg) scaleY(0.45) scaleX(0.9);
                transform: rotate(270deg) scaleY(0.45) scaleX(0.9);
        right: 28px; }

md-progress-circular {
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  padding-top: 0 !important;
  margin-bottom: 0 !important;
  z-index: 2; }
  md-progress-circular .md-spinner-wrapper {
    display: block;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%; }
    md-progress-circular .md-spinner-wrapper .md-inner {
      width: 100px;
      height: 100px;
      position: relative; }
      md-progress-circular .md-spinner-wrapper .md-inner .md-gap {
        position: absolute;
        left: 49px;
        right: 49px;
        top: 0;
        bottom: 0;
        border-top-width: 10px;
        border-top-style: solid;
        box-sizing: border-box; }
      md-progress-circular .md-spinner-wrapper .md-inner .md-left, md-progress-circular .md-spinner-wrapper .md-inner .md-right {
        position: absolute;
        top: 0;
        height: 100px;
        width: 50px;
        overflow: hidden; }
        md-progress-circular .md-spinner-wrapper .md-inner .md-left .md-half-circle, md-progress-circular .md-spinner-wrapper .md-inner .md-right .md-half-circle {
          position: absolute;
          top: 0;
          width: 100px;
          height: 100px;
          box-sizing: border-box;
          border-width: 10px;
          border-style: solid;
          border-bottom-color: transparent;
          border-radius: 50%; }
      md-progress-circular .md-spinner-wrapper .md-inner .md-left {
        left: 0; }
        md-progress-circular .md-spinner-wrapper .md-inner .md-left .md-half-circle {
          left: 0;
          border-right-color: transparent; }
      md-progress-circular .md-spinner-wrapper .md-inner .md-right {
        right: 0; }
        md-progress-circular .md-spinner-wrapper .md-inner .md-right .md-half-circle {
          right: 0;
          border-left-color: transparent; }
  md-progress-circular .md-mode-indeterminate .md-spinner-wrapper {
    -webkit-animation: outer-rotate 2.91667s linear infinite;
            animation: outer-rotate 2.91667s linear infinite; }
    md-progress-circular .md-mode-indeterminate .md-spinner-wrapper .md-inner {
      -webkit-animation: sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite;
              animation: sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite; }
      md-progress-circular .md-mode-indeterminate .md-spinner-wrapper .md-inner .md-left .md-half-circle, md-progress-circular .md-mode-indeterminate .md-spinner-wrapper .md-inner .md-right .md-half-circle {
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
        -webkit-animation-duration: 1.3125s;
                animation-duration: 1.3125s;
        -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
                animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1); }
      md-progress-circular .md-mode-indeterminate .md-spinner-wrapper .md-inner .md-left .md-half-circle {
        -webkit-animation-name: left-wobble;
                animation-name: left-wobble; }
      md-progress-circular .md-mode-indeterminate .md-spinner-wrapper .md-inner .md-right .md-half-circle {
        -webkit-animation-name: right-wobble;
                animation-name: right-wobble; }
  md-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper {
    -webkit-animation: none;
            animation: none; }
    md-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner {
      -webkit-animation: none;
              animation: none; }
      md-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner .md-left .md-half-circle {
        -webkit-animation-name: none;
                animation-name: none; }
      md-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner .md-right .md-half-circle {
        -webkit-animation-name: none;
                animation-name: none; }
  md-progress-circular .md-spinner-wrapper.ng-hide {
    -webkit-animation: none;
            animation: none; }
    md-progress-circular .md-spinner-wrapper.ng-hide .md-inner {
      -webkit-animation: none;
              animation: none; }
      md-progress-circular .md-spinner-wrapper.ng-hide .md-inner .md-left .md-half-circle {
        -webkit-animation-name: none;
                animation-name: none; }
      md-progress-circular .md-spinner-wrapper.ng-hide .md-inner .md-right .md-half-circle {
        -webkit-animation-name: none;
                animation-name: none; }

@-webkit-keyframes outer-rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.5);
            transform: rotate(0deg) scale(0.5); }
  100% {
    -webkit-transform: rotate(360deg) scale(0.5);
            transform: rotate(360deg) scale(0.5); } }

@keyframes outer-rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.5);
            transform: rotate(0deg) scale(0.5); }
  100% {
    -webkit-transform: rotate(360deg) scale(0.5);
            transform: rotate(360deg) scale(0.5); } }

@-webkit-keyframes left-wobble {
  0%, 100% {
    -webkit-transform: rotate(130deg);
            transform: rotate(130deg); }
  50% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg); } }

@keyframes left-wobble {
  0%, 100% {
    -webkit-transform: rotate(130deg);
            transform: rotate(130deg); }
  50% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg); } }

@-webkit-keyframes right-wobble {
  0%, 100% {
    -webkit-transform: rotate(-130deg);
            transform: rotate(-130deg); }
  50% {
    -webkit-transform: rotate(5deg);
            transform: rotate(5deg); } }

@keyframes right-wobble {
  0%, 100% {
    -webkit-transform: rotate(-130deg);
            transform: rotate(-130deg); }
  50% {
    -webkit-transform: rotate(5deg);
            transform: rotate(5deg); } }

@-webkit-keyframes sporadic-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg); }
  25% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }
  37.5% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg); }
  50% {
    -webkit-transform: rotate(540deg);
            transform: rotate(540deg); }
  62.5% {
    -webkit-transform: rotate(675deg);
            transform: rotate(675deg); }
  75% {
    -webkit-transform: rotate(810deg);
            transform: rotate(810deg); }
  87.5% {
    -webkit-transform: rotate(945deg);
            transform: rotate(945deg); }
  100% {
    -webkit-transform: rotate(1080deg);
            transform: rotate(1080deg); } }

@keyframes sporadic-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg); }
  25% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }
  37.5% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg); }
  50% {
    -webkit-transform: rotate(540deg);
            transform: rotate(540deg); }
  62.5% {
    -webkit-transform: rotate(675deg);
            transform: rotate(675deg); }
  75% {
    -webkit-transform: rotate(810deg);
            transform: rotate(810deg); }
  87.5% {
    -webkit-transform: rotate(945deg);
            transform: rotate(945deg); }
  100% {
    -webkit-transform: rotate(1080deg);
            transform: rotate(1080deg); } }

md-progress-linear {
  display: block;
  position: relative;
  width: 100%;
  height: 5px;
  padding-top: 0 !important;
  margin-bottom: 0 !important; }
  md-progress-linear .md-container {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 5px;
    -webkit-transform: translate(0, 0) scale(1, 1);
            transform: translate(0, 0) scale(1, 1); }
    md-progress-linear .md-container .md-bar {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 5px; }
    md-progress-linear .md-container .md-dashed:before {
      content: "";
      display: none;
      position: absolute;
      margin-top: 0;
      height: 5px;
      width: 100%;
      background-color: transparent;
      background-size: 10px 10px !important;
      background-position: 0px -23px; }
    md-progress-linear .md-container .md-bar1, md-progress-linear .md-container .md-bar2 {
      transition: -webkit-transform 0.2s linear;
      transition: transform 0.2s linear; }
    md-progress-linear .md-container.md-mode-query .md-bar1 {
      display: none; }
    md-progress-linear .md-container.md-mode-query .md-bar2 {
      transition: all 0.2s linear;
      -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);
              animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1); }
    md-progress-linear .md-container.md-mode-determinate .md-bar1 {
      display: none; }
    md-progress-linear .md-container.md-mode-indeterminate .md-bar1 {
      -webkit-animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;
              animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite; }
    md-progress-linear .md-container.md-mode-indeterminate .md-bar2 {
      -webkit-animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;
              animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite; }
    md-progress-linear .md-container.ng-hide {
      -webkit-animation: none;
              animation: none; }
      md-progress-linear .md-container.ng-hide .md-bar1 {
        -webkit-animation-name: none;
                animation-name: none; }
      md-progress-linear .md-container.ng-hide .md-bar2 {
        -webkit-animation-name: none;
                animation-name: none; }
  md-progress-linear .md-container.md-mode-buffer {
    background-color: transparent !important;
    transition: all 0.2s linear; }
    md-progress-linear .md-container.md-mode-buffer .md-dashed:before {
      display: block;
      -webkit-animation: buffer 3s infinite linear;
              animation: buffer 3s infinite linear; }

@-webkit-keyframes query {
  0% {
    opacity: 1;
    -webkit-transform: translateX(35%) scale(0.3, 1);
            transform: translateX(35%) scale(0.3, 1); }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-50%) scale(0, 1);
            transform: translateX(-50%) scale(0, 1); } }

@keyframes query {
  0% {
    opacity: 1;
    -webkit-transform: translateX(35%) scale(0.3, 1);
            transform: translateX(35%) scale(0.3, 1); }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-50%) scale(0, 1);
            transform: translateX(-50%) scale(0, 1); } }

@-webkit-keyframes buffer {
  0% {
    opacity: 1;
    background-position: 0px -23px; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1;
    background-position: -200px -23px; } }

@keyframes buffer {
  0% {
    opacity: 1;
    background-position: 0px -23px; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1;
    background-position: -200px -23px; } }

@-webkit-keyframes md-progress-linear-indeterminate-scale-1 {
  0% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1);
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear; }
  36.6% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1);
    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1); }
  69.15% {
    -webkit-transform: scaleX(0.83);
            transform: scaleX(0.83);
    -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
            animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098); }
  100% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1); } }

@keyframes md-progress-linear-indeterminate-scale-1 {
  0% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1);
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear; }
  36.6% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1);
    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1); }
  69.15% {
    -webkit-transform: scaleX(0.83);
            transform: scaleX(0.83);
    -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
            animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098); }
  100% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1); } }

@-webkit-keyframes md-progress-linear-indeterminate-1 {
  0% {
    left: -105.16667%;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear; }
  20% {
    left: -105.16667%;
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582); }
  69.15% {
    left: 21.5%;
    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635); }
  100% {
    left: 95.44444%; } }

@keyframes md-progress-linear-indeterminate-1 {
  0% {
    left: -105.16667%;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear; }
  20% {
    left: -105.16667%;
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582); }
  69.15% {
    left: 21.5%;
    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635); }
  100% {
    left: 95.44444%; } }

@-webkit-keyframes md-progress-linear-indeterminate-scale-2 {
  0% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1);
    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397); }
  19.15% {
    -webkit-transform: scaleX(0.57);
            transform: scaleX(0.57);
    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432); }
  44.15% {
    -webkit-transform: scaleX(0.91);
            transform: scaleX(0.91);
    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);
            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179); }
  100% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1); } }

@keyframes md-progress-linear-indeterminate-scale-2 {
  0% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1);
    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397); }
  19.15% {
    -webkit-transform: scaleX(0.57);
            transform: scaleX(0.57);
    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432); }
  44.15% {
    -webkit-transform: scaleX(0.91);
            transform: scaleX(0.91);
    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);
            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179); }
  100% {
    -webkit-transform: scaleX(0.1);
            transform: scaleX(0.1); } }

@-webkit-keyframes md-progress-linear-indeterminate-2 {
  0% {
    left: -54.88889%;
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968); }
  25% {
    left: -17.25%;
    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372); }
  48.35% {
    left: 29.5%;
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
            animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203); }
  100% {
    left: 117.38889%; } }

@keyframes md-progress-linear-indeterminate-2 {
  0% {
    left: -54.88889%;
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968); }
  25% {
    left: -17.25%;
    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372); }
  48.35% {
    left: 29.5%;
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
            animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203); }
  100% {
    left: 117.38889%; } }

md-radio-button {
  box-sizing: border-box;
  display: block;
  margin-bottom: 16px;
  white-space: nowrap;
  cursor: pointer;
  position: relative; }
  md-radio-button[disabled] {
    cursor: default; }
    md-radio-button[disabled] .md-container {
      cursor: default; }
  md-radio-button .md-container {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    left: 0;
    right: auto; }
    html[dir=rtl] md-radio-button .md-container {
      left: auto;
      unicode-bidi: embed; }
    body[dir=rtl] md-radio-button .md-container {
      left: auto;
      unicode-bidi: embed; }
    md-radio-button .md-container bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-radio-button .md-container bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-radio-button .md-container {
      right: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-radio-button .md-container {
      right: 0;
      unicode-bidi: embed; }
    md-radio-button .md-container bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-radio-button .md-container bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    md-radio-button .md-container .md-ripple-container {
      position: absolute;
      display: block;
      width: auto;
      height: auto;
      left: -15px;
      top: -15px;
      right: -15px;
      bottom: -15px; }
    md-radio-button .md-container:before {
      box-sizing: border-box;
      background-color: transparent;
      border-radius: 50%;
      content: '';
      position: absolute;
      display: block;
      height: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all 0.5s;
      width: auto; }
  md-radio-button.md-align-top-left > div.md-container {
    top: 12px; }
  md-radio-button .md-off {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    transition: border-color ease 0.28s; }
  md-radio-button .md-on {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    -webkit-transform: scale(0);
            transform: scale(0); }
  md-radio-button.md-checked .md-on {
    -webkit-transform: scale(0.5);
            transform: scale(0.5); }
  md-radio-button .md-label {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    margin-left: 30px;
    margin-right: 0;
    vertical-align: middle;
    white-space: normal;
    pointer-events: none;
    width: auto; }
    html[dir=rtl] md-radio-button .md-label {
      margin-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-radio-button .md-label {
      margin-left: 0;
      unicode-bidi: embed; }
    md-radio-button .md-label bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-radio-button .md-label bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-radio-button .md-label {
      margin-right: 30px;
      unicode-bidi: embed; }
    body[dir=rtl] md-radio-button .md-label {
      margin-right: 30px;
      unicode-bidi: embed; }
    md-radio-button .md-label bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-radio-button .md-label bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-radio-button .circle {
    border-radius: 50%; }

md-radio-group md-radio-button:not(:first-child) {
  margin-top: 16px; }

md-radio-group.layout-row md-radio-button {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: inherit;
  margin-right: 16px; }
  html[dir=rtl] md-radio-group.layout-row md-radio-button {
    margin-left: 16px;
    unicode-bidi: embed; }
  body[dir=rtl] md-radio-group.layout-row md-radio-button {
    margin-left: 16px;
    unicode-bidi: embed; }
  md-radio-group.layout-row md-radio-button bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-radio-group.layout-row md-radio-button bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  html[dir=rtl] md-radio-group.layout-row md-radio-button {
    margin-right: inherit;
    unicode-bidi: embed; }
  body[dir=rtl] md-radio-group.layout-row md-radio-button {
    margin-right: inherit;
    unicode-bidi: embed; }
  md-radio-group.layout-row md-radio-button bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-radio-group.layout-row md-radio-button bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  md-radio-group.layout-row md-radio-button:last-of-type {
    margin-left: inherit;
    margin-right: 0; }
    html[dir=rtl] md-radio-group.layout-row md-radio-button:last-of-type {
      margin-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-radio-group.layout-row md-radio-button:last-of-type {
      margin-left: 0;
      unicode-bidi: embed; }
    md-radio-group.layout-row md-radio-button:last-of-type bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-radio-group.layout-row md-radio-button:last-of-type bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-radio-group.layout-row md-radio-button:last-of-type {
      margin-right: inherit;
      unicode-bidi: embed; }
    body[dir=rtl] md-radio-group.layout-row md-radio-button:last-of-type {
      margin-right: inherit;
      unicode-bidi: embed; }
    md-radio-group.layout-row md-radio-button:last-of-type bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-radio-group.layout-row md-radio-button:last-of-type bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }

md-radio-group:focus {
  outline: none; }

md-radio-group.md-focused .md-checked .md-container:before {
  left: -8px;
  top: -8px;
  right: -8px;
  bottom: -8px; }

.md-inline-form md-radio-group {
  margin: 18px 0 19px; }
  .md-inline-form md-radio-group md-radio-button {
    display: inline-block;
    height: 30px;
    padding: 2px;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0; }

@media screen and (-ms-high-contrast: active) {
  md-radio-button.md-default-theme .md-on {
    background-color: #fff; } }

.md-select-menu-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 90;
  opacity: 0;
  display: none; }
  .md-select-menu-container:not(.md-clickable) {
    pointer-events: none; }
  .md-select-menu-container md-progress-circular {
    display: table;
    margin: 24px auto !important; }
  .md-select-menu-container.md-active {
    display: block;
    opacity: 1; }
    .md-select-menu-container.md-active md-select-menu {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 150ms; }
      .md-select-menu-container.md-active md-select-menu > * {
        opacity: 1;
        transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
        transition-duration: 150ms;
        transition-delay: 100ms; }
  .md-select-menu-container.md-leave {
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition-duration: 250ms; }

md-input-container > md-select {
  margin: 0;
  -webkit-order: 2;
      -ms-flex-order: 2;
          order: 2; }

md-select {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 20px 0 26px 0; }
  md-select[disabled] .md-select-value {
    background-position: 0 bottom;
    background-size: 4px 1px;
    background-repeat: repeat-x;
    margin-bottom: -1px; }
  md-select:focus {
    outline: none; }
  md-select[disabled]:hover {
    cursor: default; }
  md-select:not([disabled]):hover {
    cursor: pointer; }
  md-select:not([disabled]).ng-invalid.ng-dirty .md-select-value {
    border-bottom: 2px solid;
    padding-bottom: 0; }
  md-select:not([disabled]):focus .md-select-value {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    padding-bottom: 0; }

.md-select-value {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 2px 2px 1px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: transparent;
  position: relative;
  box-sizing: content-box;
  min-width: 64px;
  min-height: 26px;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }
  .md-select-value .md-text {
    display: inline; }
  .md-select-value *:first-child {
    -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-transform: translate3d(0, 2px, 0);
            transform: translate3d(0, 2px, 0); }
  .md-select-value .md-select-icon {
    display: block;
    -webkit-align-items: flex-end;
        -ms-flex-align: end;
            align-items: flex-end;
    text-align: end;
    width: 24px;
    margin: 0 4px;
    -webkit-transform: translate3d(0, 1px, 0);
            transform: translate3d(0, 1px, 0); }
  .md-select-value .md-select-icon:after {
    display: block;
    content: '\25BC';
    position: relative;
    top: 2px;
    speak: none;
    -webkit-transform: scaleY(0.6) scaleX(1);
            transform: scaleY(0.6) scaleX(1); }
  .md-select-value.md-select-placeholder {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
    pointer-events: none;
    -webkit-font-smoothing: antialiased;
    padding-left: 2px;
    z-index: 1; }

md-select-menu {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  max-height: 256px;
  min-height: 48px;
  overflow-y: hidden;
  -webkit-transform-origin: left top;
          transform-origin: left top;
  -webkit-transform: scale(1);
          transform: scale(1); }
  md-select-menu.md-reverse {
    -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse; }
  md-select-menu:not(.md-overflow) md-content {
    padding-top: 8px;
    padding-bottom: 8px; }
  html[dir=rtl] md-select-menu {
    -webkit-transform-origin: right top;
            transform-origin: right top;
    unicode-bidi: embed; }
  body[dir=rtl] md-select-menu {
    -webkit-transform-origin: right top;
            transform-origin: right top;
    unicode-bidi: embed; }
  md-select-menu bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-select-menu bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  md-select-menu md-content {
    min-width: 136px;
    min-height: 48px;
    max-height: 256px;
    overflow-y: auto; }
  md-select-menu > * {
    opacity: 0; }

md-option {
  cursor: pointer;
  position: relative;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  width: auto;
  padding: 0 16px 0 16px;
  height: 48px; }
  md-option[disabled] {
    cursor: default; }
  md-option:focus {
    outline: none; }
  md-option .md-text {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px; }

md-optgroup {
  display: block; }
  md-optgroup label {
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    padding: 16px;
    font-weight: 500; }
  md-optgroup md-option {
    padding-left: 32px;
    padding-right: 32px; }

@media screen and (-ms-high-contrast: active) {
  .md-select-backdrop {
    background-color: transparent; }
  md-select-menu {
    border: 1px solid #fff; } }

md-sidenav {
  box-sizing: border-box;
  position: absolute;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  z-index: 60;
  width: 320px;
  max-width: 320px;
  bottom: 0;
  overflow: auto; }
  md-sidenav ul {
    list-style: none; }
  md-sidenav.md-closed {
    display: none; }
  md-sidenav.md-closed-add, md-sidenav.md-closed-remove {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    transition: 0.2s ease-in all; }
  md-sidenav.md-closed-add.md-closed-add-active, md-sidenav.md-closed-remove.md-closed-remove-active {
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
  md-sidenav.md-locked-open-add, md-sidenav.md-locked-open-remove {
    position: static;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); }
  md-sidenav.md-locked-open, md-sidenav.md-locked-open.md-closed, md-sidenav.md-locked-open.md-closed.md-sidenav-left, md-sidenav.md-locked-open.md-closed, md-sidenav.md-locked-open.md-closed.md-sidenav-right, md-sidenav.md-locked-open-remove.md-closed {
    position: static;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); }
  md-sidenav.md-locked-open-remove-active {
    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    width: 0;
    min-width: 0; }
  md-sidenav.md-closed.md-locked-open-add {
    width: 0;
    min-width: 0;
    -webkit-transform: translate3d(0%, 0, 0);
            transform: translate3d(0%, 0, 0); }
  md-sidenav.md-closed.md-locked-open-add-active {
    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    width: 320px;
    min-width: 320px;
    -webkit-transform: translate3d(0%, 0, 0);
            transform: translate3d(0%, 0, 0); }

.md-sidenav-backdrop.md-locked-open {
  display: none; }

.md-sidenav-left, md-sidenav {
  left: 0;
  top: 0;
  -webkit-transform: translate3d(0%, 0, 0);
          transform: translate3d(0%, 0, 0); }
  .md-sidenav-left.md-closed, md-sidenav.md-closed {
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0); }

.md-sidenav-right {
  left: 100%;
  top: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0); }
  .md-sidenav-right.md-closed {
    -webkit-transform: translate3d(0%, 0, 0);
            transform: translate3d(0%, 0, 0); }

@media screen and (min-width: 600px) {
  md-sidenav {
    max-width: 400px; } }

@media screen and (max-width: 456px) {
  md-sidenav {
    width: calc(100% - 56px);
    min-width: calc(100% - 56px);
    max-width: calc(100% - 56px); } }

@media screen and (-ms-high-contrast: active) {
  .md-sidenav-left, md-sidenav {
    border-right: 1px solid #fff; }
  .md-sidenav-right {
    border-left: 1px solid #fff; } }

@-webkit-keyframes sliderFocusThumb {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes sliderFocusThumb {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }
  100% {
    opacity: 0; } }

md-slider {
  height: 48px;
  position: relative;
  display: block;
  margin-left: 4px;
  margin-right: 4px;
  padding: 0;
  /**
   * Track
   */
  /**
   * Slider thumb
   */
  /* The sign that's focused in discrete mode */
  /**
   * The border/background that comes in when focused in non-discrete mode
   */
  /* Don't animate left/right while panning */ }
  md-slider *, md-slider *:after {
    box-sizing: border-box; }
  md-slider .md-slider-wrapper {
    position: relative; }
  md-slider .md-track-container {
    width: 100%;
    position: absolute;
    top: 23px;
    height: 2px; }
  md-slider .md-track {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%; }
  md-slider .md-track-fill {
    transition: width 0.05s linear; }
  md-slider .md-track-ticks {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%; }
  md-slider .md-track-ticks canvas {
    width: 100%; }
  md-slider .md-thumb-container {
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
    transition: left 0.1s linear; }
  md-slider .md-thumb {
    z-index: 1;
    position: absolute;
    left: -19px;
    top: 5px;
    width: 38px;
    height: 38px;
    border-radius: 38px;
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    transition: all 0.1s linear; }
    md-slider .md-thumb:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 3px;
      width: 32px;
      height: 32px;
      border-radius: 32px;
      border-width: 3px;
      border-style: solid; }
  md-slider .md-sign {
    /* Center the children (slider-thumb-text) */
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    position: absolute;
    left: -14px;
    top: -20px;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    -webkit-transform: scale(0.4) translate3d(0, 70px, 0);
            transform: scale(0.4) translate3d(0, 70px, 0);
    transition: all 0.2s ease-in-out;
    /* The arrow pointing down under the sign */ }
    md-slider .md-sign:after {
      position: absolute;
      content: '';
      left: 0px;
      border-radius: 16px;
      top: 19px;
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-top-width: 16px;
      border-top-style: solid;
      opacity: 0;
      -webkit-transform: translate3d(0, -8px, 0);
              transform: translate3d(0, -8px, 0);
      transition: all 0.2s ease-in-out; }
    md-slider .md-sign .md-thumb-text {
      z-index: 1;
      font-size: 12px;
      font-weight: bold; }
  md-slider .md-focus-thumb {
    position: absolute;
    left: -24px;
    top: 0px;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    display: none;
    opacity: 0;
    background-color: #C0C0C0;
    -webkit-animation: sliderFocusThumb 0.4s linear;
            animation: sliderFocusThumb 0.4s linear; }
  md-slider .md-focus-ring {
    position: absolute;
    left: -24px;
    top: 0px;
    width: 48px;
    height: 48px;
    border-radius: 48px;
    -webkit-transform: scale(0);
            transform: scale(0);
    transition: all 0.2s linear;
    opacity: 0.26; }
  md-slider .md-disabled-thumb {
    position: absolute;
    left: -22px;
    top: 2px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    -webkit-transform: scale(0.35);
            transform: scale(0.35);
    border-width: 6px;
    border-style: solid;
    display: none; }
  md-slider.md-min .md-thumb:after {
    background-color: white; }
  md-slider.md-min .md-sign {
    opacity: 0; }
  md-slider:focus {
    outline: none; }
  md-slider.md-dragging .md-thumb-container,
  md-slider.md-dragging .md-track-fill {
    transition: none; }
  md-slider:not([md-discrete]) {
    /* Hide the sign and ticks in non-discrete mode */ }
    md-slider:not([md-discrete]) .md-track-ticks,
    md-slider:not([md-discrete]) .md-sign {
      display: none; }
    md-slider:not([md-discrete]):not([disabled]):hover .md-thumb {
      -webkit-transform: scale(0.6);
              transform: scale(0.6); }
    md-slider:not([md-discrete]):not([disabled]):focus .md-focus-thumb, md-slider:not([md-discrete]):not([disabled]).md-active .md-focus-thumb {
      display: block; }
    md-slider:not([md-discrete]):not([disabled]):focus .md-focus-ring, md-slider:not([md-discrete]):not([disabled]).md-active .md-focus-ring {
      -webkit-transform: scale(1);
              transform: scale(1); }
    md-slider:not([md-discrete]):not([disabled]):focus .md-thumb, md-slider:not([md-discrete]):not([disabled]).md-active .md-thumb {
      -webkit-transform: scale(0.85);
              transform: scale(0.85); }
  md-slider[md-discrete] {
    /* Hide the focus thumb in discrete mode */ }
    md-slider[md-discrete] .md-focus-thumb,
    md-slider[md-discrete] .md-focus-ring {
      display: none; }
    md-slider[md-discrete]:not([disabled]):focus .md-sign,
    md-slider[md-discrete]:not([disabled]):focus .md-sign:after, md-slider[md-discrete]:not([disabled]).md-active .md-sign,
    md-slider[md-discrete]:not([disabled]).md-active .md-sign:after {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0) scale(1);
              transform: translate3d(0, 0, 0) scale(1); }
  md-slider[disabled] .md-track-fill {
    display: none; }
  md-slider[disabled] .md-sign {
    display: none; }
  md-slider[disabled] .md-thumb {
    -webkit-transform: scale(0.35);
            transform: scale(0.35); }
  md-slider[disabled] .md-disabled-thumb {
    display: block; }

@media screen and (-ms-high-contrast: active) {
  md-slider.md-default-theme .md-track {
    border-bottom: 1px solid #fff; } }

.md-sticky-clone {
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  position: absolute !important;
  -webkit-transform: translate3d(-9999px, -9999px, 0);
          transform: translate3d(-9999px, -9999px, 0); }
  .md-sticky-clone[sticky-state="active"] {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); }
    .md-sticky-clone[sticky-state="active"]:not(.md-sticky-no-effect) .md-subheader-inner {
      -webkit-animation: subheaderStickyHoverIn 0.3s ease-out both;
              animation: subheaderStickyHoverIn 0.3s ease-out both; }

@-webkit-keyframes subheaderStickyHoverIn {
  0% {
    box-shadow: 0 0 0 0 transparent; }
  100% {
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16); } }

@keyframes subheaderStickyHoverIn {
  0% {
    box-shadow: 0 0 0 0 transparent; }
  100% {
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16); } }

@-webkit-keyframes subheaderStickyHoverOut {
  0% {
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16); }
  100% {
    box-shadow: 0 0 0 0 transparent; } }

@keyframes subheaderStickyHoverOut {
  0% {
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16); }
  100% {
    box-shadow: 0 0 0 0 transparent; } }

.md-subheader-wrapper:not(.md-sticky-no-effect) {
  transition: 0.2s ease-out margin; }
  .md-subheader-wrapper:not(.md-sticky-no-effect) .md-subheader {
    margin: 0; }
  .md-subheader-wrapper:not(.md-sticky-no-effect).md-sticky-clone {
    z-index: 2; }
  .md-subheader-wrapper:not(.md-sticky-no-effect)[sticky-state="active"] {
    margin-top: -2px; }
  .md-subheader-wrapper:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state="active"] .md-subheader-inner:after {
    -webkit-animation: subheaderStickyHoverOut 0.3s ease-out both;
            animation: subheaderStickyHoverOut 0.3s ease-out both; }

.md-subheader {
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1em;
  margin: 0 0 0 0;
  position: relative; }
  .md-subheader .md-subheader-inner {
    display: block;
    padding: 16px; }
  .md-subheader .md-subheader-content {
    display: block;
    z-index: 1;
    position: relative; }

.md-inline-form md-switch {
  margin-top: 18px;
  margin-bottom: 19px; }

md-switch {
  margin: 16px 0;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  height: 30px;
  line-height: 28px;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: inherit;
  margin-right: 16px; }
  html[dir=rtl] md-switch {
    margin-left: 16px;
    unicode-bidi: embed; }
  body[dir=rtl] md-switch {
    margin-left: 16px;
    unicode-bidi: embed; }
  md-switch bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-switch bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  html[dir=rtl] md-switch {
    margin-right: inherit;
    unicode-bidi: embed; }
  body[dir=rtl] md-switch {
    margin-right: inherit;
    unicode-bidi: embed; }
  md-switch bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override; }
  md-switch bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override; }
  md-switch:last-of-type {
    margin-left: inherit;
    margin-right: 0; }
    html[dir=rtl] md-switch:last-of-type {
      margin-left: 0;
      unicode-bidi: embed; }
    body[dir=rtl] md-switch:last-of-type {
      margin-left: 0;
      unicode-bidi: embed; }
    md-switch:last-of-type bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-switch:last-of-type bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
    html[dir=rtl] md-switch:last-of-type {
      margin-right: inherit;
      unicode-bidi: embed; }
    body[dir=rtl] md-switch:last-of-type {
      margin-right: inherit;
      unicode-bidi: embed; }
    md-switch:last-of-type bdo[dir=rtl] {
      direction: rtl;
      unicode-bidi: bidi-override; }
    md-switch:last-of-type bdo[dir=ltr] {
      direction: ltr;
      unicode-bidi: bidi-override; }
  md-switch[disabled] {
    cursor: default; }
    md-switch[disabled] .md-container {
      cursor: default; }
  md-switch .md-container {
    cursor: -webkit-grab;
    cursor: grab;
    width: 36px;
    height: 24px;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    margin-right: 8px;
    float: left; }
  md-switch:not([disabled]) .md-dragging,
  md-switch:not([disabled]).md-dragging .md-container {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
  md-switch.md-focused:not([disabled]) .md-thumb:before {
    left: -8px;
    top: -8px;
    right: -8px;
    bottom: -8px; }
  md-switch.md-focused:not([disabled]):not(.md-checked) .md-thumb:before {
    background-color: rgba(0, 0, 0, 0.12); }
  md-switch .md-label {
    border-color: transparent;
    border-width: 0;
    float: left; }
  md-switch .md-bar {
    left: 1px;
    width: 34px;
    top: 5px;
    height: 14px;
    border-radius: 8px;
    position: absolute; }
  md-switch .md-thumb-container {
    top: 2px;
    left: 0;
    width: 16px;
    position: absolute;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    z-index: 1; }
  md-switch.md-checked .md-thumb-container {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0); }
  md-switch .md-thumb {
    position: absolute;
    margin: 0;
    left: 0;
    top: 0;
    outline: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }
    md-switch .md-thumb:before {
      background-color: transparent;
      border-radius: 50%;
      content: '';
      position: absolute;
      display: block;
      height: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all 0.5s;
      width: auto; }
    md-switch .md-thumb .md-ripple-container {
      position: absolute;
      display: block;
      width: auto;
      height: auto;
      left: -20px;
      top: -20px;
      right: -20px;
      bottom: -20px; }
  md-switch:not(.md-dragging) .md-bar,
  md-switch:not(.md-dragging) .md-thumb-container,
  md-switch:not(.md-dragging) .md-thumb {
    transition: all 0.08s linear;
    transition-property: -webkit-transform, background-color;
    transition-property: transform, background-color; }
  md-switch:not(.md-dragging) .md-bar,
  md-switch:not(.md-dragging) .md-thumb {
    transition-delay: 0.05s; }

@media screen and (-ms-high-contrast: active) {
  md-switch.md-default-theme .md-bar {
    background-color: #666; }
  md-switch.md-default-theme.md-checked .md-bar {
    background-color: #9E9E9E; }
  md-switch.md-default-theme .md-thumb {
    background-color: #fff; } }

@-webkit-keyframes md-tab-content-hide {
  0% {
    opacity: 1; }
  50% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes md-tab-content-hide {
  0% {
    opacity: 1; }
  50% {
    opacity: 1; }
  100% {
    opacity: 0; } }

md-tab-data {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0; }

md-tabs {
  display: block;
  margin: 0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0; }
  md-tabs:not(.md-no-tab-content):not(.md-dynamic-height) {
    min-height: 248px; }
  md-tabs[md-align-tabs="bottom"] {
    padding-bottom: 48px; }
    md-tabs[md-align-tabs="bottom"] md-tabs-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 48px;
      z-index: 2; }
    md-tabs[md-align-tabs="bottom"] md-tabs-content-wrapper {
      top: 0;
      bottom: 48px; }
  md-tabs.md-dynamic-height md-tabs-content-wrapper {
    min-height: 0;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    overflow: visible; }
  md-tabs.md-dynamic-height md-tab-content.md-active {
    position: relative; }
  md-tabs[md-border-bottom] md-tabs-wrapper {
    border-width: 0 0 1px;
    border-style: solid; }
  md-tabs[md-border-bottom]:not(.md-dynamic-height) md-tabs-content-wrapper {
    top: 49px; }

md-tabs-wrapper {
  display: block;
  position: relative; }
  md-tabs-wrapper md-prev-button, md-tabs-wrapper md-next-button {
    height: 100%;
    width: 32px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    line-height: 1em;
    z-index: 2;
    cursor: pointer;
    font-size: 16px;
    background: transparent no-repeat center center;
    transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1); }
    md-tabs-wrapper md-prev-button:focus, md-tabs-wrapper md-next-button:focus {
      outline: none; }
    md-tabs-wrapper md-prev-button.md-disabled, md-tabs-wrapper md-next-button.md-disabled {
      opacity: 0.25;
      cursor: default; }
    md-tabs-wrapper md-prev-button.ng-leave, md-tabs-wrapper md-next-button.ng-leave {
      transition: none; }
    md-tabs-wrapper md-prev-button md-icon, md-tabs-wrapper md-next-button md-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
              transform: translate3d(-50%, -50%, 0); }
  md-tabs-wrapper md-prev-button {
    left: 0;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg=="); }
  md-tabs-wrapper md-next-button {
    right: 0;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K"); }
    md-tabs-wrapper md-next-button md-icon {
      -webkit-transform: translate3d(-50%, -50%, 0) rotate(180deg);
              transform: translate3d(-50%, -50%, 0) rotate(180deg); }
  md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper {
    width: 100%;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row; }
    md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper md-tab-item {
      -webkit-flex-grow: 1;
          -ms-flex-positive: 1;
              flex-grow: 1; }

md-tabs-canvas {
  position: relative;
  overflow: hidden;
  display: block;
  height: 48px; }
  md-tabs-canvas:after {
    content: '';
    display: table;
    clear: both; }
  md-tabs-canvas .md-dummy-wrapper {
    position: absolute;
    top: 0;
    left: 0; }
  md-tabs-canvas.md-paginated {
    margin: 0 32px; }
  md-tabs-canvas.md-center-tabs {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    text-align: center; }
    md-tabs-canvas.md-center-tabs .md-tab {
      float: none;
      display: inline-block; }

md-pagination-wrapper {
  height: 48px;
  display: block;
  transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  position: absolute;
  width: 999999px;
  left: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0); }
  md-pagination-wrapper:after {
    content: '';
    display: table;
    clear: both; }
  md-pagination-wrapper.md-center-tabs {
    position: relative;
    width: initial;
    margin: 0 auto; }

md-tabs-content-wrapper {
  display: block;
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden; }

md-tab-content {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  overflow: auto; }
  md-tab-content.md-no-scroll {
    bottom: auto;
    overflow: hidden; }
  md-tab-content.ng-leave, md-tab-content.md-no-transition {
    transition: none; }
  md-tab-content.md-left:not(.md-active) {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-animation: 1s md-tab-content-hide;
            animation: 1s md-tab-content-hide;
    opacity: 0; }
    md-tab-content.md-left:not(.md-active) * {
      transition: visibility 0s linear;
      transition-delay: 0.5s;
      visibility: hidden; }
  md-tab-content.md-right:not(.md-active) {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-animation: 1s md-tab-content-hide;
            animation: 1s md-tab-content-hide;
    opacity: 0; }
    md-tab-content.md-right:not(.md-active) * {
      transition: visibility 0s linear;
      transition-delay: 0.5s;
      visibility: hidden; }
  md-tab-content > div.ng-leave {
    -webkit-animation: 1s md-tab-content-hide;
            animation: 1s md-tab-content-hide; }

md-ink-bar {
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
  height: 2px; }
  md-ink-bar.md-left {
    transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1); }
  md-ink-bar.md-right {
    transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1); }

md-tab {
  position: absolute;
  z-index: -1;
  left: -9999px; }

.md-tab {
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  padding: 12px 24px;
  transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  text-transform: uppercase;
  float: left;
  font-weight: 500;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis; }
  .md-tab.md-focused {
    box-shadow: none;
    outline: none; }
  .md-tab.md-active {
    cursor: default; }
  .md-tab.md-disabled {
    pointer-events: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-user-drag: none;
    opacity: 0.5;
    cursor: default; }
  .md-tab.ng-leave {
    transition: none; }

md-toolbar + md-tabs {
  border-top-left-radius: 0;
  border-top-right-radius: 0; }

md-toast {
  position: absolute;
  z-index: 105;
  box-sizing: border-box;
  cursor: default;
  overflow: hidden;
  padding: 8px;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* Transition differently when swiping */
  /*
   * When the toast doesn't take up the whole screen,
   * make it rotate when the user swipes it away
   */ }
  md-toast .md-toast-content {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    height: 0;
    max-height: 168px;
    max-width: 100%;
    min-height: 48px;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 2px;
    font-size: 14px;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0) rotateZ(0deg);
            transform: translate3d(0, 0, 0) rotateZ(0deg);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
  md-toast.md-capsule {
    border-radius: 24px; }
    md-toast.md-capsule .md-toast-content {
      border-radius: 24px; }
  md-toast.ng-leave-active .md-toast-content {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
  md-toast.md-swipeleft .md-toast-content, md-toast.md-swiperight .md-toast-content, md-toast.md-swipeup .md-toast-content, md-toast.md-swipedown .md-toast-content {
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
  md-toast.ng-enter {
    opacity: 0; }
    md-toast.ng-enter .md-toast-content {
      -webkit-transform: translate3d(0, 100%, 0);
              transform: translate3d(0, 100%, 0); }
    md-toast.ng-enter.md-top .md-toast-content {
      -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0); }
    md-toast.ng-enter.ng-enter-active {
      opacity: 1; }
      md-toast.ng-enter.ng-enter-active .md-toast-content {
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0); }
  md-toast.ng-leave.ng-leave-active .md-toast-content {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0); }
  md-toast.ng-leave.ng-leave-active.md-swipeup .md-toast-content {
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0); }
  md-toast.ng-leave.ng-leave-active.md-swipedown .md-toast-content {
    -webkit-transform: translate3d(0, 50%, 0);
            transform: translate3d(0, 50%, 0); }
  md-toast.ng-leave.ng-leave-active.md-top .md-toast-content {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0); }
  md-toast .md-action {
    line-height: 19px;
    margin-left: 24px;
    margin-right: 0;
    cursor: pointer;
    text-transform: uppercase;
    float: right; }
    md-toast .md-action.md-button {
      min-width: 0; }

@media (max-width: 959px) {
  md-toast {
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    border-radius: 0;
    bottom: 0; }
    md-toast.ng-leave.ng-leave-active.md-swipeup .md-toast-content {
      -webkit-transform: translate3d(0, -50%, 0);
              transform: translate3d(0, -50%, 0); }
    md-toast.ng-leave.ng-leave-active.md-swipedown .md-toast-content {
      -webkit-transform: translate3d(0, 50%, 0);
              transform: translate3d(0, 50%, 0); } }

@media (min-width: 960px) {
  md-toast {
    min-width: 304px;
    /*
   * When the toast doesn't take up the whole screen,
   * make it rotate when the user swipes it away
   */ }
    md-toast.md-bottom {
      bottom: 0; }
    md-toast.md-left {
      left: 0; }
    md-toast.md-right {
      right: 0; }
    md-toast.md-top {
      top: 0; }
    md-toast.ng-leave.ng-leave-active.md-swipeleft .md-toast-content {
      -webkit-transform: translate3d(-50%, 0, 0);
              transform: translate3d(-50%, 0, 0); }
    md-toast.ng-leave.ng-leave-active.md-swiperight .md-toast-content {
      -webkit-transform: translate3d(50%, 0, 0);
              transform: translate3d(50%, 0, 0); } }

@media (min-width: 1920px) {
  md-toast .md-toast-content {
    max-width: 568px; } }

@media screen and (-ms-high-contrast: active) {
  md-toast {
    border: 1px solid #fff; } }

.md-toast-animating {
  overflow: hidden !important; }

md-toolbar {
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  position: relative;
  z-index: 2;
  font-size: 20px;
  min-height: 64px;
  width: 100%; }
  md-toolbar.md-whiteframe-z1-add, md-toolbar.md-whiteframe-z1-remove {
    transition: box-shadow 0.5s linear; }
  md-toolbar md-toolbar-filler {
    width: 72px; }
  md-toolbar *,
  md-toolbar *:before,
  md-toolbar *:after {
    box-sizing: border-box; }
  md-toolbar.md-tall {
    height: 128px;
    min-height: 128px;
    max-height: 128px; }
  md-toolbar.md-medium-tall {
    height: 88px;
    min-height: 88px;
    max-height: 88px; }
    md-toolbar.md-medium-tall .md-toolbar-tools {
      height: 48px;
      min-height: 48px;
      max-height: 48px; }
  md-toolbar > .md-indent {
    margin-left: 64px; }
  md-toolbar ~ md-content > md-list {
    padding: 0; }
    md-toolbar ~ md-content > md-list md-list-item:last-child md-divider {
      display: none; }

.md-toolbar-tools {
  font-size: 20px;
  letter-spacing: 0.005em;
  box-sizing: border-box;
  font-weight: 400;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  width: 100%;
  height: 64px;
  max-height: 64px;
  padding: 0 16px;
  margin: 0; }
  .md-toolbar-tools h1, .md-toolbar-tools h2, .md-toolbar-tools h3 {
    font-size: inherit;
    font-weight: inherit;
    margin: inherit; }
  .md-toolbar-tools a {
    color: inherit;
    text-decoration: none; }
  .md-toolbar-tools .fill-height {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center; }
  .md-toolbar-tools .md-button {
    margin-top: 0;
    margin-bottom: 0; }
  .md-toolbar-tools > .md-button:first-child {
    margin-left: -8px; }
  .md-toolbar-tools > .md-button:last-child {
    margin-right: -8px; }
  .md-toolbar-tools > md-menu:last-child {
    margin-right: -8px; }
    .md-toolbar-tools > md-menu:last-child > .md-button {
      margin-right: 0; }
  @media screen and (-ms-high-contrast: active) {
    .md-toolbar-tools {
      border-bottom: 1px solid #fff; } }

@media only screen and (min-width: 0) and (max-width: 959px) and (orientation: portrait) {
  md-toolbar {
    min-height: 56px; }
  .md-toolbar-tools {
    height: 56px;
    max-height: 56px; } }

@media only screen and (min-width: 0) and (max-width: 959px) and (orientation: landscape) {
  md-toolbar {
    min-height: 48px; }
  .md-toolbar-tools {
    height: 48px;
    max-height: 48px; } }

md-tooltip {
  position: absolute;
  z-index: 100;
  overflow: hidden;
  pointer-events: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px; }
  @media screen and (min-width: 960px) {
    md-tooltip {
      font-size: 10px; } }
  md-tooltip .md-content {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0;
    height: 32px;
    line-height: 32px;
    padding-left: 16px;
    padding-right: 16px; }
    @media screen and (min-width: 960px) {
      md-tooltip .md-content {
        height: 22px;
        line-height: 22px;
        padding-left: 8px;
        padding-right: 8px; } }
    md-tooltip .md-content.md-show-add {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: .2s;
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 0; }
    md-tooltip .md-content.md-show, md-tooltip .md-content.md-show-add-active {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
      -webkit-transform-origin: center top;
              transform-origin: center top; }
    md-tooltip .md-content.md-show-remove {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: .2s; }
      md-tooltip .md-content.md-show-remove.md-show-remove-active {
        -webkit-transform: scale(0);
                transform: scale(0);
        opacity: 0; }
  md-tooltip.md-hide {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }
  md-tooltip.md-show {
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    pointer-events: auto;
    will-change: opacity, height, width; }

.md-virtual-repeat-container {
  box-sizing: border-box;
  display: block;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative; }
  .md-virtual-repeat-container .md-virtual-repeat-scroller {
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0; }
  .md-virtual-repeat-container .md-virtual-repeat-sizer {
    box-sizing: border-box;
    height: 1px;
    display: block;
    margin: 0;
    padding: 0;
    width: 1px; }
  .md-virtual-repeat-container .md-virtual-repeat-offsetter {
    box-sizing: border-box;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0; }

.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller {
  overflow-x: auto;
  overflow-y: hidden; }

.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {
  bottom: 16px;
  right: auto;
  white-space: nowrap; }

.md-whiteframe-1dp, .md-whiteframe-z1 {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }

.md-whiteframe-2dp {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12); }

.md-whiteframe-3dp {
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12); }

.md-whiteframe-4dp, .md-whiteframe-z2 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }

.md-whiteframe-5dp {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }

.md-whiteframe-6dp {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

.md-whiteframe-7dp, .md-whiteframe-z3 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }

.md-whiteframe-8dp {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }

.md-whiteframe-9dp {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }

.md-whiteframe-10dp, .md-whiteframe-z4 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }

.md-whiteframe-11dp {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }

.md-whiteframe-12dp {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }

.md-whiteframe-13dp, .md-whiteframe-z5 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }

.md-whiteframe-14dp {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }

.md-whiteframe-15dp {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }

.md-whiteframe-16dp {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }

.md-whiteframe-17dp {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }

.md-whiteframe-18dp {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }

.md-whiteframe-19dp {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }

.md-whiteframe-20dp {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }

.md-whiteframe-21dp {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }

.md-whiteframe-22dp {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }

.md-whiteframe-23dp {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }

.md-whiteframe-24dp {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }

@media screen and (-ms-high-contrast: active) {
  md-whiteframe {
    border: 1px solid #fff; } }
`;