import {extend} from 'vee-validate';
import {
  required,
  email,
  min, max,
  confirmed,
} from 'vee-validate/dist/rules';
import zxcvbn from 'zxcvbn';


const strength = {
  validate(value) {
    return zxcvbn(value).score >= 3;
  },
};
extend('strength', {
  ...strength,
});

extend('confirmed', confirmed);
extend('required', required);
extend('email', email);
extend('min', min);
extend('max', max);
