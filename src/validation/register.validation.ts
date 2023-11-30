import y from 'yup';

export const RegisterSchema = y.object({
    confirmPassword: y.string().required(),
    email: y.string().email().required(),
    password: y.string().required(),
    username: y.string().required(),
});
export type RegisterState = y.InferType<typeof RegisterSchema>;