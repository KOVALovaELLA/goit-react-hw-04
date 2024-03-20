import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#1B1B80"
      />
    </div>
  );
}
