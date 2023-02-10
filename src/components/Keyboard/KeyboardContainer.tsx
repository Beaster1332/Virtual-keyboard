import { connect } from "react-redux";
import Keyboard from "./Keyboard";

const mapStateToProps = (state: any) => {
    return {
        keysRu: state.keyboardReducer.keysRu,
        keysEng: state.keyboardReducer.keysEng
    }
}

export default connect(mapStateToProps, null)(Keyboard);