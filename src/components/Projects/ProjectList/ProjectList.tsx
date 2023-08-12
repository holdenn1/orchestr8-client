import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchOwnProjectsAction } from '@/store/actions/projectsActions/fetchOwnProjects';
import { useParams } from 'react-router-dom';
import ProjectListHeader from '@/components/headers/ProjectListHeader';
import { setIsAddTaskForm, setShowMembers } from '@/store/slices/mainSlice';
import { fetchForeignProjectsAction } from '@/store/actions/projectsActions/fetchForeignProjects';
import OwnProjectList from './OwnProjectList';
import ForeignProjectList from './ForeignProjectList';
import { useInView } from 'react-intersection-observer';
import {
  clearForeignProjectsList,
  clearOwnProjectsList,
  setCurrentPageForeignProjectList,
  setCurrentPageOwnProjectList,
} from '@/store/slices/projectSlice';

function ProjectList() {
  const { isSearching } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { status, list } = useParams();
  const { ref: ownListRef, inView: OwnInView } = useInView({
    threshold: 0,
  });
  const { ref: foreignListRef, inView: foreignInView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (list === 'own') {
      dispatch(setCurrentPageOwnProjectList(1));
      dispatch(clearOwnProjectsList());
    }
    if (list === 'foreign') {
      dispatch(setCurrentPageForeignProjectList(1));
      dispatch(clearForeignProjectsList());
    }
  }, [status, isSearching]);

  useEffect(() => {
    if (OwnInView) {
      if (list === 'own' && status) {
        dispatch(
          fetchOwnProjectsAction({
            status,
          }),
        );
      }
    }
    if (foreignInView) {
      if (list === 'foreign' && status) {
        dispatch(
          fetchForeignProjectsAction({
            status,
          }),
        );
      }
    }
  }, [OwnInView, foreignInView, status, isSearching, list]);

  useEffect(() => {
    dispatch(setIsAddTaskForm(false));
    dispatch(setShowMembers(false));
  }, []);

  return (
    <>
      <ProjectListHeader />
      {list === 'own' ? (
        <OwnProjectList ownListRef={ownListRef} />
      ) : (
        <ForeignProjectList foreignListRef={foreignListRef} />
      )}
    </>
  );
}

export default ProjectList;
