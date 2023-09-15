import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required(),
    brand: yup.string().required(),
    type: yup.string().required(),
    price: yup.number().required().moreThan(100),
    quantityInStock: yup.number().required().min(0),
    description: yup.string().required(),
    file: yup.mixed().test('requiredWithPicture', 'Please provide an image', function (value) {
        const pictureUrl = this.parent.pictureUrl;
        // If 'pictureUrl' is empty or undefined, require 'file' field
        if (!pictureUrl) {
            return !!value;
        }
        // If 'pictureUrl' is provided, 'file' field is not required
        return true;
    }),
})