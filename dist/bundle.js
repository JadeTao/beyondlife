(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_state_1 = require("./../static/init-state");
var jade = (function () {
    function jade(state, name) {
        //TODO:状态的层次问题
        this.state = Object.assign({}, init_state_1.default, state);
        this.name = name || 'jader';
    }
    jade.born = function () {
        return new jade({});
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
},{"./../static/init-state":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clock = (function () {
    function clock(jades) {
        this.tick(jades);
    }
    clock.born = function (jades) {
        return new clock(jades);
    };
    clock.prototype.tick = function (jades) {
        this.intervalHandler = setInterval(function () {
            jades.forEach(function (v) { return v.tick(); });
        }, 1000);
    };
    return clock;
}());
exports.default = clock;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clock_1 = require("./system/clock");
var jade_1 = require("./creature/jade");
var log_1 = require("./system/log");
var world = (function () {
    function world() {
        this.jades = [];
        this.timer = (new Date()).getTime();
        this.log = log_1.default.born();
        this.jades.push(jade_1.default.born());
        this.Clock = clock_1.default.born(this.jades);
        this.log.print({
            hi: 'game starts',
            time: this.getTime()
        }, null, true);
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
},{"./creature/jade":1,"./system/clock":3,"./system/log":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY3JlYXR1cmUvamFkZS50cyIsInNyYy9zdGF0aWMvaW5pdC1zdGF0ZS50cyIsInNyYy9zeXN0ZW0vY2xvY2sudHMiLCJzcmMvc3lzdGVtL2xvZy50cyIsInNyYy93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EscURBQThDO0FBRzlDO0lBSUUsY0FBWSxLQUFLLEVBQUUsSUFBYTtRQUM5QixjQUFjO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxvQkFBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sQ0FBQTtJQUM3QixDQUFDO0lBQ00sU0FBSSxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFDTSxtQkFBSSxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBTyxJQUFJLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ00sdUJBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTs7Ozs7QUN0QkQsSUFBTSxTQUFTLEdBQVU7SUFDdkIsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxPQUFPLEVBQUUsVUFBVTthQUNwQjtZQUNELElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxFQUFFO2dCQUNULEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsRUFBRTtRQUNQLElBQUksRUFBRSxFQUFFO0tBQ1Q7SUFDRCxNQUFNLEVBQUUsRUFFUDtJQUNELE1BQU0sRUFBRSxFQUVQO0NBQ0YsQ0FBQTtBQUNELGtCQUFlLFNBQVMsQ0FBQTs7OztBQzlCeEI7SUFPSSxlQUFZLEtBQWtCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDcEIsQ0FBQztJQU5NLFVBQUksR0FBWCxVQUFZLEtBQWtCO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBTU0sb0JBQUksR0FBWCxVQUFZLEtBQWtCO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUE7UUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBOzs7OztBQ2xCRDtJQUlJO0lBQWdCLENBQUM7SUFDVixRQUFJLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBQ00sbUJBQUssR0FBWixVQUFhLE9BQU8sRUFBRSxJQUFhLEVBQUUsTUFBZ0I7UUFDakQsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUE7UUFDcEIsTUFBTTtjQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0wsVUFBQztBQUFELENBZEEsQUFjQyxJQUFBOzs7OztBQ2RELHdDQUFrQztBQUNsQyx3Q0FBa0M7QUFDbEMsb0NBQThCO0FBRTlCO0lBS0k7UUFIUSxVQUFLLEdBQWdCLEVBQUUsQ0FBQTtRQUkzQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBRyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDWCxFQUFFLEVBQUUsYUFBYTtZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUN2QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVsQixDQUFDO0lBQ00sVUFBSSxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVNLHVCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUM5QyxDQUFDO0lBRUwsWUFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUFHRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLy4uL3N0YXRpYy9pbnRlcmZhY2UnXHJcbmltcG9ydCBpbml0U3RhdGUgZnJvbSAnLi8uLi9zdGF0aWMvaW5pdC1zdGF0ZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqYWRlIHtcclxuICBwcml2YXRlIHN0YXRlOiBzdGF0ZVxyXG4gIHByaXZhdGUgc2tpbGw6IEFycmF5PGFueT5cclxuICBwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAvL1RPRE8654q25oCB55qE5bGC5qyh6Zeu6aKYXHJcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5pdFN0YXRlLCBzdGF0ZSlcclxuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJ2phZGVyJ1xyXG4gIH1cclxuICBzdGF0aWMgYm9ybigpIHtcclxuICAgIHJldHVybiBuZXcgamFkZSh7fSlcclxuICB9XHJcbiAgcHVibGljIHRpY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnMSBzZWNvbmQgcGFzc2VkLicpXHJcbiAgICBjb25zb2xlLmxvZyhgaSdtICR7dGhpcy50ZWxsTmFtZSgpfWApXHJcbiAgfVxyXG4gIHB1YmxpYyB0ZWxsTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmNvbnN0IGluaXRTdGF0ZTogc3RhdGUgPSB7XHJcbiAgcGh5c2ljYWw6IHtcclxuICAgIGhlYWQ6IHtcclxuICAgICAgaGFpcjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgbGVuZ3RoOiA1LFxyXG4gICAgICAgIGZlYXR1cmU6ICdzdHJhaWdodCdcclxuICAgICAgfSxcclxuICAgICAgZmFjZToge1xyXG4gICAgICAgIGV5ZToge1xyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3NlOiB7fSxcclxuICAgICAgICBtb3V0aDoge30sXHJcbiAgICAgICAgdG9vdGg6IHt9LFxyXG4gICAgICAgIGVhcjoge31cclxuICAgICAgfSxcclxuICAgICAgbmVjazoge31cclxuICAgIH0sXHJcbiAgICBib2R5OiB7fSxcclxuICAgIGxlZzoge30sXHJcbiAgICBmb290OiB7fVxyXG4gIH0sXHJcbiAgbWVudGFsOiB7XHJcblxyXG4gIH0sXHJcbiAgc29jaWFsOiB7XHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbml0U3RhdGUiLCJpbXBvcnQgamFkZSBmcm9tICcuLi9jcmVhdHVyZS9qYWRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsb2NrIHtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWxIYW5kbGVyOiBhbnlcclxuXHJcbiAgICBzdGF0aWMgYm9ybihqYWRlczogQXJyYXk8amFkZT4pIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNsb2NrKGphZGVzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGphZGVzOiBBcnJheTxqYWRlPikge1xyXG4gICAgICAgIHRoaXMudGljayhqYWRlcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGljayhqYWRlczogQXJyYXk8amFkZT4pIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSGFuZGxlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgamFkZXMuZm9yRWFjaCh2ID0+IHYudGljaygpKVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBsb2cge1xyXG4gICAgcHJpdmF0ZSB3aG86IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSB3aGVuOiBzdHJpbmdcclxuICAgIHByaXZhdGUgd2hhdDogc3RyaW5nXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgc3RhdGljIGJvcm4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBsb2coKVxyXG4gICAgfVxyXG4gICAgcHVibGljIHByaW50KHBheWxvYWQsIHR5cGU/OiBzdHJpbmcsIGZvcm1hdD86IGJvb2xlYW4pIHtcclxuICAgICAgICB0eXBlID0gdHlwZSB8fCAnbG9nJ1xyXG4gICAgICAgIGZvcm1hdFxyXG4gICAgICAgICAgICA/IGNvbnNvbGVbdHlwZV0oSlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgNCkpXHJcbiAgICAgICAgICAgIDogY29uc29sZVt0eXBlXShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSlcclxuICAgIH1cclxufSIsImltcG9ydCBjbG9jayBmcm9tICcuL3N5c3RlbS9jbG9jaydcclxuaW1wb3J0IGphZGUgZnJvbSAnLi9jcmVhdHVyZS9qYWRlJ1xyXG5pbXBvcnQgbG9nIGZyb20gJy4vc3lzdGVtL2xvZydcclxuXHJcbmNsYXNzIHdvcmxkIHtcclxuICAgIHByaXZhdGUgQ2xvY2s6IGNsb2NrXHJcbiAgICBwcml2YXRlIGphZGVzOiBBcnJheTxqYWRlPiA9IFtdXHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXJcclxuICAgIHByaXZhdGUgbG9nOiBsb2dcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgdGhpcy5sb2cgPSBsb2cuYm9ybigpXHJcbiAgICAgICAgdGhpcy5qYWRlcy5wdXNoKGphZGUuYm9ybigpKVxyXG4gICAgICAgIHRoaXMuQ2xvY2sgPSBjbG9jay5ib3JuKHRoaXMuamFkZXMpXHJcbiAgICAgICAgdGhpcy5sb2cucHJpbnQoe1xyXG4gICAgICAgICAgICBoaTogJ2dhbWUgc3RhcnRzJyxcclxuICAgICAgICAgICAgdGltZTogdGhpcy5nZXRUaW1lKClcclxuICAgICAgICB9LCBudWxsLCB0cnVlKVxyXG5cclxuICAgIH1cclxuICAgIHN0YXRpYyBib3JuKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgd29ybGQoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy50aW1lclxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbndvcmxkLmJvcm4oKSJdfQ==
