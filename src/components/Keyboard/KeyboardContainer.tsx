import { connect } from "react-redux";
import { changeLangAC } from "../../store/action-creators/keyboardAC";
import Keyboard from "./Keyboard";

const mapStateToProps = (state: any) => {
    return {
        keysRu: state.keyboardReducer.keysRu,
        keysEng: state.keyboardReducer.keysEng,
        ruKeyboard: state.keyboardReducer.ruKeyboard
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeLanguage: () => dispatch(changeLangAC()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);