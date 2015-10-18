// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.shared.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.core');
goog.require('sablono.core');
examples.shared.utils.inspect = (function examples$shared$utils$inspect(data){
var sb__5683__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_171908_171910 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_171909_171911 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_171908_171910,_STAR_print_fn_STAR_171909_171911,sb__5683__auto__){
return (function (x__5684__auto__){
return sb__5683__auto__.append(x__5684__auto__);
});})(_STAR_print_newline_STAR_171908_171910,_STAR_print_fn_STAR_171909_171911,sb__5683__auto__))
;

try{cljs.pprint.pprint.call(null,data);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_171909_171911;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_171908_171910;
}
return [cljs.core.str(sb__5683__auto__)].join('');
});
examples.shared.utils.inspector_view = (function examples$shared$utils$inspector_view(data,_owner){
if(typeof examples.shared.utils.t_examples$shared$utils171915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.shared.utils.t_examples$shared$utils171915 = (function (inspector_view,data,_owner,meta171916){
this.inspector_view = inspector_view;
this.data = data;
this._owner = _owner;
this.meta171916 = meta171916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.shared.utils.t_examples$shared$utils171915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_171917,meta171916__$1){
var self__ = this;
var _171917__$1 = this;
return (new examples.shared.utils.t_examples$shared$utils171915(self__.inspector_view,self__.data,self__._owner,meta171916__$1));
});

examples.shared.utils.t_examples$shared$utils171915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_171917){
var self__ = this;
var _171917__$1 = this;
return self__.meta171916;
});

examples.shared.utils.t_examples$shared$utils171915.prototype.om$core$IRender$ = true;

examples.shared.utils.t_examples$shared$utils171915.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("pre",{"key": "inspector-view", "className": "inspector"},sablono.interpreter.interpret.call(null,examples.shared.utils.inspect.call(null,self__.data)));
});

examples.shared.utils.t_examples$shared$utils171915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"inspector-view","inspector-view",-235962653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta171916","meta171916",-1689969288,null)], null);
});

examples.shared.utils.t_examples$shared$utils171915.cljs$lang$type = true;

examples.shared.utils.t_examples$shared$utils171915.cljs$lang$ctorStr = "examples.shared.utils/t_examples$shared$utils171915";

examples.shared.utils.t_examples$shared$utils171915.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.shared.utils/t_examples$shared$utils171915");
});

examples.shared.utils.__GT_t_examples$shared$utils171915 = (function examples$shared$utils$inspector_view_$___GT_t_examples$shared$utils171915(inspector_view__$1,data__$1,_owner__$1,meta171916){
return (new examples.shared.utils.t_examples$shared$utils171915(inspector_view__$1,data__$1,_owner__$1,meta171916));
});

}

return (new examples.shared.utils.t_examples$shared$utils171915(examples$shared$utils$inspector_view,data,_owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utils.js.map