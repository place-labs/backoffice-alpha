(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-systems-systems-module"],{

/***/ "./src/app/shell/systems/system-about/system-about.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/systems/system-about/system-about.component.ts ***!
  \**********************************************************************/
/*! exports provided: SystemAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAboutComponent", function() { return SystemAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/forms/settings-form/settings-form.component */ "./src/app/shared/components/forms/settings-form/settings-form.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/date-from.pipe */ "./src/app/shared/pipes/date-from.pipe.ts");













var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemStartAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__1 = goog.getMsg("Start System");
    I18N_0 = MSG_EXTERNAL_systemStartAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@systemStartAction␟6f81a8c7820d574bfb9547825d7fa432bfc66af1␟8154115013285965605:Start System`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemStopAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__3 = goog.getMsg("Stop System");
    I18N_2 = MSG_EXTERNAL_systemStopAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@systemStopAction␟87a27185ae52b451c0f6d4127ce7fedf70ab1fb1␟5161697597209904801:Stop System`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_settingsLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__5 = goog.getMsg("Settings");
    I18N_4 = MSG_EXTERNAL_settingsLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemUrlLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___7 = goog.getMsg("Support URL:");
    I18N_6 = MSG_EXTERNAL_systemUrlLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@systemUrlLabel␟7e26fea74dd85099364f23205324001d5f08d729␟206794270698958656:Support URL:`;
}
function SystemAboutComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r3.item.support_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.item.support_url);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemBookableLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___9 = goog.getMsg("Bookable Room:");
    I18N_8 = MSG_EXTERNAL_systemBookableLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:@@systemBookableLabel␟1729892dec33ddc3daf35f197b6882eb1c4a8a1b␟238801422848943760:Bookable Room:`;
}
function SystemAboutComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.bookable ? "Yes" : "No");
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_emailLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___11 = goog.getMsg("Email:\u00A0");
    I18N_10 = MSG_EXTERNAL_emailLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:@@emailLabel␟31703f614ddd8547d63317830a59c0a7b935778e␟8507709425849513695:Email: `;
}
function SystemAboutComponent_div_0_div_9_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + ctx_r11.item.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.item.email);
} }
function SystemAboutComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SystemAboutComponent_div_0_div_9_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.item.email);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_capacityLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___13 = goog.getMsg("Capacity:");
    I18N_12 = MSG_EXTERNAL_capacityLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:@@capacityLabel␟a1170e85d1897210d5fe03d1f363587de15d02cd␟8062822823331512246:Capacity:`;
}
function SystemAboutComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.item.capacity);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemPanelCountLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___15 = goog.getMsg("Installed Touch Panels:");
    I18N_14 = MSG_EXTERNAL_systemPanelCountLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:@@systemPanelCountLabel␟45b07d34ed29d3a5269b5bac86182781001845a9␟4375591254429334656:Installed Touch Panels:`;
}
function SystemAboutComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.item.installed_ui_devices);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemCreatedAtLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___17 = goog.getMsg("Created:");
    I18N_16 = MSG_EXTERNAL_systemCreatedAtLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:@@systemCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`;
}
function SystemAboutComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r8.item.created_at * 1000));
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc \@systemUpdatedAtLabel
     */ 
    const MSG_EXTERNAL_1116759395536210856$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___19 = goog.getMsg("Updated:");
    I18N_18 = MSG_EXTERNAL_1116759395536210856$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:@systemUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`;
}
function SystemAboutComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r9.item.updated_at * 1000));
} }
const _c20 = function () { return []; };
function SystemAboutComponent_div_0_section_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a-settings-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r10.item.id)("merge", true)("settings", ctx_r10.item.settings)("merge_settings", ctx_r10.other_settings || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c20));
} }
function SystemAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function SystemAboutComponent_div_0_Template_button_tapped_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function SystemAboutComponent_div_0_Template_button_tapped_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SystemAboutComponent_div_0_div_7_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SystemAboutComponent_div_0_div_8_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SystemAboutComponent_div_0_div_9_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SystemAboutComponent_div_0_div_10_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SystemAboutComponent_div_0_div_11_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SystemAboutComponent_div_0_div_12_Template, 6, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SystemAboutComponent_div_0_div_13_Template, 6, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SystemAboutComponent_div_0_section_17_Template, 2, 5, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.support_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.bookable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.bookable && ctx_r0.item.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.installed_ui_devices);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading_settings)("ngIfElse", _r1);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemLoadingLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__22 = goog.getMsg("Loading system settings...");
    I18N_21 = MSG_EXTERNAL_systemLoadingLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:@@systemLoadingLabel␟12761354f7c79edc553ff408524f5b791cd54481␟3385246531183416995:Loading system settings...`;
}
function SystemAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SystemAboutComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** List of settings for associated modules, drivers and zones */
        this.other_settings = [];
    }
    /** List of module ids associated with the system */
    modules() {
        return [...this.item.modules];
    }
    /** Whether application is loading settings for item */
    get loading_settings() {
        return this._service.get('loading_settings');
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item').subscribe(item => {
            this.item = item;
            this.loadZones();
            this.loadSettings();
        }));
    }
    ngOnChanges(changes) {
        if (changes.item && this.item) {
            this.loadZones();
            this.loadSettings();
        }
    }
    /**
     * Open confirmation modal for starting the active system
     */
    start() {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                title: 'Start system?',
                content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                icon: { type: 'icon', class: 'backoffice-controller-play' }
            } }));
        this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                this._service.Systems.startSystem(this.item.id).then(result => null, err => this._service.notifyError(`Failed to start system: ${JSON.stringify(err.response || err.message || err)}`));
            }
        }));
    }
    /**
     * Open confirmation modal for stopping the active system
     */
    stop() {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                title: 'Stop system?',
                content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                icon: { type: 'icon', class: 'backoffice-controller-stop' }
            } }));
        this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                this._service.Systems.stopSystem(this.item.id).then(result => null, err => this._service.notifyError(`Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`));
            }
        }));
    }
    /**
     * Load zones associated with the system to allow for merging
     */
    loadZones() {
        if (!this.item) {
            return;
        }
        this._service.Zones.query({ control_system_id: this.item.id, offset: 0 }).then(list => {
            list.sort((a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id));
            this.zones = list;
        }, () => null);
    }
    loadSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.other_settings = yield this._service.Systems.settings(this.item.id);
        });
    }
}
SystemAboutComponent.ɵfac = function SystemAboutComponent_Factory(t) { return new (t || SystemAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
SystemAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemAboutComponent, selectors: [["system-about"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], ["load_state", ""], [1, "container"], [1, "select"], ["mat-button", "", 3, "tapped"], [1, "details"], ["class", "field", 4, "ngIf"], [1, "settings"], [4, "ngIf", "ngIfElse"], [1, "field"], [1, "value"], ["target", "_blank", 3, "href"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "id", "merge", "settings", "merge_settings"], [1, "info-block"], [1, "icon"], ["diameter", "48"], [1, "text"]], template: function SystemAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SystemAboutComponent_div_0_Template, 18, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemAboutComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _shared_components_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_9__["SettingsFormComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_shared_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_11__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-bottom: 0.5em;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 0 1em;\n  font-weight: 300;\n  text-decoration: underline;\n  cursor: pointer;\n  transition: color 200ms;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\nheader.settings[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.75em;\n  margin: 0;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.25em;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0 0.25em;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0.25em 0;\n}\n.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n}\na[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tYWJvdXQvc3lzdGVtLWFib3V0LnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9zeXN0ZW1zL3N5c3RlbS1hYm91dC9zeXN0ZW0tYWJvdXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FDYUo7QURWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ2FKO0FEWkk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNjUjtBRGJRO0VBQ0ksMEJBQUE7QUNlWjtBRFhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2FSO0FEVEE7RUFDSSxxQkFBQTtBQ1lKO0FEVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1lKO0FEVEE7RUFDSSxnQkFBQTtBQ1lKO0FEWEk7RUFDSSxjQUFBO0FDYVI7QURYSTtFQUNJLGVBQUE7QUNhUjtBRFRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNZSjtBRFZJO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO01BQUEsb0JBQUE7VUFBQSxnQkFBQTtBQ1lSO0FEUkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDV0o7QURSQTtFQUNJLGdCQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zeXN0ZW1zL3N5c3RlbS1hYm91dC9zeXN0ZW0tYWJvdXQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuODUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZXR0aW5ncyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAuNzVlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogLjVlbSAuMjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC4yNWVtO1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbjogMCAuMjVlbTtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG59XG5cbi5maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogLjI1ZW0gMDtcblxuICAgIC52YWx1ZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDtcbiAgICB9XG59XG5cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuYSB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbmhlYWRlciBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcGFkZGluZzogMCAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xufVxuaGVhZGVyIHNwYW46aG92ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbn1cbmhlYWRlci5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjc1ZW07XG4gIG1hcmdpbjogMDtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAuMjVlbTtcbn1cbmJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC4yNWVtIDA7XG59XG4uZmllbGQgLnZhbHVlIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgdXNlci1zZWxlY3Q6IGFsbDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'system-about',
                templateUrl: './system-about.template.html',
                styleUrls: ['./system-about.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/systems/system-modules/system-modules.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shell/systems/system-modules/system-modules.component.ts ***!
  \**************************************************************************/
/*! exports provided: SystemModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModulesComponent", function() { return SystemModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/ts-client.es5.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_view_module_state_view_module_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/view-module-state/view-module-state.component */ "./src/app/overlays/view-module-state/view-module-state.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var src_app_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/overlays/view-response-modal/view-response-modal.component */ "./src/app/overlays/view-response-modal/view-response-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_debug_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/debug.service */ "./src/app/services/debug.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/custom-fields/item-search-field/item-search-field.component */ "./src/app/shared/components/custom-fields/item-search-field/item-search-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_custom_fields_system_exec_field_system_exec_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/custom-fields/system-exec-field/system-exec-field.component */ "./src/app/shared/components/custom-fields/system-exec-field/system-exec-field.component.ts");
/* harmony import */ var _shared_components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/context-menu/context-menu.component */ "./src/app/shared/components/context-menu/context-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");


























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_addExistingAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__1 = goog.getMsg(" Add existing ");
    I18N_0 = MSG_EXTERNAL_addExistingAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@addExistingAction␟e03814486fe2ec3ed315060ae27c4ccec0380c00␟4096041993839955424: Add existing `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_newAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__3 = goog.getMsg("Add new");
    I18N_2 = MSG_EXTERNAL_newAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@newAction␟52cb3a1dbc20365867f39819932e43d19542474d␟4948407374074297419:Add new`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleListHeader$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__5 = goog.getMsg("Module List");
    I18N_4 = MSG_EXTERNAL_moduleListHeader$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@moduleListHeader␟d6444eff6432d536c4d50ba42a33099ce5f7088b␟8179099976175023415:Module List`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_execHeader$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___7 = goog.getMsg("Execute command");
    I18N_6 = MSG_EXTERNAL_execHeader$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@execHeader␟35f05bbd8314aa4af70300d377f1c64c8128207c␟8077695877143433436:Execute command`;
}
function SystemModulesComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "system-exec-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system", ctx_r1.item);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleStateLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___9 = goog.getMsg("State");
    I18N_8 = MSG_EXTERNAL_moduleStateLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:@@moduleStateLabel␟873b72903b1858a9cd6c8967521030b4d7d1435b␟5911214550882917183:State`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleNameLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___11 = goog.getMsg("Name");
    I18N_10 = MSG_EXTERNAL_moduleNameLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:@@moduleNameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleClassLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___13 = goog.getMsg("Class");
    I18N_12 = MSG_EXTERNAL_moduleClassLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:@@moduleClassLabel␟f60c6c571ed1e6266976ca261a2b2d0ebaa16c6e␟4378796785985219718:Class`;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleIpLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___15 = goog.getMsg("IP");
    I18N_14 = MSG_EXTERNAL_moduleIpLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:@@moduleIpLabel␟84738b1bbb866302445901b1bca1e9cb5bf8d006␟512712988274106243:IP`;
}
function SystemModulesComponent_div_0_table_12_tr_13_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function SystemModulesComponent_div_0_table_12_tr_13_i_5_Template_i_modelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const device_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return device_r5.connected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", device_r5.connected)("sys", ctx_r6.item.id)("mod", ctx_r6.device_classes[device_r5.id]);
} }
function SystemModulesComponent_div_0_table_12_tr_13_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function SystemModulesComponent_div_0_table_12_tr_13_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemModulesComponent_div_0_table_12_tr_13_button_23_Template_button_tapped_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r15 = ctx.$implicit; const device_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.handleContextEvent(item_r15, device_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r15.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.name);
} }
function SystemModulesComponent_div_0_table_12_tr_13_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 38);
} }
const _c16 = function (a1) { return ["/modules", a1]; };
const _c17 = function () { return { class: "backoffice-dots-three-vertical" }; };
function SystemModulesComponent_div_0_table_12_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextAction", function SystemModulesComponent_div_0_table_12_tr_13_Template_tr_contextAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const device_r5 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.handleContextEvent($event, device_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SystemModulesComponent_div_0_table_12_tr_13_i_5_Template, 1, 3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemModulesComponent_div_0_table_12_tr_13_Template_div_tapped_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const device_r5 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.power(device_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function SystemModulesComponent_div_0_table_12_tr_13_Template_a_contextmenu_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SystemModulesComponent_div_0_table_12_tr_13_Template_mat_checkbox_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const device_r5 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.toggleDebugEvents(device_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SystemModulesComponent_div_0_table_12_tr_13_i_15_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SystemModulesComponent_div_0_table_12_tr_13_button_23_Template, 4, 2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SystemModulesComponent_div_0_table_12_tr_13_td_24_Template, 1, 0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r5 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("context-menu", _r8)("offset_y", 0 - 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", device_r5 && ctx_r4.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", device_r5.running && device_r5.connected)("inactive", device_r5.running && !device_r5.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c16, device_r5.id))("matTooltip", device_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r5.driver == null ? null : device_r5.driver.name) || "<Unnamed>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.debugged_modules[device_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.device_classes[device_r5.id], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", device_r5.tls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", (device_r5.tls ? "https://" : "http://") + device_r5.ip, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r5.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", device_r5.running ? ctx_r4.menu_options : ctx_r4.offline_options);
} }
const _c18 = function () { return []; };
function SystemModulesComponent_div_0_table_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SystemModulesComponent_div_0_table_12_Template_tbody_cdkDropListDropped_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SystemModulesComponent_div_0_table_12_tr_13_Template, 25, 21, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.devices || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c18));
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleListEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___20 = goog.getMsg("No devices for system");
    I18N_19 = MSG_EXTERNAL_moduleListEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:@@moduleListEmpty␟9836797cbe920e8e21cad7119e531cf1a762f4f1␟3944265689033175665:No devices for system`;
}
function SystemModulesComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemModulesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "item-search-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SystemModulesComponent_div_0_Template_item_search_field_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.new_module = $event.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemModulesComponent_div_0_Template_button_tapped_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.addModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemModulesComponent_div_0_Template_button_tapped_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.newModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SystemModulesComponent_div_0_ng_container_8_Template, 5, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SystemModulesComponent_div_0_table_12_Template, 14, 2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SystemModulesComponent_div_0_div_13_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx_r0.module_service)("exclude", ctx_r0.exclude_fn)("ngModel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.new_module);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.id && ctx_r0.item.modules && !ctx_r0.hide_exec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.devices && ctx_r0.devices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.devices || ctx_r0.devices.length <= 0);
} }
class SystemModulesComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_service, _dialog, _debug_service) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this._debug_service = _debug_service;
        /** Mapping of devices to the module bindings */
        this.device_classes = {};
        /** Whether a device should be listened to */
        this.device_listener = {};
        /** Actions available for the context menu */
        this.menu_options = [
            {
                id: 'power',
                name: 'Toggle Power',
                icon: { type: 'icon', class: 'backoffice-power-plug' },
            },
            { id: 'state', name: 'View State', icon: { type: 'icon', class: 'backoffice-eye' } },
            { id: 'reload', name: 'Recompile Driver', icon: { type: 'icon', class: 'backoffice-cw' } },
            { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } },
            {
                id: 'load',
                name: 'Load Module',
                icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
            },
        ];
        this.offline_options = [
            {
                id: 'power',
                name: 'Toggle Power',
                icon: { type: 'icon', class: 'backoffice-power-plug' },
            },
            { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } },
            {
                id: 'load',
                name: 'Load Module',
                icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
            },
        ];
        /** Function for excluding modules already within this system */
        this.exclude_fn = (item) => item.control_system_id === this.item.id || item.role === _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineDriverRole"].Logic;
    }
    /** Service for interacting with modules */
    get module_service() {
        return this._service.Modules;
    }
    /** Map of modules to whether they are listening for debug messages */
    get debugged_modules() {
        return this.devices.reduce((map, device) => {
            map[device.id] = this._debug_service.isListening(device);
            return map;
        }, {});
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item').subscribe((item) => {
            this.item = item;
            this.loadModules();
        }));
    }
    ngOnChanges(changes) {
        if (changes.item) {
            this.loadModules();
        }
    }
    /**
     * Load the modules for the active system
     * @param offset Offset to load
     */
    loadModules(offset = 0) {
        if (!this.item) {
            return;
        }
        this._service.Modules.query({
            control_system_id: this.item.id,
            complete: true,
            offset,
        }).then((list) => {
            list.sort((a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id));
            this.devices = list;
            this.generateModuleBindings();
        }, () => null);
    }
    /**
     * Handle context menu event
     * @param event Event posted by the context menu
     * @param device Module associated with the context menu event
     */
    handleContextEvent(event, device) {
        if (event) {
            switch (event.id) {
                case 'power':
                    this.power(device);
                    break;
                case 'state':
                    this.viewState(device);
                    break;
                case 'reload':
                    this.reloadModule(device);
                    break;
                case 'remove':
                    this.remove(device);
                    break;
                case 'load':
                    this.loadModule(device);
                    break;
            }
        }
    }
    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    power(device) {
        this.hide_exec = true;
        if (device.running) {
            device.stop().then(() => {
                this.hide_exec = false;
                this._service.notifySuccess('Module successfully stopped');
                device.running = false;
            }, (err) => {
                this.hide_exec = false;
                if (typeof err === 'string' && err.length < 64) {
                    this._service.notifyError(err);
                }
                else {
                    this._service.notifyError(`Failed to stop module '${device.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
                }
            });
        }
        else {
            device.start().then(() => {
                this.hide_exec = false;
                this._service.notifySuccess('Module successfully started');
                device.running = true;
            }, (err) => {
                this.hide_exec = false;
                if (typeof err === 'string' && err.length < 64) {
                    this._service.notifyError(err);
                }
                else {
                    this._service.notifyError(`Failed to start module '${device.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
                }
            });
        }
    }
    /**
     * Update the state of the module
     * @param device Module to reload
     */
    reload(device) {
        this._service.Modules.show(device.id).then((item) => {
            for (const k in item) {
                if (item.hasOwnProperty(k)) {
                    device[k] = item[k];
                }
            }
        }, () => null);
    }
    viewState(device) {
        this._dialog.open(src_app_overlays_view_module_state_view_module_state_component__WEBPACK_IMPORTED_MODULE_5__["ViewModuleStateModalComponent"], { data: { system: this.item, module: device, devices: this.devices } });
    }
    reloadModule(device) {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: 'Recompile module?',
                content: `New driver code will be loaded and the device settings will be reloaded.`,
                icon: { type: 'icon', class: 'backoffice-install' },
            } }));
        this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                (device.driver
                    ? device.driver.recompile()
                    : this._service.Drivers.recompile(device.driver_id)).then((_) => this._service.notifySuccess('Driver successfully recompiled.'), (err) => this._service.notifyError(JSON.stringify(err.response || err.message || err)));
                ref.close();
                this.unsub('confirm_ref');
            }
        }));
    }
    loadModule(device) {
        this._service.Modules.load(device.id).then(() => this._service.notifySuccess(`Successfully loaded module "${device.name || device.id}"`), (err) => this._service.notifyError(`Error loading module. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
    /** View Results of the execute */
    viewDetails(content) {
        this._dialog.open(src_app_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_7__["ViewResponseModalComponent"], {
            data: { content },
        });
    }
    /**
     * Handle drop event for reordering the devices
     * @param event Drag drop details
     */
    drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: 'Change order?',
                    content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
                    icon: { type: 'icon', class: 'backoffice-layers' },
                } }));
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                if (e.reason === 'done') {
                    this.hide_exec = true;
                    ref.componentInstance.loading = 'Updating module order...';
                    const list = [...this.item.modules];
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(list, event.previousIndex, event.currentIndex);
                    this.item.storePendingChange('modules', list);
                    this.item.save().then(() => {
                        this.hide_exec = false;
                        ref.close();
                        this.unsub('confirm_ref');
                    }, (err) => {
                        this.hide_exec = false;
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error reording modules. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    });
                }
            }));
        }
    }
    remove(device) {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: 'Remove module?',
                content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            } }));
        this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                this.hide_exec = true;
                this.item.removeModule(device.id).then(() => {
                    this.hide_exec = false;
                    this._service.notifySuccess('Succefully removed module.');
                    this.devices.splice(this.devices.indexOf(device), 1);
                    ref.close();
                    this.unsub('confirm_ref');
                }, (err) => {
                    this.hide_exec = false;
                    this._service.notifyError(`Error removing module. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    ref.close();
                    this.unsub('confirm_ref');
                });
            }
        }));
    }
    newModule() {
        const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_6__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineModule"]({
                    control_system_id: this.item.id,
                    control_system: this.item,
                }),
                service: this._service.Modules,
                readonly: true,
            },
        });
        this.subscription('modal_events', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.hide_exec = true;
                this._service.Systems.addModule(this.item.id, event.metadata.item.id).then(() => {
                    this.hide_exec = false;
                    this.item = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineSystem"](Object.assign(Object.assign({}, this.item), { modules: this.item.modules.concat(event.metadata.item.id), version: this.item._version++ }));
                    this._service.set('BACKOFFICE.active_item', this.item);
                    this.timeout('reload_module_list', () => this.loadModules(), 1000);
                }, (err) => {
                    this.hide_exec = false;
                });
            }
        }));
        ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
        });
    }
    addModule() {
        if (this.new_module) {
            this.joinModule(this.new_module);
            this.new_module = '';
        }
    }
    joinModule(id) {
        const mod_list = [...this.item.modules];
        if (mod_list.indexOf(id) < 0) {
            mod_list.push(id);
        }
        this.hide_exec = true;
        this.item.storePendingChange('modules', mod_list);
        this._service.Systems.addModule(this.item.id, id).then(() => {
            this.hide_exec = false;
            this.item = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["EngineSystem"](Object.assign(Object.assign({}, this.item), { modules: this.item.modules.concat(id), version: this.item._version++ }));
            this._service.notifySuccess('Successfully added device to system');
            this.loadModules();
        }, () => {
            this.hide_exec = false;
            this._service.notifyError('Failed to add module to system');
        });
    }
    /**
     * Toggle debug events for a device
     * @param device Module to listen to debug events for
     */
    toggleDebugEvents(device) {
        if (!device) {
            return;
        }
        if (this._debug_service.isListening(device)) {
            this._debug_service.unbind(device);
        }
        else {
            this._debug_service.bind(device, this.device_classes[device.id]);
        }
    }
    /**
     * Generate the binding modules for each device
     */
    generateModuleBindings() {
        const counter = {};
        for (const device of this.devices) {
            const name = device.custom_name || device.name || 'Blank';
            if (!counter[name]) {
                counter[name] = 0;
            }
            this.device_classes[device.id] = `${name}_${++counter[name]}`;
        }
    }
}
SystemModulesComponent.ɵfac = function SystemModulesComponent_Factory(t) { return new (t || SystemModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_debug_service__WEBPACK_IMPORTED_MODULE_10__["EngineDebugService"])); };
SystemModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemModulesComponent, selectors: [["system-modules"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "select"], [1, "dropdown"], [3, "service", "exclude", "ngModel", "ngModelChange"], ["mat-button", "", 3, "disabled", "tapped"], ["mat-button", "", 3, "tapped"], [4, "ngIf"], [1, "device-list"], ["class", "info-block", 4, "ngIf"], [1, "exec"], [3, "system"], [1, "small"], [1, "name"], [1, "module"], [1, "ip"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "context-menu", "offset_y", "contextAction", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "context-menu", "offset_y", "contextAction"], ["cdkDragHandle", "", 1, "action", "grab"], [1, "backoffice-select-arrows"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod", "modelChange", 4, "ngIf"], [1, "state", 3, "tapped"], ["routerLinkActive", "router-link-active", 3, "routerLink", "matTooltip", "contextmenu"], [3, "checked", "change"], [1, "lock"], ["class", "backoffice-lock", 4, "ngIf"], [3, "href"], ["touchrelease", "", 1, "small"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "icon"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "tapped", 4, "ngFor", "ngForOf"], ["class", "placeholder", "colspan", "6", 4, "cdkDragPlaceholder"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod", "modelChange"], [1, "backoffice-lock"], ["mat-menu-item", "", 3, "tapped"], [1, "text"], ["colspan", "6", 1, "placeholder"], [1, "info-block"]], template: function SystemModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemModulesComponent_div_0_Template, 14, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_12__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _shared_components_custom_fields_system_exec_field_system_exec_field_component__WEBPACK_IMPORTED_MODULE_16__["SystemExecFieldComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _shared_components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_17__["ContextMenuComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_22__["IconComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragPlaceholder"], _placeos_composer__WEBPACK_IMPORTED_MODULE_23__["BindingDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 4em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2em;\n  max-width: 5em;\n  margin: 0;\n}\n.dropdown[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3.25em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 5em;\n}\n.table-row[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  width: 10em;\n  min-width: 7em;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 3em;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.device-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 8em;\n  overflow: auto;\n  padding: 0 1em;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n.exec[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n.lock[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.state[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin: 0.25em;\n  background-color: #000;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.inactive[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 8px;\n  width: 8px;\n  margin: 8px;\n}\n.terminal[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em 1em 0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.25em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0.25em;\n    flex: 1;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0.25em;\n    flex: 1;\n  }\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.grab[_ngcontent-%COMP%] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 4px dashed rgba(0, 0, 0, 0.6);\n  height: 2em;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tbW9kdWxlcy9zeXN0ZW0tbW9kdWxlcy5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tbW9kdWxlcy9zeXN0ZW0tbW9kdWxlcy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3ZFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDY0o7QURYQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDY0o7QURYQTtFQUNJLE9BQUE7RUFDQSxjQUFBO0FDY0o7QURYQTtFQUNJLE9BQUE7QUNjSjtBRFZJO0VBQ0ksT0FBQTtFQUNBLFVBQUE7QUNhUjtBRFZJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNZUjtBRFJBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzREFBQTtBQ1dKO0FEUkE7RUFDSSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDV0o7QURSQTtFQUNJLGVBQUE7QUNXSjtBRFJBO0VBQ0ksY0FBQTtBQ1dKO0FEUkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1dKO0FEUkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkVBQUE7QUNXSjtBRFRJO0VBQ0kseUJEaEVBO0FFMkVSO0FEUkk7RUFDSSx5QkQ1RUU7RUM2RUYsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDVVI7QUROQTtFQUNJLGtCQUFBO0FDU0o7QUROQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNTSjtBRnJCUTtFQ1FSO0lBT1EsZUFBQTtFQ1VOO0FBQ0Y7QUZ2QlE7RUNLUjtJQU9RLGVBQUE7RUNlTjtBQUNGO0FGL0JRO0VDa0JKO0lBRVEsZUFBQTtFQ2VWO0FBQ0Y7QUZqQ1E7RUNlSjtJQUVRLGVBQUE7RUNvQlY7QUFDRjtBRGpCSTtFQUNJLGdCQUFBO0FDbUJSO0FGNUNRO0VDd0JKO0lBR1EsY0FBQTtJQUNBLE9BQUE7RUNxQlY7QUFDRjtBRi9DUTtFQ3FCSjtJQUdRLGNBQUE7SUFDQSxPQUFBO0VDMkJWO0FBQ0Y7QUQxQlE7RUFDSSxjQUFBO0FDNEJaO0FGM0RRO0VDaUNBO0lBRVEsY0FBQTtFQzRCZDtBQUNGO0FGN0RRO0VDOEJBO0lBRVEsY0FBQTtFQ2lDZDtBQUNGO0FEL0JRO0VBQ0ksZUFBQTtBQ2lDWjtBRDVCQTtFQUNJLG9CQUFBO0VBQUEsWUFBQTtBQytCSjtBRDVCQTtFQUNJLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FDK0JKO0FENUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDK0JKO0FEN0JJO0VBQ0ksZ0JBQUE7QUMrQlI7QUQ1Qkk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDOEJSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tbW9kdWxlcy9zeXN0ZW0tbW9kdWxlcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogNGVtO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWF4LXdpZHRoOiA1ZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAzLjI1ZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmbGV4OiAxO1xufVxuXG4udGFibGUtcm93IHtcbiAgICAubmFtZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiA1ZW07XG4gICAgfVxuXG4gICAgLm1vZHVsZSB7XG4gICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgICBtaW4td2lkdGg6IDdlbTtcbiAgICB9XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZGV2aWNlLWxpc3Qge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogOGVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xufVxuXG5oMyB7XG4gICAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG4uZXhlYyB7XG4gICAgcGFkZGluZzogMCAxZW07XG59XG5cbi5sb2NrIHtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3RhdGUge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBtYXJnaW46IDAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAyNTBtcywgaGVpZ2h0IDI1MG1zLCB3aWR0aCAyNTBtcywgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcblxuICAgICYuaW5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXJyb3I7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgIH1cbn1cblxuLnRlcm1pbmFsIHtcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbSAwO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5kcm9wZG93biB7XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgMC4yNWVtO1xuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ncmFiIHtcbiAgICBjdXJzb3I6IGdyYWI7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjEpO1xuICAgIGJvcmRlcjogNHB4IGRhc2hlZCByZ2JhKCMwMDAsIDAuNik7XG4gICAgaGVpZ2h0OiAyZW07XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxZW07XG5cbiAgICBhcHAtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0b3A6IDRlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXgtd2lkdGg6IDVlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZHJvcGRvd24ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDMuMjVlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBmbGV4OiAxO1xufVxuXG4udGFibGUtcm93IC5uYW1lIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDVlbTtcbn1cbi50YWJsZS1yb3cgLm1vZHVsZSB7XG4gIHdpZHRoOiAxMGVtO1xuICBtaW4td2lkdGg6IDdlbTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZGV2aWNlLWxpc3Qge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiA4ZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuaDMge1xuICBtYXJnaW46IDAuNWVtIDA7XG59XG5cbi5leGVjIHtcbiAgcGFkZGluZzogMCAxZW07XG59XG5cbi5sb2NrIHtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0ZSB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbjogMC4yNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDI1MG1zLCBoZWlnaHQgMjUwbXMsIHdpZHRoIDI1MG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xufVxuLnN0YXRlLmluYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5zdGF0ZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi50ZXJtaW5hbCB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbSAxZW0gMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zZWxlY3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zZWxlY3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlbGVjdCAuZHJvcGRvd24ge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zZWxlY3QgLmRyb3Bkb3duIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zZWxlY3QgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAuMjVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zZWxlY3QgYnV0dG9uIHtcbiAgICBtYXJnaW46IDAuMjVlbTtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnNlbGVjdCBidXR0b24ge1xuICAgIG1hcmdpbjogMC4yNWVtO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5zZWxlY3QgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc2VsZWN0IGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnNlbGVjdCBidXR0b246bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLnNlbGVjdCBidXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmdyYWIge1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMWVtO1xufVxuLm1hdC1tZW51LWl0ZW0gYXBwLWljb24ge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLm1hdC1tZW51LWl0ZW0gLnRleHQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-modules',
                templateUrl: './system-modules.template.html',
                styleUrls: ['./system-modules.styles.scss'],
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: src_app_services_debug_service__WEBPACK_IMPORTED_MODULE_10__["EngineDebugService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/systems/system-triggers/system-triggers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shell/systems/system-triggers/system-triggers.component.ts ***!
  \****************************************************************************/
/*! exports provided: SystemTriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemTriggersComponent", function() { return SystemTriggersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_select_item_modal_select_item_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/overlays/select-item-modal/select-item-modal.component */ "./src/app/overlays/select-item-modal/select-item-modal.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _shared_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/date-from.pipe */ "./src/app/shared/pipes/date-from.pipe.ts");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_addTriggerAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__1 = goog.getMsg("Add trigger");
    I18N_0 = MSG_EXTERNAL_addTriggerAction$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@addTriggerAction␟c1c4a42ba190fc42b9672315d2dcc668340fa97a␟8173039025352077970:Add trigger`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableName$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___3 = goog.getMsg("Name");
    I18N_2 = MSG_EXTERNAL_triggerTableName$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:@@triggerTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableCount$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___5 = goog.getMsg("Count");
    I18N_4 = MSG_EXTERNAL_triggerTableCount$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:@@triggerTableCount␟06412bce0f4fe4311193e9763666089bf9d980da␟8177873832400820695:Count`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableAddedTime$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___7 = goog.getMsg("Added");
    I18N_6 = MSG_EXTERNAL_triggerTableAddedTime$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@triggerTableAddedTime␟80e3b490720757978c99a7b5af3885faf202b955␟231679111972850796:Added`;
}
const _c8 = function (a1) { return ["/triggers", a1]; };
const _c9 = function () { return { class: "backoffice-edit" }; };
const _c10 = function () { return { class: "backoffice-trash" }; };
function SystemTriggersComponent_div_0_table_11_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemTriggersComponent_div_0_table_11_tr_11_Template_button_tapped_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.editTrigger(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemTriggersComponent_div_0_table_11_tr_11_Template_button_tapped_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.deleteTrigger(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", trigger_r5.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c8, trigger_r5.id))("matTooltip", trigger_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trigger_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trigger_r5.activated_count || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, (trigger_r5.created_at - 0) * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c10));
} }
function SystemTriggersComponent_div_0_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SystemTriggersComponent_div_0_table_11_tr_11_Template, 17, 15, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.trigger_list);
} }
const _c11 = function () { return { class: "backoffice-magnifying-glass" }; };
function SystemTriggersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemTriggersComponent_div_0_Template_button_tapped_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectTriggerToAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SystemTriggersComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.search_str = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SystemTriggersComponent_div_0_table_11_Template, 12, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.search_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trigger_list.length > 0)("ngIfElse", _r1);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__13 = goog.getMsg("No triggers for system");
    I18N_12 = MSG_EXTERNAL_triggerTableEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:@@triggerTableEmpty␟177b8a965eb2275e1b71e2704477af95207b40f2␟1550481348661348485:No triggers for system`;
}
function SystemTriggersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SystemTriggersComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_service, _dialog, _composer) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this._composer = _composer;
        /** List of triggers associated with the active system */
        this.trigger_list = [];
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item').subscribe(item => {
            this.item = item;
            this.loadSystemTriggers();
        }));
    }
    ngOnChanges(changes) {
        if (changes.item) {
            this.loadSystemTriggers();
        }
    }
    loadSystemTriggers(offset = 0) {
        if (!this.item) {
            return;
        }
        this._service.Systems.listTriggers(this.item.id).then(list => {
            this.trigger_list = list;
        }, () => null);
    }
    /**
     * Open the modal to create a new system
     */
    editTrigger(trigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_4__["ItemCreateUpdateModalComponent"], {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: trigger,
                    service: this._service.Triggers,
                    external_save: true
                }
            });
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'action') {
                    ref.componentInstance.loading = 'Saving trigger settings...';
                    const url = `${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${trigger.id}`;
                    this._composer.http.put(url, trigger.toJSON(true)).subscribe(() => null, err => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error updating trigger settings. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    }, () => {
                        this._service.notifySuccess(`Successfully updated trigger settings.`);
                        ref.close();
                        this.unsub('delete_confirm');
                    });
                }
            }));
        }
    }
    /**
     * Remove a trigger from the active system
     * @param trigger Trigger to remove
     */
    deleteTrigger(trigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                    title: `Remove trigger`,
                    content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Removing trigger...';
                    const url = `${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${trigger.id}`;
                    this._composer.http.delete(url).subscribe(() => null, err => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error removing trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    }, () => {
                        this._service.notifySuccess(`Successfully deleted trigger "${this.item.name}".`);
                        ref.close();
                        this.unsub('delete_confirm');
                    });
                }
            }));
        }
    }
    /**
     * Open modal to select a trigger to add
     */
    selectTriggerToAdd() {
        const ref = this._dialog.open(src_app_overlays_select_item_modal_select_item_modal_component__WEBPACK_IMPORTED_MODULE_2__["SelectItemModalComponent"], {
            height: 'auto',
            width: 'auto',
            data: {
                service_name: 'Triggers'
            }
        });
        this.subscription('dialog_events', ref.componentInstance.event.subscribe((event) => {
            const item = ref.componentInstance.item;
            if (event.reason === 'action' && item) {
                this.addTrigger(item);
                ref.close();
            }
        }));
        ref.afterClosed().subscribe(() => this.unsub('dialog_events'));
    }
    /**
     * Add the selected trigger to the active system
     * @param trigger Trigger to add to system
     */
    addTrigger(trigger) {
        this._service.Systems.addTrigger(this.item.id, {
            control_system_id: this.item.id,
            enabled: true,
            important: false,
            trigger_id: trigger.id
        });
    }
}
SystemTriggersComponent.ɵfac = function SystemTriggersComponent_Factory(t) { return new (t || SystemTriggersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_placeos_composer__WEBPACK_IMPORTED_MODULE_7__["ComposerService"])); };
SystemTriggersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemTriggersComponent, selectors: [["system-triggers"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], ["empty_state", ""], [1, "container"], [1, "settings"], [1, "select"], [1, "dropdown"], ["mat-button", "", 3, "tapped"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [3, "icon"], ["matInput", "", "name", "search-filter", "placeholder", "Filter Triggers", 3, "ngModel", "ngModelChange"], [1, "list"], [4, "ngIf", "ngIfElse"], [1, "small"], [1, "flex"], [1, "count"], [1, "added"], [1, "duo"], [4, "ngFor", "ngForOf"], [1, "state"], [3, "routerLink", "matTooltip"], [1, "actions"], ["mat-icon-button", "", 3, "tapped"], [1, "info-block"], [1, "text"]], template: function SystemTriggersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemTriggersComponent_div_0_Template, 12, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemTriggersComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"]], pipes: [_shared_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_17__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n.table-row[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%] {\n  width: 8em;\n  min-width: 8em;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.state[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 8px;\n  width: 8px;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.25em 1.5em;\n}\n.select[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n.duo[_ngcontent-%COMP%] {\n  width: 6em;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tdHJpZ2dlcnMvc3lzdGVtLXRyaWdnZXJzLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9zeXN0ZW1zL3N5c3RlbS10cmlnZ2Vycy9zeXN0ZW0tdHJpZ2dlcnMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FDYUo7QURWQTtFQUNJLGlCQUFBO0FDYUo7QURUSTs7RUFFSSxVQUFBO0VBQ0EsY0FBQTtBQ1lSO0FEUkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDV0o7QURWSTtFQUNJLG9DQUFBO0FDWVI7QURSQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyRUFBQTtBQ1dKO0FEVkk7RUFDSSx5QkRqQ0U7RUNrQ0YsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDWVI7QURQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1VKO0FEUkk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ1VSO0FEUEk7RUFDSSxzQkFBQTtBQ1NSO0FETkk7RUFDSSxpQkFBQTtBQ1FSO0FESkE7RUFDSSxVQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3N5c3RlbXMvc3lzdGVtLXRyaWdnZXJzL3N5c3RlbS10cmlnZ2Vycy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG59XG5cbi50YWJsZS1yb3cge1xuICAgIC5jb3VudCxcbiAgICAuYWRkZWQge1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICBtaW4td2lkdGg6IDhlbTtcbiAgICB9XG59XG5cbi5hY3Rpb24ge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1pbi13aWR0aDogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjY1ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjEpO1xuICAgIH1cbn1cblxuLnN0YXRlIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICAgIGJvcmRlci1yYWRpdXM6IC44ZW07XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDI1MG1zLCBoZWlnaHQgMjUwbXMsIHdpZHRoIDI1MG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBtYXJnaW46IC42MjVlbTtcbiAgICB9XG59XG5cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgLjI1ZW0gMS41ZW07XG4gICAgfVxuXG4gICAgYXBwLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICB9XG59XG5cbi5kdW8ge1xuICAgIHdpZHRoOiA2ZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLnRhYmxlLXJvdyAuY291bnQsXG4udGFibGUtcm93IC5hZGRlZCB7XG4gIHdpZHRoOiA4ZW07XG4gIG1pbi13aWR0aDogOGVtO1xufVxuXG4uYWN0aW9uIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjY1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLmFjdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnN0YXRlIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4gMjUwbXMsIGhlaWdodCAyNTBtcywgd2lkdGggMjUwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG59XG4uc3RhdGUuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIG1hcmdpbjogMC42MjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VsZWN0IG1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG4uc2VsZWN0IGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAwLjI1ZW0gMS41ZW07XG59XG4uc2VsZWN0IGFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5kdW8ge1xuICB3aWR0aDogNmVtO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemTriggersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-triggers',
                templateUrl: './system-triggers.template.html',
                styleUrls: ['./system-triggers.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _placeos_composer__WEBPACK_IMPORTED_MODULE_7__["ComposerService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/systems/system-zones/system-zones.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/systems/system-zones/system-zones.component.ts ***!
  \**********************************************************************/
/*! exports provided: SystemZonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemZonesComponent", function() { return SystemZonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/globals/base.directive */ "./src/app/shared/globals/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/custom-fields/item-search-field/item-search-field.component */ "./src/app/shared/components/custom-fields/item-search-field/item-search-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___1 = goog.getMsg("Name");
    I18N_0 = MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___1;
}
else {
    I18N_0 = $localize `:@@zoneTableEmpty␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_descriptionLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___3 = goog.getMsg("Description");
    I18N_2 = MSG_EXTERNAL_descriptionLabel$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:@@descriptionLabel␟eec715de352a6b114713b30b640d319fa78207a0␟4902817035128594900:Description`;
}
function SystemZonesComponent_div_0_table_8_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 9);
} }
function SystemZonesComponent_div_0_table_8_tr_9_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemZonesComponent_div_0_table_8_tr_9_td_9_Template_button_tapped_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const zone_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.removeZone(zone_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemZonesComponent_div_0_table_8_tr_9_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 22);
} }
const _c4 = function (a1) { return ["/zones", a1]; };
function SystemZonesComponent_div_0_table_8_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_div_0_table_8_tr_9_td_9_Template, 3, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SystemZonesComponent_div_0_table_8_tr_9_td_10_Template, 1, 0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zone_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, zone_r5.id))("matTooltip", zone_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.zones.length > 1);
} }
function SystemZonesComponent_div_0_table_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemZonesComponent_div_0_table_8_td_7_Template, 1, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SystemZonesComponent_div_0_table_8_Template_tbody_cdkDropListDropped_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_div_0_table_8_tr_9_Template, 11, 7, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.zones.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.zones);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___6 = goog.getMsg("No zones for system");
    I18N_5 = MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SHELL_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize `:@@zoneTableEmpty␟5ba52f7f708dd84732d74bb76b8643df29370f16␟3859183549731946351:No zones for system`;
}
function SystemZonesComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemZonesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "item-search-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SystemZonesComponent_div_0_Template_item_search_field_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.new_zone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function SystemZonesComponent_div_0_Template_button_tapped_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.joinZone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Join zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SystemZonesComponent_div_0_table_8_Template, 10, 2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_div_0_div_9_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("service", ctx_r0.zone_service)("exclude", ctx_r0.exclude_fn)("ngModel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.new_zone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zones && ctx_r0.zones.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.zones || ctx_r0.zones.length <= 0);
} }
class SystemZonesComponent extends _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** Emitter for changes to the loading state of the item */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exclude_fn = (zone) => this.item.zones.indexOf(zone.id) >= 0;
    }
    /** Service for managing zone data */
    get zone_service() {
        return this._service.Zones;
    }
    ngOnInit() {
        this.subscription('item', this._service.listen('BACKOFFICE.active_item').subscribe(item => {
            this.item = item;
            this.loadZones();
        }));
    }
    ngOnChanges(changes) {
        if (changes.item) {
            this.loadZones();
        }
    }
    /**
     * Load zone data for the active item
     * @param offset Page offset for the service request
     */
    loadZones(offset = 0) {
        if (!this.item) {
            return;
        }
        this._service.Systems.listZones(this.item.id).then(list => {
            list.sort((a, b) => this.item.zones.indexOf(a.id) - this.item.zones.indexOf(b.id));
            this.zones = list;
        }, () => null);
    }
    drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                    title: 'Change order?',
                    content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
                    icon: { type: 'icon', class: 'backoffice-cycle' }
                } }));
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                if (e.reason === 'done') {
                    const list = [...this.item.zones];
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(list, event.previousIndex, event.currentIndex);
                    ref.componentInstance.loading = 'Updating zone ordering...';
                    this.item.storePendingChange('zones', list);
                    this.item.save().then(() => {
                        ref.close();
                        this.unsub('confirm_ref');
                    }, err => {
                        ref.componentInstance.loading = null;
                        this._service.notifyError(`Error reording zones. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    });
                }
            }));
        }
    }
    removeZone(zone) {
        if (zone && zone.id) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                    title: 'Remove zone?',
                    content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                if (e.reason === 'done') {
                    this.loading.emit(true);
                    this.item.storePendingChange('zones', this.item.zones.filter(id => id !== zone.id));
                    this.item.save().then((item) => {
                        this.loading.emit(false);
                        this.item = item;
                        this._service.notifySuccess(`Remove zone "${zone.name}" from system`);
                        ref.close();
                        this.unsub('confirm_ref');
                    }, err => {
                        this.loading.emit(false);
                        this._service.notifySuccess(`Error removing "${zone.name}" from system. Error: ${JSON.stringify(err.response || err.message || err)}`);
                        ref.close();
                        this.unsub('confirm_ref');
                    });
                }
            }));
        }
    }
    joinZone() {
        if (this.new_zone) {
            if (this.item.zones.indexOf(this.new_zone.id) < 0) {
                this.loading.emit(true);
                const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                        title: 'Add zone',
                        content: `Add zone "${this.new_zone.name}" to system "${this.item.name}"`,
                        icon: { type: 'icon', class: 'backoffice-upload-to-cloud' }
                    } }));
                this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                    if (e.reason === 'done') {
                        ref.componentInstance.loading = 'Adding zone to system...';
                        this.item.storePendingChange('zones', Object(src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["unique"])([...this.item.zones, this.new_zone.id]));
                        this.item.save().then((item) => {
                            this.loading.emit(false);
                            this._service.notifySuccess(`Added zone "${this.new_zone.name}" to system`);
                            this.item = item;
                            this.loadZones();
                            ref.close();
                            this.unsub('confirm_ref');
                            this.new_zone = null;
                        }, (err) => {
                            ref.componentInstance.loading = null;
                            this.loading.emit(false);
                            this._service.notifyError(`Error adding zone "${this.new_zone.name}". Error: ${JSON.stringify(err.response || err.message || err)}`);
                        });
                    }
                    else {
                        this.loading.emit(false);
                    }
                }));
            }
            else {
                this._service.notifyInfo('The selected zone is already linked to this system');
            }
        }
    }
}
SystemZonesComponent.ɵfac = function SystemZonesComponent_Factory(t) { return new (t || SystemZonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
SystemZonesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemZonesComponent, selectors: [["system-zones"]], inputs: { item: "item" }, outputs: { loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "settings"], [1, "select"], [1, "dropdown"], [3, "service", "exclude", "ngModel", "ngModelChange"], ["mat-button", "", 3, "disabled", "tapped"], [4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "small"], [1, "name"], [1, "description"], ["class", "small", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], ["cdkDragHandle", "", 1, "action", "grab"], [1, "backoffice-select-arrows"], ["routerLinkActive", "router-link-active", 3, "routerLink", "matTooltip"], ["class", "placeholder", "colspan", "6", 4, "cdkDragPlaceholder"], ["mat-icon-button", "", 3, "tapped"], [1, "backoffice-trash"], ["colspan", "6", 1, "placeholder"], [1, "info-block"], [1, "text"]], template: function SystemZonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemZonesComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_8__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__["ɵb"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragPlaceholder"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.25em 1.5em;\n}\n.dropdown[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 3em;\n  height: 3em;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.name[_ngcontent-%COMP%] {\n  min-width: 10em;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tem9uZXMvc3lzdGVtLXpvbmVzLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9zeXN0ZW1zL3N5c3RlbS16b25lcy9zeXN0ZW0tem9uZXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDSSxZQUFBO0FDY0o7QURYQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNjSjtBRFhBO0VBQ0kscUJBQUE7QUNjSjtBRFhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNjSjtBRFpJO0VBQ0ksc0JBQUE7QUNjUjtBRFZBO0VBQ0ksT0FBQTtBQ2FKO0FEVkE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtBQ2FKO0FEVkE7RUFDSSxlQUFBO0FDYUo7QURWQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW0tem9uZXMvc3lzdGVtLXpvbmVzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG59XG5cbi5zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCAwLjI1ZW0gMS41ZW07XG4gICAgfVxufVxuXG4uZHJvcGRvd24ge1xuICAgIGZsZXg6IDE7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ubmFtZSB7XG4gICAgbWluLXdpZHRoOiAxMGVtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZzogMC41ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG59XG5cbi5zZWxlY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxlY3QgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAuMjVlbSAxLjVlbTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZmxleDogMTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm5hbWUge1xuICBtaW4td2lkdGg6IDEwZW07XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemZonesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-zones',
                templateUrl: './system-zones.template.html',
                styleUrls: ['./system-zones.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/systems/systems.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shell/systems/systems.component.ts ***!
  \****************************************************/
/*! exports provided: SystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsComponent", function() { return SystemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/ts-client.es5.js");
/* harmony import */ var _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base-root.component */ "./src/app/shared/components/base-root.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/item-display/item-display.component */ "./src/app/shared/components/item-display/item-display.component.ts");












const _c0 = function () { return { class: "backoffice-info-with-circle" }; };
const _c1 = function (a2) { return { id: "about", name: "About", icon: a2 }; };
const _c2 = function () { return { class: "backoffice-tablet" }; };
const _c3 = function (a2, a3) { return { id: "modules", name: "Modules", count: a2, icon: a3 }; };
const _c4 = function () { return { class: "backoffice-layers" }; };
const _c5 = function (a2, a3) { return { id: "zones", name: "Zones", count: a2, icon: a3 }; };
const _c6 = function () { return { class: "backoffice-stopwatch" }; };
const _c7 = function (a2, a3) { return { id: "triggers", name: "Triggers", count: a2, icon: a3 }; };
const _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
class SystemsComponent extends _shared_components_base_root_component__WEBPACK_IMPORTED_MODULE_2__["BaseRootComponent"] {
    constructor(_service, _route, _router, _dialog) {
        super(_service, _route, _router);
        this._service = _service;
        this._route = _route;
        this._router = _router;
        this._dialog = _dialog;
        this.service = this._service.Systems;
    }
    ngOnInit() {
        super.ngOnInit();
        this._service.title = 'Systems';
    }
    loadValues() {
        const query = { offset: 0, limit: 1, sys_id: this.item.id };
        // Get trigger count
        this._service.Systems.listTriggers(this.item.id).then(list => (this.trigger_count = list.length || 0));
        // Get device count
        this.device_count = (this.item.modules || []).length;
        // Get zone count
        this.zone_count = (this.item.zones || []).length;
    }
    /**
     * Open the modal to create a new system
     */
    newItem(copy = false) {
        if (this.modal_ref) {
            return;
        }
        this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: copy ? new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["EngineSystem"](Object.assign(Object.assign({}, this.item), { id: '', name: `${this.item.name} (1)` })) : new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["EngineSystem"](),
                service: this._service.Systems
            }
        });
        this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                this._router.navigate(['/systems', event.metadata.item.id]);
            }
        }));
        this.modal_ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
            this.modal_ref = null;
        });
    }
    /**
     * Open the modal to create a new system
     */
    editItem() {
        console.log('Edit');
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_3__["ItemCreateUpdateModalComponent"], {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: this.item,
                    service: this._service.Systems
                }
            });
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
    deleteItem() {
        if (this.item && !this.modal_ref) {
            this.modal_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: `Delete system`,
                    content: `<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' }
                } }));
            this.subscription('modal_events', this.modal_ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.modal_ref.componentInstance.loading = 'Deleting system...';
                    this.item.delete().then(() => {
                        this._service.notifySuccess(`Successfully deleted system "${this.item.name}".`);
                        this._service.set('BACKOFFICE.removed', this.item.id);
                        this._router.navigate(['/systems']);
                        this.modal_ref.close();
                    }, err => {
                        this.modal_ref.componentInstance.loading = null;
                        this._service.notifyError(`Error deleting system. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    });
                }
            }));
            this.modal_ref.afterClosed().subscribe(() => {
                this.unsub('modal_events');
                this.modal_ref = null;
            });
        }
    }
}
SystemsComponent.ɵfac = function SystemsComponent_Factory(t) { return new (t || SystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
SystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemsComponent, selectors: [["app-systems"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 27, consts: [[1, "container"], [1, "sidebar"], ["heading", "Systems", 3, "module", "close", "event"], [3, "touchrelease"], ["name", "system", "route", "systems", 3, "item", "loading", "tabs", "event"]], template: function SystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function SystemsComponent_Template_sidebar_event_2_listener($event) { return ctx.sidebarEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchrelease", function SystemsComponent_Template_main_touchrelease_3_listener() { return ctx.show_sidebar = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "item-display", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function SystemsComponent_Template_item_display_event_4_listener($event) { return ctx.itemEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("module", ctx.module)("close", ctx.show_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item)("loading", ctx.loading_item)("tabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](22, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c3, ctx.device_count, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c5, ctx.zone_count, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c7, ctx.trigger_count, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c6))));
    } }, directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _shared_components_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_10__["ItemDisplayComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  flex: 1;\n  background-color: #f0f0f0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2JhY2tvZmZpY2UvYmFja29mZmljZS9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvYmFja29mZmljZS9iYWNrb2ZmaWNlL3NyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW1zLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9zeXN0ZW1zL3N5c3RlbXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2FKO0FGbUVRO0VDcEZSO0lBTVEsc0JBQUE7RUNlTjtBQUNGO0FGaUVRO0VDdkZSO0lBTVEsc0JBQUE7RUNvQk47QUFDRjtBRnlEUTtFQzFFQTtJQUVRLFlBQUE7RUNtQmQ7QUFDRjtBRnVEUTtFQzdFQTtJQUVRLFlBQUE7RUN3QmQ7QUFDRjtBRitDUTtFQ3JFQTtJQUVRLFVBQUE7RUN3QmQ7QUFDRjtBRjZDUTtFQ3hFQTtJQUVRLFVBQUE7RUM2QmQ7QUFDRjtBRHhCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDMkJKO0FGZ0NRO0VDN0RSO0lBSVEsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7RUM2Qk47QUFDRjtBRjJCUTtFQ2hFUjtJQUlRLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0VDcUNOO0FBQ0Y7QURsQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQ3FDSjtBRlFRO0VDbERSO0lBT1Esd0JBQUE7SUFDQSxXQUFBO0VDdUNOO0FBQ0Y7QUZLUTtFQ3JEUjtJQU9RLHdCQUFBO0lBQ0EsV0FBQTtFQzZDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc3lzdGVtcy9zeXN0ZW1zLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICYuc2hvdyB7XG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1haW4ge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyMGVtO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgfVxufVxuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIuc2hvdyAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250YWluZXIuc2hvdyBtYWluIHtcbiAgICBoZWlnaHQ6IDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lci5zaG93IG1haW4ge1xuICAgIGhlaWdodDogMCU7XG4gIH1cbn1cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMGVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGhlaWdodDogM2VtO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgfVxufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBtYWluIHtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBtYWluIHtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-systems',
                templateUrl: './systems.template.html',
                styleUrls: ['./systems.styles.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/systems/systems.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/systems/systems.module.ts ***!
  \*************************************************/
/*! exports provided: AppSystemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSystemsModule", function() { return AppSystemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _systems_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./systems.routes */ "./src/app/shell/systems/systems.routes.ts");
/* harmony import */ var _systems_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systems.component */ "./src/app/shell/systems/systems.component.ts");
/* harmony import */ var _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-about/system-about.component */ "./src/app/shell/systems/system-about/system-about.component.ts");
/* harmony import */ var _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system-modules/system-modules.component */ "./src/app/shell/systems/system-modules/system-modules.component.ts");
/* harmony import */ var _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-triggers/system-triggers.component */ "./src/app/shell/systems/system-triggers/system-triggers.component.ts");
/* harmony import */ var _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system-zones/system-zones.component */ "./src/app/shell/systems/system-zones/system-zones.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");














class AppSystemsModule {
}
AppSystemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppSystemsModule });
AppSystemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppSystemsModule_Factory(t) { return new (t || AppSystemsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_systems_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedContentModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppSystemsModule, { declarations: [_systems_component__WEBPACK_IMPORTED_MODULE_6__["SystemsComponent"],
        _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_7__["SystemAboutComponent"],
        _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_8__["SystemModulesComponent"],
        _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_9__["SystemTriggersComponent"],
        _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_10__["SystemZonesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedContentModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSystemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _systems_component__WEBPACK_IMPORTED_MODULE_6__["SystemsComponent"],
                    _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_7__["SystemAboutComponent"],
                    _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_8__["SystemModulesComponent"],
                    _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_9__["SystemTriggersComponent"],
                    _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_10__["SystemZonesComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_systems_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedContentModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shell/systems/systems.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/systems/systems.routes.ts ***!
  \*************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _systems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systems.component */ "./src/app/shell/systems/systems.component.ts");
/* harmony import */ var _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-about/system-about.component */ "./src/app/shell/systems/system-about/system-about.component.ts");
/* harmony import */ var _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-modules/system-modules.component */ "./src/app/shell/systems/system-modules/system-modules.component.ts");
/* harmony import */ var _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-triggers/system-triggers.component */ "./src/app/shell/systems/system-triggers/system-triggers.component.ts");
/* harmony import */ var _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-zones/system-zones.component */ "./src/app/shell/systems/system-zones/system-zones.component.ts");





const ROUTES = [
    {
        path: ':id',
        component: _systems_component__WEBPACK_IMPORTED_MODULE_0__["SystemsComponent"],
        children: [
            { path: 'about', component: _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_1__["SystemAboutComponent"] },
            { path: 'modules', component: _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_2__["SystemModulesComponent"] },
            { path: 'triggers', component: _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_3__["SystemTriggersComponent"] },
            { path: 'zones', component: _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_4__["SystemZonesComponent"] },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];


/***/ })

}]);
//# sourceMappingURL=shell-systems-systems-module-es2015.js.map