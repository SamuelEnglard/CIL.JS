var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CIL;
(function (CIL) {
    var Cecil;
    (function (Cecil) {
        var Metadata;
        (function (Metadata) {
            "use strict";
            var BlobHeap = (function (_super) {
                __extends(BlobHeap, _super);
                function BlobHeap(section, start, size) {
                    _super.call(this, section, start, size);
                }
                BlobHeap.prototype.read = function (index) {
                    if (index === 0 || index > this.size - 1) {
                        return new CIL.Runtime.Reader([]);
                    }
                    var reader = this.section.data;
                    reader.seek(index + this.offset);
                    var length = reader.readPackedInt().toNumber();
                    return reader.slice(reader.position(), length);
                };
                return BlobHeap;
            })(Metadata.Heap);
            Metadata.BlobHeap = BlobHeap;
        })(Metadata = Cecil.Metadata || (Cecil.Metadata = {}));
    })(Cecil = CIL.Cecil || (CIL.Cecil = {}));
})(CIL || (CIL = {}));
//# sourceMappingURL=BlobHeap.js.map