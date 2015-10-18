// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.table');
goog.require('cljs.core');
goog.require('reforms.core.impl');
goog.require('reforms.binding.core');
goog.require('clojure.set');
reforms.table.simple_checkbox = (function reforms$table$simple_checkbox(var_args){
var args__5774__auto__ = [];
var len__5767__auto___173741 = arguments.length;
var i__5768__auto___173742 = (0);
while(true){
if((i__5768__auto___173742 < len__5767__auto___173741)){
args__5774__auto__.push((arguments[i__5768__auto___173742]));

var G__173743 = (i__5768__auto___173742 + (1));
i__5768__auto___173742 = G__173743;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (checked,p__173738){
var map__173739 = p__173738;
var map__173739__$1 = ((((!((map__173739 == null)))?((((map__173739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__173739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__173739):map__173739);
var on_click = cljs.core.get.call(null,map__173739__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__173739,map__173739__$1,on_click){
return (function (p1__173735_SHARP_){
return on_click.call(null,p1__173735_SHARP_.target.checked);
});})(map__173739,map__173739__$1,on_click))
,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null);
});

reforms.table.simple_checkbox.cljs$lang$maxFixedArity = (1);

reforms.table.simple_checkbox.cljs$lang$applyTo = (function (seq173736){
var G__173737 = cljs.core.first.call(null,seq173736);
var seq173736__$1 = cljs.core.next.call(null,seq173736);
return reforms.table.simple_checkbox.cljs$core$IFn$_invoke$arity$variadic(G__173737,seq173736__$1);
});
reforms.table.all_selected_QMARK_ = (function reforms$table$all_selected_QMARK_(selected_values,all_values){
return clojure.set.subset_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),selected_values);
});
/**
 * Renders a table of `rows` (col => value). An optional map of columns to labels can be specified which also
 * restricts which columns are visible.
 * 
 * Arguments:
 * 
 *     [attrs] rows [options]
 * 
 *     - attrs - (optional) attributes for <table> handed over to React (see https://github.com/r0man/sablono#html-attributes)
 *     - rows - a vector of col->val maps
 *     - options - (optional) options to customize the table
 * 
 * Options:
 * 
 *     - :columns - map of keys used in `rows` to human-friendly column names
 *     - :checkboxes - use this to support row selection using checkboxes, the map contains:
 *         :selection - atom/cursor to keep selected rows in
 *         :path - (optional) korks/path into the selection atom/cursor
 *         :row-id - function applied to row map to calculate a unique row id to put into the selection set
 *         :nil-selects-all? - (optional) selection set to nil (as opposed to #{}) selects all rows (default: false)
 *       See the second example.
 * 
 * Example:
 * 
 *      (table [{:name "Tom" :id 12} {:name "Jerry" :id 23}]
 *             :columns {:name "Hero name"})
 * 
 * Result:
 *   
 *     | Hero name |
 *     | Tom       |
 *     | Jerry     |
 * 
 * As an option, each row can have an on/off checkbox to the left; to turn this on, `checkboxes` must be a map
 * with :cursor and :korks pointing to where to store the selection.  The resulting selection
 * is either a set containing values or nil; the latter means that all rows are selected.
 * The values are taken from the first val in the respective row or a result of :value function of
 * signature (fn [row]).
 * 
 * Example:
 * 
 *     (table [{:name "Tom" :id 12} {:name "Jerry" :id 23}]
 *            :checkboxes {:selection     app-state
 *                         :path          [:selected-heroes]
 *                         :row-id        :id}
 *            :columns {:name "Hero name"})
 * 
 *      | [ ] Hero name |
 *      | [x] Tom       |
 *      | [ ] Jerry     |
 * 
 *     ;; For the above selection:
 *     (get-in app-state [:selected-heroes]) => #{12}
 * 
 * Depending on the initial value of `app-state` in the above example the table start either
 * 
 * a) with all checkboxes on for `app-state` containing {:selected-heroes nil}, or
 * b) with no selection with {:selected-heroes #{}}.
 */
reforms.table.table = (function reforms$table$table(var_args){
var args__5774__auto__ = [];
var len__5767__auto___173775 = arguments.length;
var i__5768__auto___173776 = (0);
while(true){
if((i__5768__auto___173776 < len__5767__auto___173775)){
args__5774__auto__.push((arguments[i__5768__auto___173776]));

var G__173777 = (i__5768__auto___173776 + (1));
i__5768__auto___173776 = G__173777;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.table.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__173745 = reforms.core.impl.resolve_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table"], null),args);
var attrs = cljs.core.nth.call(null,vec__173745,(0),null);
var vec__173746 = cljs.core.nth.call(null,vec__173745,(1),null);
var rows = cljs.core.nth.call(null,vec__173746,(0),null);
var map__173747 = cljs.core.nthnext.call(null,vec__173746,(1));
var map__173747__$1 = ((((!((map__173747 == null)))?((((map__173747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__173747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__173747):map__173747);
var columns = cljs.core.get.call(null,map__173747__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentArrayMap.EMPTY);
var checkboxes = cljs.core.get.call(null,map__173747__$1,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762));
var xf = cljs.core.get.call(null,map__173747__$1,new cljs.core.Keyword(null,"xf","xf",401902988),((function (vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes){
return (function (col,val){
return val;
});})(vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes))
);
var labels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,columns);
var col_keys = (function (){var or__4709__auto__ = cljs.core.not_empty.call(null,cljs.core.map.call(null,cljs.core.first,columns));
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.distinct.call(null,cljs.core.mapcat.call(null,cljs.core.keys,rows));
}
})();
var map__173748 = checkboxes;
var map__173748__$1 = ((((!((map__173748 == null)))?((((map__173748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__173748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__173748):map__173748);
var selection = cljs.core.get.call(null,map__173748__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var selection_path = cljs.core.get.call(null,map__173748__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var row_id_fn = cljs.core.get.call(null,map__173748__$1,new cljs.core.Keyword(null,"row-id","row-id",246619473),cljs.core.comp.call(null,cljs.core.first,cljs.core.vals));
var nil_selects_all_QMARK_ = cljs.core.get.call(null,map__173748__$1,new cljs.core.Keyword(null,"nil-selects-all?","nil-selects-all?",1855939238));
var selected = (cljs.core.truth_(selection)?(function (){var or__4709__auto__ = reforms.binding.core.get_in.call(null,selection,selection_path);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})():null);
var select_all = (cljs.core.truth_(selection)?(function (){var and__4697__auto__ = nil_selects_all_QMARK_;
if(cljs.core.truth_(and__4697__auto__)){
return (reforms.binding.core.get_in.call(null,selection,selection_path) == null);
} else {
return and__4697__auto__;
}
})():null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var all_values = cljs.core.map.call(null,row_id_fn,rows);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),reforms.table.simple_checkbox.call(null,(function (){var or__4709__auto__ = select_all;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return reforms.table.all_selected_QMARK_.call(null,selected,all_values);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (all_values,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (all_values,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(checked)){
return cljs.core.into.call(null,prev_selected,all_values);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});})(all_values,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(all_values,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null);
})());
})():null),(function (){var iter__5481__auto__ = ((function (vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__173751(s__173752){
return (new cljs.core.LazySeq(null,((function (vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__173752__$1 = s__173752;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__173752__$1);
if(temp__4425__auto__){
var s__173752__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__173752__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__173752__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__173754 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__173753 = (0);
while(true){
if((i__173753 < size__5480__auto__)){
var col = cljs.core._nth.call(null,c__5479__auto__,i__173753);
cljs.core.chunk_append.call(null,b__173754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__4709__auto__ = labels.call(null,col);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return col;
}
})()], null));

var G__173778 = (i__173753 + (1));
i__173753 = G__173778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173754),reforms$table$iter__173751.call(null,cljs.core.chunk_rest.call(null,s__173752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173754),null);
}
} else {
var col = cljs.core.first.call(null,s__173752__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__4709__auto__ = labels.call(null,col);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return col;
}
})()], null),reforms$table$iter__173751.call(null,cljs.core.rest.call(null,s__173752__$2)));
}
} else {
return null;
}
break;
}
});})(vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,col_keys);
})()))], null)),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__5481__auto__ = ((function (vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__173755(s__173756){
return (new cljs.core.LazySeq(null,((function (vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__173756__$1 = s__173756;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__173756__$1);
if(temp__4425__auto__){
var s__173756__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__173756__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__173756__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__173758 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__173757 = (0);
while(true){
if((i__173757 < size__5480__auto__)){
var row = cljs.core._nth.call(null,c__5479__auto__,i__173757);
cljs.core.chunk_append.call(null,b__173758,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var value = row_id_fn.call(null,row);
var all_values = cljs.core.map.call(null,row_id_fn,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),reforms.table.simple_checkbox.call(null,(function (){var or__4709__auto__ = select_all;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return selected.call(null,value);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__173757,value,all_values,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (i__173757,value,all_values,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(select_all)){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),value);
} else {
if(cljs.core.truth_(checked)){
return cljs.core.conj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);
} else {
return cljs.core.disj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);

}
}
});})(i__173757,value,all_values,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(i__173757,value,all_values,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null)], null);
})():null),(function (){var iter__5481__auto__ = ((function (i__173757,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__173755_$_iter__173767(s__173768){
return (new cljs.core.LazySeq(null,((function (i__173757,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__173768__$1 = s__173768;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__173768__$1);
if(temp__4425__auto____$1){
var s__173768__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__173768__$2)){
var c__5479__auto____$1 = cljs.core.chunk_first.call(null,s__173768__$2);
var size__5480__auto____$1 = cljs.core.count.call(null,c__5479__auto____$1);
var b__173770 = cljs.core.chunk_buffer.call(null,size__5480__auto____$1);
if((function (){var i__173769 = (0);
while(true){
if((i__173769 < size__5480__auto____$1)){
var col = cljs.core._nth.call(null,c__5479__auto____$1,i__173769);
cljs.core.chunk_append.call(null,b__173770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null));

var G__173779 = (i__173769 + (1));
i__173769 = G__173779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173770),reforms$table$iter__173755_$_iter__173767.call(null,cljs.core.chunk_rest.call(null,s__173768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173770),null);
}
} else {
var col = cljs.core.first.call(null,s__173768__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null),reforms$table$iter__173755_$_iter__173767.call(null,cljs.core.rest.call(null,s__173768__$2)));
}
} else {
return null;
}
break;
}
});})(i__173757,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(i__173757,row,c__5479__auto__,size__5480__auto__,b__173758,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,col_keys);
})())));

var G__173780 = (i__173757 + (1));
i__173757 = G__173780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173758),reforms$table$iter__173755.call(null,cljs.core.chunk_rest.call(null,s__173756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173758),null);
}
} else {
var row = cljs.core.first.call(null,s__173756__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.concat.call(null,(cljs.core.truth_(checkboxes)?(function (){var value = row_id_fn.call(null,row);
var all_values = cljs.core.map.call(null,row_id_fn,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),reforms.table.simple_checkbox.call(null,(function (){var or__4709__auto__ = select_all;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return selected.call(null,value);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,all_values,row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (checked){
return reforms.binding.core.swap_BANG_.call(null,selection,selection_path,((function (value,all_values,row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (prev_selected){
if(cljs.core.truth_(select_all)){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_values),value);
} else {
if(cljs.core.truth_(checked)){
return cljs.core.conj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);
} else {
return cljs.core.disj.call(null,(function (){var or__4709__auto__ = prev_selected;
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),value);

}
}
});})(value,all_values,row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
);
});})(value,all_values,row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
)], null)], null);
})():null),(function (){var iter__5481__auto__ = ((function (row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function reforms$table$iter__173755_$_iter__173771(s__173772){
return (new cljs.core.LazySeq(null,((function (row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all){
return (function (){
var s__173772__$1 = s__173772;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__173772__$1);
if(temp__4425__auto____$1){
var s__173772__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__173772__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__173772__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__173774 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__173773 = (0);
while(true){
if((i__173773 < size__5480__auto__)){
var col = cljs.core._nth.call(null,c__5479__auto__,i__173773);
cljs.core.chunk_append.call(null,b__173774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null));

var G__173781 = (i__173773 + (1));
i__173773 = G__173781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173774),reforms$table$iter__173755_$_iter__173771.call(null,cljs.core.chunk_rest.call(null,s__173772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__173774),null);
}
} else {
var col = cljs.core.first.call(null,s__173772__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),xf.call(null,col,row.call(null,col))], null),reforms$table$iter__173755_$_iter__173771.call(null,cljs.core.rest.call(null,s__173772__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(row,s__173756__$2,temp__4425__auto__,vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,col_keys);
})())),reforms$table$iter__173755.call(null,cljs.core.rest.call(null,s__173756__$2)));
}
} else {
return null;
}
break;
}
});})(vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
,null,null));
});})(vec__173745,attrs,vec__173746,rows,map__173747,map__173747__$1,columns,checkboxes,xf,labels,col_keys,map__173748,map__173748__$1,selection,selection_path,row_id_fn,nil_selects_all_QMARK_,selected,select_all))
;
return iter__5481__auto__.call(null,rows);
})())], null));
});

reforms.table.table.cljs$lang$maxFixedArity = (0);

reforms.table.table.cljs$lang$applyTo = (function (seq173744){
return reforms.table.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq173744));
});

//# sourceMappingURL=table.js.map