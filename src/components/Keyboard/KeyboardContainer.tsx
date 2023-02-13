import { connect } from "react-redux";
import {
    backSpaceClick,
    changeLangAC,
    clearTextInput,
    enterKey,
    spaceClick
} from "../../store/action-creators/keyboardAC";
import Keyboard from "./Keyboard";

const mapStateToProps = (state: any) => {
    return {
        textInput: state.keyboardReducer.textInput,
        keysRu: state.keyboardReducer.keysRu,
        keysEng: state.keyboardReducer.keysEng,
        ruKeyboard: state.keyboardReducer.ruKeyboard
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeLanguage: () => dispatch(changeLangAC()),
        enterKey: (key: string) => dispatch(enterKey(key)),
        spaceClick: () => dispatch(spaceClick()),
        backSpaceClick: () => dispatch(backSpaceClick()),
        clearTextInput: () => dispatch(clearTextInput()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);