import y from 'yup';

export const GuesSchema = y.object({
    title: y.string().required(),
});
export type GuesState = y.InferType<typeof GuesSchema>;