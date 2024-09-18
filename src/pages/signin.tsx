import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';

const SAMLSSOCallbackView: React.FC = () => {
  console.log('PASSING IN SAMLSSOCallbackView');
  return (
    <AuthenticateWithRedirectCallback signInFallbackRedirectUrl="/" />
);
};

export default SAMLSSOCallbackView;