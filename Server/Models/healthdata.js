'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const Schema = mongoose_1.default.Schema;
const HealthDataSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    steps: {
      type: Number,
      default: 0,
    },
    badgesEarned: {
      type: Number,
      default: 0,
    },
    caloriesBurned: {
      type: Number,
      default: 0,
    },
    fitnessPrograms: {
      type: Number,
      default: 0,
    },
    activityMinutes: {
      type: Number,
      default: 0,
    },
    exposureFree: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: 'HealthDataCollection',
  }
);

const Model = mongoose_1.default.model('HealthData', HealthDataSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map
