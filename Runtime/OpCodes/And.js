﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CIL;
(function (CIL) {
    (function (Runtime) {
        (function (OpCodes) {
            "use strict";

            var And = (function (_super) {
                __extends(And, _super);
                function And(memory, stack) {
                    _super.call(this, memory, stack);
                }
                And.prototype.number = function () {
                    return 95;
                };

                And.prototype.execute = function () {
                    var value2 = this.stack[0].values.pop();
                    var value1 = this.stack[0].values.pop();

                    if ((value1.type === 2 /* SignedInt */ || value1.type === 3 /* UnsignedInt */) && (value2.type === 2 /* SignedInt */ || value2.type === 3 /* UnsignedInt */)) {
                        var int1 = value1.value;
                        var int2 = value2.value;
                        var persision = Math.max(int1.length, int2.length);
                        int1 = int1.padInt(persision);
                        int2 = int2.padInt(persision);

                        var result = [];
                        for (var i = 0; i < persision; i++) {
                            result.push(int1[i] && int2[i]);
                        }
                        this.stack[0].values.push(new Runtime.StackFrameValue(value1.type, result));
                    } else {
                        throw new TypeError("add (0x58) called on operands of type " + Runtime.StackFrameValueType[value1.type] + " and " + Runtime.StackFrameValueType[value2.type] + ".");
                    }
                };
                return And;
            })(Runtime.OpCode);
            OpCodes.And = And;

            Runtime.OpCode.opCodes[And.prototype.number()] = And;
        })(Runtime.OpCodes || (Runtime.OpCodes = {}));
        var OpCodes = Runtime.OpCodes;
    })(CIL.Runtime || (CIL.Runtime = {}));
    var Runtime = CIL.Runtime;
})(CIL || (CIL = {}));
//# sourceMappingURL=And.js.map