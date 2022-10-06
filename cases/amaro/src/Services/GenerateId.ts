import {v4} from "uuid";

export default class GenerateId {
    generateId = () => {
        return v4()
    };
};