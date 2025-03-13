import BlogContext from "./BlogContext";

const BlogContextProvider = ({ children }) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
