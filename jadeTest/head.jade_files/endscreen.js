(function(g){var window=this;var oya=function(a,b,c,d){var e=b.fc();g.S(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.nd(c,d?d:"mqdefault.jpg");var k=b instanceof g.gN?g.FV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==g.CP(f).type;var m=b instanceof g.gN?b.wa:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.T("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Qn(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.EP&&(c.playlist_length=b.getLength());a.update(c)},u5=function(a,b){g.gV.call(this,{H:"div",
ba:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.created=!1},v5=function(a){var b={H:"span",
N:"ytp-upnext-top",K:[{H:"span",N:"ytp-upnext-header",K:[g.T("YTP_PLAYLIST_UP_NEXT")]},{H:"span",N:"ytp-upnext-title",K:["{{title}}"]},{H:"span",N:"ytp-upnext-author",K:["{{author}}"]}]},c={role:"button",href:"{{url}}","aria-label":g.T("YTP_AUTOPLAY_NEXT")};b={H:"div",N:"ytp-upnext",V:{"aria-label":"{{watch}}"},K:[{H:"div",N:"ytp-cued-thumbnail-overlay-image",V:{style:"{{background}}"}},b,{H:"a",N:"ytp-upnext-autoplay-icon",V:c,K:[{H:"svg",V:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},
K:[{H:"circle",N:"ytp-svg-autoplay-circle",V:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{H:"circle",N:"ytp-svg-autoplay-ring",V:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{H:"polygon",N:"ytp-svg-autoplay-triangle",V:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{H:"span",N:"ytp-upnext-bottom",K:[{H:"span",N:"ytp-upnext-cancel"},{H:"span",N:"ytp-upnext-paused",K:[g.T("YTP_AUTOPLAY_PAUSED_3")]}]}]};
g.Y.call(this,b);this.B=null;b=this.sa["ytp-upnext-cancel"];this.B=new g.Y({H:"button",ba:["ytp-upnext-cancel-button","ytp-button"],V:{tabindex:"0","aria-label":g.T("YTP_AUTOPLAY_CANCEL")},K:[g.T("YTP_CANCEL")]});g.M(this,this.B);this.B.U("click",this.sO,this);this.B.Da(b);this.o=a;this.J=this.sa["ytp-svg-autoplay-ring"];this.F=this.D=this.A=this.C=null;this.G=new g.Vt(this.hn,5E3,this);g.M(this,this.G);this.I=0;this.P(this.sa["ytp-upnext-autoplay-icon"],"click",this.AQ);this.aB();this.P(a,"autonavvisibility",
this.aB);this.P(a,"mdxnowautoplaying",this.PP);this.P(a,"mdxautoplaycanceled",this.QP);this.P(a,"mdxautoplayupnext",this.vD);3==this.o.Qa()&&(a=(a=g.hU(g.cU(this.o)))?a.JH():null)&&this.vD(a)},pya=function(a,b){a.C=b;
oya(a,b,g.X(a.o),"hqdefault.jpg")},w5=function(a,b){a.A||(g.LF("a11y-announce",g.T("YTP_PLAYLIST_UP_NEXT")+" "+a.C.title),a.I=g.XF(),a.A=new g.Vt((0,g.z)(a.pq,a,b),25),a.pq(b));
g.nq(a.element,"ytp-upnext-autoplay-paused")},y5=function(a){x5(a);
a.I=g.XF();a.pq();g.R(a.element,"ytp-upnext-autoplay-paused")},x5=function(a){a.A&&(a.A.dispose(),a.A=null)},z5=function(a,b){b=void 0===b?!1:b;
var c=g.X(a.o);if(c.experiments.g("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;g.rU(a.o,"xwebnotifications",{permission:d});"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.C.fc(),a.hn(),a.D=new window.Notification(g.T("YTP_PLAYLIST_UP_NEXT"),{body:d.title,icon:d.nd(c)}),a.F=a.P(a.D,"click",a.qQ),a.G.start())}x5(a);a.o.Gj(!1,b)},qya=function(a){u5.call(this,a,"subscribecard-endscreen");
var b=a.fa();this.A=new g.Y({H:"div",N:"ytp-subscribe-card",K:[{H:"img",N:"ytp-author-image",V:{src:b.profilePicture}},{H:"div",N:"ytp-subscribe-card-right",K:[{H:"div",N:"ytp-author-name",K:[b.author]},{H:"div",N:"html5-subscribe-button-container"}]}]});g.M(this,this.A);this.A.Da(this.element);this.B=new g.C_(g.T("YTP_SUBSCRIBE"),null,g.T("YTP_UNSUBSCRIBE"),null,!0,!1,b.Rl,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.B);this.B.Da(this.A.sa["html5-subscribe-button-container"]);this.hide()},
A5=function(a){var b=g.X(a),c=g.eJ||g.Ze?{style:"will-change: opacity"}:void 0,d=b.B&&!b.F,e=["ytp-videowall-still"];
b.experiments.g("web_player_video_wall_show_text")&&b.isMobile&&e.push("ytp-videowall-show-text");g.Y.call(this,{H:"a",ba:e,V:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{H:"div",N:"ytp-videowall-still-image",V:{style:"{{background}}"}},{H:"span",N:"ytp-videowall-still-info",K:[{H:"span",N:"ytp-videowall-still-info-bg",K:[{H:"span",N:"ytp-videowall-still-info-content",V:c,K:[{H:"span",N:"ytp-videowall-still-info-title",
K:["{{title}}"]},{H:"span",N:"ytp-videowall-still-info-author",K:["{{author_and_views}}"]},{H:"span",N:"ytp-videowall-still-info-live",K:[g.T("YTP_LIVE")]},{H:"span",N:"ytp-videowall-still-info-duration",K:["{{duration}}"]}]}]}]},{H:"span",ba:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{H:"span",N:"ytp-videowall-still-listlabel-icon"},g.T("YTP_PLAYLIST"),{H:"span",N:"ytp-videowall-still-listlabel-length",K:[" (",{H:"span",K:["{{playlist_length}}"]},")"]}]},{H:"span",
ba:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{H:"span",N:"ytp-videowall-still-listlabel-mix-icon"},g.T("YTP_MIX"),{H:"span",N:"ytp-videowall-still-listlabel-length",K:[" (50+)"]}]}]});this.B=d;this.o=a;this.A=null;this.U("click",this.C);this.U("keypress",this.D);g.X(a).aa&&(a=a.app.ca,b=this.element,g.jb(a.g,b),g.pb(a.g,b),c=String(a.G++),b.setAttribute("data-visual-id",c),g.Ue(this,(0,g.z)(a.F,a,b)))},B5=function(a){u5.call(this,a,"videowall-endscreen");
this.R=a;this.G=0;this.B=[];this.I=this.D=this.C=null;this.J=this.O=!1;this.F=new g.sF(this);g.M(this,this.F);this.L=new g.Vt(g.Da(g.R,this.element,"ytp-show-tiles"),0);g.M(this,this.L);var b=new g.Y({H:"button",ba:["ytp-button","ytp-endscreen-previous"],V:{"aria-label":g.T("YTP_PREVIOUS")},K:[g.kV()]});g.M(this,b);b.Da(this.element);b.U("click",this.XK,this);this.M=new g.MU({H:"div",N:"ytp-endscreen-content"});g.M(this,this.M);this.M.Da(this.element);b=new g.Y({H:"button",ba:["ytp-button","ytp-endscreen-next"],
V:{"aria-label":g.T("YTP_NEXT")},K:[g.lV()]});g.M(this,b);b.Da(this.element);b.U("click",this.WK,this);this.A=new v5(a);g.M(this,this.A);g.DU(this.o,this.A.element,4);this.hide()},C5=function(a){return g.EU(a.o)&&a.uq()&&!a.I},rya=function(a){return(0,g.H)(a.suggestions,function(a){return g.EY(a)})},D5=function(a){var b=a.Zs();
b!=a.O&&(a.O=b,a.o.T("autonavvisibility"))},E5=function(a){g.JU.call(this,a);
g.yG({});this.o=null;this.A=new g.sF(this);g.M(this,this.A);this.B=g.X(a);sya(a)?this.o=new B5(this.g):this.B.la?this.o=new qya(this.g):this.o=new u5(this.g);g.M(this,this.o);g.DU(this.g,this.o.element,4);this.nC();this.A.P(a,"videodatachange",this.nC,this);this.A.P(a,"crn_endscreen",this.yK,this);this.A.P(a,"crx_endscreen",this.zK,this)},sya=function(a){a=g.X(a);
return a.Id&&!a.la};
g.p(u5,g.gV);u5.prototype.create=function(){this.created=!0};
u5.prototype.destroy=function(){this.created=!1};
u5.prototype.uq=function(){return!1};
u5.prototype.Zs=function(){return!1};g.p(v5,g.Y);g.h=v5.prototype;g.h.hn=function(){this.D&&(this.G.stop(),this.Ea(this.F),this.F=null,this.D.close(),this.D=null)};
g.h.aB=function(){g.TU(this,g.dU(this.o))};
g.h.qQ=function(){window.focus();this.hn()};
g.h.hide=function(){g.Y.prototype.hide.call(this)};
g.h.pq=function(a){a=a||g.X(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min(g.XF()-this.I,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Qa()?z5(this,!0):this.A&&this.A.start()};
g.h.AQ=function(a){!g.Od(this.B.element,g.iF(a))&&g.rY(a,this.o)&&z5(this)};
g.h.sO=function(){g.fU(this.o,!0)};
g.h.PP=function(a){this.o.Qa();this.show();w5(this,a)};
g.h.vD=function(a){this.o.Qa();this.C&&this.C.fc().videoId==a.fc().videoId||pya(this,a)};
g.h.QP=function(){this.o.Qa();x5(this);this.hide()};
g.h.W=function(){x5(this);this.hn();g.Y.prototype.W.call(this)};g.p(qya,u5);g.p(A5,g.Y);A5.prototype.Vj=function(){var a=this.A.fc().videoId,b=this.A.getPlaylistId();g.m0(this.o.app,a,this.A.Ud,b,void 0,void 0,void 0)};
A5.prototype.C=function(a){g.HU(this.o,this.element);g.rY(a,this.o,this.B,this.A.Ud||void 0)&&this.Vj()};
A5.prototype.D=function(a){switch(a.keyCode){case 13:case 32:g.nF(a)||(this.Vj(),g.mF(a))}};g.p(B5,u5);g.h=B5.prototype;g.h.create=function(){u5.prototype.create.call(this);var a=this.o.fa();a&&(this.C=rya(a),this.D=a);this.vh();this.F.P(this.o,"appresize",this.vh);this.F.P(this.o,"videodatachange",this.YK);this.F.P(this.o,"autonavchange",this.Iz);this.F.P(this.o,"autonavcancel",this.VK);this.F.P(this.element,"transitionend",this.HR)};
g.h.destroy=function(){g.uF(this.F);g.We(this.B);this.B=[];this.C=null;u5.prototype.destroy.call(this);g.nq(this.element,"ytp-show-tiles");this.L.stop()};
g.h.uq=function(){return 1!=this.D.autonavState};
g.h.show=function(){u5.prototype.show.call(this);g.nq(this.element,"ytp-show-tiles");g.X(this.o).isMobile?g.Xt(this.L):this.L.start();(this.J||this.I&&this.I!=this.D.clientPlaybackNonce)&&g.fU(this.o,!1);var a=C5(this);g.EU(this.o)&&g.X(this.o).experiments.g("ui_logging")&&g.rU(this.o,"end",{cancelButtonShow:a?"1":"0",state:this.uq()?"enabled":"disabled"});a?(D5(this),2==this.D.autonavState?g.X(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.yi()?z5(this.A,!0):w5(this.A):3==this.D.autonavState&&
y5(this.A)):(g.fU(this.o,!0),D5(this))};
g.h.hide=function(){u5.prototype.hide.call(this);y5(this.A);D5(this)};
g.h.HR=function(a){g.iF(a)==this.element&&this.vh()};
g.h.vh=function(){if(this.C&&this.C.length){g.R(this.element,"ytp-endscreen-paginate");var a=g.Gh(this.element),b=a.width/a.height,c=96/54,d=2,e=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(d<f||e<k);){var q=d/2,r=e/2,v=d<=f-2&&n>=r*m,B=e<=k-2&&n>=q*m;if((q+1)/r*c/b>b/(q/(r+1)*c)&&B)n-=q*m,e+=2;else if(v)n-=r*m,d+=2;else if(B)n-=q*m,e+=2;else break}c=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=d)&&(c=!0);m=96*
d;n=54*e;b=m/n<b?a.height/n:a.width/m;b=Math.min(b,2);m*=b;n*=b;m*=g.Zc(a.width/m||1,1,1.21);n*=g.Zc(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.M.element;g.Fh(a,m,n);g.nh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});pya(this.A,this.C[0]);g.S(this.element,"ytp-endscreen-takeover",C5(this));D5(this);m+=4;n+=4;for(f=b=0;f<d;f++)for(k=0;k<e;k++)if(q=b,r=0,c&&f>=d-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(r=2):r=2),q=g.$c(q+this.G,l),0!=
r){v=this.B[b];v||(v=new A5(this.o),this.B[b]=v,a.appendChild(v.element));B=Math.floor(n*k/e);var E=Math.floor(m*f/d),I=Math.floor(n*(k+r)/e)-B-4,V=Math.floor(m*(f+r)/d)-E-4;g.uh(v.element,E,B);g.Fh(v.element,V,I);g.nh(v.element,"transitionDelay",(k+f)/20+"s");g.S(v.element,"ytp-videowall-still-mini",1==r);g.S(v.element,"ytp-videowall-still-large",2<r);r=v;q=this.C[q];r.A=q;oya(r,q,g.X(r.o),g.lq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");v=q.Ud;q=r.o;g.X(q).aa&&(q=q.app.ca,
r=r.element,v=v&&v.itct,B=r.getAttribute("data-visual-id"),g.jb(q.g,r),g.FU(q,"onLogServerVeCreated",{id:B,tracking_params:v}));b++}g.S(this.element,"ytp-endscreen-paginate",b<l);for(d=this.B.length-1;d>=b;d--)e=this.B[d],g.Gd(e.element),g.Ve(e);this.B.length=b}};
g.h.YK=function(){var a=this.o.fa();this.D!=a&&(this.G=0,this.C=rya(a),this.D=a,this.vh())};
g.h.WK=function(){this.G+=this.B.length;this.vh()};
g.h.XK=function(){this.G-=this.B.length;this.vh()};
g.h.HJ=function(){return!!this.A.A};
g.h.Iz=function(a){1==a?(this.J=!1,this.I=this.D.clientPlaybackNonce,x5(this.A),this.g&&this.vh()):(this.J=!0,this.g&&C5(this)&&(2==a?w5(this.A):3==a&&y5(this.A)))};
g.h.VK=function(a){if(a){for(a=0;a<this.B.length;a++)g.IU(this.R,this.B[a].element,!0);this.Iz(1)}else this.I=null,this.J=!1;this.vh()};
g.h.Zs=function(){return this.g&&C5(this)};g.p(E5,g.JU);g.h=E5.prototype;g.h.Dz=function(){var a=this.g.fa(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!sya(this.g)||b;a=g.AN(a,"ypc_module");var c=g.n0(this.g.app);return b&&!a&&!c};
g.h.Cz=function(){return this.o.Zs()};
g.h.EJ=function(){return this.Cz()?this.o.HJ():!1};
g.h.W=function(){g.zU(this.g,"endscreen");g.JU.prototype.W.call(this)};
g.h.load=function(){g.JU.prototype.load.call(this);this.o.show();g.X(this.g).la&&.01>Math.random()&&g.rU(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.JU.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.yK=function(a){this.Dz()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.zK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.nC=function(){g.zU(this.g,"endscreen");var a=Math.max(1E3*(this.g.fa().lengthSeconds-10),0);a=new g.yP(a,0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.yP(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.wU(this.g,[a,b])};g.fY.endscreen=E5;})(_yt_player);
