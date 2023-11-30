import y from 'yup';

export const LoginSchema = y.object({
    email: y.string().email().required(),
    password: y.string().required(),
});
export type LoginState = y.InferType<typeof LoginSchema>;