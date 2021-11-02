const { Schema, model } = require('mongoose');
const contactSchema = new Schema(
  {
    name: {
      type: String,
      //   unique: true,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    features: {
      type: Array,
      set: data => (!data ? [] : data),
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

contactSchema.virtual('status').get(function () {
  if (this.favorite === false) {
    return 'evil';
  }
  return 'kind';
});

contactSchema.path('name').validate(function (value) {
  const re = /[A-Z]\w+/;
  return re.test(String(value));
});

const Contact = model('contact', contactSchema);

module.exports = Contact;
