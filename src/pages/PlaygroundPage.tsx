//import SearchBox from "../components/SearchBox";
//import TermsAndConditions from "../components/TermsAndConditions";

import { Toaster } from "react-hot-toast";
import ToastDemo from "../components/ToastDemo";

const PlaygroundPage = () => {
  // return <TermsAndConditions />;
  return (
    //     <ExpandableText
    //       text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero libero ab odio! Expedita praesentium totam quia dignissimos veniam natus, facilis laboriosam, minima voluptas iste error at aperiam saepe officiis veritatis dicta illum? Qui sequi repudiandae cum dignissimos alias mollitia quas, accusamus ipsa cupiditate velit illum asperiores laboriosam odio laudantium earum, eos cumque, corrupti facilis a? Inventore sunt facilis ipsam. Vel placeat neque officiis a maiores rerum, dicta sit quidem ea nostrum aperiam nesciunt cupiditate inventore animi atque mollitia. Sequi ad placeat porro quos perferendis? Consequuntur perferendis explicabo laudantium eius eaque, quae totam eum sit quam excepturi, temporibus corporis, odit nam?
    // "
    //     />
    // <SearchBox onChange={(text) => console.log(text)} />
    <>
      {" "}
      <ToastDemo />
      <Toaster />
    </>
  );
};

export default PlaygroundPage;
