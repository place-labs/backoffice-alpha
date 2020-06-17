(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-triggers-triggers-module"],{

/***/ "./src/app/shell/triggers/trigger-about/trigger-about.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shell/triggers/trigger-about/trigger-about.component.ts ***!
  \*************************************************************************/
/*! exports provided: TriggerAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerAboutComponent", function() { return TriggerAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_trigger_action_modal_trigger_action_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/overlays/trigger-action-modal/trigger-action-modal.component */ "./src/app/overlays/trigger-action-modal/trigger-action-modal.component.ts");
/* harmony import */ var src_app_overlays_trigger_condition_modal_trigger_condition_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/trigger-condition-modal/trigger-condition-modal.component */ "./src/app/overlays/trigger-condition-modal/trigger-condition-modal.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _shared_components_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/custom-fields/item-search-field/item-search-field.component */ "./src/app/shared/components/custom-fields/item-search-field/item-search-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _shared_pipes_format_list_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/pipes/format-list.pipe */ "./src/app/shared/pipes/format-list.pipe.ts");


















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTemplateSystemLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__1 = goog.getMsg("Template System: ");
    I18N_0 = MSG_EXTERNAL_triggerTemplateSystemLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@triggerTemplateSystemLabel␟e0756ac7c3aa344be20cf6e324a333ef5ff0466c␟2847369180436747415:Template System: `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerConditionsHeader$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__3 = goog.getMsg("Conditions");
    I18N_2 = MSG_EXTERNAL_triggerConditionsHeader$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@triggerConditionsHeader␟986668e81481d0fd0934b4ef56b4236ccb298712␟2079395509894825886:Conditions`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerActionsHeader$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__5 = goog.getMsg("Actions");
    I18N_4 = MSG_EXTERNAL_triggerActionsHeader$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@triggerActionsHeader␟030b4423b92167200e39519599f9b863b4f7c62c␟3193976279273491157:Actions`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerComparisonLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___7 = goog.getMsg("Variable Comparison Condtions");
    I18N_6 = MSG_EXTERNAL_triggerComparisonLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@triggerComparisonLabel␟a5cf036084ee11326617b12304dbeefc6e1bb36a␟6551073590639857317:Variable Comparison Condtions`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTimeLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___9 = goog.getMsg("Time Dependent Conditions");
    I18N_8 = MSG_EXTERNAL_triggerTimeLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:@@triggerTimeLabel␟b8fd6c10ba159a3c30430f63820d801bfb7354f2␟2477713009538214942:Time Dependent Conditions`;
}
const _c10 = function () { return { class: "backoffice-edit" }; };
const _c11 = function () { return { class: "backoffice-trash" }; };
function TriggerAboutComponent_div_0_div_14_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_14_div_4_Template_button_tapped_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const comparison_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.editCondition(comparison_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_14_div_4_Template_button_tapped_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const comparison_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.confirmRemoveCondition(comparison_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comparison_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, comparison_r9.left), " ", comparison_r9.operator, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, comparison_r9.right), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c11));
} }
function TriggerAboutComponent_div_0_div_14_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_14_div_8_Template_button_tapped_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const time_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.editCondition(time_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_14_div_8_Template_button_tapped_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const time_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.confirmRemoveCondition(time_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", time_r13.type === "at" ? "At time" : "CRON", " ", time_r13.type === "at" ? time_r13.time : time_r13.cron, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c11));
} }
function TriggerAboutComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TriggerAboutComponent_div_0_div_14_div_4_Template, 10, 12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TriggerAboutComponent_div_0_div_14_div_8_Template, 8, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.comparisons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.time_dependents);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerFunctionsLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___13 = goog.getMsg("Function Call Actions");
    I18N_12 = MSG_EXTERNAL_triggerFunctionsLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:@@triggerFunctionsLabel␟bcd0d3c23fa6498d39bffabeec346417a572c40b␟3821303502506692310:Function Call Actions`;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerEmailsLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___15 = goog.getMsg("Email Actions");
    I18N_14 = MSG_EXTERNAL_triggerEmailsLabel$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:@@triggerEmailsLabel␟fd50da1d6809d4560322a924221a854f1d21dc3b␟7098100161332510393:Email Actions`;
}
function TriggerAboutComponent_div_0_div_22_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} }
const _c16 = function () { return { class: "backoffice-select-arrows" }; };
function TriggerAboutComponent_div_0_div_22_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_22_div_4_Template_button_tapped_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const action_r19 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.editAction(action_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_22_div_4_Template_button_tapped_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const action_r19 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.confirmRemoveAction(action_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TriggerAboutComponent_div_0_div_22_div_4_div_10_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r19 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", action_r19.mod, ", ", action_r19.method, "(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, action_r19.args), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c11));
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3981906223455182500$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____19 = goog.getMsg("{VAR_PLURAL, plural, =1 {Address } other {Addresses }}");
    I18N_18 = MSG_EXTERNAL_3981906223455182500$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____19;
}
else {
    I18N_18 = $localize `:␟6e542484e5a5b97451d8db2f7dfdbb6ae9882409␟3981906223455182500:{VAR_PLURAL, plural, =1 {Address } other {Addresses }}`;
}
I18N_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_18, { "VAR_PLURAL": "\uFFFD1\uFFFD" });
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_emailCountDisplay$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____20 = goog.getMsg("{$interpolation} {$icu}", { "interpolation": "\uFFFD0\uFFFD", "icu": I18N_18 });
    I18N_17 = MSG_EXTERNAL_emailCountDisplay$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____20;
}
else {
    I18N_17 = $localize `:@@emailCountDisplay␟0999296882eee5cef69cbe222cf6f242c97a20f5␟468872276403073781:${"\uFFFD0\uFFFD"}:INTERPOLATION: ${I18N_18}:ICU:`;
}
function TriggerAboutComponent_div_0_div_22_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} }
function TriggerAboutComponent_div_0_div_22_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "formatList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_22_div_8_Template_button_tapped_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const action_r24 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.editAction(action_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_div_22_div_8_Template_button_tapped_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const action_r24 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.confirmRemoveAction(action_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TriggerAboutComponent_div_0_div_22_div_8_div_12_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r24 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, action_r24.emails));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](action_r24.emails.length)(action_r24.emails.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | Body Length: ", action_r24.content.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r18.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c11));
} }
function TriggerAboutComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TriggerAboutComponent_div_0_div_22_Template_div_cdkDropListDropped_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.confirmReorder("function", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TriggerAboutComponent_div_0_div_22_div_4_Template, 11, 12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TriggerAboutComponent_div_0_div_22_Template_div_cdkDropListDropped_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.confirmReorder("mailer", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TriggerAboutComponent_div_0_div_22_div_8_Template, 13, 13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.functions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.mailers);
} }
const _c21 = function () { return { class: "backoffice-plus" }; };
function TriggerAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "item-search-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriggerAboutComponent_div_0_Template_item_search_field_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.template_system = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_Template_button_tapped_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addCondition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TriggerAboutComponent_div_0_div_14_Template, 9, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TriggerAboutComponent_div_0_Template_button_tapped_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.addAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TriggerAboutComponent_div_0_div_22_Template, 9, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx_r0.system_service)("ngModel", ctx_r0.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comparisons.length || ctx_r0.time_dependents.length)("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.functions.length || ctx_r0.mailers.length)("ngIfElse", _r3);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerConditionsEmpty$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__23 = goog.getMsg("No condtions for trigger");
    I18N_22 = MSG_EXTERNAL_triggerConditionsEmpty$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:@@triggerConditionsEmpty␟653b5ca90ecf78dcc8c860e03ffb38be6f5c8bee␟1315028183848030960:No condtions for trigger`;
}
function TriggerAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerActionsEmpty$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__25 = goog.getMsg("No actions for trigger");
    I18N_24 = MSG_EXTERNAL_triggerActionsEmpty$$SRC_APP_SHELL_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:@@triggerActionsEmpty␟71cb74873d6a75ae16e84e75d6249a79bbe1c505␟3814611805731914236:No actions for trigger`;
}
function TriggerAboutComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TriggerAboutComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** List of variable comparison trigger conditions */
        this.comparisons = [];
        /** List of time dependent trigger conditions */
        this.time_dependents = [];
        /** List of function call trigger actions */
        this.functions = [];
        /** List of email trigger actions */
        this.mailers = [];
    }
    /** Service for handling system endpoint requests */
    get system_service() {
        return this._service.Systems;
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item').subscribe(item => {
            this.item = item;
            this.ngOnChanges({ item: new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](null, this.item, false) });
        }));
    }
    ngOnChanges(changes) {
        if (changes.item) {
            if (this.item && this.item.conditions) {
                this.comparisons = this.item.conditions.comparisons || [];
                this.time_dependents = this.item.conditions.time_dependents || [];
                this.functions = this.item.actions.functions || [];
                this.mailers = this.item.actions.mailers || [];
            }
            if (this.confirm_ref) {
                this.confirm_ref.close();
                this.confirm_ref = null;
                this.unsub('delete_confirm');
            }
        }
    }
    /**
     * Add new condition to trigger
     */
    addCondition() {
        this._dialog.open(src_app_overlays_trigger_condition_modal_trigger_condition_modal_component__WEBPACK_IMPORTED_MODULE_3__["TriggerConditionModalComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                trigger: this.item,
                system: this.template_system
            }
        });
    }
    /**
     * Add new condition to trigger
     */
    editCondition(condition) {
        this._dialog.open(src_app_overlays_trigger_condition_modal_trigger_condition_modal_component__WEBPACK_IMPORTED_MODULE_3__["TriggerConditionModalComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                trigger: this.item,
                condition: JSON.parse(JSON.stringify(condition)),
                system: this.template_system
            }
        });
    }
    /**
     * Add new action to active trigger
     */
    addAction() {
        this._dialog.open(src_app_overlays_trigger_action_modal_trigger_action_modal_component__WEBPACK_IMPORTED_MODULE_2__["TriggerActionModalComponent"], {
            data: {
                trigger: this.item,
                system: this.template_system
            }
        });
    }
    /**
     * Edit existing action on active trigger
     * @param action Action to edit
     */
    editAction(action) {
        this._dialog.open(src_app_overlays_trigger_action_modal_trigger_action_modal_component__WEBPACK_IMPORTED_MODULE_2__["TriggerActionModalComponent"], {
            data: {
                trigger: this.item,
                action,
                system: this.template_system
            }
        });
    }
    confirmRemoveCondition(condition) {
        this.confirm_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: `Remove trigger condition`,
                content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' }
            } }));
        this.subscription('delete_confirm', this.confirm_ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.confirm_ref.componentInstance.loading = 'Removing trigger condition...';
                this.removeCondition(condition);
            }
        }));
    }
    /**
     * Remove a condition from the active trigger
     * @param condition Condition to remove
     */
    removeCondition(condition) {
        const conditions = {
            comparisons: [...this.comparisons],
            time_dependents: [...this.time_dependents]
        };
        if (condition.type) {
            const index = this.time_dependents.findIndex(item => JSON.stringify(item) === JSON.stringify(condition));
            conditions.time_dependents.splice(index, 1);
        }
        else {
            const index = this.comparisons.findIndex(item => JSON.stringify(item) === JSON.stringify(condition));
            conditions.comparisons.splice(index, 1);
        }
        this.item.storePendingChange('conditions', conditions);
        this.item.save().then(() => this._service.notifySuccess('Successfully removed trigger condition.'), err => this._service.notifyError(`Error removing trigger condition. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
    /**
     * Open confirmation modal for removing an action
     * @param action Action to remove
     */
    confirmRemoveAction(action) {
        this.confirm_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: `Remove trigger action`,
                content: `<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' }
            } }));
        this.subscription('delete_confirm', this.confirm_ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.confirm_ref.componentInstance.loading = 'Removing trigger action...';
                this.removeAction(action);
            }
        }));
    }
    /**
     * Remove an action from the active trigger
     * @param action Action to remove
     */
    removeAction(action) {
        const actions = {
            functions: [...this.item.actions.functions],
            mailers: [...this.item.actions.mailers]
        };
        if (action.emails) {
            const index = this.mailers.findIndex(item => JSON.stringify(item) === JSON.stringify(action));
            actions.mailers.splice(index, 1);
        }
        else {
            const index = this.functions.findIndex(item => JSON.stringify(item) === JSON.stringify(action));
            actions.functions.splice(index, 1);
        }
        this.item.storePendingChange('actions', actions);
        this.item.save().then(() => this._service.notifySuccess('Successfully removed trigger action.'), err => this._service.notifyError(`Error removing trigger action. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
    /**
     * Open confirmation modal for re-ordering action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    confirmReorder(type, event) {
        this.confirm_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: `Reoreder trigger ${type} action`,
                content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' }
            } }));
        this.subscription('delete_confirm', this.confirm_ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                this.confirm_ref.componentInstance.loading = `Reordering trigger ${type} action...`;
                this.reorderAction(type, event);
            }
        }));
    }
    /**
     * Re-order action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    reorderAction(type, event) {
        const list = [...(type === 'function' ? this.functions : this.mailers)];
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(list, event.previousIndex, event.currentIndex);
        const actions = {
            functions: type === 'function' ? list : this.functions,
            mailers: type === 'function' ? this.mailers : list
        };
        this.item.storePendingChange('actions', actions);
        this.item.save().then(() => this._service.notifySuccess(`Successfully re-ordered trigger ${type} action.`), err => this._service.notifyError(`Error re-ordered trigger ${type} action. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
}
TriggerAboutComponent.ɵfac = function TriggerAboutComponent_Factory(t) { return new (t || TriggerAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
TriggerAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TriggerAboutComponent, selectors: [["trigger-about"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 1, consts: [["class", "container", 4, "ngIf"], ["no_conditions", ""], ["no_actions", ""], [1, "container"], [1, "settings"], [1, "field"], ["for", "driver", "matTooltip", "System to use for available status variables and function calls"], [3, "service", "ngModel", "ngModelChange"], [1, "action"], ["mat-icon-button", "", 3, "disabled", "tapped"], [3, "icon"], [1, "text"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], [1, "header"], [1, "group", "comparisons"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "group", "time-dependents"], [1, "item"], [1, "handle"], [1, "details"], ["mat-icon-button", "", 3, "tapped"], ["cdkDropList", "", 1, "group", "functions", 3, "cdkDropListDropped"], ["class", "item", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "group", "emails", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "item"], ["cdkDragHandle", "", 1, "handle"], ["class", "placeholder", 4, "cdkDragPlaceholder"], [1, "placeholder"], [3, "matTooltip"], [1, "info-block"]], template: function TriggerAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TriggerAboutComponent_div_0_Template, 23, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TriggerAboutComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TriggerAboutComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _shared_components_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_10__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_13__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragPlaceholder"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], _shared_pipes_format_list_pipe__WEBPACK_IMPORTED_MODULE_15__["FormatListPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.1em;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.no-item[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  margin: 2px 0;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  font-family: \"Fira Code\", monospace;\n  white-space: nowrap;\n  font-size: 0.6em;\n  padding: 0 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n}\n.item[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #f0f0f0;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0.25em;\n}\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.5em 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.85);\n}\nheader[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 1em;\n  font-weight: 500;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 0px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 4px dashed rgba(0, 0, 0, 0.6);\n  height: 3em;\n  width: 100%;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvdHJpZ2dlcnMvdHJpZ2dlci1hYm91dC90cmlnZ2VyLWFib3V0LnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC90cmlnZ2Vycy90cmlnZ2VyLWFib3V0L3RyaWdnZXItYWJvdXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FDYUo7QURWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFZBO0VBQ0kscUJBQUE7QUNhSjtBRFZBO0VBQ0ksaUJBQUE7QUNhSjtBRFZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDYUo7QURWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNhSjtBRFhJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ2FSO0FEWlE7RUFDSSxvQkFBQTtFQUFBLFlBQUE7QUNjWjtBRFZJO0VBQ0ksT0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0ROSTtFQ09KLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNZUjtBRFZRO0VBQ0ksbUNEZEE7QUUwQlo7QURSSTtFQUNJLHlCQUFBO0FDVVI7QURQSTtFQUNJLHNCQUFBO0FDU1I7QURMQTtFQUNJLGNBQUE7QUNRSjtBREpJO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtBQ09SO0FETFE7RUFDSSxrQkFBQTtBQ09aO0FERkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS0o7QURGQTtFQUNJLHNCQUFBO0VEekJBLDBHQUFBO0FFK0JKO0FESEk7RUFDSSxhQUFBO0FDS1I7QUREQTtFQUNJLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC90cmlnZ2Vycy90cmlnZ2VyLWFib3V0L3RyaWdnZXItYWJvdXQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IC41ZW0gLjI1ZW07XG59XG5cbi5uby1pdGVtIHtcbiAgICBmb250LXNpemU6IC43NWVtO1xufVxuXG4uZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhhbmRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgYXBwLWljb24ge1xuICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRtb25vLWZvbnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICAgICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJG1vbm8tZm9udDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgfVxufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbjogLjI1ZW07XG59XG5cbmhlYWRlciB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIC41ZW0gMCAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCMwMDAsIC44NSk7XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ucGxhY2Vob2xkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjEpO1xuICAgIGJvcmRlcjogNHB4IGRhc2hlZCByZ2JhKCMwMDAsIC42KTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG59XG5cbi5uby1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAycHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaXRlbSAuaGFuZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMi41cmVtO1xufVxuLml0ZW0gLmhhbmRsZSBhcHAtaWNvbiB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cbi5pdGVtIC5kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5pdGVtIC5kZXRhaWxzIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xufVxuLml0ZW06bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG4uaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xufVxuXG5oZWFkZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAuNWVtIDAgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg1KTtcbn1cbmhlYWRlciBidXR0b25bZGlzYWJsZWRdIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNkay1kcmFnLXByZXZpZXcgYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXI6IDRweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriggerAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'trigger-about',
                templateUrl: './trigger-about.template.html',
                styleUrls: ['./trigger-about.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/triggers/trigger-systems/trigger-systems.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/triggers/trigger-systems/trigger-systems.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TriggerSystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerSystemsComponent", function() { return TriggerSystemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _shared_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/date-from.pipe */ "./src/app/shared/pipes/date-from.pipe.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemTableName$$SRC_APP_SHELL_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___1 = goog.getMsg("Name");
    I18N_0 = MSG_EXTERNAL_systemTableName$$SRC_APP_SHELL_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___1;
}
else {
    I18N_0 = $localize `:@@systemTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemTableAdded$$SRC_APP_SHELL_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___3 = goog.getMsg("Added");
    I18N_2 = MSG_EXTERNAL_systemTableAdded$$SRC_APP_SHELL_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:@@systemTableAdded␟80e3b490720757978c99a7b5af3885faf202b955␟231679111972850796:Added`;
}
const _c4 = function (a1) { return ["/systems", a1]; };
function TriggerSystemsComponent_div_0_table_2_tr_9_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c4, trigger_r5.system_id))("matTooltip", trigger_r5.system_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trigger_r5.system_name, " ");
} }
const _c5 = function () { return { class: "backoffice-trash" }; };
function TriggerSystemsComponent_div_0_table_2_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TriggerSystemsComponent_div_0_table_2_tr_9_a_4_Template, 2, 5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function TriggerSystemsComponent_div_0_table_2_tr_9_Template_button_tapped_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const trigger_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.delete(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", trigger_r5.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", trigger_r5.system_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, (trigger_r5.created_at - 0) * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));
} }
function TriggerSystemsComponent_div_0_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TriggerSystemsComponent_div_0_table_2_tr_9_Template, 11, 8, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.system_trigger_list);
} }
function TriggerSystemsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TriggerSystemsComponent_div_0_table_2_Template, 10, 1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.system_trigger_list.length > 0)("ngIfElse", _r1);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemTableEmpty$$SRC_APP_SHELL_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS__7 = goog.getMsg("No systems with trigger");
    I18N_6 = MSG_EXTERNAL_systemTableEmpty$$SRC_APP_SHELL_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:@@systemTableEmpty␟edad99e460bba0d0256ef0624907d8d26d84595b␟5399503921552553899:No systems with trigger`;
}
function TriggerSystemsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TriggerSystemsComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _dialog, _composer) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this._composer = _composer;
        /** List of systems associated with the trigger */
        this.system_trigger_list = [];
        /** Map of systems ids to connected status */
        this.connected = {};
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item').subscribe(item => {
            this.item = item;
            this.ngOnChanges({ item: new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SimpleChange"](null, this.item, false) });
        }));
    }
    ngOnChanges(changes) {
        if (changes.item && this.item) {
            this.loadSystemTriggers();
        }
    }
    loadSystemTriggers(offset = 0) {
        this._service.Systems.query({
            trigger_id: this.item.id,
            offset
        }).then(list => this.system_trigger_list = list || [], () => null);
    }
    /**
     * Delete the trigger from system
     */
    delete(trigger) {
        if (trigger) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                    title: `Remove trigger`,
                    content: `<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${trigger.system_name || ''}"</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Removing trigger...';
                    yield this.deleteTrigger(trigger).catch(err => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error removing trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
                        throw err;
                    });
                    this.loadSystemTriggers();
                    ref.close();
                    this.unsub('delete_confirm');
                }
            })));
        }
    }
    /**
     * Remove the trigger from it's associated system
     * @param trigger Trigger to remove
     */
    deleteTrigger(trigger) {
        return new Promise((resolve, reject) => {
            const url = `${this._composer.auth.api_endpoint}/systems/${trigger.system_id}/triggers/${trigger.id}`;
            this._composer.http.delete(url).subscribe(_ => null, _ => reject(_), () => resolve());
        });
    }
}
TriggerSystemsComponent.ɵfac = function TriggerSystemsComponent_Factory(t) { return new (t || TriggerSystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_placeos_composer__WEBPACK_IMPORTED_MODULE_6__["ComposerService"])); };
TriggerSystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TriggerSystemsComponent, selectors: [["trigger-systems"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], ["empty_state", ""], [1, "container"], [1, "settings"], [4, "ngIf", "ngIfElse"], [1, "small"], [1, "flex"], [4, "ngFor", "ngForOf"], [1, "state"], [3, "routerLink", "matTooltip", 4, "ngIf"], ["mat-icon-button", "", 3, "tapped"], [3, "icon"], [3, "routerLink", "matTooltip"], [1, "info-block"], [1, "text"]], template: function TriggerSystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TriggerSystemsComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TriggerSystemsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"]], pipes: [_shared_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_13__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\ntbody[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\ndiv[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  width: 2em;\n}\ndiv[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%] {\n  width: 4em;\n}\ndiv[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.state[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 0.75em;\n  width: 0.75em;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvdHJpZ2dlcnMvdHJpZ2dlci1zeXN0ZW1zL3RyaWdnZXItc3lzdGVtcy5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvdHJpZ2dlcnMvdHJpZ2dlci1zeXN0ZW1zL3RyaWdnZXItc3lzdGVtcy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3RFQTtFQUNJLFlBQUE7QUNhSjtBRFZBO0VBQ0ksaUJBQUE7QUNhSjtBRFZBO0VBQ0ksZ0JBQUE7QUNhSjtBRFpJO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQ2NSO0FEVEk7RUFDSSxVQUFBO0FDWVI7QURWSTtFQUNJLFVBQUE7QUNZUjtBRFhRO0VBQ0ksb0JBQUE7QUNhWjtBRFJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1dKO0FEVkk7RUFDSSxvQ0FBQTtBQ1lSO0FEUkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkVBQUE7QUNXSjtBRFZJO0VBQ0kseUJEN0NFO0VDOENGLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ1lSO0FEUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNVSjtBRFRJO0VBQ0ksT0FBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvdHJpZ2dlcnMvdHJpZ2dlci1zeXN0ZW1zL3RyaWdnZXItc3lzdGVtcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG59XG5cbnRib2R5IHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgdGQge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG59XG5cbmRpdiB7XG4gICAgLnNtYWxsIHtcbiAgICAgICAgd2lkdGg6IDJlbTtcbiAgICB9XG4gICAgLmR1byB7XG4gICAgICAgIHdpZHRoOiA0ZW07XG4gICAgICAgICoge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3Rpb24ge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1pbi13aWR0aDogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjY1ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjEpO1xuICAgIH1cbn1cblxuLnN0YXRlIHtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gICAgYm9yZGVyLXJhZGl1czogLjhlbTtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMjUwbXMsIGhlaWdodCAyNTBtcywgd2lkdGggMjUwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICAgICAgaGVpZ2h0OiAuNzVlbTtcbiAgICAgICAgd2lkdGg6IC43NWVtO1xuICAgICAgICBtYXJnaW46IC42MjVlbTtcbiAgICB9XG59XG5cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5idG4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG50Ym9keSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG50Ym9keSB0ZCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5kaXYgLnNtYWxsIHtcbiAgd2lkdGg6IDJlbTtcbn1cbmRpdiAuZHVvIHtcbiAgd2lkdGg6IDRlbTtcbn1cbmRpdiAuZHVvICoge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmFjdGlvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42NWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zdGF0ZSB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4gMjUwbXMsIGhlaWdodCAyNTBtcywgd2lkdGggMjUwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG59XG4uc3RhdGUuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgaGVpZ2h0OiAwLjc1ZW07XG4gIHdpZHRoOiAwLjc1ZW07XG4gIG1hcmdpbjogMC42MjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VsZWN0IC5idG4ge1xuICBmbGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TriggerSystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'trigger-systems',
                templateUrl: './trigger-systems.template.html',
                styleUrls: ['./trigger-systems.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _placeos_composer__WEBPACK_IMPORTED_MODULE_6__["ComposerService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/triggers/triggers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shell/triggers/triggers.component.ts ***!
  \******************************************************/
/*! exports provided: TriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggersComponent", function() { return TriggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/ts-client.es5.js");
/* harmony import */ var _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base-root.component */ "./src/app/shared/components/base-root.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/item-display/item-display.component */ "./src/app/shared/components/item-display/item-display.component.ts");













const _c0 = function () { return { class: "backoffice-info-with-circle" }; };
const _c1 = function (a2) { return { id: "about", name: "About", icon: a2 }; };
const _c2 = function () { return { class: "backoffice-documents" }; };
const _c3 = function (a2, a3) { return { id: "systems", name: "Systems", count: a2, icon: a3 }; };
const _c4 = function (a0, a1) { return [a0, a1]; };
class TriggersComponent extends _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_3__["BaseRootComponent"] {
    constructor(_service, _route, _router, _dialog) {
        super(_service, _route, _router);
        this._service = _service;
        this._route = _route;
        this._router = _router;
        this._dialog = _dialog;
        this.service = this._service.Triggers;
    }
    ngOnInit() {
        super.ngOnInit();
        this._service.title = 'Triggers';
    }
    loadValues() {
        const query = { offset: 0, limit: 1, trigger_id: this.item.id };
        // Get trigger count
        this._service.Systems.query(query).then(list => (this.system_count = this._service.Systems.last_total || list.length || 0));
    }
    /**
     * Open the modal to create a new trigger
     */
    newItem(copy = false) {
        if (this.modal_ref) {
            return;
        }
        this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: copy ? new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineTrigger"](Object.assign(Object.assign({}, this.item), { id: '', name: `${this.item.name} (1)` })) : new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineTrigger"](),
                service: this._service.Triggers
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/triggers', event.metadata.item.id]);
            }
        }));
        this.modal_ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
            this.modal_ref = null;
        });
    }
    /**
     * Open the modal to create edit the active trigger
     */
    editItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemCreateUpdateModalComponent"], {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: this.item,
                    service: this._service.Triggers
                }
            });
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
    /**
     * Delete the active trigger
     */
    deleteItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: `Delete trigger`,
                    content: `<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.reason === 'done') {
                    this.modal_ref.componentInstance.loading = 'Deleting trigger...';
                    yield this.item.delete().catch(err => {
                        this.modal_ref.componentInstance.loading = null;
                        this._service.notifyError(`Error deleting trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
                        throw err;
                    });
                    this._router.navigate(['/triggers']);
                    this._service.set('BACKOFFICE.removed', this.item.id);
                    this.modal_ref.close();
                }
            })));
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
}
TriggersComponent.ɵfac = function TriggersComponent_Factory(t) { return new (t || TriggersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
TriggersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TriggersComponent, selectors: [["app-triggers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 17, consts: [[1, "container"], [1, "sidebar"], ["heading", "Triggers", 3, "module", "close", "event"], [3, "touchrelease"], ["name", "trigger", "route", "triggers", 3, "item", "loading", "tabs", "event"]], template: function TriggersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event", function TriggersComponent_Template_sidebar_event_2_listener($event) { return ctx.sidebarEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("touchrelease", function TriggersComponent_Template_main_touchrelease_3_listener() { return ctx.show_sidebar = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "item-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event", function TriggersComponent_Template_item_display_event_4_listener($event) { return ctx.itemEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("module", ctx.module)("close", ctx.show_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.item)("loading", ctx.loading_item)("tabs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c3, ctx.system_count, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2))));
    } }, directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_11__["ItemDisplayComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  flex: 1;\n  background-color: #f0f0f0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvdHJpZ2dlcnMvdHJpZ2dlcnMuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3NoZWxsL3RyaWdnZXJzL3RyaWdnZXJzLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQXFDQTs7Y0FBQTtBQVlBOztlQUFBO0FBT0E7O2VBQUE7QUFnQkE7O3NCQUFBO0FDdEVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNhSjtBRm1FUTtFQ3BGUjtJQU1RLHNCQUFBO0VDZU47QUFDRjtBRmlFUTtFQ3ZGUjtJQU1RLHNCQUFBO0VDb0JOO0FBQ0Y7QUZ5RFE7RUMxRUE7SUFFUSxZQUFBO0VDbUJkO0FBQ0Y7QUZ1RFE7RUM3RUE7SUFFUSxZQUFBO0VDd0JkO0FBQ0Y7QUYrQ1E7RUNyRUE7SUFFUSxVQUFBO0VDd0JkO0FBQ0Y7QUY2Q1E7RUN4RUE7SUFFUSxVQUFBO0VDNkJkO0FBQ0Y7QUR4QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQzJCSjtBRmdDUTtFQzdEUjtJQUlRLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0VDNkJOO0FBQ0Y7QUYyQlE7RUNoRVI7SUFJUSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtFQ3FDTjtBQUNGO0FEbENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUNxQ0o7QUZRUTtFQ2xEUjtJQU9RLHdCQUFBO0lBQ0EsV0FBQTtFQ3VDTjtBQUNGO0FGS1E7RUNyRFI7SUFPUSx3QkFBQTtJQUNBLFdBQUE7RUM2Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3RyaWdnZXJzL3RyaWdnZXJzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICYuc2hvdyB7XG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyMGVtO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgfVxufVxuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIuc2hvdyAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIuc2hvdyBtYWluIHtcbiAgICBoZWlnaHQ6IDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IG1haW4ge1xuICAgIGhlaWdodDogMCU7XG4gIH1cbn1cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMGVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGhlaWdodDogM2VtO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgfVxufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBtYWluIHtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBtYWluIHtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TriggersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-triggers',
                templateUrl: './triggers.template.html',
                styleUrls: ['./triggers.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/triggers/triggers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shell/triggers/triggers.module.ts ***!
  \***************************************************/
/*! exports provided: AppTriggersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTriggersModule", function() { return AppTriggersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _triggers_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triggers.routes */ "./src/app/shell/triggers/triggers.routes.ts");
/* harmony import */ var _triggers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triggers.component */ "./src/app/shell/triggers/triggers.component.ts");
/* harmony import */ var _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trigger-about/trigger-about.component */ "./src/app/shell/triggers/trigger-about/trigger-about.component.ts");
/* harmony import */ var _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trigger-systems/trigger-systems.component */ "./src/app/shell/triggers/trigger-systems/trigger-systems.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");












class AppTriggersModule {
}
AppTriggersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppTriggersModule });
AppTriggersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppTriggersModule_Factory(t) { return new (t || AppTriggersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_triggers_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppTriggersModule, { declarations: [_triggers_component__WEBPACK_IMPORTED_MODULE_6__["TriggersComponent"],
        _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_7__["TriggerAboutComponent"],
        _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_8__["TriggerSystemsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTriggersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _triggers_component__WEBPACK_IMPORTED_MODULE_6__["TriggersComponent"],
                    _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_7__["TriggerAboutComponent"],
                    _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_8__["TriggerSystemsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_triggers_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shell/triggers/triggers.routes.ts":
/*!***************************************************!*\
  !*** ./src/app/shell/triggers/triggers.routes.ts ***!
  \***************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _triggers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers.component */ "./src/app/shell/triggers/triggers.component.ts");
/* harmony import */ var _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger-about/trigger-about.component */ "./src/app/shell/triggers/trigger-about/trigger-about.component.ts");
/* harmony import */ var _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger-systems/trigger-systems.component */ "./src/app/shell/triggers/trigger-systems/trigger-systems.component.ts");



const ROUTES = [
    {
        path: ':id',
        component: _triggers_component__WEBPACK_IMPORTED_MODULE_0__["TriggersComponent"],
        children: [
            { path: 'about', component: _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_1__["TriggerAboutComponent"] },
            { path: 'systems', component: _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_2__["TriggerSystemsComponent"] },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];


/***/ })

}]);
//# sourceMappingURL=shell-triggers-triggers-module-es2015.js.map