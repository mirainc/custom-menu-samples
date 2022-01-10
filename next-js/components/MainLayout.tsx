const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="bg-darkGray text-white h-screen font-vesper-libre">
      {children}
    </div>
  );
};

export default MainLayout;
