import moment from "moment";

export const SaveTime = (): string =>
  moment().format("YYYY-MM-DD HH:mm:ss");