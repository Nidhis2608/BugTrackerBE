const mongoose = require("mongoose");

const bugSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ["Critical", "Major", "Medium", "Low"],
      required: true,
    },
    raised_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const BugModel = mongoose.model("Bug", bugSchema);

module.exports = { BugModel };
