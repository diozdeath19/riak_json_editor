﻿"use strict";
_kangoLoader.add("kango/i18n", function(require, exports, module) {
function InternationalizationBase(){this._messages={},this._defaultLocale="en",this._currentLocale=this._defaultLocale,this._loadLocales(this.getApplicationLocale())}function getPublicApi(){return utils.createApiWrapper(module.exports,InternationalizationBase.prototype)}var extensionInfo=require("kango/extension_info"),utils=require("kango/utils"),io=require("kango/io"),string=utils.string;InternationalizationBase.prototype={_loadLocales:function(e){extensionInfo.locales&&(this._defaultLocale=extensionInfo.default_locale||"en",this._currentLocale=e?e.slice(0,2).toLowerCase():this._defaultLocale,this._messages[this._currentLocale]=this._getLocaleMessages(this._currentLocale),this._currentLocale!=this._defaultLocale&&(this._messages[this._defaultLocale]=this._getLocaleMessages(this._defaultLocale)))},_getLocaleMessages:function(e){var t=io.getExtensionFileContents("locales/"+e+".json");return t?JSON.parse(t):null},getApplicationLocale:function(){return this._defaultLocale},getCurrentLocale:function(){return this._currentLocale},getMessages:function(){var e=this._messages[this._currentLocale]?this._messages[this._currentLocale]:this._messages[this._defaultLocale];return e||{}},getMessage:function(e){var t=this.getMessages(),s=t[e]?t[e]:e;return arguments.length>1?string.format.apply(string,[s].concat(Array.prototype.slice.call(arguments,1))):s}};







function Internationalization(){InternationalizationBase.call(this)}var utils=require("kango/utils"),object=utils.object;Internationalization.prototype=object.extend(InternationalizationBase,{getApplicationLocale:function(){return window.navigator.language||null}}),module.exports=new Internationalization,module.exports.getPublicApi=getPublicApi;
});