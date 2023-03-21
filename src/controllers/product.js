import joi from 'joi';
import Product from '../models/product';

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
});

export const addPro = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.json({
                mess: error.details[0].message
            })
        }
        const product = await Product.create(req.body);
        return res.status(201).json({
            mess: "Tạo thành công",
            product
        });
    } catch (error) {
        return res.status(400).json({
            mess: error
        });
    }
};

export const allPro = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(201).json(product)

    } catch (error) {
        return res.status(400).json({
            mess: error
        });
    }
};

export const onePro = async (req, res) => {
    try {
        const product = await Product.findById(req.params.is);
        return res.status(201).json(product)

    } catch (error) {
        return res.status(400).json({
            mess: error
        });
    }
};

export const updatePro = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.is, req.body, { new: true });
        return res.json({
            mess: "Cap nhat thanh cong",
            product
        })
    } catch (error) {
        return res.status(400).json({
            mess: error
        });
    }
};

export const deletePro = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            mess: "xoa thanh cong",
            product
        })
    } catch (error) {
        return res.status(400).json({
            mess: error
        });
    }
};