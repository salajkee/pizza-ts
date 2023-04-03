import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../button/Button';
import './customForm.scss';

const CustomForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          delivery_method: '',
          text: '',
          regular_client: '',
          isCoupon: false,
          coupon: '',
        }}
        onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
      >
        <Form className="form">
          <h2 className="form__title">Checkout info:</h2>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" placeholder="Your name" />
          <label htmlFor="email">Your email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
          />
          <label htmlFor="delivery-method">Choose delivery method</label>
          <Field name="delivery_method" id="delivery-method" as="select">
            <option value="" disabled hidden>
              Delivery method
            </option>
            <option value="delivery">Delivery</option>
            <option value="pickup">Local pickup</option>
          </Field>
          <label>Additional notes</label>
          <Field name="text" id="text" as="textarea" />
          <label htmlFor="client">Are you a regular client?</label>
          <div className="radio-group">
            <label htmlFor="yes" className="radio">
              <Field
                type="radio"
                id="regular_client"
                value="yes"
                name="regular_client"
              />
              Yes
            </label>
            <label htmlFor="no" className="radio">
              <Field
                type="radio"
                value="no"
                id="regular_client"
                name="regular_client"
              />
              No
            </label>
          </div>
          <label htmlFor="isCoupon" className="checkbox">
            <Field type="checkbox" id="isCoupon" name="isCoupon" />
            Do you have a coupon code?
          </label>
          <label htmlFor="coupon">Coupon</label>
          <Field id="coupon" name="coupon" placeholder="Coupon code" />
          <div className="button-group">
            <Button otherClass="button__long button__dark">Reset</Button>
            <Button otherClass="button__long button__blue">Submit</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default CustomForm;
