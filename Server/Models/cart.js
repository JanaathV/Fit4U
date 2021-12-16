"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    taxRate: {
      type: Number,
      default: 0.13,
    },
    shipping: {
      type: Number,
      default: 25.0,
    },
    price: {
      type: Number,
      default: 249.0,
    },
    gift: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "carts",
  }
);

CartSchema.methods.getTaxAmount = function () {
  return this.price * this.quantity * this.taxRate ;
};

CartSchema.methods.getSubTotal = function () {
  return this.price * this.quantity + this.getTaxAmount() + this.shipping;
};

CartSchema.methods.increaseQuantity = function (increaseAmount = 1) {
  this.quantity += increaseAmount;
};

CartSchema.methods.decreaseQuantity = function (decreaseAmount = 1) {
  this.quantity -= decreaseAmount;
};

CartSchema.methods.clearQuantity = function(clearAmount = 0){
  this.quantity = clearAmount;
}

CartSchema.methods.toggleGift = function () {
    this.gift = !this.gift;
  };

const Model = mongoose_1.default.model("Cart", CartSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map
