const useAuth = () => {
  const context = localStorage.getItem("token") ? true : false;
  return context;
};

export default useAuth;
