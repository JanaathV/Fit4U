'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const Schema = mongoose_1.default.Schema;
const OrderDataSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
   
  },
  {
    collection: 'OrderDataCollection',
  }
);

const Model = mongoose_1.default.model('OrderData', OrderDataSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map
