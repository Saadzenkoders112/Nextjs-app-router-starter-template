import * as Yup from 'yup';

export const transactionSchema = Yup.object({
  nick_name: Yup.string().required('Nick name is required!'),
  amount: Yup.number().required('Amount is requied!'),
  coin: Yup.string().required('Coin is required!'),
});
