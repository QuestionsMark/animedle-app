import y from 'yup';

export const AccountDeleteSchema = y.object({
    password: y.string().required(),
});
export type AccountDeleteState = y.InferType<typeof AccountDeleteSchema>;