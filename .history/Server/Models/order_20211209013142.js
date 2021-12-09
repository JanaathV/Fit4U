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
    firstName: {
        type: String,
    },    
    lastName:{
        type: String,
    },
    address:{
        type: String,
    },
    city: {
        type: String,
    },
    province:{
        type: String,
    },
    postalCode: {
        type: String,
   
  },
  orderAmount: {
    type: String,

},
  
  created: {
    type: Date,
    default: Date.now()
  },
},
  {
    collection: 'OrderDataCollection',
  }
);

const Model = mongoose_1.default.model('OrderData', OrderDataSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map
