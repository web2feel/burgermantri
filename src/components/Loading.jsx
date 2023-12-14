import { CgSpinner } from "react-icons/cg";

const Loading = () => {
  return (
    <div id="loading">
      <div className="container">
        <div className="loadingElement">
          <CgSpinner className="spinner" size={64}/>
        </div>
      </div>
    </div>
  );
};

export default Loading;
