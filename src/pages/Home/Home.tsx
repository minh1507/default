import { connect } from "react-redux";
import "./Home.scss";

interface Props {}
const Home = (props: Props) => {
 

  return (
    <>
      <section className="container-16">
      </section>
    </>
  );
};

const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(Home);
