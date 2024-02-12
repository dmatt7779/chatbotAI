(this["webpackJsonpclient-view-genially"]=this["webpackJsonpclient-view-genially"]||[]).push([[0],{821:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),o=i(6),s=i(1),n=i.n(s),l=i(787),c=i.n(l),u=i(5),f=i(91),h=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},d=function(e){return e&&"object"===typeof e&&!Array.isArray(e)},g=function e(t,i){var a=Object.assign({},t);return d(t)&&d(i)&&Object.keys(i).forEach((function(r){var o,s;d(i[r])?r in t?a[r]=e(t[r],i[r]):Object.assign(a,((o={})[r]=i[r],o)):Object.assign(a,((s={})[r]=i[r],s))})),a},p=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(t,i)};return function(t,i){function a(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)}}(),m=u.c.div.withConfig({displayName:"StyledChartWrapper",componentId:"sc-jljwk8"})((function(e){return{".apexcharts-heatmap-series rect":{fill:e.recreate?void 0:"transparent",transform:e.recreate?void 0:"scale(0)"},".apexcharts-legend.apexcharts-align-center":{"&.position-right, &.position-left":{".apexcharts-legend-series":{display:"flex",alignItems:"center",padding:"2px 0"}}}}})),x=function(e){function t(t){var i=e.call(this,t)||this;return i.chartRef=r.a.createRef(),i.chart=null,i}return p(t,e),t.prototype.componentDidMount=function(){this.createChart()},t.prototype.componentDidUpdate=function(e){var t=this;if(this.chart){var i=this.props,a=i.colors,r=i.height,o=i.options,s=i.prefix,n=i.recreate,l=i.series,c=i.suffix,u=i.type,d=i.width;if(e.type!==u!==(e.recreate!==n&&n))return this.recreateChart(),void(h(this.chartRef.current)||function(e,t){if(window.IntersectionObserver){var i=new window.IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&(t(),i.disconnect())}))}),{root:document.documentElement});i.observe(e)}}(this.chartRef.current,(function(){setTimeout((function(){return t.recreateChart()}),0)})));var g=JSON.stringify(e.colors),p=JSON.stringify(e.options),m=JSON.stringify(e.series),x=JSON.stringify(a),y=JSON.stringify(o);m!==JSON.stringify(l)&&this.chart.updateSeries(l),p===y&&d===e.width&&r===e.height&&s===e.prefix&&c===e.suffix&&g===x||f.b&&!h(this.chartRef.current)||this.chart.updateOptions(this.getConfig())}},t.prototype.componentWillUnmount=function(){this.chart&&"function"===typeof this.chart.destroy&&this.chart.destroy()},t.prototype.getConfig=function(){var e=this.props,t=e.colors,i=e.height,a=e.options,r=e.series,o=e.type,s={chart:{type:o,height:i,width:e.width},series:r,colors:t},n=JSON.parse(JSON.stringify(g(a,s)));return n.tooltip.y.formatter=a.tooltip.y.formatter,"scatter"===o&&(n.tooltip.y.formatter=a.tooltip.y.formatter,n.xaxis.labels.formatter=a.xaxis.labels.formatter),n},t.prototype.recreateChart=function(){try{this.chart.destroy()}catch(e){console.error("Sorry, we errored with destroying the chart...")}this.createChart()},t.prototype.createChart=function(){this.chart=new c.a(this.chartRef.current,this.getConfig()),this.chart.render()},t.prototype.render=function(){var e=this.props.recreate;return r.a.createElement(m,{recreate:e,ref:this.chartRef})},t}(a.Component),y=x;x.propTypes={colors:n.a.array,height:n.a.any,options:n.a.object.isRequired,prefix:n.a.oneOfType([n.a.string,n.a.arrayOf(n.a.string)]),recreate:n.a.bool,series:n.a.array.isRequired,suffix:n.a.oneOfType([n.a.string,n.a.arrayOf(n.a.string)]),type:n.a.string.isRequired,width:n.a.any},x.defaultProps={width:"100%",height:"auto"};var b=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.stacked,f=e.suffix,h=e.textColor,d=e.width,p=e.animating,m=g(s,{chart:{id:"area-chart-"+o,stacked:u},xaxis:{labels:{show:c,style:{colors:h}},categories:t},yaxis:{show:c},stroke:{show:!0},fill:{type:"solid",opacity:.2}});return r.a.createElement(y,{recreate:p,colors:i,height:a,options:m,prefix:n,series:l,suffix:f,type:"area",width:d})};b.defaultProps={stacked:!1,showAxisLabels:!1},b.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,stacked:n.a.bool,width:n.a.string.isRequired,textColor:n.a.string,prefix:n.a.string,suffix:n.a.string};var w=b,R=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.horizontal,s=e.id,n=e.invertYAxis,l=e.options,c=e.prefix,u=e.series,f=e.showAxisLabels,h=e.stacked,d=e.suffix,p=e.textColor,m=e.width,x=e.animating,b=g(l,{chart:{id:"column-chart-"+s,stacked:h},xaxis:{labels:{show:f,style:{colors:o?void 0:p}},categories:t},yaxis:{reversed:n,opposite:n,labels:{show:f,style:{colors:o?p:void 0}}},plotOptions:{bar:{horizontal:o}}});return r.a.createElement(y,{recreate:x,colors:i,height:a,options:b,prefix:c,series:u,suffix:d,type:"bar",width:m})};R.defaultProps={horizontal:!1,stacked:!1,showAxisLabels:!1},R.propTypes={animating:n.a.bool,id:n.a.string.isRequired,invertYAxis:n.a.bool,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,width:n.a.string.isRequired,stacked:n.a.bool,horizontal:n.a.bool,textColor:n.a.string,prefix:n.a.string,suffix:n.a.string};var v=R,C=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.suffix,f=e.textColor,h=e.width,d=e.animating,p=function(e){return[{data:e[0]?e[0].data:[],name:e[0]?e[0].name:"",type:"column"},{data:e[1]?e[1].data:[],name:e[1]?e[1].name:"",type:"line"}]}(l),m={chart:{id:"column-line-chart-"+o},xaxis:{labels:{show:c,style:{colors:f}},categories:t},yaxis:[{show:c,title:{text:p[0].name},labels:{align:c?"left":void 0}},{show:c,title:{text:p[1].name},labels:{align:c?"right":void 0},opposite:!0}],stroke:{show:!0,curve:"straight"},tooltip:{x:{show:!1},y:{formatter:function(e,t){var i=t.seriesIndex;return((n[i]||"")+" "+e+" "+(u[i]||"")).trim()}}}},x=g(s,m);return r.a.createElement(y,{recreate:d,colors:i,height:a,options:x,prefix:n,series:p,suffix:u,type:"line",width:h})};C.defaultProps={showAxisLabels:!1},C.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,width:n.a.string.isRequired,textColor:n.a.string,prefix:n.a.arrayOf(n.a.string),suffix:n.a.arrayOf(n.a.string)};var O=C,A=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.suffix,u=e.width,f=e.animating,h=g(s,{chart:{id:"donut-chart-"+o},tooltip:{theme:"light"},labels:t});return r.a.createElement(y,{recreate:f,colors:i,height:a,options:h,prefix:n,series:l[0]?l[0].data:[],suffix:c,type:"donut",width:u})};A.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,width:n.a.string.isRequired,prefix:n.a.string,suffix:n.a.string};var q=A,E=u.c.div.withConfig({displayName:"GaugeChartWrapper",componentId:"sc-1pj6msf"})((function(){return{position:"relative",svg:{maxHeight:"100%"}}})),T=u.c.g.withConfig({displayName:"GaugeChartNeedle",componentId:"sc-1g7kf8c"})((function(e){var t=e.animate,i=e.theme.color;return{transitionProperty:"transform",transitionDuration:(t?.8:0)+"s",transitionTimingFunction:"ease-in-out",line:{stroke:i.neutral.cement()},circle:{fill:i.neutral.cement()}}})),L=u.c.circle.withConfig({displayName:"GaugeChartCircle",componentId:"sc-68e1zd"})((function(e){return{fill:"transparent",transitionProperty:"stroke-dasharray",transitionDuration:e.animate?"0.8s":0,transitionTimingFunction:"ease-in-out"}})),S=u.c.circle.withConfig({displayName:"GaugeChartBackground",componentId:"sc-2s859v"})((function(e){return{stroke:e.theme.color.neutral.smoke(),fill:"transparent"}})),j=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t},N=function(e){var t=e.r,i=e.g,a=e.b;return"#"+j(t)+j(i)+j(a)},D=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:0,g:0,b:0}},_=function(e){var t=e.r,i=e.g,a=e.b;t/=255,i/=255,a/=255;var r=Math.min(t,i,a),o=Math.max(t,i,a),s=o-r,n=0,l=0;return n=0===s?0:o===t?(i-a)/s%6:o===i?(a-t)/s+2:(t-i)/s+4,(n=Math.round(60*n))<0&&(n+=360),l=(o+r)/2,{h:n,s:+(100*(0===s?0:s/(1-Math.abs(2*l-1)))).toFixed(1),l:l=+(100*l).toFixed(1)}},k=function(e){var t=e.h,i=e.s,a=e.l;i/=100,a/=100;var r=(1-Math.abs(2*a-1))*i,o=r*(1-Math.abs(t/60%2-1)),s=a-r/2,n=0,l=0,c=0;return t>=0&&t<60?(n=r,l=o,c=0):t>=60&&t<120?(n=o,l=r,c=0):t>=120&&t<180?(n=0,l=r,c=o):t>=180&&t<240?(n=0,l=o,c=r):t>=240&&t<300?(n=o,l=0,c=r):t>=300&&t<360&&(n=r,l=0,c=o),{r:n=Math.round(255*(n+s)),g:l=Math.round(255*(l+s)),b:c=Math.round(255*(c+s))}},H=function(e,t){var i=_(D(e)),a={h:i.h,s:i.s,l:i.l+t>100?100:i.l+t};return N(k(a))},I=80*Math.PI,P=50,M=function(e){var t=I/2*e;return t+" "+(I-t)},z=function(e){return""+(180*Math.abs(e)-90)},W=function(e){var t=e.categories,i=e.colors,o=e.height,s=e.id,n=e.options,l=e.prefix,c=e.series,u=e.showTooltip,f=e.suffix,h=e.width,d=n.chart.animations.enabled,g=Object(a.useState)(0),p=g[0],m=g[1],x=Object(a.useState)(i[0]),y=x[0],b=x[1];Object(a.useEffect)((function(){b(i[0])}),[i]),Object(a.useEffect)((function(){var e=function(e){return Math.min(100,function(e,t){if(void 0===t&&(t=0),void 0===e[t])return 0;var i=e[t].data[0];return void 0!==i?i:0}(e))/100}(c);m(e)}),[c,p]);var w=l+" "+(c[0]?c[0].data[0]:0)+" "+f,R=t[0]+": <b>"+w+"</b>";return r.a.createElement(E,{id:"gauge-chart-"+s,style:{width:h,height:o}},r.a.createElement("svg",{viewBox:"-50 -50 100 52"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"semi-"+s},r.a.createElement("rect",{x:-50,y:-50,width:"100",height:P}))),r.a.createElement("g",{clipPath:"url(#semi-"+s+")"},r.a.createElement(S,{r:40,strokeWidth:10}),r.a.createElement(L,{animate:d,r:40,stroke:y,strokeWidth:10,strokeDasharray:M(p),transform:"rotate(180)",onMouseEnter:function(){return b(H(i[0],10))},onMouseLeave:function(){return b(i[0])},"data-chart-tooltip":u,"data-title":c[0]?c[0].name:"","data-body":R,"data-color":i[0]})),r.a.createElement(T,{id:"gauge",animate:d,style:{transform:"rotateZ("+z(p)+"deg)"}},r.a.createElement("line",{x:"0",y:"0",x1:"0",y2:-(40+10/1.8)}),r.a.createElement("circle",{cy:-1,r:2}))))};W.propTypes={categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,id:n.a.string.isRequired,options:n.a.object.isRequired,prefix:n.a.string,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,showTooltip:n.a.bool,suffix:n.a.string,width:n.a.string.isRequired};var B=W,F=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.suffix,f=e.textColor,h=e.animating,d=e.width,p=g(s,{chart:{id:"heat-map-chart-"+o},xaxis:{labels:{show:c,style:{colors:f}},categories:t},yaxis:{labels:{show:c,style:{colors:f}}},stroke:{show:!0}}),m="#ffffff"===i[0]?i[1]:i[0];return r.a.createElement(y,{recreate:h,colors:[m],height:a,options:p,prefix:n,series:l,suffix:u,type:"heatmap",width:d})};F.defaultProps={showAxisLabels:!1},F.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,width:n.a.string.isRequired,textColor:n.a.string,prefix:n.a.string,suffix:n.a.string};var V=F,U=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.suffix,f=e.textColor,h=e.width,d=e.animating,p=g(s,{chart:{id:"line-chart-"+o},xaxis:{labels:{show:c,style:{colors:f}},categories:t},yaxis:{show:c},stroke:{show:!0}});return r.a.createElement(y,{recreate:d,colors:i,height:a,options:p,prefix:n,series:l,suffix:u,type:"line",width:h})};U.defaultProps={showAxisLabels:!1},U.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,width:n.a.string.isRequired,textColor:n.a.string,prefix:n.a.string,suffix:n.a.string};var G=U,J=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.suffix,u=e.width,f=e.animating,h=g(s,{chart:{id:"pie-chart-"+o},tooltip:{theme:"light"},labels:t});return r.a.createElement(y,{recreate:f,colors:i,height:a,options:h,prefix:n,series:l[0]?l[0].data:[],suffix:c,type:"pie",width:u})};J.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,width:n.a.string.isRequired,prefix:n.a.string,suffix:n.a.string};var Y=J,K=i(41),X=function(){return(X=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},$=u.c.div.attrs((function(e){return{style:{width:e.width,height:e.height}}})).withConfig({displayName:"Container",componentId:"sc-valgg"})((function(){return X({},K.a.display.flex.builder("column").center().center())})),Z=u.c.div.attrs((function(e){return{style:{height:e.fullHeight}}})).withConfig({displayName:"Wrapper",componentId:"sc-1t676bs"})((function(){return X(X({},K.a.display.flex.builder("column").start().start()),{position:"relative",width:"100%",marginBottom:"16px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",boxSizing:"border-box","&:last-child":{marginBottom:0}})})),Q=u.c.p.attrs((function(e){var t=e.currentHeight;return{style:{overflowX:0!==t?"hidden":"visible",minHeight:0!==t?t+"px":"auto",fontSize:e.fontSize}}})).withConfig({displayName:"CategoryName",componentId:"sc-1m1lkm5"})((function(e){var t=e.textColor;return X({},K.a.increaseSpecificity({whiteSpace:"nowrap",textOverflow:"ellipsis",width:"100%",marginBottom:"4px",display:"block",height:"auto",fontFamily:"Arial, sans-serif",fontWeight:"bold",letterSpacing:"-0.5px",color:t}))})),ee=u.c.div.withConfig({displayName:"BarTextWrapper",componentId:"sc-2tal7h"})((function(){return X({position:"relative",width:"100%",height:"100%"},K.a.display.flex.builder().start().center())})),te=u.c.div.withConfig({displayName:"ProgressBarForeground",componentId:"sc-1drubgb"})((function(e){var t=e.theme.color;return X(X({},K.a.display.flex.builder().start().center()),{width:"100%",height:"calc(100% - 4px)",backgroundColor:t.neutral.smoke(),position:"relative"})})),ie=u.c.div.attrs((function(e){var t=e.percent;return{style:{width:(t>100?100:t)+"%",background:e.color,transitionDelay:e.animationDelay/1e3+"s"}}})).withConfig({displayName:"ProgressBar",componentId:"sc-18g7jip"})((function(e){return{position:"absolute",top:0,left:0,height:"100%",transition:e.enableAnimation?"width 0.8s ease-in-out":"0s"}})),ae=u.c.p.withConfig({displayName:"ValueText",componentId:"sc-dypcxd"})((function(e){var t=e.fontSize,i=e.textColor,a=e.maxWidthValueText;return X({},K.a.increaseSpecificity({fontSize:t,fontFamily:"Arial, sans-serif",fontWeight:"bold",letterSpacing:"-0.5px",marginLeft:"8px",minWidth:a?a+"px":"initial",maxWidth:"50%",color:i}))})),re=u.c.span.withConfig({displayName:"ValueTextSpan",componentId:"sc-1n5feki"})((function(e){return{fontSize:e.fontSize,fontFamily:"Arial, sans-serif",fontWeight:"bold",letterSpacing:"-0.5px",marginLeft:"8px",color:e.textColor}})),oe=function(e){var t=e.animationDelay,i=e.category,o=e.className,s=e.color,n=e.height,l=e.maxWidthValueText,c=e.onWidthCalculated,u=e.options,f=e.prefix,h=e.progressBarsId,d=e.serieName,g=e.showLegend,p=e.showTooltip,m=e.showValues,x=e.suffix,y=e.textColor,b=e.textValue,w=e.value,R=Object(a.useState)(0),v=R[0],C=R[1],O=Object(a.useState)(0),A=O[0],q=O[1],E=Object(a.useState)(0),T=E[0],L=E[1],S=Object(a.useState)(s),j=S[0],N=S[1],D=Object(a.useRef)(null),_=Object(a.useRef)(null);Object(a.useEffect)((function(){N(s)}),[s]),Object(a.useEffect)((function(){C(28*parseFloat(n)/100),q(45*parseFloat(n)/100),L(0)}),[n]),Object(a.useEffect)((function(){D.current&&0===l&&c(parseFloat(window.getComputedStyle(D.current).getPropertyValue("width")))}),[A,l,c]),Object(a.useEffect)((function(){_.current&&0!==v&&0===T&&setTimeout((function(){if(_.current){var e=parseFloat(window.getComputedStyle(_.current).getPropertyValue("height"));L(e)}}),t)}),[v,t,T]);var k=i+": <b>"+(f+" "+b+" "+x)+"</b>";return r.a.createElement(Z,{fullHeight:n,className:o},g&&r.a.createElement(Q,{textColor:y,fontSize:v,ref:_,currentHeight:T},i),r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(ie,{animationDelay:t,color:j,"data-body":k,"data-chart-tooltip":p,"data-chart-tooltip-options":JSON.stringify({parent:"#"+h}),"data-color":s,"data-title":d,enableAnimation:u.chart.animations.enabled,onMouseEnter:function(){return N(H(s,10))},onMouseLeave:function(){return N(s)},percent:A?w:0})),m&&r.a.createElement(ae,{fontSize:A,height:n,maxWidthValueText:l,ref:D,textColor:y},f&&r.a.createElement(re,{fontSize:v,height:n,textColor:y},f+" "),b,x&&r.a.createElement(re,{fontSize:v,height:n,textColor:y}," "+x))))};oe.propTypes={animationDelay:n.a.number,category:n.a.string.isRequired,className:n.a.string,color:n.a.string.isRequired,height:n.a.string.isRequired,maxWidthValueText:n.a.number,onWidthCalculated:n.a.func,options:n.a.shape({chart:n.a.shape({animations:n.a.shape({enabled:n.a.bool})})}),prefix:n.a.string,progressBarsId:n.a.string,serieName:n.a.string,showLegend:n.a.bool,showTooltip:n.a.bool,showValues:n.a.bool,suffix:n.a.string,textColor:n.a.string,textValue:n.a.number,value:n.a.number};var se=oe,ne=function(e){var t=e.animationDelay,i=e.categories,o=e.colors,s=e.height,n=e.id,l=e.options,c=e.prefix,u=e.series,f=e.showLegend,h=e.showTooltip,d=e.showValues,g=e.suffix,p=e.textColor,m=e.width,x=Object(a.useState)([]),y=x[0],b=x[1],w=Object(a.useState)(0),R=w[0],v=w[1],C=u[0]?u[0].data.length:0,O=parseFloat(s)/C-16*(C-1)/C+"px",A=function(e){y.push(e)};Object(a.useEffect)((function(){u.length&&y.length===C&&v(y.length?y.reduce((function(e,t){return t>e?t:e})):0)}),[C,u.length,y]);var q=(u&&u[0]&&u[0].data?u[0]:[]).data;Object(a.useEffect)((function(){b([]),v(0)}),[s,c,g,q]);var E=q&&q.length?u[0].data.reduce((function(e,t){return t>e?t:e})):0;if(!u[0]||!u[0].data.length)return null;var T="progress-bar-chart-"+n;return r.a.createElement($,{width:m,height:s,id:T},u[0].data.map((function(e,a){var s="%"===g?e:100*e/E,n=""+i[a]+a;return r.a.createElement(se,{animationDelay:t+150*a,category:i[a],color:o[0],height:O,key:n,maxWidthValueText:R,onWidthCalculated:A,options:l,prefix:c,progressBarsId:T,serieName:u[0]?u[0].name:"",showLegend:f,showTooltip:h,showValues:d,suffix:g,textColor:p,textValue:e,value:s})})))};ne.propTypes={animationDelay:n.a.number,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,id:n.a.string.isRequired,options:n.a.shape({chart:n.a.shape({animations:n.a.shape({enabled:n.a.bool})})}),prefix:n.a.string,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,showLegend:n.a.bool,showTooltip:n.a.bool,showValues:n.a.bool,suffix:n.a.string,textColor:n.a.string,width:n.a.string.isRequired};var le=ne,ce=u.c.div.attrs((function(e){return{style:{width:e.width,height:e.height}}})).withConfig({displayName:"PyramidChartWrapper",componentId:"sc-9xlc4b"})((function(){return{position:"relative",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",svg:{maxHeight:"100%"}}})),ue=u.c.div.withConfig({displayName:"PyramidChartContainer",componentId:"sc-12pjld0"})((function(){return{width:"100%",height:"100%",position:"relative"}})),fe=function(e,t){return e?"translate(0, 0)":t?"translate(0, -50)":"translate(0, 50)"},he=u.c.polygon.attrs((function(e){var t=e.enabledAnimation,i=e.animationDelay,a=e.hasData,r=e.reverse;return{style:{transitionDelay:t?i+"ms":"0ms"},transform:fe(a,r)}})).withConfig({displayName:"PyramidChartPolygon",componentId:"sc-xhikxd"})((function(e){return{transition:e.enabledAnimation?"transform 0.8s ease, opacity "+.8/1.5+"s ease":"0ms",opacity:e.hasData?1:0}})),de=Math.PI,ge="left",pe="right",me=function(e){return e*(de/180)},xe=function(e,t,i){return void 0===i&&(i=ge),{x:i===ge?50-e/2:50+e/2,y:t}},ye=function(e,t){var i=t?100:0,a=t?68:63.43;return e.reduce((function(e,r,o){var s=e[o-1],n=s&&s.offset?s.offset:0,l=s&&s.width?s.width:i,c=xe(l,n,ge),u=xe(l,n,pe),f=function(e,t,i,a,r){var o=me(a),s=me(90)-o,n=e*Math.sin(s)/Math.sin(o);return r?i-2*n:i+2*n}(r,0,l,a,t),h=n+r,d=xe(f,h,pe),g=xe(f,h,ge);return e.push({offset:h,topLeft:c,topRight:u,bottomRight:d,bottomLeft:g,width:f,height:r}),e}),[])},be=function(e){var t=e.topLeft,i=e.topRight,a=e.bottomRight,r=e.bottomLeft;return t.x+","+t.y+" "+i.x+","+i.y+" \n  "+a.x+","+a.y+" "+r.x+","+r.y},we=function(e){var t=e.animationDelay,i=e.hasData,o=e.category,s=e.color,n=e.enabledAnimation,l=e.index,c=e.offset,u=e.prefix,f=e.rawValue,h=e.reverse,d=e.serieName,g=e.showTooltip,p=e.suffix,m=e.totalOfSections,x=e.value,y=e.topLeft,b=e.topRight,w=e.bottomRight,R=e.bottomLeft,v=c+x,C=Object(a.useState)(s),O=C[0],A=C[1];Object(a.useEffect)((function(){A(s)}),[s]);var q=t+150*(m-l),E=o+": <b>"+(u+" "+f+" "+p)+"</b>";return r.a.createElement(he,{animationDelay:q,hasData:i,"data-body":E,"data-chart-tooltip":g,"data-color":s,"data-title":d,enabledAnimation:n,fill:O,key:v,onMouseEnter:function(){return A(H(s,10))},onMouseLeave:function(){return A(s)},points:be({topLeft:y,topRight:b,bottomRight:w,bottomLeft:R}),reverse:h})};we.propTypes={animationDelay:n.a.number.isRequired,bottomRight:n.a.shape({x:n.a.number.isRequired,y:n.a.number.isRequired}).isRequired,bottomLeft:n.a.shape({x:n.a.number.isRequired,y:n.a.number.isRequired}).isRequired,category:n.a.string.isRequired,color:n.a.string.isRequired,enabledAnimation:n.a.bool.isRequired,hasData:n.a.bool.isRequired,index:n.a.number.isRequired,offset:n.a.number,prefix:n.a.string.isRequired,rawValue:n.a.number.isRequired,reverse:n.a.bool,serieName:n.a.string.isRequired,showTooltip:n.a.bool,suffix:n.a.string.isRequired,topLeft:n.a.shape({x:n.a.number.isRequired,y:n.a.number.isRequired}).isRequired,topRight:n.a.shape({x:n.a.number.isRequired,y:n.a.number.isRequired}).isRequired,totalOfSections:n.a.number.isRequired,value:n.a.number.isRequired};var Re=we,ve=function(){return(ve=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Ce=u.c.g.attrs((function(e){var t=e.width,i=e.height,a=e.yPos,r=e.enabledAnimation,o=e.animationDelay;return{width:t,height:i,transform:"translate(50, "+(a-.75)+")",style:{transitionDelay:r?o+"ms":"0ms"}}})).withConfig({displayName:"Group",componentId:"sc-oejbfr"})((function(e){return{transition:e.enabledAnimation?"opacity 0.8s ease-in-out":"0ms",opacity:e.hasData?1:0}})),Oe=u.c.line.attrs((function(e){return{x1:0,x2:60,y1:.5,y2:.5,style:{stroke:e.color}}})).withConfig({displayName:"Line",componentId:"sc-5aov7z"})((function(){return{strokeWidth:.5}})),Ae=u.c.text.attrs((function(e){return{fontFamily:"Arial",fill:e.color,fontSize:e.fontSize,y:e.y,x:65}})).withConfig({displayName:"Text",componentId:"sc-1qh78x4"})((function(){return ve(ve({},K.a.ellipsis(!0)),{marginBottom:"1%"})})),qe=function(e){var t=e.animationDelay,i=e.hasData,a=e.category,o=e.enabledAnimation,s=e.fontSize,n=e.index,l=e.lineColor,c=e.offset,u=e.textColor,f=e.totalOfSections,h=c,d=t+300*(e.reverse?n:f-n);return r.a.createElement(Ce,{yPos:h,animationDelay:d,enabledAnimation:o,hasData:i},r.a.createElement(Oe,{color:l}),r.a.createElement(Ae,{color:u,fontSize:s,y:s/2-.5},a))};qe.propTypes={animationDelay:n.a.number.isRequired,category:n.a.string.isRequired,enabledAnimation:n.a.bool.isRequired,fontSize:n.a.number.isRequired,hasData:n.a.bool.isRequired,index:n.a.number.isRequired,lineColor:n.a.string.isRequired,offset:n.a.number.isRequired,reverse:n.a.bool,textColor:n.a.string.isRequired,totalOfSections:n.a.number.isRequired};var Ee=qe,Te=function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,n=o.length;s<n;s++,r++)a[r]=o[s];return a},Le=function(e){var t=e.animationDelay,i=e.categories,o=e.colors,s=e.height,n=e.id,l=e.options,c=e.prefix,u=e.reverse,f=e.series,h=e.showLegend,d=e.showTooltip,g=e.suffix,p=e.textColor,m=e.width,x=Object(a.useState)(0),y=x[0],b=x[1],w=Object(a.useState)(!1),R=w[0],v=w[1],C=f[0]?f[0].data:[],O=C.reduce((function(e,t){return e+t}),0),A=C.map((function(e){return e/O*100})),q=o.slice(0,C.length),E=u?q.reverse():q,T=u?Te(i).reverse():Te(i),L=l.chart.animations.enabled,S=ye(A,u),j=u?S.reverse():S;Object(a.useEffect)((function(){b(parseFloat(m)/100)}),[m]),Object(a.useEffect)((function(){C.length&&!R&&setTimeout((function(){v(!0)}),0)}),[C,R]);return r.a.createElement(ce,{id:"pyramid-chart-"+n,width:m,height:s},r.a.createElement(ue,null,r.a.createElement("svg",{viewBox:h?"-5 -5 160 110":"-5 -5 110 110"},h?j.map((function(e,i){var a=e.offset,o=a+"-"+i;return r.a.createElement(Ee,{animationDelay:t,hasData:R,category:T[i],enabledAnimation:L,fontSize:y,index:i,key:o,lineColor:E[i],offset:a,textColor:p,totalOfSections:A.length})})):null,j.map((function(e,i){var a=e.topLeft,o=e.topRight,s=e.bottomRight,n=e.bottomLeft,l=e.height,h=l+"-"+a.y;return r.a.createElement(Re,{animationDelay:t,hasData:R,bottomLeft:n,bottomRight:s,category:T[i],color:E[i],enabledAnimation:L,index:i,key:h,prefix:c,rawValue:C[i],reverse:u,serieName:f[0]?f[0].name:"",showTooltip:d,suffix:g,topLeft:a,topRight:o,totalOfSections:A.length,value:l})})))))};Le.defaultProps={animationDelay:0},Le.propTypes={animationDelay:n.a.number,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,id:n.a.string.isRequired,options:n.a.object.isRequired,prefix:n.a.string,reverse:n.a.bool,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,showLegend:n.a.bool,showTooltip:n.a.bool,suffix:n.a.string,textColor:n.a.string,width:n.a.string.isRequired};var Se=Le,je=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.suffix,f=e.textColor,h=e.width,d=e.animating,p={chart:{id:"radar-chart-"+o},xaxis:{labels:{show:c,style:{colors:t.map((function(e){return f}))}},categories:t},yaxis:{show:c},stroke:{show:!0,curve:"straight"},fill:{opacity:void 0},plotOptions:{radar:{polygons:{strokeColors:"#a3a2a2",connectorColors:"#a3a2a2",fill:{colors:["transparent"]}}}}},m=g(s,p);return r.a.createElement(y,{recreate:d,colors:i,height:a,options:m,prefix:n,series:l,suffix:u,type:"radar",width:h})};je.defaultProps={showAxisLabels:!1},je.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,width:n.a.string.isRequired,prefix:n.a.string,suffix:n.a.string,textColor:n.a.string};var Ne=je,De=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.suffix,u=e.width,f=e.animating,h=g(s,{chart:{id:"radial-chart-"+o},labels:t,plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}}});return r.a.createElement(y,{recreate:f,colors:i,height:a,options:h,prefix:n,series:l[0]?l[0].data:[],suffix:c,type:"radialBar",width:u})};De.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,width:n.a.string.isRequired,prefix:n.a.string,suffix:n.a.string};var _e=De,ke=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.suffix,f=e.animating,h=e.width,d=l.map((function(e){return{name:e.name,data:[e.data]}})),p=g(s,{chart:{id:"scatter-chart-"+o},tooltip:{x:{show:!1},y:{formatter:function(e,i){var a=i.seriesIndex;return t[0]+": "+n[0]+" "+l[a].data[0]+" "+u[0]+",\n          "+t[1]+": "+n[1]+" "+e+" "+u[1]}}},xaxis:{type:"numeric",labels:{show:c,type:"numeric",formatter:function(e){return parseFloat(e).toFixed(1)}}},yaxis:{type:"numeric",show:c}});return r.a.createElement(y,{colors:i,height:a,options:p,prefix:n,recreate:f,series:d,suffix:u,type:"scatter",width:h})};ke.defaultProps={showAxisLabels:!1},ke.propTypes={animating:n.a.bool,categories:n.a.arrayOf(n.a.string),colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,id:n.a.string.isRequired,options:n.a.object.isRequired,prefix:n.a.arrayOf(n.a.string),series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.number)})).isRequired,showAxisLabels:n.a.bool,suffix:n.a.arrayOf(n.a.string),width:n.a.string.isRequired};var He=ke,Ie=function(e){var t=e.categories,i=e.colors,a=e.height,o=e.id,s=e.options,n=e.prefix,l=e.series,c=e.showAxisLabels,u=e.suffix,f=e.textColor,h=e.width,d=e.animating,p=g(s,{chart:{id:"timeline-chart-"+o},xaxis:{type:"datetime",labels:{show:c}},yaxis:{labels:{show:c,style:{colors:f}}},plotOptions:{bar:{horizontal:!0,distributed:!0}},dataLabels:{enabled:!1,distributed:!1,offsetX:0,offsetY:0,style:{colors:["#fff"]}},legend:{show:!1}}),m=t.length&&l.length&&l[0]&&l[1]&&l[0].data.length&&l[1].data.length?[{name:"",data:t.map((function(e,t){return{x:e,y:[l[0].data[t]&&l[1].data[t]?new Date(l[0].data[t]).getTime():0,l[0].data[t]&&l[1].data[t]?new Date(l[1].data[t]).getTime():0]}}))}]:[{data:[{x:"",y:[0,0]}]}];return r.a.createElement(y,{recreate:d,colors:i,height:a,options:p,prefix:n,series:m,suffix:u,type:"rangeBar",width:h})};Ie.defaultProps={showAxisLabels:!1},Ie.propTypes={animating:n.a.bool,id:n.a.string.isRequired,series:n.a.arrayOf(n.a.shape({name:n.a.string,data:n.a.arrayOf(n.a.string)})).isRequired,categories:n.a.arrayOf(n.a.string).isRequired,colors:n.a.arrayOf(n.a.string).isRequired,height:n.a.string.isRequired,options:n.a.object.isRequired,showAxisLabels:n.a.bool,width:n.a.string.isRequired,textColor:n.a.string,prefix:n.a.string,suffix:n.a.string};var Pe=Ie,Me=function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,n=o.length;s<n;s++,r++)a[r]=o[s];return a},ze=function(e){var t=e.reduce((function(e,t){return t.length>e?t.length:e}),0),i=Array(t);return e.forEach((function(t,a){t.forEach((function(t,r){i[r]||(i[r]=Array(e.length).fill(0)),i[r][a]=t}))})),i},We=function(e){var t=function(e){if(!e.length)return e;var t=[e[0]],i=Me(e).reverse();return i.pop(),t.concat(i)}(e);return ze(t)},Be=function(e,t){return"string"!==typeof e?e:"CHART_COLUMN_LINE"===t||"CHART_SCATTER"===t?[e,e]:[e]},Fe=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t},Ve=function(e){var t=function(e){var t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);return{r:Number(t[1]),g:Number(t[2]),b:Number(t[3]),a:Number(t[4])||1}}(e),i=t.r,a=t.g,r=t.b;return"#"+Fe(i)+Fe(a)+Fe(r)},Ue=function(e){return e?e.includes("#")?e:Ve(e):"#000000"};function Ge(e){var t,i=e.animationDelay,o=e.colors,s=e.data,n=e.documentConfig,l=e.enableAnimation,c=e.enableDataLabels,u=e.height,f=e.id,h=e.invertYAxis,d=e.prefix,g=e.scale,p=e.showAxisLabels,m=e.showLegend,x=e.showTooltip,y=e.suffix,b=e.textColor,R=e.type,C=e.width;switch(R){case"CHART_HEATMAP":t=We(s);break;case"CHART_COLUMNS":case"CHART_COLUMNS_GROUPED":case"CHART_COLUMNS_STACKED":case"CHART_SCATTER":t=ze(s);break;default:t=s}var A=function(e){var t=[],i=[];return e.forEach((function(a,r){return a.forEach((function(a,o){0!==o||0===r?0!==o&&0!==r&&(t[o-1]||(t[o-1]={name:e[0][o],data:[]}),t[o-1].data.push(a)):i.push(a)}))})),{series:t||[],categories:i||[]}}(t),E=A.series,T=A.categories,L=Be(d,R),S=Be(y,R),j=E.map((function(e){return{name:e.name,data:[e.data[0],e.data[1]]}})),N=Me(T);N.length=2;var D={chart:{scale:g,zoom:{enabled:!1},animations:{enabled:l},toolbar:{show:!1},foreColor:"#a3a2a2"},legend:{show:m,showForSingleSeries:m,markers:{strokeWidth:1,strokeColor:"#eceff1"}},tooltip:{enabled:x,theme:"#ffffff"===o[0]?"dark":"light",y:{formatter:function(e){return L[0]+" "+e+" "+S[0]}}},dataLabels:{enabled:c},stroke:{show:!1,curve:"smooth"},fill:{opacity:1}},_=Object(a.useState)(!l),k=_[0],H=_[1],I=Object(a.useRef)(-1);Object(a.useEffect)((function(){return l&&-1===I.current&&(I.current=setTimeout((function(){H(!0)}),1e3*i)),function(){clearTimeout(I.current)}}),[l,i]);var P=o.map((function(e){if(n&&n.colors){var t=n.colors,i=t.Primary,a=t.Secondary,r=t.Tertiary;if(e.includes("var(--genially-primary)"))return Ue(i);if(e.includes("var(--genially-secondary)"))return Ue(a);if(e.includes("var(--genially-tertiary)"))return Ue(r)}return e})),M=k?P:P.map((function(){return"rgba(1,1,1,0)"}));(function(e){return"CHART_FUNNEL"!==e&&"CHART_GAUGE"!==e&&"CHART_PROGRESS_BAR"!==e&&"CHART_PYRAMID"!==e})(R)&&(D.dataLabels.colors=P,D.fill.type=k?D.fill.type:"solid",D.legend.markers.fillColors=P);return r.a.createElement("div",{className:"genially-chart-wrapper"},function(){switch(R){case"CHART_COLUMNS":case"CHART_COLUMNS_GROUPED":return r.a.createElement(v,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_COLUMNS_STACKED":return r.a.createElement(v,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,stacked:!0,suffix:S[0],textColor:b,width:C});case"CHART_BARS":case"CHART_BARS_GROUPED":return r.a.createElement(v,{invertYAxis:h,categories:T,colors:M,height:u,horizontal:!0,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_BARS_STACKED":return r.a.createElement(v,{invertYAxis:h,categories:T,colors:M,height:u,horizontal:!0,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,stacked:!0,suffix:S[0],textColor:b,width:C});case"CHART_DONUT":return r.a.createElement(q,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_LINE":case"CHART_LINE_SERIES":return r.a.createElement(G,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,suffix:S[0],showAxisLabels:p,textColor:b,width:C});case"CHART_PIE":return r.a.createElement(Y,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,showAxisLabels:p,suffix:S[0],textColor:b,animating:k,width:C});case"CHART_RADAR":return r.a.createElement(Ne,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_AREA":case"CHART_AREA_SERIES":return r.a.createElement(w,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_AREA_STACKED":return r.a.createElement(w,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,stacked:!0,suffix:S[0],textColor:b,width:C});case"CHART_HEATMAP":return r.a.createElement(V,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_SCATTER":return r.a.createElement(He,{animating:k,categories:N,colors:M,height:u,id:f,options:D,prefix:L,series:j,showAxisLabels:p,suffix:S,width:C});case"CHART_RADIAL":return r.a.createElement(_e,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_COLUMN_LINE":return r.a.createElement(O,{categories:T,colors:M,height:u,id:f,options:D,prefix:L,series:E,animating:k,showAxisLabels:p,suffix:S,textColor:b,width:C});case"CHART_PROGRESS_BAR":return r.a.createElement(le,{animationDelay:1e3*i,categories:T,colors:o,height:u,id:f,options:D,prefix:L[0],series:E,showAxisLabels:p,showLegend:m,showTooltip:x,showValues:p,suffix:S[0],textColor:b,width:C});case"CHART_TIMELINE":return r.a.createElement(Pe,{categories:T,colors:M,height:u,id:f,options:D,prefix:L[0],series:E,animating:k,showAxisLabels:p,suffix:S[0],textColor:b,width:C});case"CHART_GAUGE":return r.a.createElement(B,{categories:T,colors:o,height:u,id:f,options:D,prefix:L[0],series:k?E:[{name:E.name,data:[]}],showTooltip:x,suffix:S[0],width:C});case"CHART_PYRAMID":return r.a.createElement(Se,{key:"CHART_PYRAMID",categories:T,colors:P,height:u,id:f,options:D,prefix:L[0],series:k?E:[{name:E.name,data:[]}],showLegend:m,showTooltip:x,suffix:S[0],textColor:b,width:C});case"CHART_FUNNEL":return r.a.createElement(Se,{key:"CHART_FUNNEL",categories:T,colors:P,height:u,id:f,options:D,prefix:L[0],reverse:!0,series:k?E:[{name:E.name,data:[]}],showLegend:m,showTooltip:x,suffix:S[0],textColor:b,width:C});default:return r.a.createElement("div",null)}}())}Ge.defaultProps={enableAnimation:!1,invertYAxis:!1,prefix:"",scale:1,showAxisLabels:!1,showLegend:!1,showTooltip:!1,suffix:""},Ge.propTypes={animationDelay:s.number,colors:Object(s.arrayOf)(s.string),data:Object(s.arrayOf)(Object(s.arrayOf)(Object(s.oneOfType)([s.string,s.number]))),documentConfig:Object(s.shape)({colors:Object(s.shape)({Primary:s.string,Secondary:s.string,Tertiary:s.string})}),enableAnimation:s.bool,enableDataLabels:s.bool,height:s.string,id:s.string,invertYAxis:s.bool,prefix:s.array,scale:s.number,showAxisLabels:s.bool,showLegend:s.bool,showTooltip:s.bool,suffix:s.array,textColor:s.string,type:s.string,width:s.string},Ge.defaultProps={enableDataLabels:!1,animationDelay:0};t.default=Object(o.c)(Ge)}}]);
//# sourceMappingURL=charts.02cb34d6.chunk.js.map