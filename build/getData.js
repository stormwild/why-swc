function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
import regeneratorRuntime from "regenerator-runtime";
import fetch from "node-fetch";
function getData() {
    return _getData.apply(this, arguments);
}
function _getData() {
    _getData = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var res, json;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return fetch("https://jsonplaceholder.typicode.com/todos/1");
                case 2:
                    res = _ctx.sent;
                    _ctx.next = 5;
                    return res.json();
                case 5:
                    json = _ctx.sent;
                    // eslint-disable-next-line no-console
                    console.log("data", json);
                case 7:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _getData.apply(this, arguments);
}
export default getData;
