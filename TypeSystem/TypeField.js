var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CIL;
(function (CIL) {
    var TypeSystem;
    (function (TypeSystem) {
        "use strict";
        var TypeField = (function (_super) {
            __extends(TypeField, _super);
            function TypeField() {
                _super.apply(this, arguments);
            }
            return TypeField;
        })(TypeSystem.TypeMember);
        TypeSystem.TypeField = TypeField;
    })(TypeSystem = CIL.TypeSystem || (CIL.TypeSystem = {}));
})(CIL || (CIL = {}));
//# sourceMappingURL=TypeField.js.map