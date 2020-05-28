import React from 'react';
import { CustomButtonContainer } from './customButton.styles';

// CustomButton can take type and onClick
const CustomButton= ({children, ...props}) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton;