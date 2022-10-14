import { FormValidator } from '~/modules';
import { Credentials } from '~/utils/types';

export const validationSchema = FormValidator.object().shape({
  email: FormValidator.string()
    .required('E-mail obrigatório')
    .email('E-mail inválido'),
  password: FormValidator.string().required('Senha obrigatória'),
});

export const initialValues: Credentials = {
  email: '',
  password: '',
};
