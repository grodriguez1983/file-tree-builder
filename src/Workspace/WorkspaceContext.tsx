import React, { createContext, useContext, useMemo, useState } from "react";
import { ReactElement } from "react";

export type File = {
  path: string;
  contents: string;
};

export const workspaceContext = createContext<{
  activeFile: File | undefined;
  activateFile: React.Dispatch<React.SetStateAction<string>>;
  files: File[];
}>({
  activeFile: undefined,
  activateFile: () => {},
  files: []
});

export const WorkspaceProvider = ({
  files,
  children
}: {
  files: File[];
  children: ReactElement;
}) => {
  const [activeFilePath, setActiveFilePath] = useState<string | undefined>();

  const activeFile = useMemo(() => {
    const foundFile = files.find((f) => f.path === activeFilePath);
    return foundFile || files[0];
  }, [activeFilePath, files]);

  const ctxVal = {
    activeFile,
    activateFile: setActiveFilePath,
    files
  };

  return (
    <workspaceContext.Provider value={ctxVal}>
      {children}
    </workspaceContext.Provider>
  );
};

export function useWorkspaceContext() {
  return useContext(workspaceContext);
}
