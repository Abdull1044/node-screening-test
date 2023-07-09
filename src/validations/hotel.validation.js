const Joi = require("joi");

const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message("{{#label}} must be a valid id");
  }
  return value;
};
const createHotel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().required(),
    price: Joi.number().integer().required(),
    date: Joi.date().required(),
    slug: Joi.string().required(),
  }),
};

const updateHotel = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      city: Joi.string(),
      price: Joi.number().integer(),
      date: Joi.date(),
      slug: Joi.string(),
    })
    .min(1),
};

const deleteHotel = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const slugOrIdParamSchema = Joi.object().keys({
  id: Joi.string().required(),
});

const findAllQuerySchema = Joi.object().keys({
  name: Joi.string(),
  city: Joi.string(),
  price: Joi.string(),
  date: Joi.string(),
  sort_field: Joi.string(),
  sort_order: Joi.string().valid("asc", "desc"),
});

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  slugOrIdParamSchema,
  findAllQuerySchema,
};
