// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.binding.om');
goog.require('cljs.core');
goog.require('reforms.binding.protocol');
goog.require('om.core');
(reforms.binding.protocol.IBinding["_"] = true);

(reforms.binding.protocol._valid_QMARK_["_"] = (function (this$){
return om.core.cursor_QMARK_.call(null,this$);
}));

(reforms.binding.protocol._deref["_"] = (function (this$){
return cljs.core.deref.call(null,this$);
}));

(reforms.binding.protocol._reset_BANG_["_"] = (function() {
var G__173941 = null;
var G__173941__2 = (function (this$,v){
return om.core.update_BANG_.call(null,this$,v);
});
var G__173941__3 = (function (this$,ks,v){
return om.core.update_BANG_.call(null,this$,ks,v);
});
G__173941 = function(this$,ks,v){
switch(arguments.length){
case 2:
return G__173941__2.call(this,this$,ks);
case 3:
return G__173941__3.call(this,this$,ks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__173941.cljs$core$IFn$_invoke$arity$2 = G__173941__2;
G__173941.cljs$core$IFn$_invoke$arity$3 = G__173941__3;
return G__173941;
})()
);

(reforms.binding.protocol._swap_BANG_["_"] = (function() {
var G__173942 = null;
var G__173942__2 = (function (this$,f){
return om.core.transact_BANG_.call(null,this$,f);
});
var G__173942__3 = (function (this$,ks,f){
return om.core.transact_BANG_.call(null,this$,ks,f);
});
G__173942 = function(this$,ks,f){
switch(arguments.length){
case 2:
return G__173942__2.call(this,this$,ks);
case 3:
return G__173942__3.call(this,this$,ks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__173942.cljs$core$IFn$_invoke$arity$2 = G__173942__2;
G__173942.cljs$core$IFn$_invoke$arity$3 = G__173942__3;
return G__173942;
})()
);

(reforms.binding.protocol._get_in["_"] = (function (this$,ks){
return cljs.core.get_in.call(null,this$,ks);
}));

(reforms.binding.protocol._path["_"] = (function (this$){
return om.core.path.call(null,this$);
}));

//# sourceMappingURL=om.js.map