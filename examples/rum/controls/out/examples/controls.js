// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.controls');
goog.require('cljs.core');
goog.require('reforms.rum');
goog.require('reforms.table');
goog.require('rum.core');
goog.require('examples.shared.utils');
cljs.core.enable_console_print_BANG_.call(null);
examples.controls.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#c26b66",new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"login","login",55217519),cljs.core.PersistentArrayMap.EMPTY], null));
examples.controls.simple_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (data){
return React.createElement("div",null,React.createElement("h1",{"key": "h1"},"Supported controls"),React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col col-md-6"},React.createElement("h4",null,"Panel"),sablono.interpreter.interpret.call(null,reforms.rum.panel.call(null,"Panel title",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contents 3"], null))),React.createElement("h4",null,"Auto-aligning form with validation"),sablono.interpreter.interpret.call(null,(function (){var _STAR_options_STAR_10677 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.get_in.call(null,cljs.core.deref.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null))], null)], null));

try{return reforms.rum.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_10677){
return (function (){
return alert("Logging in");
});})(_STAR_options_STAR_10677))
], null),reforms.rum.text.call(null,"Username",data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"username","username",1605666410)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your login here"),reforms.rum.password.call(null,"Password",data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your password"),reforms.rum.checkbox.call(null,"Remember password",data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"remember","remember",766665467)], null)),reforms.rum.button_group.call(null,reforms.rum.button.call(null,"Login",((function (_STAR_options_STAR_10677){
return (function (){
return alert("Click!");
});})(_STAR_options_STAR_10677))
)));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_10677;
}})()),sablono.interpreter.interpret.call(null,reforms.rum.checkbox.call(null,"Horizontal orientation",data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null))),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null))),React.createElement("h4",null,"Table"),sablono.interpreter.interpret.call(null,reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"table"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tom",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jerry",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mickey",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Minnie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Hero name"], null))),React.createElement("h4",null,"Styled table"),React.createElement("div",null,"See ",React.createElement("a",{"href": "http://getbootstrap.com/css/#tables", "target": "_blank"},"Bootstrap tables")),sablono.interpreter.interpret.call(null,reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"styled-table",new cljs.core.Keyword(null,"class","class",-2030961996),"table-striped table-bordered"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tom",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jerry",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mickey",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Minnie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Hero name"], null))),React.createElement("h4",null,"Table with row selection"),sablono.interpreter.interpret.call(null,reforms.table.table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"rs-table"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tom",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jerry",new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mickey",new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Minnie",new cljs.core.Keyword(null,"id","id",-1388402092),(4)], null)], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Hero name"], null),new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),data,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),new cljs.core.Keyword(null,"row-id","row-id",246619473),new cljs.core.Keyword(null,"id","id",-1388402092)], null))),React.createElement("div",null,"Selection:"),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null)))),React.createElement("div",{"className": "col col-md-6"},React.createElement("h4",null,"Buttons"),sablono.interpreter.interpret.call(null,reforms.rum.button.call(null,"Button",(function (){
return alert("Click");
}))),sablono.interpreter.interpret.call(null,reforms.rum.button_primary.call(null,"Primary button",(function (){
return alert("Click");
}))),sablono.interpreter.interpret.call(null,reforms.rum.button_default.call(null,"Default button",(function (){
return alert("Click");
}))),React.createElement("h4",null,"Controls with automatic labels"),sablono.interpreter.interpret.call(null,reforms.rum.text.call(null,"Text",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.password.call(null,"Password",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.textarea.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),(8)], null),"Textarea",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.select.call(null,"Select",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option1","option1",-243284328),"Option 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option2","option2",-1826934888),"Option 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option3","option3",-1459092684),"Option 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option4","option4",-462338057),"Option 4"], null)], null))),sablono.interpreter.interpret.call(null,reforms.rum.checkbox.call(null,"Checkbox",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null))),sablono.interpreter.interpret.call(null,reforms.rum.radio.call(null,"Radio",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radio","radio",1323726374)], null))),sablono.interpreter.interpret.call(null,reforms.rum.datetime_local.call(null,"Date-time local",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.date.call(null,"Date",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.month.call(null,"Month",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.time.call(null,"Time",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.week.call(null,"Week",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week","week",-1326473278)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.number.call(null,"Number",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.email.call(null,"Email",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.url.call(null,"Url",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.search.call(null,"Search",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.tel.call(null,"Tel",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tel","tel",224138159)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")),sablono.interpreter.interpret.call(null,reforms.rum.color.call(null,"Color",data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A placeholder")))));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"simple-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__10678__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__10678 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__10679__i = 0, G__10679__a = new Array(arguments.length -  0);
while (G__10679__i < G__10679__a.length) {G__10679__a[G__10679__i] = arguments[G__10679__i + 0]; ++G__10679__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__10679__a,0);
} 
return G__10678__delegate.call(this,args__6384__auto__);};
G__10678.cljs$lang$maxFixedArity = 0;
G__10678.cljs$lang$applyTo = (function (arglist__10680){
var args__6384__auto__ = cljs.core.seq(arglist__10680);
return G__10678__delegate(args__6384__auto__);
});
G__10678.cljs$core$IFn$_invoke$arity$variadic = G__10678__delegate;
return G__10678;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
examples.controls.main_view = (function (){var render_mixin__6381__auto__ = rum.core.render__GT_mixin.call(null,(function (){
var attrs10681 = examples.controls.simple_view.call(null,examples.controls.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs10681))?sablono.interpreter.attributes.call(null,attrs10681):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10681))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.controls.app_state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10681),sablono.interpreter.interpret.call(null,examples.shared.utils.inspector_view.call(null,examples.controls.app_state))], null))));
}));
var class__6382__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6381__auto__], null),null),"main-view");
var ctor__6383__auto__ = ((function (render_mixin__6381__auto__,class__6382__auto__){
return (function() { 
var G__10682__delegate = function (args__6384__auto__){
var state__6385__auto__ = rum.core.args__GT_state.call(null,args__6384__auto__);
return rum.core.element.call(null,class__6382__auto__,state__6385__auto__,null);
};
var G__10682 = function (var_args){
var args__6384__auto__ = null;
if (arguments.length > 0) {
var G__10683__i = 0, G__10683__a = new Array(arguments.length -  0);
while (G__10683__i < G__10683__a.length) {G__10683__a[G__10683__i] = arguments[G__10683__i + 0]; ++G__10683__i;}
  args__6384__auto__ = new cljs.core.IndexedSeq(G__10683__a,0);
} 
return G__10682__delegate.call(this,args__6384__auto__);};
G__10682.cljs$lang$maxFixedArity = 0;
G__10682.cljs$lang$applyTo = (function (arglist__10684){
var args__6384__auto__ = cljs.core.seq(arglist__10684);
return G__10682__delegate(args__6384__auto__);
});
G__10682.cljs$core$IFn$_invoke$arity$variadic = G__10682__delegate;
return G__10682;
})()
;})(render_mixin__6381__auto__,class__6382__auto__))
;
return cljs.core.with_meta.call(null,ctor__6383__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6382__auto__], null));
})();
rum.core.mount.call(null,examples.controls.main_view.call(null),document.getElementById("app"));

//# sourceMappingURL=controls.js.map