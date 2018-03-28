/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.jR=(0,D.t)();D.z.q(D.jR,D.z,"DvtAttrGroups");D.jR.prototype.get=(0,D.t)();
D.lR=function(){this.GQ=[]};D.z.q(D.lR,D.jR,"DvtDiscreteAttrGroups");D.lR.prototype.add=function(a,b,c){this.GQ.push({group:a,eKa:b,dca:c})};D.lR.prototype.get=function(a){if(a===D.o)return D.o;for(var b=0;b<this.GQ.length;b++)if(this.GQ[b].group==a)return this.GQ[b].dca;return D.o};
D.kR=function(a,b,c,d,e){this.Rj=a;this.mk=b;this.VCa=c?c:this.Rj;this.OCa=d?d:this.mk;this.RK=e;this.Rna=this.mk-this.Rj};D.z.q(D.kR,D.jR,"DvtContinuousAttrGroups");D.kR.prototype.get=function(a){if((0,window.isNaN)(a)||a===D.o)return D.o;a=0<this.Rna?(a-this.Rj)/this.Rna:0.5;a=window.Math.max(window.Math.min(a,1),0);a*=this.RK.length-1;return a===window.Math.round(a)?this.RK[a]:D.K.vM(this.RK[window.Math.floor(a)],this.RK[window.Math.ceil(a)],a-window.Math.floor(a))};D.kR.prototype.RR=(0,D.x)("VCa");
D.mR=(0,D.t)();D.z.q(D.mR,D.z,"DvtLegendAttrGroupsRenderer");D.mR.nxa=0.4;D.mR.Lga=1;D.mR.Nga=50;D.mR.Mga=10;D.mR.n3=5;D.mR.lxa=11;D.mR.bha="#636363";D.mR.aOa="#333333";D.mR.tca=function(a,b,c,d,e,f,g){var h=D.o;f&&(f instanceof D.kR?h=D.mR.gEa(a,b,c,d,f,g):f instanceof D.lR&&(h=D.mR.hEa(a,c,d,e,f,g)));return h};
D.mR.gEa=function(a,b,c,d,e,f){var g=(0,D.G)(a),h=D.mR.Mga/2+D.mR.Lga,j=new D.D(a);c.k(j);c=e.RR();var l=new D.Nf(a,c,0,h);l.Na(f.HD);l.Jg();j.k(l);var m=new D.F(a,0,D.mR.Lga,D.mR.Nga,D.mR.Mga),n=g?e.RK.slice(0).slice().reverse():e.RK.slice(0);m.P(new D.lg(0,n));f.borderColor&&m.Ya(f.borderColor);j.k(m);n=D.mR.Nga+D.mR.n3;e=e.OCa;a=new D.Nf(a,e,0,h);a.Na(f.HD);a.Jg();j.k(a);g?(f=a.Kb().e+D.mR.n3,m.N(f),l.ha(f+n)):(f=l.Kb().e+D.mR.n3,m.N(f),a.ha(f+n));b.Da(m,new D.Yj(c+" - "+e));j.G().e>d&&(j.removeChild(l),
j.removeChild(a),m.N(0));return j};D.mR.hEa=function(a,b,c,d,e,f){var g=new D.D(a);b.k(g);b=[];e=e.GQ.slice(0);for(var h=0;h<e.length;h++){var j=e[h];b.push({text:j.eKa,color:j.dca.color,pattern:j.dca.pattern,borderColor:f.borderColor})}f={sections:[{items:b}],orientation:"horizontal",layout:{outerGapWidth:0,outerGapHeight:0},textStyle:f.HD.toString()};b=(0,D.vo)(a);b.setId(D.o);g.k(b);d=b.Ap(f,c,d*D.mR.nxa);b.U(f,c,d.g);c=b.Ev();a=new D.F(a,0,0,c.e,d.g);(0,D.Li)(a);g.Ua(a,0);return g};
D.At=function(a){this.Init("breadcrumbsDrill");this.ib=a};D.z.q(D.At,D.$i,"DvtBreadcrumbsDrillEvent");D.At.prototype.getId=(0,D.x)("ib");
D.Js=function(a,b,c,d){this.Init(a,b,c,d)};D.z.q(D.Js,D.D,"DvtBreadcrumbs");D.y=D.Js.prototype;D.y.Init=function(a,b,c,d){D.Js.u.Init.call(this,a);this.Qca(d);this.hb=new D.nR(this,a,b,c);this.hb.We(this);this.setId("breadcrumbs1000"+window.Math.floor(1E9*window.Math.random()));this.XB=-1;this.YV=this.f7=D.o};D.y.Qca=function(a){this.je=D.oR.wj(a)};D.y.U=function(a,b){this.wa=a?D.Jl.ea(a):this.wa;this.Ql();this.YV=D.o;D.pR.U(this,this,b)};D.y.Ah=(0,D.x)("hb");
D.y.qc=function(){var a=this.XB;this.XB=-1;this.bA(a,this.XB)};D.y.bA=function(a,b){var c=this.f7,d=D.o,e=(0,D.ou)(this,b);if(e){var f=(0,D.Xj)(this.hb,e);f&&f.xi&&f.xi()?(d=this.j(),f=e.G(),e=e.Ea(),this.f7=d=new D.Jg(d,this,f,e)):this.f7=D.o}c&&c.zo();d&&d.show()};D.ou=function(a,b){var c=a.YV;return 0>b||!c||b>=c.length?D.o:c[b]};D.mu=function(a,b){for(var c=a.YV,d=0;d<c.length;d++)if(c[d]==b)return d};
D.oR={};D.z.q(D.oR,D.z,"DvtBreadcrumbsDefaults");D.oR.g3={labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;",disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;",GU:2,wya:"\x3e"};D.oR.wj=function(a){var b=D.oR.jP(a);return a?D.Jl.Id(a,b):b};D.oR.jP=function(){return D.Jl.ea(D.oR.g3)};D.oR.Aaa=function(a,b){return window.Math.ceil(b*a.layout.gapRatio)};
D.nR=function(a,b,c,d){this.Init(b,c,d);this.Um=a};D.z.q(D.nR,D.hk,"DvtBreadcrumbsEventManager");D.nR.prototype.Ih=function(a){D.nR.u.Ih.call(this,a);(0,D.qR)(this,(0,D.Xj)(this,a.target))};D.nR.prototype.ys=function(a){(0,D.qR)(this,(0,D.Xj)(this,a.target))};D.qR=function(a,b){if(b&&b instanceof D.rR&&b.xi()){var c=new D.At(b.getId());a.$g(c,a.Um)}};
D.nR.prototype.Nq=function(a){var b=D.k,c=a.keyCode;if(9==c){var c=this.Um,d=c.XB,e;e=d;var f=!a.shiftKey;e=-1==e?f?0:c.wa.DA.length-2:f?e==c.wa.DA.length-2?-1:++e:0==e?-1:--e;c.XB=e;c.bA(d,c.XB);c=c.XB;-1==c?b=D.p:this.Aw((0,D.ou)(this.Um,c))}else 13==c&&(0,D.qR)(this,(0,D.Xj)(this,(0,D.ou)(this.Um,this.Um.XB)));b&&(0,D.ti)(a);return b};
D.rR=function(a,b){this.Init();this.ib=a;this.kO=D.p;this.qh=b};D.z.q(D.rR,D.Yj,"DvtBreadcrumbsPeer");D.rR.prototype.getId=(0,D.x)("ib");D.rR.prototype.xi=(0,D.x)("kO");D.rR.prototype.Nca=(0,D.v)("kO");D.rR.prototype.xa=(0,D.x)("qh");
D.pR={};D.z.q(D.pR,D.z,"DvtBreadcrumbsRenderer");D.pR.DB=3;D.pR.U=function(a,b,c){for(var d=a.j(),e=(a.wa?a.wa:{}).DA?(a.wa?a.wa:{}).DA:[],f=a.je,g=a.Ah(),h=[],j=[],l=0;l<e.length;l++){var m=e[l];if(m){var n=D.pR.jF(d,m.label?m.label:"",f,l<e.length-1);h.push(n);m=new D.rR(m.id,n);g.Da(n,m);j.push(m);l<e.length-1&&m.Nca(D.k)}}a.YV=h;(0,D.G)(d)?D.pR.QDa(a,b,c,h,j):D.pR.PDa(a,b,c,h,j)};
D.pR.TV=function(a,b,c){b=new D.Nf(a,b,0,0);b.ua(D.p);b.Na(c);var d=(0,D.Ze)(c,"padding-top"),e=(0,D.Ze)(c,"padding-right"),f=(0,D.Ze)(c,"padding-bottom"),g=(0,D.Ze)(c,"padding-left"),h=(0,D.zg)(a,b);a=new D.F(a,0,0,h.e+g+e,h.g+d+f);(0,D.Li)(a);a.Na(c);(0,D.Ik)(b,g,d);a.k(b);return a};
D.pR.jF=function(a,b,c,d){if(d&&(c.Jba||c.Iba)){var e=new D.I(c.HD);d=new D.I(c.Jba);c=new D.I(c.Iba);e=D.pR.TV(a,b,e);d=D.pR.TV(a,b,d);c=D.pR.TV(a,b,c);a=new D.Re(a,e,d,c);a.ld("link");a.Mb("label",b)}else d=new D.I(d?c.HD:c.$pa),(0,D.Ze)(d,"padding-left")||(0,D.Ze)(d,"padding-right")||(0,D.Ze)(d,"padding-top")||(0,D.Ze)(d,"padding-bottom")?a=D.pR.TV(a,b,d):(a=new D.Nf(a,b,0,0),a.Na(d));return a};D.pR.kka=function(a){if(a instanceof D.Re)return a=a.Wl.la(0),a.Ee();a instanceof D.F&&(a=a.la(0));return a.Ee()};
D.pR.jpa=function(a,b){if(a instanceof D.Re){var c=a.Wl.la(0);D.af.Vb(c,window.Math.max(b-c.V(),0),window.Infinity,c.getParent());c=a.Gj.la(0);D.af.Vb(c,window.Math.max(b-c.V(),0),window.Infinity,c.getParent());c=a.Ui.la(0);D.af.Vb(c,window.Math.max(b-c.V(),0),window.Infinity,c.getParent())}else a instanceof D.F?(c=a.la(0),D.af.Vb(c,window.Math.max(b-c.V(),0),window.Infinity,c.getParent())):D.af.Vb(a,b,window.Infinity,a.getParent())};
D.pR.PDa=function(a,b,c,d,e){for(var f=a.je,g=a.Ah(),h=[],j=0,l=0;l<d.length;l++){b.k(d[l]);var m=d[l].G();h[l]=m;j=window.Math.max(m.g,j);b.removeChild(d[l])}for(var n=0,l=0;l<d.length;l++){b.k(d[l]);m=h[l];(0,D.Ik)(d[l],n,0.5*(j-m.g));if((0,D.Mf)()){var q=new D.F(b.j(),-D.pR.DB,-D.pR.DB,m.e+2*D.pR.DB,m.g+2*D.pR.DB);(0,D.Li)(q);d[l].k(q);l<e.length&&g.Da(q,e[l])}if(n+m.e>c){a=D.pR.kka(d[l]);D.pR.jpa(d[l],c-n);l<e.length?e[l].jw(a):g.Da(d[l],new D.Yj(a));break}else n+=m.e+f.GU;if(l<d.length-1){m=
D.pR.yma(a);b.k(m);q=m.G();(0,D.Ik)(m,n,0.5*(j-q.g));q=q.e;if(n+q>c){b.removeChild(m);break}n+=q+f.GU}}};
D.pR.QDa=function(a,b,c,d,e){for(var f=a.je,g=a.Ah(),h=0;h<d.length;h++){b.k(d[h]);var j=d[h].G();if((0,D.Mf)()){var l=new D.F(b.j(),-D.pR.DB,-D.pR.DB,j.e+2*D.pR.DB,j.g+2*D.pR.DB);(0,D.Li)(l);d[h].k(l);h<e.length&&g.Da(l,e[h])}if(0>c-j.e){a=D.pR.kka(d[h]);D.pR.jpa(d[h],c);d[h].N(0);h<e.length?e[h].jw(a):g.Da(d[h],new D.Yj(a));break}else d[h].N(c-j.e),c-=j.e+f.GU;if(h<d.length-1)if(j=D.pR.yma(a),b.k(j),l=j.G().e,0>c-l){b.removeChild(j);break}else j.N(c-l),c-=l+f.GU}};
D.pR.yma=function(a){var b=a.je;a=new D.Nf(a.j(),b.wya,0,0);a.Na(new D.I(b.HD));return a};
D.yR=function(a,b){this.Init("dvtPanelDrawerEvent");this.rm=a;this.zya=b};D.z.q(D.yR,D.$i,"DvtPanelDrawerEvent");D.yR.prototype.Dj=(0,D.x)("rm");
D.is=function(a,b,c,d){this.Init(a,b,c,d)};D.z.q(D.is,D.D,"DvtPanelDrawer");
D.is.prototype.Init=function(a,b,c,d){D.is.u.Init.call(this,a,D.o,"panelDrawer"+d);this.oFa=d;this.ra=new D.sR(a,b,c);this.ra.We(this);this.ra.lv.push(D.is);this.ra.Da(this,this);(0,D.Mf)()||(0,D.ql)(this.ra,new D.tR(this.ra,this));this.pb=b;this.ta=c;this.Ax={};this.Ir=[];this.Ni=this.Rh=window.Number.MAX_VALUE;this.Er=5;this.SP=0;this.XO;this.Iz;this.dq=this.Gi=D.p;this.ja;this.WI;this.Qf;this.V4;this.Qj;this.hk;this.io={};this.Pu="left";this.aC="top";this.zz=D.p;this.da=D.o;c&&(this.da=c.$r());
this.em=(0,D.Eu)(this.da,"backgroundAlpha",1);this.Os=(0,D.Eu)(this.da,"border-color","#bbc7d0");this.Oj=(0,window.parseInt)((0,D.Eu)(this.da,"border-radius",2));this.$y=(0,D.Eu)(this.da,"background-color","#ffffff");this.hia=(0,D.Eu)(this.da,"tab-color-inactive","#dee4e7");this.iia=(0,D.Eu)(this.da,"tab-border-color-inactive","#c1cede");(0,D.Ti)(this);this.kr=10};D.ms=function(a,b,c,d,e,f,g){a.Ax[g]={panel:b,iconUp:c,iconOver:d,iconDown:e,tooltip:f};a.Ir.push(g);a.SP=15+42*a.Ir.length};D.y=D.is.prototype;
D.y.hu=(0,D.v)("Rh");D.y.QR=function(){return this.Rh-2*this.kr};D.y.eT=(0,D.v)("Ni");D.y.aM=function(){return this.Ni-2*this.kr};D.y.sN=function(a){return this.Ax[a].icon};D.vs=function(a,b,c,d){a.Iz=a.XO;a.XO=b;a.lb()&&(a.cN(),(0,D.uR)(a,b,c,d));a.Iz=D.o};D.hs=function(a){var b=a.XO;return!b&&0<a.Ir.length?a.Ir[0]:b};
D.is.prototype.mf=function(a,b,c){if(!this.dq){var d=this.Gi;this.Gi=a;if(d!=a)if(this.dq=D.k,a){(0,D.vR)(this,(0,D.hs)(this));a=-(0.8*this.Qf.getWidth());"right"==this.Pu&&(a=-a,this.Qf.ha((0.8-1)*this.Qf.getWidth()));if(b)this.ja.N(a),c&&c(),this.dq=D.p;else if(b=new D.Zr(this.j(),0.25),b.Rl(D.yD),(0,D.T)(b,"typeNumber",this.ja,this.ja.V,this.ja.N,a),c&&(0,D.Al)(b,c),b){var e=this;(0,D.Al)(b,function(){e.dq=D.p});b.play()}this.cN()}else if(b)this.ja.N(0),this.Tfa(),c&&c(),this.cN(),this.dq=D.p;
else{b=new D.Zr(this.j(),0.25);b.Rl(D.AD);(0,D.T)(b,"typeNumber",this.ja,this.ja.V,this.ja.N,0);(0,D.Al)(b,this.Tfa,this);(0,D.Al)(b,this.cN,this);c&&(0,D.Al)(b,c);var f=this;(0,D.Al)(b,function(){f.dq=D.p});b.play()}}};D.is.prototype.lb=(0,D.x)("Gi");
D.is.prototype.Wq=function(){this.ja||(this.ja=new D.D(this.j(),"pd_contentPane"),this.k(this.ja),this.WI=new D.D(this.j(),"pdcp_activeContent"),this.ja.k(this.WI));if(!this.zz){var a=-42;"right"==this.Pu&&(a=0);var b=15;if("top"==this.aC)for(var c=0;c<this.Ir.length;c++){var d=this.Ir[c],d=(0,D.wR)(this,d);(0,D.Ik)(d,a,b);b+=42}else if("bottom"==this.aC){b=-57;for(c=this.Ir.length-1;0<=c;c--)d=this.Ir[c],d=(0,D.wR)(this,d),(0,D.Ik)(d,a,b),b-=42}}};
D.wR=function(a,b){var c,d;switch(a.Pu){case "right":d=["M",0,0,"L",42-a.Oj,0,"A",a.Oj,a.Oj,0,0,1,42,a.Oj,"L",42,42-a.Oj,"A",a.Oj,a.Oj,0,0,1,42-a.Oj,42,"L",0,42];break;default:d=["M",42,0,"L",a.Oj,0,"A",a.Oj,a.Oj,0,0,0,0,a.Oj,"L",0,42-a.Oj,"A",a.Oj,a.Oj,0,0,0,a.Oj,42,"L",42,42]}c=d;d=new D.xR(a.j(),c,b,a);(0,D.Ti)(d);d.setCursor("pointer");a.ja.Ua(d,0);d.va(a.hia,a.em);d.Ya(a.iia,1,1);var e=a.Ax[b],f=new D.Vh(a.j(),c);(0,D.Li)(f);(0,D.Ik)(e.iconUp,9,9);f.k(e.iconUp);var g=new D.Vh(a.j(),c);(0,D.Li)(g);
(0,D.Ik)(e.iconOver,9,9);g.k(e.iconOver);c=new D.Vh(a.j(),c);(0,D.Li)(c);(0,D.Ik)(e.iconDown,9,9);c.k(e.iconDown);f=new D.Re(a.j(),f,g,c);f.bF=D.k;e.icon=f;d.k(f);a.io[b]=d;a.ra.Da(d,{Ie:function(){a.Iz=(0,D.hs)(a);a.XO=b;var c=a.io[b].Ic(),d=function(){var b=a.j().jd();b&&b.Mc()};a.lb()?a.Iz==b?a.mf(D.p,D.p,d):(a.cN(),(0,D.uR)(a,b,D.p)):(a.mf(D.k,D.p,d),a.kE());a.Iz=D.o;a.Dc(new D.yR(a.lb()?"show":"hide",a.XO));c&&(0,D.dn)(a.j(),a)},ye:function(){return a.Ax[b].tooltip}});d.Cq();return d};
D.uR=function(a,b,c,d){var e=D.o;c||(e=new D.Zr(a.j(),0.25));a.Iz&&(c=a.Ax[a.Iz].panel)&&a.Ws.removeChild(c);(0,D.vR)(a,b,e);e?(a.kE(),d&&(0,D.Al)(e,d),e.play()):d&&d()};D.is.prototype.Tfa=function(){this.Qf&&(this.V4=D.o,this.Ws.Ql(),(0,D.fA)(this.WI),this.Qf.Y(),this.WI.removeChild(this.Qf),this.hk=this.Qj=this.Ws=this.Qf=D.o)};
D.vR=function(a,b,c){a.Qf||(a.Qf=new D.F(a.j(),0,0,1,1,"pdcp_expandedContent"),a.WI.k(a.Qf),a.Qf.va(a.$y,a.em),a.Ws=new D.D(a.$),a.Qf.k(a.Ws),(0,D.Ik)(a.Ws,a.kr,a.kr));var d=a.Ax[b].panel;if(d){a.Ws.k(d);if(a.Iz){var e=a.Ax[a.Iz].panel;e&&e.eb("dvtResizeEvent",a.Rea,D.p,a)}d.oa("dvtResizeEvent",a.Rea,D.p,a)}a.Qj||(a.Qj=new D.Vh(a.j(),["M",0,0,"L",1,1],"pdcp_expandedBorder"),a.hk=new D.Vh(a.j(),["M",0,0,"L",1,1],"pdcp_expandedBorderResizable"),a.Qf.k(a.Qj),a.Qf.k(a.hk),a.Qj.Ya(a.Os,1),a.Qj.P(D.o),
a.hk.Ya(a.Os,1),a.hk.P(D.o),(0,D.Ti)(a.Qj),(0,D.Ti)(a.hk));var f=a.Ax[b].panel,d=2*a.kr,e=2*a.kr,g=0,h=0;f&&(f=f.vm(),d=(0,D.zR)(a,f.e),e=(0,D.ws)(a,f.g),g=f.x,h=f.y);(0,D.AR)(a,b,c,d,e,g,h)};D.is.prototype.Rea=function(a){var b=new D.Zr(this.j(),0.25),c=a.getWidth(),d=a.getHeight(),c=(0,D.zR)(this,c),d=(0,D.ws)(this,d),e=a.pa()?a.pa():0;a=a.qa()?a.qa():0;(0,D.AR)(this,(0,D.hs)(this),b,c,d,e,a);b.play()};
D.AR=function(a,b,c,d,e,f,g){var h=a.Ax[b].panel;c?(0,D.T)(c,"typeNumber",h,h.V,h.N,-f):h.N(-f);c?(0,D.T)(c,"typeNumber",h,h.R,h.W,-g):h.W(-g);f=new D.B(a.kr,a.kr,d-2*a.kr,e-2*a.kr);g=1.25*d;c?((0,D.T)(c,"typeNumber",a.Qf,a.Qf.getWidth,a.Qf.sa,g),(0,D.T)(c,"typeNumber",a.Qf,a.Qf.getHeight,a.Qf.Ia,e),(0,D.T)(c,"typeRectangle",a,a.hBa,a.yoa,f),"left"==a.Pu?(0,D.T)(c,"typeNumber",a.ja,a.ja.V,a.ja.N,-d):"right"==a.Pu&&((0,D.T)(c,"typeNumber",a.ja,a.ja.V,a.ja.N,d),(0,D.T)(c,"typeNumber",a.Qj,a.Qj.V,a.Qj.N,
d),(0,D.T)(c,"typeNumber",a.hk,a.hk.V,a.hk.N,d),(0,D.T)(c,"typeNumber",a.Qf,a.Qf.V,a.Qf.N,-d)),"bottom"==a.aC&&((0,D.T)(c,"typeNumber",a.Qj,a.Qj.R,a.Qj.W,e),(0,D.T)(c,"typeNumber",a.hk,a.hk.R,a.hk.W,e),(0,D.T)(c,"typeNumber",a.Qf,a.Qf.R,a.Qf.W,-e))):(a.Qf.sa(g),a.Qf.Ia(e),"right"==a.Pu&&(a.Qf.N(-d),a.Qj.N(d),a.hk.N(d)),"bottom"==a.aC&&(a.Qf.W(-e),a.Qj.W(e),a.hk.W(e)),a.yoa(f));f=a.io[b];var j;b=d;"right"==a.Pu&&(b=-d);"top"==a.aC?f?(j=["M",0,0,"L",0,f.R(),"M",0,f.R()+42],d=a.io[a.Ir[a.Ir.length-1]],
j.push("L",0,d.R()+42),a.Qj.Go(j),j=["M",0,d.R()+42,"L",0,e,"L",1.25*b,e]):(j=["M",0,0,"L",0,e,"L",b,e],a.Qj.Go(j)):"bottom"==a.aC&&(f?(j=["M",0,0,"L",0,f.R()+42,"M",0,f.R()],d=a.io[a.Ir[0]],j.push("L",0,d.R()),a.Qj.Go(j),b*=1.25,j=["M",0,d.R(),"L",0,-e,"L",b,-e]):(j=["M",0,0,"L",0,-e,"L",b,-e],a.Qj.Go(j)));c?(0,D.T)(c,"typePath",a.hk,a.hk.cH,a.hk.Go,j):a.hk.Go(j)};
D.is.prototype.yoa=function(a){if(this.Ws&&a){var b=new D.Cg("pdcp"+this.oFa);(0,D.Eg)(b,a.x,a.y,a.e,a.g);(0,D.Fg)(this.Ws,b)}this.V4=a};D.is.prototype.hBa=(0,D.x)("V4");D.zR=function(a,b){var c=b+2*a.kr;if((a.Er||0==a.Er)&&c<a.Er)c=a.Er;a.Rh&&c>a.Rh&&(c=a.Rh);return c};D.ws=function(a,b){var c=b+2*a.kr;if((a.SP||0==a.SP)&&c<a.SP)c=a.SP;a.Ni&&c>a.Ni&&(c=a.Ni);return c};D.BR=function(a,b){if(a.Qf){var c=a.Qf.kc().ea();c.D(b);a.Qf.P(c)}for(var d in a.io){var e=a.io[d];e&&(c=e.kc().ea(),c.D(b),e.P(c))}};
D.CR=function(a){if(a.Qj){var b=a.Qj.dc().ea();b.D(1);a.Qj.ba(b)}a.hk&&(b=a.hk.dc().ea(),b.D(1),a.hk.ba(b));for(var c in a.io){var d=a.io[c];d&&(b=d.dc().ea(),b.D(1),d.ba(b))}};D.y=D.is.prototype;D.y.P$=function(){this.ua(D.p);(0,D.BR)(this,1);(0,D.CR)(this);this.Ws&&this.Ws.D(1);for(var a in this.io){var b=this.sN(a);b&&b.D(1)}};D.y.O$=function(){this.ua(D.k);(0,D.BR)(this,this.em);(0,D.CR)(this);this.Ws&&this.Ws.D(1);for(var a in this.io){var b=this.sN(a);b&&b.D(1)}this.Vp(D.o)};D.y.xs=function(){this.kE()};
D.y.Vp=function(){this.YE||this.J0()};D.y.kE=function(){(0,D.BR)(this,1)};D.y.J0=function(){(0,D.BR)(this,this.em)};D.y.cN=function(){for(var a in this.io){var b=this.io[a];b&&(a==(0,D.hs)(this)&&this.lb()?(b.va(this.$y,this.em),b.Ya(this.Os,1),b.mf(D.k)):(b.va(this.hia,this.em),b.Ya(this.iia,1),b.mf(D.p)));var c=this.lb()&&a==(0,D.hs)(this),d=this.sN(a);d&&(0,D.th)(d,c);c?this.WI.k(b):this.ja.Ua(b,0)}};D.ks=function(a,b){if(!a.K7||a.K7<b)a.K7=b};
D.is.prototype.G=function(a){a=D.is.u.G.call(this,a);a.e/=1.25;return a};D.is.prototype.Ah=(0,D.x)("ra");
D.xR=function(a,b,c,d){this.Init(a,b,c,d)};D.z.q(D.xR,D.Vh,"DvtPanelDrawerTab");D.y=D.xR.prototype;D.y.Init=function(a,b,c,d){D.xR.u.Init.call(this,a,b,"pdcp_tab_"+c);this.Cb=d;this.LF=D.p;this.JDa=c};D.y.Zj=function(a){var b=a.keyCode;if(13==b||32==b){var b=this.Cb.Ah(),c=(0,D.ef)(this,new D.H(0,0));a=D.ff.PL(a,b.$,c.x,c.y);a.target=this;b.FI(a)}};D.y.lb=(0,D.x)("LF");D.y.mf=function(a){this.LF!=a?(this.LF=a,this.Zca()):this.LF=a};
D.y.nc=function(){var a=[];a.push(this.lb()?(0,D.O)("DvtUtilBundle","STATE_EXPANDED"):(0,D.O)("DvtUtilBundle","STATE_COLLAPSED"));return(0,D.Hk)(this.Cb.Ax[this.JDa].tooltip,a)};D.y.Cq=function(){this.ld("button");(0,D.df)()||this.Mb("label",this.nc())};D.y.Zca=function(){(0,D.df)()||this.Mb("label",this.nc())};D.y.Ye=function(a){return this.G(a)};D.y.Vj=function(){return this.Aa()};D.y.Be=function(){this.Ub=D.k;this.nm||this.VV();this.nm.show();(0,D.Ig)(this.$,this)};
D.y.qc=function(){this.Ub=D.p;this.nm||this.VV();this.nm.zo()};D.y.Ic=(0,D.x)("Ub");D.y.Yd=function(a){return this.Cb.Ah().yg.Yd(this,a)};D.y.VV=function(){var a=this.G();this.nm=new D.Jg(this.j(),this,new D.B(a.x+1,a.y+1,a.e-2,a.g-2),D.o,D.o,D.k)};
D.sR=function(a,b,c){this.Init(a,b,c)};D.z.q(D.sR,D.hk,"DvtPanelDrawerEventManager");D.y=D.sR.prototype;D.y.Ih=function(a){var b=(0,D.Xj)(this,(0,D.bn)(a));D.sR.u.Ih.call(this,a);b&&(b.Ie&&b.Ie(a),a.stopPropagation())};D.y.xy=function(a){var b=(0,D.Xj)(this,(0,D.bn)(a));b&&(b.wi&&(b.wi()&&b.Up)&&b.Up(a),a.stopPropagation())};D.y.By=function(a){D.sR.u.By.call(this,a);var b=(0,D.Xj)(this,(0,D.bn)(a));b&&b.xs&&b.xs(a)};
D.y.Ay=function(a){D.sR.u.Ay.call(this,a);var b=(0,D.Xj)(this,(0,D.bn)(a));b&&b.Vp&&b.Vp(a)};D.y.oB=function(a){var b=(0,D.Xj)(this,(0,D.bn)(a));D.sR.u.oB.call(this,a);b&&(b.Ie&&b.Ie(a),a.stopPropagation())};
D.tR=function(a,b){this.Init(a,b)};D.z.q(D.tR,D.on,"DvtPanelDrawerKeyboardHandler");D.tR.prototype.Init=function(a,b){D.tR.u.Init.call(this,a);this.Cb=b};D.tR.prototype.Hj=function(a){var b=a.keyCode,c=this.ra.Od();return 9==b?(b=D.o,(0,D.ti)(a),b=c?c:this.Cb.io[this.Cb.Ir[0]]):13==b||32==b?(c.Zj(a),D.o):D.tR.u.Hj.call(this,a)};
D.tR.prototype.Yd=function(a,b){if(!(40==b.keyCode||38==b.keyCode))return a;for(var c=a,d=40==b.keyCode?D.k:D.p,e=this.Cb.Ir,f=-1,g=0;g<e.length;g++)if(a==this.Cb.io[e[g]]){f=d?g==e.length-1?-1:g+1:0==g?-1:g-1;break}0<=f&&(c=this.Cb.io[e[f]]);return c};
D.TA=function(a,b,c,d,e,f,g){this.Init(a,b,c,d,e,f,g)};D.z.q(D.TA,D.D,"DvtAccordion");D.TA.prototype.Init=function(a,b,c,d,e,f,g){D.TA.u.Init.call(this,a,D.o,b);this.cn=f;this.da=(new D.UQ).wj(g);this.pY={};this.qv=[];this.Rh=c;this.Er=0;this.Ni=d;this.bV=this.X3=D.p;this.ra=e};D.YA=function(a,b,c,d,e){e||(e="accordion_"+b.replace(/ /g,"_")+window.Math.floor(1E9*window.Math.random()));b=new D.dB(a.j(),c,b,d,D.k,a,a.ra,e,a.cn,a.da);a.pY[e]=b;a.qv.push(e);a.k(b)};
D.TA.prototype.U=function(){for(var a=(0,D.ZA)(this),b=D.p,c=0;c<this.qv.length;c++){var d=(0,D.VQ)(this,c);d.U(a);b&&!this.bV&&d.setActive(D.p);d.xr&&d.KF&&(b=D.k)}!b&&(0<this.qv.length&&!this.X3)&&(0,D.VQ)(this,0).setActive(D.k);(0,D.WQ)(this)};D.TA.prototype.eT=(0,D.v)("Ni");D.TA.prototype.hu=(0,D.v)("Rh");
D.TA.prototype.update=function(a){a=this.pY[a];var b=a.xr;if(b){if(b)if(a.KF)if(this.X3)b=D.k;else{for(var c=0,d=0;d<this.qv.length;d++)b=(0,D.VQ)(this,d),b.xr&&c++;b=1<c}else b=D.p;b&&a.setActive(D.p)}else{if(!this.bV)for(b=0;b<this.qv.length;b++)(0,D.VQ)(this,b).setActive(D.p);a.setActive(D.k)}(0,D.WQ)(this)};
D.ZA=function(a){if(!a.ima){for(var b=0,c=a.da.paddingX,d=0;d<a.qv.length;d++){var e=(0,D.VQ)(a,d),f;f=e;if(!f.qL){var g=new D.Nf(f.$,f.Ri);g.Na(f.Yoa);if(g=g.Kb())g.e=g.e+f.Vka+f.wFa;f.qL=g}f=f.qL;f.e>b&&(b=f.e);e=e.Ev().e+2*c;e>b&&(b=e)}b=window.Math.min(b,a.Rh);b=window.Math.max(b,a.Er);a.ima=b}return a.ima};
D.TA.prototype.zaa=function(){if(!this.Ni){for(var a=0,b=0,c=0;c<this.qv.length;c++){var d=(0,D.VQ)(this,c),e=d,f=D.o;0>e.Tf(e.kh)?(e.k(e.kh),e.kh.N(e.NX),e.kh.W(e.GF+e.OX),f=e.vm(),e.removeChild(e.kh)):f=e.vm();e=f.g;if(d.KF&&e>a)a=e;else if(!d.KF||this.bV)b+=e}this.Ni=a+b}return this.Ni};D.VQ=function(a,b){return 0<=b&&b<a.qv.length?a.pY[a.qv[b]]:D.o};
D.WQ=function(a){for(var b=0,c=0;c<a.qv.length;c++){var d=(0,D.VQ)(a,c);d.W(b);d.xr?(d.expand(),b+=d.vm().g,b+=a.da.paddingY):(d.collapse(),b+=a.da.sectionHeader.headerHeight)}b=a.vm();a.Dc(new D.pC(b.e,b.g,0,0))};D.TA.prototype.k_=function(){for(var a=[],b=0;b<this.qv.length;b++)a.push((0,D.VQ)(this,b));return a};
D.dB=function(a,b,c,d,e,f,g,h,j,l){this.Init(a,b,c,d,e,f,g,h,j,l)};D.z.q(D.dB,D.D,"DvtAccordionSection");D.y=D.dB.prototype;
D.y.Init=function(a,b,c,d,e,f,g,h,j,l){D.dB.u.Init.call(this,a,D.o,h);this.sg=f;this.cn=j;this.Ri=c;this.ib=h;this.kh=b;this.Lu=this.Ru=D.o;this.xr=(this.KF=e)?d:D.k;this.ra=g;this.da=l;this.GF=this.da.sectionHeader.headerHeight;this.NX=this.da.paddingX;this.OX=this.da.paddingY;this.Yoa=this.da.sectionHeader.styleEna;this.Vka=this.da.sectionHeader.imageWidth;this.mCa=this.da.sectionHeader.imageHeight;this.wFa=this.da.sectionHeader.textPadding};D.y.getId=(0,D.x)("ib");D.y.Sx=(0,D.x)("Ri");
D.y.setActive=(0,D.v)("xr");D.y.Ev=function(){var a=D.o;0>this.Tf(this.kh)?(this.k(this.kh),a=this.kh.G(),this.removeChild(this.kh)):a=this.kh.G();return a};
D.y.U=function(a){var b=this.GF;if(this.KF){var c,d,e;this.cn.B?(c=(0,D.ZQ)(this,0,this.cn.B("sectionExpEna"),this.Ri,a,b),d=(0,D.ZQ)(this,1,this.cn.B("sectionExpOvr"),this.Ri,a,b),e=(0,D.ZQ)(this,2,this.cn.B("sectionExpDwn"),this.Ri,a,b)):(c=(0,D.ZQ)(this,0,this.cn.sectionExpEna,this.Ri,a,b),d=(0,D.ZQ)(this,1,this.cn.sectionExpOvr,this.Ri,a,b),e=(0,D.ZQ)(this,2,this.cn.sectionExpDwn,this.Ri,a,b));this.Ru=new D.Re(this.$,c,d,e);this.Ru.ld("button");c=(0,D.Hk)(this.Ri,[(0,D.O)("DvtUtilBundle","STATE_EXPANDED")]);
this.Ru.Mb("label",c);this.cn.B?(c=(0,D.ZQ)(this,0,this.cn.B("sectionColEna"),this.Ri,a,b),d=(0,D.ZQ)(this,1,this.cn.B("sectionColOvr"),this.Ri,a,b),e=(0,D.ZQ)(this,2,this.cn.B("sectionColDwn"),this.Ri,a,b)):(c=(0,D.ZQ)(this,0,this.cn.sectionColEna,this.Ri,a,b),d=(0,D.ZQ)(this,1,this.cn.sectionColOvr,this.Ri,a,b),e=(0,D.ZQ)(this,2,this.cn.sectionColDwn,this.Ri,a,b));this.Lu=new D.Re(this.$,c,d,e);this.Lu.ld("button");c=(0,D.Hk)(this.Ri,[(0,D.O)("DvtUtilBundle","STATE_COLLAPSED")]);this.Lu.Mb("label",
c);this.ra.Da(this.Ru,this);this.ra.Da(this.Lu,this)}else a=(0,D.$Q)(this,3,a,b),b=(0,D.aR)(this,this.Ri),this.z6=new D.D(this.$),this.z6.k(a),this.z6.k(b);this.KF?this.xr?(this.Ua(this.Ru,0),this.k(this.kh),this.kh.N(this.NX),this.kh.W(this.GF+this.OX)):this.k(this.Lu):(this.Ua(this.z6,0),this.k(this.kh),this.kh.N(this.NX),this.kh.W(this.GF+this.OX))};
D.y.collapse=function(){this.KF&&(0<=this.Tf(this.Ru)&&this.removeChild(this.Ru),0<=this.Tf(this.kh)&&this.removeChild(this.kh),this.k(this.Lu),this.setActive(D.p),this.Ic()&&this.Be())};D.y.expand=function(){0<=this.Tf(this.Lu)&&this.removeChild(this.Lu);this.k(this.Ru);this.k(this.kh);this.kh.N(this.NX);this.kh.W(this.GF+this.OX);this.setActive(D.k);this.Ic()&&this.Be()};
D.ZQ=function(a,b,c,d,e,f){var g=a.Vka,h=a.mCa,j=(a.GF-h)/2,l=new D.D(a.$);b=(0,D.$Q)(a,b,e,f);l.k(b);(c=c?new D.Ve(a.$,c,0,j,g,h):D.o)&&l.k(c);d=(0,D.aR)(a,d,e-g-0,f,l);(0,D.G)(a.$)?(f=d.Kb(),d.N(e-f.e-g),c&&c.N(e-g)):d.N(g);a.nm||a.VV(c?c:d);return l};D.aR=function(a,b,c,d,e){var f=D.o;if(b){f=new D.Nf(a.$,b);f.Na(a.Yoa);D.af.Vb(f,c,d,e);b=f.Kb();if(!a.qL||a.qL.e<b.e||a.qL.g<b.g)a.qL=b;f.W((a.GF-b.g)/2)}return f};
D.$Q=function(a,b,c,d){var e=D.o;switch(b){case 1:e=a.da.sectionHeader.styleOvr;break;case 2:e=a.da.sectionHeader.styleDwn;break;case 3:e=a.da.sectionHeader.styleDis;break;default:e=a.da.sectionHeader.styleEna}a=new D.F(a.$,0,0,c,d);a.ba((0,D.bR)(e));a.P((0,D.cR)(e));return a};D.cR=function(a){var b=a.C("background-color");a=(0,D.kg)(a);var c=D.o;if(a&&a instanceof D.Ee){var b=a.cm,c=a.bm,d=a.Py;a=a.tm();c=new D.lg(a,b,c,d)}else b&&(c=new D.xo(b,1));return c};
D.bR=function(a){a=a.C("border-color");return new D.J(a,1,1)};D.y=D.dB.prototype;D.y.Ye=function(){var a=this.xr?this.Ru:this.Lu,b=a.G(),c=(0,D.ef)(a,new D.H(b.x,b.y)),a=(0,D.ef)(a,new D.H(b.x+b.e,b.y+b.g));return new D.B(c.x,c.y,a.x-c.x,a.y-c.y)};D.y.Vj=function(){return(this.xr?this.Ru:this.Lu).Aa()};D.y.Be=function(){this.Ub=D.k;this.nm.show();(0,D.Ig)(this.$,this.xr?this.Ru:this.Lu)};D.y.qc=function(){this.Ub=D.p;this.nm.zo()};D.y.Ic=(0,D.x)("Ub");
D.y.Yd=function(a){return this.ra.yg.Yd(this,a)};D.y.VV=function(a){var b=a.G(),c=a.V()||b.x;a=a.R()||b.y;this.nm=new D.Jg(this.j(),this,new D.B(c,a,b.e,b.g),D.o,D.o,D.k)};
D.UQ=function(){this.Init({skyros:D.XQ,alta:D.YQ})};D.z.q(D.UQ,D.fk,"DvtAccordionDefaults");
D.XQ={skin:"alta",sectionHeader:{styleEna:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleOvr:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDwn:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDis:new D.I("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),
headerHeight:33,imageWidth:24,imageHeight:24,textPadding:5},paddingX:0,paddingY:0};D.YQ={};
D.qi=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.z.q(D.qi,D.D,"DvtTrain");D.qi.prototype.Init=function(a,b,c,d,e,f){D.qi.u.Init.call(this,a,D.o,e);this.XQ=a.jd();this.om=c;this.OB=d;this.RV=c.length;this.az=(0,window.Array)(this.RV);this.wq=0;this.rCa=f;this.FE(b)};D.qi.prototype.gT=function(a){0<=a&&a<this.RV&&(0,D.gR)(this,this.wq,a)};
D.qi.prototype.Ie=function(a){(0,D.ti)(a);for(var b=0;b<this.az.length;b++){var c=a.target;if(this.az[b]===c||this.az[b]===c.getParent()){a=this.wq;(0,D.gR)(this,a,b);a!=b&&(b=new D.hR(this.wq),this.Dc(b,D.p));break}}};D.gR=function(a,b,c){a.wq=c;if(b=a.az[b])b.Gj&&b.Gj.setCursor("pointer"),b.Ui&&b.Ui.setCursor("pointer"),(0,D.th)(b,D.p);if(b=a.az[c])b.Gj&&b.Gj.setCursor("default"),b.Ui&&b.Ui.setCursor("default"),(0,D.th)(b,D.k)};
D.qi.prototype.FE=function(a){var b=(0,D.G)(this.j()),c;if(!this.wV){if(this.OB&&(c=this.OB[0]))this.wV=(0,D.or)(c.getWidth());this.wV||(this.wV=8)}c=this.wV;for(var d=0;d<this.RV;d++){var e,f=e=this.nw(c,d==this.wq,this.om[d]);f.oa(D.vh.Yf,this.Ie,D.p,this);(0,D.Mf)()||f.oa(D.vn,this.Ie,D.p,this);f=d;b&&(f=this.RV-1-d);a&&a.Da(e,e);(0,D.Ik)(e,f*(c+3),this.rCa?0:1);this.k(e);this.az[d]=e}};D.qi.prototype.qs=function(a,b){return new D.Ve(this.j(),a,0,0,b,b)};
D.iR=function(a,b,c,d){var e=a.OB?a.OB[c]:D.o;if(e=e?e.C("content"):D.o)a=a.qs(e,b);else{var f,g,h;2==c?(h=0,g="#61bde3",e="#0066ff",a.OB&&(f=a.OB[2])):(h=1,g="#c0cbd5",e="#5d7891",a.OB&&(f=a.OB[0]));f&&(f.C("border-color")&&(e=f.C("border-color")),f.C("background-color")&&(g=f.C("background-color")));a=new D.F(a.j(),h,h,b-2*h,b-2*h);a.va(g);a.Ya(e)}a.setCursor(0==c||d?"default":"pointer");return a};
D.qi.prototype.nw=function(a,b,c){a=new D.Re(this.j(),(0,D.iR)(this,a,0,b),(0,D.iR)(this,a,1,b),(0,D.iR)(this,a,2,b),D.o);a.jw(c);a.bF=D.k;b&&(0,D.th)(a,b);return a};
D.hR=function(a){this.Init("dvtTrain");this.type=this.Xa();this.xl=a};(0,D.ca)("DvtTrainEvent",D.hR);D.z.q(D.hR,D.$i,"DvtTrainEvent");D.hR.TYPE="dvtTrain";D.hR.prototype.Sa=(0,D.x)("xl");D.hR.prototype.getIndex=D.hR.prototype.Sa;
D.DvtOverviewWindow=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.z.q(D.DvtOverviewWindow,D.D,"DvtOverviewWindow");D.DvtOverviewWindow.h3="viewport-bg-color";D.DvtOverviewWindow.i3="viewport-border-color";D.DvtOverviewWindow.Afa="isOverviewDisclosed";D.y=D.DvtOverviewWindow.prototype;D.y.Init=function(a,b,c,d,e,f){D.DvtOverviewWindow.u.Init.call(this,a,D.o,b);this.Eb=c;this.Yb=d;this.vi=e;this.Mi=f;this.UC=D.o};
D.y.U=function(){this.QP=D.p;this.u8=D.k;this.rc&&((0,D.Mf)()?(this.rc.eb(D.vh.Yf,this.uX,D.p,this),this.rc.eb(D.vh.Hk,this.vX,D.p,this),this.rc.eb(D.vh.ij,this.VP,D.p,this)):(this.rc.eb(D.yh,this.uX,D.p,this),this.rc.eb(D.Hr,this.vX,D.p,this),this.rc.eb(D.Ir,this.VP,D.p,this),this.rc.eb(D.iA,this.tma,D.p,this)),(0,D.Fg)(this.rc,D.o));this.Ql();this.rc=this.Ce=D.o;var a=new D.Cg(this.getId());(0,D.Eg)(a,0,0,this.vi,this.Mi);this.rc=new D.F(this.$,0,0,this.vi,this.Mi);(0,D.Fg)(this.rc,a);(0,D.Li)(this.rc);
this.k(this.rc);this.Ce=new D.F(this.$,0,0,0,0,this.getId()+":viewport");a=this.m_(D.DvtOverviewWindow.h3);this.Ce.Ya(this.m_(D.DvtOverviewWindow.i3),D.o,2);this.Ce.va(a);this.Ce.ua(D.p);this.rc.k(this.Ce);(0,D.Mf)()?(this.rc.oa(D.vh.Yf,this.uX,D.p,this),this.rc.oa(D.vh.Hk,this.vX,D.p,this),this.rc.oa(D.vh.ij,this.VP,D.p,this)):(this.rc.oa(D.yh,this.uX,D.p,this),this.rc.oa(D.Hr,this.vX,D.p,this),this.rc.oa(D.Ir,this.VP,D.p,this),this.rc.oa(D.iA,this.tma,D.p,this))};D.y.lb=(0,D.x)("LF");D.y.mf=(0,D.v)("LF");
D.y.Ev=function(){return new D.B(this.Eb,this.Yb,this.vi,this.Mi)};D.us=function(a,b,c){var d=(0,D.dR)(a,b.x,b.y,c),e=(0,D.dR)(a,b.x+b.e,b.y+b.g,c);b=d.x;var f=d.y,g=e.x-d.x,d=e.y-d.y;c?((0,D.T)(c,"typeNumber",a.Ce,a.Ce.pa,a.Ce.ha,b),(0,D.T)(c,"typeNumber",a.Ce,a.Ce.qa,a.Ce.ya,f),(0,D.T)(c,"typeNumber",a.Ce,a.Ce.getWidth,a.Ce.sa,g),(0,D.T)(c,"typeNumber",a.Ce,a.Ce.getHeight,a.Ce.Ia,d)):(a.Ce.ha(b),a.Ce.ya(f),a.Ce.sa(g),a.Ce.Ia(d))};
D.Es=function(a){var b=(0,D.eR)(a,a.Ce.pa(),a.Ce.qa());a=(0,D.eR)(a,a.Ce.pa()+a.Ce.getWidth(),a.Ce.qa()+a.Ce.getHeight());return new D.B(b.x,b.y,a.x-b.x,a.y-b.y)};D.y=D.DvtOverviewWindow.prototype;D.y.uX=function(a){if(!this.QP&&this.u8){this.QP=D.k;var b=this.Bg(a);a=new D.tF((0,D.Es)(this),(0,D.fR)(this,b),a);this.Dc(a)}};D.y.vX=function(a){if(this.QP&&this.u8){var b=this.Bg(a);a=new D.tF((0,D.Es)(this),(0,D.fR)(this,b),a);this.Dc(a)}};D.y.VP=function(){this.QP&&this.u8&&(this.QP=D.p)};
D.y.tma=function(){this.VP()};D.y.Bg=function(a){var b,c;(0,D.Mf)()?(a=a.touches,0<a.length&&(b=a[0].pageX,c=a[0].pageY)):(b=a.pageX,c=a.pageY);return(0,D.nv)(this.$,b,c)};D.eR=function(a,b,c){var d=0,e=0,f=1,g=1;a.Lk&&(d=a.Lk.V(),e=a.Lk.R(),f=a.Lk.Ac(),g=a.Lk.Hc());return new D.H((b-d)/f,(c-e)/g)};
D.dR=function(a,b,c,d){var e=0,f=0,g=1,h=1;a.Lk&&(e=d?(0,D.qq)(d,a.Lk,a.Lk.V,D.k):a.Lk.V(),f=d?(0,D.qq)(d,a.Lk,a.Lk.R,D.k):a.Lk.R(),g=d?(0,D.qq)(d,a.Lk,a.Lk.Ac,D.k):a.Lk.Ac(),h=d?(0,D.qq)(d,a.Lk,a.Lk.Hc,D.k):a.Lk.Hc());return new D.H(b*g+e,c*h+f)};D.DvtOverviewWindow.prototype.kM=(0,D.x)("UC");D.DvtOverviewWindow.prototype.ZH=(0,D.v)("UC");D.DvtOverviewWindow.prototype.m_=function(a){return this.UC&&"undefined"!=this.UC[a]?this.UC[a]:D.o};
D.fR=function(a,b){var c=(0,D.ef)(a.rc,new D.H(0,0)),d=a.Ce.G(),e=b.x-c.x-d.e/2,f=b.y-c.y-d.g/2,c=(0,D.eR)(a,e,f),d=(0,D.eR)(a,e+d.e,f+d.g);return new D.B(c.x,c.y,d.x-c.x,d.y-c.y)};D.DvtOverviewWindow.prototype.hga=function(a){this.Ce.ha(a.x);this.Ce.ya(a.y);this.Ce.sa(a.e);this.Ce.Ia(a.g)};D.DvtOverviewWindow.prototype.I1=function(){return new D.B(this.Ce.pa(),this.Ce.qa(),this.Ce.getWidth(),this.Ce.getHeight())};
D.DvtOverviewWindow.prototype.G=function(a){var b=new D.B(0,0,this.vi,this.Mi);return!a||a===this?b:(0,D.Pg)(this,b,a)};D.DvtOverviewWindow.prototype.vm=function(a){return this.G(a)};
(0,D.Lg)("DvtSubcomponentBundle",{CONTROL_PANEL:"Control Panel",CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center",CONTROL_PANEL_PAN:"Pan",CONTROL_PANEL_LAYOUT:"Layout",CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down",CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up",CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End",CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right",CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left",CONTROL_PANEL_LAYOUT_RADIAL:"Radial",CONTROL_PANEL_LAYOUT_TREE:"Tree",
CONTROL_PANEL_LAYOUT_CIRCLE:"Circle",CONTROL_PANEL_SYNC:"View",CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit",CONTROL_PANEL_ZOOMIN:"Zoom In",CONTROL_PANEL_ZOOMOUT:"Zoom Out",CONTROL_PANEL_RESET:"Reset Map",CONTROL_PANEL_DRILLUP:"Drill Up",CONTROL_PANEL_DRILLDOWN:"Drill Down",LEGEND:"Legend",OVERVIEW:"Overview",PALETTE:"Palette",SEARCH:"Search",SEARCH_TEXT:"Search",SEARCH_TEXT_ALTA:"Find",SEARCH_RESULTS:"Search Results [{0}]",SEARCH_RESULTS_ALTA:"{0} Results",SEARCH_RESULTS_CLOSE:"Close",SEARCH_RESULTS_NO_DATA:"No results to display"});
  return D;
});