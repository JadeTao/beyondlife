(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_state_1 = require("./../static/init-state");
var unit = (function () {
    function unit(state) {
        //TODO:状态的层次问题
        this.state = Object.assign({}, init_state_1.default, {});
    }
    return unit;
}());
exports.default = unit;
console.log(new unit({}));
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY3JlYXR1cmUvdW5pdC50cyIsInNyYy9zdGF0aWMvaW5pdC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EscURBQStDO0FBQy9DO0lBR0UsY0FBWSxLQUFLO1FBQ2YsY0FBYztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsb0JBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBQ0gsV0FBQztBQUFELENBUEEsQUFPQyxJQUFBOztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs7OztBQ1R6QixJQUFNLFNBQVMsR0FBVTtJQUN2QixRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE1BQU0sRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRTtvQkFDSCxJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0QsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNELElBQUksRUFBRSxFQUFFO1NBQ1Q7UUFDRCxJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSxFQUFFO1FBQ1AsSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU0sRUFBRSxFQUVQO0lBQ0QsTUFBTSxFQUFFLEVBRVA7Q0FDRixDQUFBO0FBQ0Qsa0JBQWUsU0FBUyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi8uLi9zdGF0aWMvaW50ZXJmYWNlJztcclxuaW1wb3J0IGluaXRTdGF0ZSBmcm9tICcuLy4uL3N0YXRpYy9pbml0LXN0YXRlJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdW5pdCB7XHJcbiAgcHJpdmF0ZSBzdGF0ZTogc3RhdGVcclxuICBwcml2YXRlIHNraWxsOiBBcnJheTxhbnk+XHJcbiAgY29uc3RydWN0b3Ioc3RhdGUpIHtcclxuICAgIC8vVE9ETzrnirbmgIHnmoTlsYLmrKHpl67pophcclxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0U3RhdGUse30pXHJcbiAgfVxyXG59XHJcbmNvbnNvbGUubG9nKG5ldyB1bml0KHt9KSkiLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuY29uc3QgaW5pdFN0YXRlOiBzdGF0ZSA9IHtcclxuICBwaHlzaWNhbDoge1xyXG4gICAgaGVhZDoge1xyXG4gICAgICBoYWlyOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICBsZW5ndGg6IDUsXHJcbiAgICAgICAgZmVhdHVyZTogJ3N0cmFpZ2h0J1xyXG4gICAgICB9LFxyXG4gICAgICBmYWNlOiB7XHJcbiAgICAgICAgZXllOiB7XHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vc2U6IHt9LFxyXG4gICAgICAgIG1vdXRoOiB7fSxcclxuICAgICAgICB0b290aDoge30sXHJcbiAgICAgICAgZWFyOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBuZWNrOiB7fVxyXG4gICAgfSxcclxuICAgIGJvZHk6IHt9LFxyXG4gICAgbGVnOiB7fSxcclxuICAgIGZvb3Q6IHt9XHJcbiAgfSxcclxuICBtZW50YWw6IHtcclxuXHJcbiAgfSxcclxuICBzb2NpYWw6IHtcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGluaXRTdGF0ZSJdfQ==
