(this["webpackJsonpclient-view-genially"]=this["webpackJsonpclient-view-genially"]||[]).push([[1],{876:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t(1),c=t.n(i),s=t(6),o=t(50),p=function(){return(p=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)},u=s.c.div.withConfig({displayName:"TableChartWrapper",componentId:"sc-1hovv51"})((function(){return{width:"100%",height:"100%",wordBreak:"break-all"}})),y=s.c.table.withConfig({displayName:"TableStyled",componentId:"sc-5du3pe"})((function(e){return{borderCollapse:"collapse",height:"100%",width:"100%",tableLayout:e.fixed?"fixed":"auto"}})),d=s.c.td.withConfig({displayName:"TableCell",componentId:"sc-3yepbp"})((function(){return p({},o.a.increaseSpecificity({padding:"0.15em"}))})),f=function(e){var a=e.data,t=e.id,n=e.cellStyles,l="fixed"===e.tableStyles.css.tableLayout;return r.a.createElement(u,{className:"genially-chart-wrapper"},r.a.createElement(y,{fixed:l},r.a.createElement("tbody",null,a.map((function(e,a){var l="t_"+t+"_r_"+a;return r.a.createElement("tr",{key:l},e.map((function(e,l){var i="t_"+t+"_c_"+a+"_"+l;return r.a.createElement(d,{style:n[a][l].css,key:i},r.a.createElement("span",null,e))})))})))))};f.propTypes={data:c.a.arrayOf(c.a.arrayOf(c.a.oneOfType([c.a.string,c.a.number]))),cellStyles:c.a.arrayOf(c.a.arrayOf(c.a.shape({css:c.a.object}))),tableStyles:c.a.shape({css:c.a.shape({tableLayout:c.a.oneOf(["auto","fixed"])})}),id:c.a.string},f.defaultProps={};a.default=Object(l.c)(f)}}]);
//# sourceMappingURL=tableChart.ade808cf.chunk.js.map