import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../button/Button';
import './loadModal.scss';

interface LoadModalProps {
  closeModalLoad: () => void;
  getConfigNumber: (str: string) => void;
}

const LoadModal = ({ closeModalLoad, getConfigNumber }: LoadModalProps) => {
  return (
    <div className="load-modal">
      <button className="load-modal__close-btn" onClick={closeModalLoad}>
        &times;
      </button>
      <Formik
        initialValues={{
          config_number: '',
        }}
        onSubmit={(values) => getConfigNumber(values.config_number)}
      >
        <Form className="load-modal__form">
          <label htmlFor="config_number">
            Load a pizza using a configuration number:
          </label>
          <Field
            type="text"
            id="config_number"
            name="config_number"
            placeholder="Configuration Number"
          />
          <Button otherClass="button__long button button__blue">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoadModal;
