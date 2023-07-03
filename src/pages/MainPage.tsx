import Greeting from 'components/Greeting';
import MainWrapper from 'ui/wrappers/MainWrapper';
import ModalWindow from 'ui/ModalWindow';
import ProjectForm from 'components/forms/ProjectForm';
import { useAuth } from '@/hooks/useAuth';
import RegisterProposal from '@/components/RegisterProposal';

function MainPage() {
  const { isAuth } = useAuth();

  return (
    <MainWrapper>
      {isAuth ? (
        <>
          <Greeting />
          <ModalWindow>
            <ProjectForm />
          </ModalWindow>
        </>
      ) : (
        <>
          <Greeting />
          <ModalWindow>
            <RegisterProposal />
          </ModalWindow>
        </>
      )}
    </MainWrapper>
  );
}

export default MainPage;
