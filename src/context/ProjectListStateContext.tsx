'use client'

import { ProjectProps, getProjectList } from '@/api/Home/project';
import { isBrowser } from '@/api/isBroswer';
import { createContext, useState, ReactNode, FC, useCallback, useEffect } from 'react';

interface ProjectListContextProps {
  projectList: ProjectProps[];
}

export const ProjectListStateContext = createContext<ProjectListContextProps>({
  projectList: [],
});

export const ProjectListStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [projectList, setProjectList] = useState<ProjectProps[]>([]);
  const [isProjectListLoaded, setIsProjectListLoaded] = useState(false);

  useEffect(() => {
    if (isBrowser()) {
      getProjectList()
        .then((result) => {
          setProjectList(result);
          setIsProjectListLoaded(true);
        });
    }
  }, []);

  if (!isProjectListLoaded) {
    return null;
  }

  return (
    <ProjectListStateContext.Provider value={{ projectList }}>
      {children}
    </ProjectListStateContext.Provider>
  );
};