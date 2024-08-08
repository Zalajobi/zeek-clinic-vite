import { useState, createContext, useContext, PropsWithChildren } from "react";

interface AppContextType {
  loadData: () => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  isSidebarOpen: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const loadData = async () => {};

  const value: AppContextType = {
    loadData,
    closeSidebar,
    toggleSidebar,
    isSidebarOpen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext) as AppContextType;
};

export default AppProvider;

// {
//     "username": "admin2",
//     "password":"Qwertyuiop123456#"
// }
