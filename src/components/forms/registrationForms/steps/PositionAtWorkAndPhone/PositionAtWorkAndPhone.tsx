import React from 'react';
import SignUpFormInputsWrapper from '@/components/UI/wrappers/SignUpFormInputsWrapper/SignUpFormInputsWrapper';
import TextInput from '@/components/UI/inputs/formInputs/TextInput';
import SelectInput from '@/components/UI/inputs/formInputs/SelectInput';

function PositionAtWorkAndPhone() {
  return (
    <SignUpFormInputsWrapper>
      <SelectInput name='position' type='select' label='Position' >
        <option value="">Select a job type</option>
        <option value="designer">Designer</option>
        <option value="development">Developer</option>
        <option value="product">Product Manager</option>
        <option value="other">Other</option>
      </SelectInput>
      <TextInput name='phone' type='tel' placeholder='Your phone' label='Phone number' />
    </SignUpFormInputsWrapper>
  );
}

export default PositionAtWorkAndPhone;
