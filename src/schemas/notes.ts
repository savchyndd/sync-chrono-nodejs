import Joi from "joi";

export const addSchema = Joi.object({
  name: Joi.string().min(3).required(),
  created: Joi.string(),
  category: Joi.string().valid("Task", "Random thought", "Idea").required(),
  content: Joi.string().min(3).required(),
  date: Joi.string().min(0),
  arhived: Joi.boolean(),
});

export const updArhivedStatusSchema = Joi.object({
  arhived: Joi.boolean().required(),
});
