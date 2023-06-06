import React from 'react';
import SelectInput from 'ui/inputs/formInputs/SelectInput';
import TextInput from 'ui/inputs/formInputs/TextInput';
import RegistrationFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper/RegistrationFormInputsWrapper';


function PositionAtWorkAndPhone() {
  return (
    <RegistrationFormInputsWrapper>
      <SelectInput name='position' type='select' label='Position' >
        <option value="">Select a job type</option>
        <option value="designer">Designer</option>
        <option value="development">Developer</option>
        <option value="product">Product Manager</option>
        <option value="other">Other</option>
      </SelectInput>
      <TextInput name='phone' type='tel' placeholder='Your phone' label='Phone number' />
    </RegistrationFormInputsWrapper>
  );
}

export default PositionAtWorkAndPhone;
