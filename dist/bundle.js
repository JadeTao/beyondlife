(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var continent = (function () {
    function continent(jades) {
        this.jades = jades;
    }
    continent.born = function (jades) {
        return new continent(jades);
    };
    continent.prototype.tick = function () {
        this.jades.forEach(function (v) { return v.tick(); });
    };
    continent.prototype.add = function (jade) {
        this.jades.push(jade);
    };
    return continent;
}());
exports.default = continent;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_state_1 = require("./../static/init-state");
var jade = (function () {
    function jade(state, name) {
        //TODO:状态的层次问题
        this.state = Object.assign({}, init_state_1.default, state);
        this.name = name || 'jader';
    }
    jade.born = function (state, name) {
        return new jade(state, name);
    };
    jade.prototype.tick = function () {
        console.log('1 second passed.');
        console.log("i'm " + this.tellName());
    };
    jade.prototype.tellName = function () {
        return this.name;
    };
    return jade;
}());
exports.default = jade;
},{"./../static/init-state":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = initState;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clock = (function () {
    function clock(areas) {
        this.areas = areas;
        this.tick();
    }
    clock.born = function (areas) {
        return new clock(areas);
    };
    clock.prototype.tick = function () {
        var _this = this;
        this.intervalHandler = setInterval(function () {
            _this.areas.forEach(function (v) { return v.tick(); });
        }, 1000);
    };
    return clock;
}());
exports.default = clock;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return log;
}());
exports.default = log;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clock_1 = require("./system/clock");
var jade_1 = require("./creature/jade");
var log_1 = require("./system/log");
var continent_1 = require("./area/continent");
var world = (function () {
    function world() {
        var _this = this;
        this.areas = [];
        this.timer = (new Date()).getTime();
        this.log = log_1.default.born();
        this.areas.push(continent_1.default.born([jade_1.default.born({})]));
        this.clock = clock_1.default.born(this.areas);
        this.log.print({
            hi: 'game starts',
            time: this.getTime()
        }, null, true);
        setInterval(function () {
            _this.log.print({
                hi: 'fetch time',
                time: _this.getTime()
            }, null, true);
        }, 10000);
    }
    world.born = function () {
        return new world();
    };
    world.prototype.getTime = function () {
        return (new Date()).getTime() - this.timer;
    };
    return world;
}());
world.born();
},{"./area/continent":1,"./creature/jade":2,"./system/clock":4,"./system/log":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXJlYS9jb250aW5lbnQudHMiLCJzcmMvY3JlYXR1cmUvamFkZS50cyIsInNyYy9zdGF0aWMvaW5pdC1zdGF0ZS50cyIsInNyYy9zeXN0ZW0vY2xvY2sudHMiLCJzcmMvc3lzdGVtL2xvZy50cyIsInNyYy93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7SUFHRSxtQkFBWSxLQUFrQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRU0sY0FBSSxHQUFYLFVBQVksS0FBa0I7UUFDNUIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNNLHVCQUFHLEdBQVYsVUFBVyxJQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDSCxnQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7Ozs7O0FDbkJELHFEQUE4QztBQUc5QztJQU9FLGNBQVksS0FBSyxFQUFFLElBQWE7UUFDOUIsY0FBYztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsb0JBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxPQUFPLENBQUE7SUFDN0IsQ0FBQztJQUVNLFNBQUksR0FBWCxVQUFZLEtBQUssRUFBRSxJQUFhO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxD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QUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDWCxFQUFFLEVBQUUsYUFBYTtZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUN2QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVkLFdBQVcsQ0FBQztZQUFLLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM1QixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUU7YUFDdkIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFBQSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFFMUIsQ0FBQztJQUNNLFVBQUksR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFFTSx1QkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDOUMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBR0QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IGFyZWEgfSBmcm9tICcuLy4uL3N0YXRpYy9pbnRlcmZhY2UnXHJcbmltcG9ydCBqYWRlIGZyb20gJy4vLi4vY3JlYXR1cmUvamFkZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRpbmVudCBpbXBsZW1lbnRzIGFyZWEge1xyXG4gIHByaXZhdGUgamFkZXM6IEFycmF5PGphZGU+XHJcblxyXG4gIGNvbnN0cnVjdG9yKGphZGVzOiBBcnJheTxqYWRlPikge1xyXG4gICAgdGhpcy5qYWRlcyA9IGphZGVzXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBib3JuKGphZGVzOiBBcnJheTxqYWRlPikge1xyXG4gICAgcmV0dXJuIG5ldyBjb250aW5lbnQoamFkZXMpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGljaygpIHtcclxuICAgIHRoaXMuamFkZXMuZm9yRWFjaCh2ID0+IHYudGljaygpKVxyXG4gIH1cclxuICBwdWJsaWMgYWRkKGphZGU6IGphZGUpIHtcclxuICAgIHRoaXMuamFkZXMucHVzaChqYWRlKVxyXG4gIH1cclxufSIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi8uLi9zdGF0aWMvaW50ZXJmYWNlJ1xyXG5pbXBvcnQgaW5pdFN0YXRlIGZyb20gJy4vLi4vc3RhdGljL2luaXQtc3RhdGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgamFkZSB7XHJcbiAgcHJpdmF0ZSBzdGF0ZTogc3RhdGVcclxuXHJcbiAgcHJpdmF0ZSBza2lsbDogQXJyYXk8YW55PlxyXG5cclxuICBwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcihzdGF0ZSwgbmFtZT86IHN0cmluZykge1xyXG4gICAgLy9UT0RPOueKtuaAgeeahOWxguasoemXrumimFxyXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRTdGF0ZSwgc3RhdGUpXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lIHx8ICdqYWRlcidcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGJvcm4oc3RhdGUsIG5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgamFkZShzdGF0ZSwgbmFtZSlcclxuICB9XHJcbiAgcHVibGljIHRpY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnMSBzZWNvbmQgcGFzc2VkLicpXHJcbiAgICBjb25zb2xlLmxvZyhgaSdtICR7dGhpcy50ZWxsTmFtZSgpfWApXHJcbiAgfVxyXG4gIHB1YmxpYyB0ZWxsTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmNvbnN0IGluaXRTdGF0ZTogc3RhdGUgPSB7XHJcbiAgcGh5c2ljYWw6IHtcclxuICAgIGhlYWQ6IHtcclxuICAgICAgaGFpcjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgbGVuZ3RoOiA1LFxyXG4gICAgICAgIGZlYXR1cmU6ICdzdHJhaWdodCdcclxuICAgICAgfSxcclxuICAgICAgZmFjZToge1xyXG4gICAgICAgIGV5ZToge1xyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3NlOiB7fSxcclxuICAgICAgICBtb3V0aDoge30sXHJcbiAgICAgICAgdG9vdGg6IHt9LFxyXG4gICAgICAgIGVhcjoge31cclxuICAgICAgfSxcclxuICAgICAgbmVjazoge31cclxuICAgIH0sXHJcbiAgICBib2R5OiB7fSxcclxuICAgIGxlZzoge30sXHJcbiAgICBmb290OiB7fVxyXG4gIH0sXHJcbiAgbWVudGFsOiB7XHJcblxyXG4gIH0sXHJcbiAgc29jaWFsOiB7XHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbml0U3RhdGUiLCJpbXBvcnQgeyBhcmVhIH0gZnJvbSAnLi8uLi9zdGF0aWMvaW50ZXJmYWNlJztcclxuaW1wb3J0IGphZGUgZnJvbSAnLi4vY3JlYXR1cmUvamFkZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjbG9jayB7XHJcbiAgICBwcml2YXRlIGludGVydmFsSGFuZGxlcjogYW55XHJcbiAgICBwcml2YXRlIGFyZWFzOiBBcnJheTxhcmVhPlxyXG5cclxuICAgIHN0YXRpYyBib3JuKGFyZWFzOiBBcnJheTxhcmVhPikge1xyXG4gICAgICAgIHJldHVybiBuZXcgY2xvY2soYXJlYXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJlYXM6IEFycmF5PGFyZWE+KSB7XHJcbiAgICAgICAgdGhpcy5hcmVhcyA9IGFyZWFzXHJcbiAgICAgICAgdGhpcy50aWNrKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGljaygpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSGFuZGxlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcmVhcy5mb3JFYWNoKHYgPT4gdi50aWNrKCkpXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvZyB7XHJcbiAgICBwcml2YXRlIHdobzogc3RyaW5nXHJcbiAgICBwcml2YXRlIHdoZW46IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSB3aGF0OiBzdHJpbmdcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBzdGF0aWMgYm9ybigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGxvZygpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcHJpbnQocGF5bG9hZCwgdHlwZT86IHN0cmluZywgZm9ybWF0PzogYm9vbGVhbikge1xyXG4gICAgICAgIHR5cGUgPSB0eXBlIHx8ICdsb2cnXHJcbiAgICAgICAgZm9ybWF0XHJcbiAgICAgICAgICAgID8gY29uc29sZVt0eXBlXShKU09OLnN0cmluZ2lmeShwYXlsb2FkLCBudWxsLCA0KSlcclxuICAgICAgICAgICAgOiBjb25zb2xlW3R5cGVdKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgYXJlYSB9IGZyb20gJy4vc3RhdGljL2ludGVyZmFjZSdcclxuaW1wb3J0IGNsb2NrIGZyb20gJy4vc3lzdGVtL2Nsb2NrJ1xyXG5pbXBvcnQgamFkZSBmcm9tICcuL2NyZWF0dXJlL2phZGUnXHJcbmltcG9ydCBsb2cgZnJvbSAnLi9zeXN0ZW0vbG9nJ1xyXG5pbXBvcnQgY29udGluZW50IGZyb20gJy4vYXJlYS9jb250aW5lbnQnXHJcblxyXG5jbGFzcyB3b3JsZCB7XHJcbiAgICBwcml2YXRlIGNsb2NrOiBjbG9ja1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyXHJcbiAgICBwcml2YXRlIGxvZzogbG9nXHJcblxyXG4gICAgcHJpdmF0ZSBhcmVhczogQXJyYXk8YXJlYT4gPSBbXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgdGhpcy5sb2cgPSBsb2cuYm9ybigpXHJcblxyXG4gICAgICAgIHRoaXMuYXJlYXMucHVzaChjb250aW5lbnQuYm9ybihbamFkZS5ib3JuKHt9KV0pKVxyXG4gICAgICAgIHRoaXMuY2xvY2sgPSBjbG9jay5ib3JuKHRoaXMuYXJlYXMpXHJcblxyXG4gICAgICAgIHRoaXMubG9nLnByaW50KHtcclxuICAgICAgICAgICAgaGk6ICdnYW1lIHN0YXJ0cycsXHJcbiAgICAgICAgICAgIHRpbWU6IHRoaXMuZ2V0VGltZSgpXHJcbiAgICAgICAgfSwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICBcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMubG9nLnByaW50KHtcclxuICAgICAgICAgICAgaGk6ICdmZXRjaCB0aW1lJyxcclxuICAgICAgICAgICAgdGltZTogdGhpcy5nZXRUaW1lKClcclxuICAgICAgICB9LCBudWxsLCB0cnVlKX0sMTAwMDApXHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGJvcm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB3b3JsZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnRpbWVyXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxud29ybGQuYm9ybigpIl19
