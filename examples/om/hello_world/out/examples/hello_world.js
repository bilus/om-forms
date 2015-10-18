// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.hello_world');
goog.require('cljs.core');
goog.require('reforms.om');
goog.require('om.core');
goog.require('sablono.core');
examples.hello_world.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270),false], null)], null));
examples.hello_world.simple_view = (function examples$hello_world$simple_view(data,_owner){
if(typeof examples.hello_world.t_examples$hello_world173240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.hello_world.t_examples$hello_world173240 = (function (simple_view,data,_owner,meta173241){
this.simple_view = simple_view;
this.data = data;
this._owner = _owner;
this.meta173241 = meta173241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.hello_world.t_examples$hello_world173240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_173242,meta173241__$1){
var self__ = this;
var _173242__$1 = this;
return (new examples.hello_world.t_examples$hello_world173240(self__.simple_view,self__.data,self__._owner,meta173241__$1));
});

examples.hello_world.t_examples$hello_world173240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_173242){
var self__ = this;
var _173242__$1 = this;
return self__.meta173241;
});

examples.hello_world.t_examples$hello_world173240.prototype.om$core$IRender$ = true;

examples.hello_world.t_examples$hello_world173240.prototype.om$core$IRender$render$arity$1 = (function (this__8300__auto__){
var self__ = this;
var this__8300__auto____$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_173243 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null));

try{return reforms.om.panel.call(null,"Hello, world",reforms.om.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_173243,this__8300__auto____$1){
return (function (){
return alert("Submitted");
});})(_STAR_options_STAR_173243,this__8300__auto____$1))
], null),reforms.om.text.call(null,"Your name",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your name here"),reforms.om.form_buttons.call(null,reforms.om.button_primary.call(null,"Submit",((function (_STAR_options_STAR_173243,this__8300__auto____$1){
return (function (){
return alert(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)));
});})(_STAR_options_STAR_173243,this__8300__auto____$1))
),reforms.om.button_default.call(null,"Cancel",((function (_STAR_options_STAR_173243,this__8300__auto____$1){
return (function (){
return alert("Cancel!");
});})(_STAR_options_STAR_173243,this__8300__auto____$1))
)),reforms.om.checkbox.call(null,"Horizontal form",self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orientation-horizontal","orientation-horizontal",-1139363270)], null))));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_173243;
}})());
});

examples.hello_world.t_examples$hello_world173240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-view","simple-view",-1334203951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta173241","meta173241",-1948470681,null)], null);
});

examples.hello_world.t_examples$hello_world173240.cljs$lang$type = true;

examples.hello_world.t_examples$hello_world173240.cljs$lang$ctorStr = "examples.hello-world/t_examples$hello_world173240";

examples.hello_world.t_examples$hello_world173240.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.hello-world/t_examples$hello_world173240");
});

examples.hello_world.__GT_t_examples$hello_world173240 = (function examples$hello_world$simple_view_$___GT_t_examples$hello_world173240(simple_view__$1,data__$1,_owner__$1,meta173241){
return (new examples.hello_world.t_examples$hello_world173240(simple_view__$1,data__$1,_owner__$1,meta173241));
});

}

return (new examples.hello_world.t_examples$hello_world173240(examples$hello_world$simple_view,data,_owner,null));
});
examples.hello_world.main_view = (function examples$hello_world$main_view(app_state,_owner){
if(typeof examples.hello_world.t_examples$hello_world173251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.hello_world.t_examples$hello_world173251 = (function (main_view,app_state,_owner,meta173252){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta173252 = meta173252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.hello_world.t_examples$hello_world173251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_173253,meta173252__$1){
var self__ = this;
var _173253__$1 = this;
return (new examples.hello_world.t_examples$hello_world173251(self__.main_view,self__.app_state,self__._owner,meta173252__$1));
});

examples.hello_world.t_examples$hello_world173251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_173253){
var self__ = this;
var _173253__$1 = this;
return self__.meta173252;
});

examples.hello_world.t_examples$hello_world173251.prototype.om$core$IRender$ = true;

examples.hello_world.t_examples$hello_world173251.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("br",null),React.createElement("br",null),sablono.interpreter.interpret.call(null,om.core.build.call(null,examples.hello_world.simple_view,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});

examples.hello_world.t_examples$hello_world173251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta173252","meta173252",12785600,null)], null);
});

examples.hello_world.t_examples$hello_world173251.cljs$lang$type = true;

examples.hello_world.t_examples$hello_world173251.cljs$lang$ctorStr = "examples.hello-world/t_examples$hello_world173251";

examples.hello_world.t_examples$hello_world173251.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.hello-world/t_examples$hello_world173251");
});

examples.hello_world.__GT_t_examples$hello_world173251 = (function examples$hello_world$main_view_$___GT_t_examples$hello_world173251(main_view__$1,app_state__$1,_owner__$1,meta173252){
return (new examples.hello_world.t_examples$hello_world173251(main_view__$1,app_state__$1,_owner__$1,meta173252));
});

}

return (new examples.hello_world.t_examples$hello_world173251(examples$hello_world$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.hello_world.main_view,examples.hello_world.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=hello_world.js.map