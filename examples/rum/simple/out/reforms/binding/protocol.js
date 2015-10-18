// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.protocol');
goog.require('cljs.core');

/**
 * @interface
 */
reforms.binding.protocol.IBinding = function(){};

reforms.binding.protocol._valid_QMARK_ = (function reforms$binding$protocol$_valid_QMARK_(x){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1 == null)))){
return x.reforms$binding$protocol$IBinding$_valid_QMARK_$arity$1(x);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._valid_QMARK_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._valid_QMARK_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-valid?",x);
}
}
}
});

reforms.binding.protocol._deref = (function reforms$binding$protocol$_deref(x){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_deref$arity$1 == null)))){
return x.reforms$binding$protocol$IBinding$_deref$arity$1(x);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._deref[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._deref["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-deref",x);
}
}
}
});

reforms.binding.protocol._reset_BANG_ = (function reforms$binding$protocol$_reset_BANG_(var_args){
var args9471 = [];
var len__5651__auto___9477 = arguments.length;
var i__5652__auto___9478 = (0);
while(true){
if((i__5652__auto___9478 < len__5651__auto___9477)){
args9471.push((arguments[i__5652__auto___9478]));

var G__9479 = (i__5652__auto___9478 + (1));
i__5652__auto___9478 = G__9479;
continue;
} else {
}
break;
}

var G__9473 = args9471.length;
switch (G__9473) {
case 2:
return reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9471.length)].join('')));

}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,v){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2 == null)))){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$2(x,v);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._reset_BANG_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x,v);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x,v);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-reset!",x);
}
}
}
});

reforms.binding.protocol._reset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,v){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3 == null)))){
return x.reforms$binding$protocol$IBinding$_reset_BANG_$arity$3(x,ks,v);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._reset_BANG_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x,ks,v);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._reset_BANG_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x,ks,v);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-reset!",x);
}
}
}
});

reforms.binding.protocol._reset_BANG_.cljs$lang$maxFixedArity = 3;

reforms.binding.protocol._swap_BANG_ = (function reforms$binding$protocol$_swap_BANG_(var_args){
var args9474 = [];
var len__5651__auto___9481 = arguments.length;
var i__5652__auto___9482 = (0);
while(true){
if((i__5652__auto___9482 < len__5651__auto___9481)){
args9474.push((arguments[i__5652__auto___9482]));

var G__9483 = (i__5652__auto___9482 + (1));
i__5652__auto___9482 = G__9483;
continue;
} else {
}
break;
}

var G__9476 = args9474.length;
switch (G__9476) {
case 2:
return reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9474.length)].join('')));

}
});

reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,f){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$2 == null)))){
return x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$2(x,f);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._swap_BANG_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x,f);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._swap_BANG_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x,f);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-swap!",x);
}
}
}
});

reforms.binding.protocol._swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,ks,f){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$3 == null)))){
return x.reforms$binding$protocol$IBinding$_swap_BANG_$arity$3(x,ks,f);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._swap_BANG_[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x,ks,f);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._swap_BANG_["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x,ks,f);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-swap!",x);
}
}
}
});

reforms.binding.protocol._swap_BANG_.cljs$lang$maxFixedArity = 3;

reforms.binding.protocol._get_in = (function reforms$binding$protocol$_get_in(x,ks){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_get_in$arity$2 == null)))){
return x.reforms$binding$protocol$IBinding$_get_in$arity$2(x,ks);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._get_in[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x,ks);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._get_in["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-get-in",x);
}
}
}
});

reforms.binding.protocol._path = (function reforms$binding$protocol$_path(x){
if((!((x == null))) && (!((x.reforms$binding$protocol$IBinding$_path$arity$1 == null)))){
return x.reforms$binding$protocol$IBinding$_path$arity$1(x);
} else {
var x__5248__auto__ = (((x == null))?null:x);
var m__5249__auto__ = (reforms.binding.protocol._path[goog.typeOf(x__5248__auto__)]);
if(!((m__5249__auto__ == null))){
return m__5249__auto__.call(null,x);
} else {
var m__5249__auto____$1 = (reforms.binding.protocol._path["_"]);
if(!((m__5249__auto____$1 == null))){
return m__5249__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.-path",x);
}
}
}
});


//# sourceMappingURL=protocol.js.map