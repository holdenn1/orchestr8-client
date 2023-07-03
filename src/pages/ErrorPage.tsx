import MainWrapper from 'ui/wrappers/MainWrapper';
import AppError from 'components/errors/AppError';

function ErrorPage() {
  return (
    <MainWrapper>
      <AppError />
    </MainWrapper>
  );
}

export default ErrorPage;
