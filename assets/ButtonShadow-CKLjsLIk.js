import{j as t,d as r}from"./index-CXy9YQbU.js";import{c as o}from"./createLucideIcon-Bbiq32IQ.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],n=o("share",a),d=({title:e})=>t.jsx(i,{children:t.jsxs("button",{className:"flex gap-5 justify-center items-center",children:[e,t.jsx(n,{})]})}),i=r.div`
  button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    border-radius: 2rem;
    border: none;
    position: relative;
    background: #100720;
    transition: 0.1s;
  }

  button::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%, oklch(63.7% 0.237 25.331) 50.8%, oklch(44.4% 0.177 26.899) 100.2% );
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient( circle farthest-corner at 10% 20%,  oklch(63.7% 0.237 25.331) 17.8%, oklch(44.4% 0.177 26.899)100.2% );
    transition: 0.5s;
  }`;export{d as B};
