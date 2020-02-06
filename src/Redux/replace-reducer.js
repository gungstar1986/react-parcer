const WRITE_TEMP_DATA = "WRITE_TEMP_DATA";
const PARSE_DATA = "PARSE_DATA";
const CLEAR_INPUT_AREA = "CLEAR_INPUT_AREA";
const CHECKBOX_EDIT = "CHECKBOX_EDIT";
const NAME_OVERRIDE_EDIT = "NAME_OVERRIDE_EDIT";
const CATEGORY_OVERRIDE_EDIT = "CATEGORY_OVERRIDE_EDIT";
const TVGID_OVERRIDE_EDIT = "TVGID_OVERRIDE_EDIT";
const SAVE_CURRENT_DATA = "SAVE_CURRENT_DATA";
const SORT_BY_NAMES = "SORT_BY_NAMES";
const SORT_BY_OVERRIDE = "SORT_BY_OVERRIDE";
const LIVE_SEARCHING_TEXT = "LIVE_SEARCHING_TEXT";
const SAVE_ACTION = "SAVE_ACTION";

const parse = data => {
    let tempStr = '', index = [], tempArr = [], id = 0;
    for (let i = 0; i <= data.length; i++) {
        if (data[i] === "<") index.push(i);
        if (data[i] === ">") {
            index.push(i);
            tempStr = data.slice(index[0], index[1] + 1);
            tempArr.push(tempStr);
            index = [];
            tempStr = ''
        }
    }
    return tempArr.reduce((acc, curr) => {
        let count = 0, index = [], tempText = '';
        let name, nameOverride, tvgId, enabled, category, categoryOverride, serviceRef, clearStreamUrl;
        for (let i = 0; i < curr.length; i++) {

            if (curr[i] === '"') {
                ++count;
                index.push(i);
                if (count === 2) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    name = tempText
                }
                if (count === 4) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    nameOverride = tempText
                }
                if (count === 6) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    tvgId = tempText
                }
                if (count === 8) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    enabled = tempText.includes("true")
                }
                if (count === 10) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    category = tempText
                }
                if (count === 12) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    categoryOverride = tempText
                }
                if (count === 14) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    serviceRef = tempText
                }
                if (count === 16) {
                    tempText = curr.slice(index[0] + 1, index[1]);
                    index = [];
                    tempStr = '';
                    clearStreamUrl = tempText.includes("true")
                }
            }
        }
        acc.push({
            name: name || "Нет данных",
            nameOverride: nameOverride || name || "Нет данных",
            tvgId,
            enabled,
            category,
            categoryOverride: categoryOverride || category,
            serviceRef,
            clearStreamUrl,
            id: ++id
        });
        return acc
    }, []);
};
const initialState = {
    outputData: null,
    data: null,
    tempData: "",
    sort: false,
    sortOverride: false,
    search: null,
    save: null
};
const replaceReducer = (state = initialState, action) => {
    if (action.type === WRITE_TEMP_DATA) {
        return {
            ...state,
            tempData: action.data
        }
    }
    if (action.type === PARSE_DATA) {
        return {
            ...state,
            data: parse(action.data),
            sortOverride: false
        }
    }
    if (action.type === CLEAR_INPUT_AREA) {
        return {
            ...state,
            tempData: ""
        }
    }
    if (action.type === CHECKBOX_EDIT) {
        return {
            ...state,
            data: [
                ...state.data.map(el => el.id === action.id
                    ? {...el, enabled: action.boolean}
                    : el)
            ]
        }
    }
    if (action.type === NAME_OVERRIDE_EDIT) {
        return {
            ...state,
            data: [
                ...state.data.map(el => el.id === action.id
                    ? {...el, nameOverride: action.text}
                    : el)
            ]
        }
    }
    if (action.type === TVGID_OVERRIDE_EDIT) {
        return {
            ...state,
            data: [
                ...state.data.map(el => el.id === action.id
                    ? {...el, tvgId: action.text}
                    : el)
            ]
        }
    }
    if (action.type === CATEGORY_OVERRIDE_EDIT) {
        return {
            ...state,
            data: [
                ...state.data.map(el => el.id === action.id
                    ? {...el, categoryOverride: action.text}
                    : el)
            ]
        }
    }
    if (action.type === SAVE_CURRENT_DATA) {
        return {
            ...state,
            outputData: action.data,
        }
    }
    if (action.type === SORT_BY_NAMES) {
        return {
            ...state,
            sort: action.boolean
        }
    }
    if (action.type === SORT_BY_OVERRIDE) {
        return {
            ...state,
            sortOverride: action.boolean
        }
    }
    if (action.type === SAVE_ACTION) {
        return {
            ...state,
            save: action.boolean
        }
    }
    if (action.type === LIVE_SEARCHING_TEXT) {
        return {
            ...state,
            search: action.text
        }
    }
    return state
};

export const liveSearchText = (text) => ({type: "LIVE_SEARCHING_TEXT", text});
export const sortByNames = (boolean) => ({type: "SORT_BY_NAMES", boolean});
export const sortByOverride = (boolean) => ({type: "SORT_BY_OVERRIDE", boolean});
export const saveAction = (boolean) => ({type: "SAVE_ACTION", boolean});
export const saveCurrentChanges = (data) => ({type: "SAVE_CURRENT_DATA", data});
export const categoryOverrideEdit = (text, id) => ({type: "CATEGORY_OVERRIDE_EDIT", text, id});
export const tvGidEdit = (text, id) => ({type: "TVGID_OVERRIDE_EDIT", text, id});
export const nameOverrideEdit = (text, id) => ({type: "NAME_OVERRIDE_EDIT", text, id});
export const checkboxEdit = (boolean, id) => ({type: "CHECKBOX_EDIT", boolean, id});
export const writeTempData = (data) => ({type: "WRITE_TEMP_DATA", data});
export const parseData = (data) => ({type: "PARSE_DATA", data});
export const clearInputArea = () => ({type: "CLEAR_INPUT_AREA"});
export default replaceReducer;

