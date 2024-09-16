'use client';
import { Field, FormikProvider, useFormik } from 'formik';
import { DialogContent, DialogHeader } from '@/components/ui/dialog';
import { transactionSchema } from '@/schema/transactionSchema';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Invoices } from '@/types/Interfaces/Transaction Interfaces/transaction.interface';

interface FormValues {
  nick_name: string;
  amount: number;
  coin: string;
  note: string;
}

interface transactionProps {
  setInvoices: React.Dispatch<React.SetStateAction<Invoices[]>>;
}

const TransactionModal: React.FC<transactionProps> = ({ setInvoices }) => {
  const initialValues: FormValues = {
    nick_name: '',
    amount: 0,
    coin: '',
    note: '',
  };

  const handleSubmit = (values: FormValues) => {
    formik.setFieldValue('DATE', new Date().toLocaleDateString());
    formik.setFieldValue('TIME', new Date().toLocaleTimeString());

    setInvoices((prev: Invoices[]) => [
      ...prev,
      {
        TO: values.nick_name,
        TRANSACTION: Math.round(Math.random() * 10000),
        DATE: new Date().toISOString().split('T')[0],
        TIME: new Date().toTimeString().split('G')[0],
        COIN: {
          name: values.coin,
          img: `/assets/images/${values.coin}.png`,
        },
        AMOUNT: values.amount,
        STATUS: 'Pending',
      },
    ]);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: transactionSchema,
    onSubmit: handleSubmit,
  });

  return (
    <DialogContent className='w-4/5 rounded-lg bg-white '>
      <DialogHeader>
        <DialogTitle className='text-xl font-semibold'>
          Create Transaction
        </DialogTitle>
      </DialogHeader>
      <FormikProvider value={formik}>
        <form
          className='flex flex-col gap-3'
          onSubmit={formik.handleSubmit}
        >
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='nick_name'
              className='text-sm text-slate-400'
            >
              Nickname
            </label>
            <Field
              className='border border-slate-300 rounded-xl p-2 pl-4 pr-4 focus:outline-none text-sm'
              name='nick_name'
              placeholder='Enter nickname'
              type='text'
            />
            {formik.errors.nick_name && (
              <p className='text-xs text-red-500'>{formik.errors.nick_name}</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='amount'
              className='text-sm text-slate-400'
            >
              Amount
            </label>
            <div className='border border-slate-200 rounded-xl p-2 pl-4 pr-4  text-sm flex items-center'>
              <Field
                className='focus:outline-none w-full'
                name='amount'
                placeholder='Enter nickname'
                type='number'
              />
              <Field
                className='cursor-pointer focus:outline-none'
                as='select'
                name='coin'
              >
                <option value='cardano'>Cardano</option>
                <option value='etherium'>Etherium</option>
                <option value='ripple'>Ripple</option>
              </Field>
            </div>
            {formik.errors.amount && (
              <p className='text-xs text-red-500'>{formik.errors.amount}</p>
            )}
            {formik.errors.coin && (
              <p className='text-xs text-red-500'>{formik.errors.coin}</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <label
              htmlFor='note'
              className='text-sm text-slate-400'
            >
              Add note (optional)
            </label>
            <Field
              className='border border-slate-300 rounded-xl p-2 pl-4 pr-4 focus:outline-none text-sm'
              name='note'
              placeholder='Enter note'
              as='textarea'
            />
          </div>
          <button className='w-full bg-blue-900 text-center rounded-lg text-white p-1'>
            Next
          </button>
        </form>
      </FormikProvider>
    </DialogContent>
  );
};

export default TransactionModal;
