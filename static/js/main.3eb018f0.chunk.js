(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{157:function(e,t,n){},159:function(e,t){},164:function(e,t){},224:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(46),s=n.n(r),o=n(19),i=n(37),l=n(7),j=n(235),u=n(239),d=(n(157),n(240)),b=n(68),x=1e14;function p(e){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},x,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h="mycontract.testjianaccount.testnet";var m=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:h,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:h,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},f=n(58),g=m("testnet");function w(){return(w=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.connect)(Object.assign({deps:{keyStore:new f.keyStores.BrowserLocalStorageKeyStore}},g));case 2:t=e.sent,window.walletConnection=new f.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new f.Contract(window.walletConnection.account(),g.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){window.walletConnection.requestSignIn(g.contractName)}function k(){window.walletConnection.signOut(),window.location.reload()}var C=n(237),I=n(232),P=n(242),S=n(1),F=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(C.a,{children:[Object(S.jsx)(C.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(S.jsxs)(S.Fragment,{children:[n," ",Object(S.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(S.jsx)(I.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(S.jsxs)(C.a.Menu,{className:"shadow-lg border-0",children:[Object(S.jsx)(C.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(S.jsxs)(P.a,{direction:"horizontal",gap:2,children:[Object(S.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(S.jsx)("span",{className:"font-monospace",children:t})]})}),Object(S.jsx)(C.a.Divider,{}),Object(S.jsxs)(C.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(S.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},U=n(60),L=(n(219),function(){return Object(S.jsx)(U.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),B=function(e){var t=e.text;return Object(S.jsxs)("div",{children:[Object(S.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(S.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T=function(e){var t=e.text;return Object(S.jsxs)("div",{children:[Object(S.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(S.jsx)("span",{className:"text-secondary mx-1",children:t})]})},A={text:""};B.defaultProps=A,T.defaultProps=A;var E=n(2),D=n(147),H=n(236),M=n(238),R=n(149),z=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],u=i[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),x=b[0],p=b[1],O=Object(c.useState)(""),h=Object(l.a)(O,2),m=h[0],f=h[1],g=Object(c.useState)(0),w=Object(l.a)(g,2),v=w[0],y=w[1],N=Object(c.useState)(!1),k=Object(l.a)(N,2),C=k[0],I=k[1],P=function(){return I(!1)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(D.a,{onClick:function(){return I(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(S.jsx)("i",{class:"bi bi-plus"})}),Object(S.jsxs)(H.a,{show:C,onHide:P,centered:!0,children:[Object(S.jsx)(H.a.Header,{closeButton:!0,children:Object(S.jsx)(H.a.Title,{children:"New Product"})}),Object(S.jsx)(M.a,{children:Object(S.jsxs)(H.a.Body,{children:[Object(S.jsx)(R.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(S.jsx)(M.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(S.jsx)(R.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(S.jsx)(M.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){u(e.target.value)}})}),Object(S.jsx)(R.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(S.jsx)(M.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){p(e.target.value)}})}),Object(S.jsx)(R.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(S.jsx)(M.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(S.jsx)(R.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(S.jsx)(M.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(S.jsxs)(H.a.Footer,{children:[Object(S.jsx)(D.a,{variant:"outline-secondary",onClick:P,children:"Close"}),Object(S.jsx)(D.a,{variant:"dark",disabled:!(r&&j&&x&&m&&v),onClick:function(){t({name:r,image:j,description:x,location:m,price:v}),P()},children:"Save product"})]})]})]})},W=n(148),J=n(241),q=n(233),K=function(e){var t=e.product,n=e.buy,c=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,j=t.owner;return Object(S.jsx)(W.a,{children:Object(S.jsxs)(J.a,{className:" h-100",children:[Object(S.jsx)(J.a.Header,{children:Object(S.jsxs)(P.a,{direction:"horizontal",gap:2,children:[Object(S.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(S.jsxs)(q.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(S.jsx)("div",{className:" ratio ratio-4x3",children:Object(S.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(S.jsxs)(J.a.Body,{className:"d-flex  flex-column text-center",children:[Object(S.jsx)(J.a.Title,{children:r}),Object(S.jsx)(J.a.Text,{className:"flex-grow-1 ",children:s}),Object(S.jsx)(J.a.Text,{className:"text-secondary",children:Object(S.jsx)("span",{children:i})}),Object(S.jsxs)(D.a,{variant:"outline-dark",onClick:function(){n(c,a)},className:"w-100 py-3",children:["Buy for ",f.utils.format.formatNearAmount(a)," NEAR"]})]})]})},c)},_=function(){return Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsx)(I.a,{animation:"border",role:"status",className:"opacity-25",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},G=n(234),Q=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],u=s[1],x=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),O=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u(!0),(n=t,n.id=Object(d.a)(),n.price=Object(b.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){x()})),Object(U.b)(Object(S.jsx)(B,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(U.b)(Object(S.jsx)(T,{text:"Failed to create a product."}))}finally{u(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p({id:t,price:n}).then((function(e){return x()}));case 3:Object(U.b)(Object(S.jsx)(B,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(U.b)(Object(S.jsx)(T,{text:"Failed to purchase product."}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[]),Object(S.jsx)(S.Fragment,{children:j?Object(S.jsx)(_,{}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(S.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(S.jsx)(z,{save:O})]}),Object(S.jsx)(G.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(S.jsx)(K,{product:Object(E.a)({},e),buy:h})}))})]})})},V=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(S.jsx)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:Object(S.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(S.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(S.jsx)("img",{src:c,alt:""})}),Object(S.jsx)("h1",{children:t}),Object(S.jsx)("p",{children:"Please connect your wallet to continue"}),Object(S.jsx)(D.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]})}):null};V.defaultProps={name:""};var X=V,Y=n.p+"static/media/sandwich.2d312449.jpeg",Z=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,v();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(L,{}),e.accountId?Object(S.jsxs)(j.a,{fluid:"md",children:[Object(S.jsx)(u.a,{className:"justify-content-end pt-3 pb-5",children:Object(S.jsx)(u.a.Item,{children:Object(S.jsx)(F,{address:e.accountId,amount:a,symbol:"NEAR",destroy:k})})}),Object(S.jsx)("main",{children:Object(S.jsx)(Q,{})})]}):Object(S.jsx)(X,{name:"Street Food",login:N,coverImg:Y})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(225),n(222),n(223);window.nearInitPromise=function(){return w.apply(this,arguments)}().then((function(){s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(Z,{})}),document.getElementById("root"))})).catch(console.error),$()}},[[224,1,2]]]);
//# sourceMappingURL=main.3eb018f0.chunk.js.map