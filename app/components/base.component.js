"use strict";
/** Enum de Efeitos do Show/Hide do JQuery UI. */
(function (Effects) {
    Effects[Effects["Blind"] = 0] = "Blind";
    Effects[Effects["Bounce"] = 1] = "Bounce";
    Effects[Effects["Clip"] = 2] = "Clip";
    Effects[Effects["Drop"] = 3] = "Drop";
    Effects[Effects["Explode"] = 4] = "Explode";
    Effects[Effects["Fold"] = 5] = "Fold";
    Effects[Effects["Highlight"] = 6] = "Highlight";
    Effects[Effects["Puff"] = 7] = "Puff";
    Effects[Effects["Pulsate"] = 8] = "Pulsate";
    Effects[Effects["Scale"] = 9] = "Scale";
    Effects[Effects["Shake"] = 10] = "Shake";
    Effects[Effects["Size"] = 11] = "Size";
    Effects[Effects["Slide"] = 12] = "Slide";
})(exports.Effects || (exports.Effects = {}));
var Effects = exports.Effects;
/** Extensão do Enumerator de Efeitos. */
var Effects;
(function (Effects) {
    /** Converter Effect de "int" para "string". */
    function toString(effect) {
        return Effects[effect].toLowerCase();
    }
    Effects.toString = toString;
})(Effects = exports.Effects || (exports.Effects = {}));
/** Classe abstrata de Base contendo métodos de extensão para Component. */
var BaseComponent = (function () {
    function BaseComponent() {
        /** Configuração de efeito do Show/Hide. */
        this.effectConfig = new EffectConfig();
    }
    /**
     * Método para mostrar de forma animada um elemento.
     * @param jquerySelector  Seletor do JQuery.
     * @param complete Função opcional de callback.
    */
    BaseComponent.prototype.show = function (jquerySelector, complete) {
        var _this = this;
        // SetTimeOut serve para esperar o Angular lidar com o ngIf, já que ainda não temos ngAnimate.
        setTimeout(function () {
            $(jquerySelector).show(Effects.toString(_this.effectConfig.Effect), _this.effectConfig.Option, _this.effectConfig.Duration, complete);
        }, 1);
    };
    /**
     * Método para esconderde forma animada um elemento.
     * @param jquerySelector  Seletor do JQuery.
     * @param complete Função opcional de callback.
    */
    BaseComponent.prototype.hide = function (jquerySelector, complete) {
        var _this = this;
        // SetTimeOut serve para esperar o Angular lidar com o ngIf, já que ainda não temos ngAnimate.
        setTimeout(function () {
            $(jquerySelector).hide(Effects.toString(_this.effectConfig.Effect), _this.effectConfig.Option, _this.effectConfig.Duration, complete);
        }, 1);
    };
    /**
     * Método para realizar efeito em um elemento.
     * @param jquerySelector Seletor do JQuery.
     * @param effect Efeito selecionado.
     * @param option Opções extras para o efeito.
     * @param duration Duração do efeito.
     * @param complete Callback do efeito.
     */
    BaseComponent.prototype.effect = function (jquerySelector, effect, option, duration, complete) {
        setTimeout(function () {
            $(jquerySelector).effect(Effects.toString(effect), option, duration, complete);
        }, 1);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
/** Configuração do Efeito do Show/Hide para o Componente. */
var EffectConfig = (function () {
    function EffectConfig() {
        /** Efeito selecionado. */
        this.Effect = Effects.Blind;
        /** Duração do Efeito. Padrão 500ms. */
        this.Duration = 500;
    }
    return EffectConfig;
}());
exports.EffectConfig = EffectConfig;
//# sourceMappingURL=base.component.js.map