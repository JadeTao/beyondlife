(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var continent = (function () {
    function continent(jades) {
        this.jades = jades;
    }
    continent.born = function (jades) {
        return new continent(jades);
    };
    continent.prototype.tick = function (current, grain) {
        this.jades.forEach(function (v) { return v.tick(current, grain); });
    };
    continent.prototype.add = function (jade) {
        this.jades.push(jade);
    };
    return continent;
}());
exports["default"] = continent;
},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var init_state_1 = require("./../static/init-state");
var jade = (function () {
    function jade(state, name) {
        //TODO:状态的层次问题
        this.state = Object.assign({}, init_state_1["default"], state);
        this.name = name || 'jader';
    }
    jade.born = function (state, name) {
        return new jade(state, name);
    };
    jade.prototype.grow = function (time) {
    };
    jade.prototype.tick = function (current, grain) {
        console.log("i'm " + this.tellName() + "," + ((new Date()).getTime() - current));
    };
    jade.prototype.tellName = function () {
        var time = [{
                type: 'second',
                num: 0
            }];
        return this.name;
    };
    return jade;
}());
exports["default"] = jade;
},{"./../static/init-state":3}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var initState = {
    physical: {
        head: {
            hair: {
                color: '#000000',
                length: 5,
                feature: 'straight'
            },
            face: {
                eye: {
                    size: 10,
                    color: '#000000'
                },
                nose: {},
                mouth: {},
                tooth: {},
                ear: {}
            },
            neck: {}
        },
        body: {},
        leg: {},
        foot: {}
    },
    mental: {},
    social: {}
};
exports["default"] = initState;
},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var clock = (function () {
    function clock() {
        this.timer = (new Date()).getTime();
    }
    clock.born = function () {
        return new clock();
    };
    clock.prototype.tick = function (current, world, grain) {
        grain = grain || [{ second: 1 }];
        this.intervalHandler = setInterval(function () {
            world.tick(current, grain);
        }, 1000);
    };
    return clock;
}());
exports["default"] = clock;
},{}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var log = (function () {
    function log() {
    }
    log.born = function () {
        return new log();
    };
    log.prototype.print = function (payload, type, format) {
        type = type || 'log';
        format
            ? console[type](JSON.stringify(payload, null, 4))
            : console[type](JSON.stringify(payload));
    };
    log.prototype.store = function (payload) {
    };
    return log;
}());
exports["default"] = log;
},{}],6:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var clock_1 = require("./system/clock");
var jade_1 = require("./creature/jade");
var log_1 = require("./system/log");
var continent_1 = require("./area/continent");
var world = (function () {
    function world() {
        this.areas = [];
        this.init();
        this.log = log_1["default"].born();
        this.log.print({
            hi: 'game starts',
            time: this.getTime()
        }, null, true);
        this.clock.tick(this.clock.timer, this);
    }
    world.born = function () {
        return new world();
    };
    world.prototype.init = function () {
        this.timer = (new Date()).getTime();
        this.areas.push(continent_1["default"].born([jade_1["default"].born({})]));
        this.clock = clock_1["default"].born();
    };
    world.prototype.getTime = function () {
        return (new Date()).getTime() - this.timer;
    };
    world.prototype.tick = function (current, grain) {
        this.areas.forEach(function (v) { return v.tick(current, grain); });
    };
    return world;
}());
world.born();
},{"./area/continent":1,"./creature/jade":2,"./system/clock":4,"./system/log":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXJlYS9jb250aW5lbnQudHMiLCJzcmMvY3JlYXR1cmUvamFkZS50cyIsInNyYy9zdGF0aWMvaW5pdC1zdGF0ZS50cyIsInNyYy9zeXN0ZW0vY2xvY2sudHMiLCJzcmMvc3lzdGVtL2xvZy50cyIsInNyYy93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7SUFHRSxtQkFBWSxLQUFrQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRU0sY0FBSSxHQUFYLFVBQVksS0FBa0I7UUFDNUIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSx3QkFBSSxHQUFYLFVBQVksT0FBTyxFQUFFLEtBQUs7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDTSx1QkFBRyxHQUFWLFVBQVcsSUFBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBOzs7OztBQ25CRCxxREFBOEM7QUFLOUM7SUFRRSxjQUFZLEtBQUssRUFBRSxJQUFhO1FBQzlCLGNBQWM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHVCQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksT0FBTyxDQUFBO0lBQzdCLENBQUM7SUFFTSxTQUFJLEdBQVgsVUFBWSxLQUFLLEVBQUUsSUFBYTtRQUM5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TyxFQUFFLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBR0QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IGFyZWEgfSBmcm9tICcuLy4uL3N0YXRpYy9pbnRlcmZhY2UnXHJcbmltcG9ydCBqYWRlIGZyb20gJy4vLi4vY3JlYXR1cmUvamFkZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRpbmVudCBpbXBsZW1lbnRzIGFyZWEge1xyXG4gIHByaXZhdGUgamFkZXM6IEFycmF5PGphZGU+XHJcblxyXG4gIGNvbnN0cnVjdG9yKGphZGVzOiBBcnJheTxqYWRlPikge1xyXG4gICAgdGhpcy5qYWRlcyA9IGphZGVzXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYm9ybihqYWRlczogQXJyYXk8amFkZT4pIHtcclxuICAgIHJldHVybiBuZXcgY29udGluZW50KGphZGVzKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRpY2soY3VycmVudCwgZ3JhaW4pIHtcclxuICAgIHRoaXMuamFkZXMuZm9yRWFjaCh2ID0+IHYudGljayhjdXJyZW50LCBncmFpbikpXHJcbiAgfVxyXG4gIHB1YmxpYyBhZGQoamFkZTogamFkZSkge1xyXG4gICAgdGhpcy5qYWRlcy5wdXNoKGphZGUpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLy4uL3N0YXRpYy9pbnRlcmZhY2UnXHJcbmltcG9ydCBpbml0U3RhdGUgZnJvbSAnLi8uLi9zdGF0aWMvaW5pdC1zdGF0ZSdcclxuaW1wb3J0IGxvZyBmcm9tICcuLi9zeXN0ZW0vbG9nJ1xyXG5pbXBvcnQgeyBhZ2UgfSBmcm9tICcuLi9zdGF0aWMvaW50ZXJmYWNlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGphZGUge1xyXG4gIHByaXZhdGUgc3RhdGU6IHN0YXRlXHJcblxyXG4gIHByaXZhdGUgc2tpbGw6IEFycmF5PGFueT5cclxuXHJcbiAgcHJpdmF0ZSBuYW1lOiBzdHJpbmdcclxuICBwcml2YXRlIGdlbmRlcjogc3RyaW5nXHJcbiAgcHJpdmF0ZSBhZ2U6IGFnZVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAvL1RPRE8654q25oCB55qE5bGC5qyh6Zeu6aKYXHJcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5pdFN0YXRlLCBzdGF0ZSlcclxuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJ2phZGVyJ1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJvcm4oc3RhdGUsIG5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgamFkZShzdGF0ZSwgbmFtZSlcclxuICB9XHJcbiAgcHJpdmF0ZSBncm93KHRpbWUpIHtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyB0aWNrKGN1cnJlbnQsIGdyYWluKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgaSdtICR7dGhpcy50ZWxsTmFtZSgpfSwkeyhuZXcgRGF0ZSgpKS5nZXRUaW1lKCktY3VycmVudH1gKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRlbGxOYW1lKCkge1xyXG4gICAgY29uc3QgdGltZSA9IFt7XHJcbiAgICAgIHR5cGU6ICdzZWNvbmQnLFxyXG4gICAgICBudW06IDBcclxuICAgIH1dXHJcbiAgICByZXR1cm4gdGhpcy5uYW1lXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5jb25zdCBpbml0U3RhdGU6IHN0YXRlID0ge1xyXG4gIHBoeXNpY2FsOiB7XHJcbiAgICBoZWFkOiB7XHJcbiAgICAgIGhhaXI6IHtcclxuICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgIGxlbmd0aDogNSxcclxuICAgICAgICBmZWF0dXJlOiAnc3RyYWlnaHQnXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhY2U6IHtcclxuICAgICAgICBleWU6IHtcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgY29sb3I6ICcjMDAwMDAwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9zZToge30sXHJcbiAgICAgICAgbW91dGg6IHt9LFxyXG4gICAgICAgIHRvb3RoOiB7fSxcclxuICAgICAgICBlYXI6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIG5lY2s6IHt9XHJcbiAgICB9LFxyXG4gICAgYm9keToge30sXHJcbiAgICBsZWc6IHt9LFxyXG4gICAgZm9vdDoge31cclxuICB9LFxyXG4gIG1lbnRhbDoge1xyXG5cclxuICB9LFxyXG4gIHNvY2lhbDoge1xyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5pdFN0YXRlIiwiaW1wb3J0IHsgYXJlYSB9IGZyb20gJy4vLi4vc3RhdGljL2ludGVyZmFjZSc7XHJcbmltcG9ydCBqYWRlIGZyb20gJy4uL2NyZWF0dXJlL2phZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xvY2sge1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbEhhbmRsZXI6IGFueVxyXG4gICAgcHVibGljIHRpbWVyOiBudW1iZXJcclxuXHJcbiAgICBzdGF0aWMgYm9ybigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNsb2NrKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aWNrKGN1cnJlbnQ6IG51bWJlciwgd29ybGQsIGdyYWluPykge1xyXG4gICAgICAgIGdyYWluID0gZ3JhaW4gfHwgW3sgc2Vjb25kOiAxIH1dXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbEhhbmRsZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdvcmxkLnRpY2soY3VycmVudCxncmFpbilcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9nIHtcclxuICAgIHByaXZhdGUgd2hvOiBzdHJpbmdcclxuICAgIHByaXZhdGUgd2hlbjogc3RyaW5nXHJcbiAgICBwcml2YXRlIHdoYXQ6IHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBib3JuKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbG9nKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBwcmludChwYXlsb2FkLCB0eXBlPzogc3RyaW5nLCBmb3JtYXQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgdHlwZSA9IHR5cGUgfHwgJ2xvZydcclxuICAgICAgICBmb3JtYXRcclxuICAgICAgICAgICAgPyBjb25zb2xlW3R5cGVdKEpTT04uc3RyaW5naWZ5KHBheWxvYWQsIG51bGwsIDQpKVxyXG4gICAgICAgICAgICA6IGNvbnNvbGVbdHlwZV0oSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RvcmUocGF5bG9hZCwgKXtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGFyZWEgfSBmcm9tICcuL3N0YXRpYy9pbnRlcmZhY2UnXHJcbmltcG9ydCBjbG9jayBmcm9tICcuL3N5c3RlbS9jbG9jaydcclxuaW1wb3J0IGphZGUgZnJvbSAnLi9jcmVhdHVyZS9qYWRlJ1xyXG5pbXBvcnQgbG9nIGZyb20gJy4vc3lzdGVtL2xvZydcclxuaW1wb3J0IGNvbnRpbmVudCBmcm9tICcuL2FyZWEvY29udGluZW50J1xyXG5cclxuY2xhc3Mgd29ybGQgaW1wbGVtZW50cyBhcmVhIHtcclxuICAgIHByaXZhdGUgY2xvY2s6IGNsb2NrXHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXJcclxuICAgIHByaXZhdGUgbG9nOiBsb2dcclxuXHJcbiAgICBwcml2YXRlIGFyZWFzOiBBcnJheTxhcmVhPiA9IFtdXHJcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgICAgICB0aGlzLmxvZyA9IGxvZy5ib3JuKClcclxuICAgICAgICB0aGlzLmxvZy5wcmludCh7XHJcbiAgICAgICAgICAgIGhpOiAnZ2FtZSBzdGFydHMnLFxyXG4gICAgICAgICAgICB0aW1lOiB0aGlzLmdldFRpbWUoKVxyXG4gICAgICAgIH0sIG51bGwsIHRydWUpXHJcblxyXG4gICAgICAgIHRoaXMuY2xvY2sudGljayh0aGlzLmNsb2NrLnRpbWVyLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBib3JuKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgd29ybGQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIHRoaXMuYXJlYXMucHVzaChjb250aW5lbnQuYm9ybihbamFkZS5ib3JuKHt9KV0pKVxyXG4gICAgICAgIHRoaXMuY2xvY2sgPSBjbG9jay5ib3JuKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVyXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2soY3VycmVudCwgZ3JhaW4pIHtcclxuICAgICAgICB0aGlzLmFyZWFzLmZvckVhY2godiA9PiB2LnRpY2soY3VycmVudCwgZ3JhaW4pKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbndvcmxkLmJvcm4oKSJdfQ==
