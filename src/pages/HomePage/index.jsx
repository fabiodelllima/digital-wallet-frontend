import '../../styles/index.scss';
import { DefaultTemplate } from '../../components/Template/DefaultTemplate';
import { Form } from '../../components/Sections/Form';
import { TotalMoney } from '../../components/Sections/TotalMoney';

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <Form />
      <TotalMoney />
    </DefaultTemplate>
  );
};
