export default interface Action {
  type?: string;
  payload?: any;
  error?: object;
  meta?: object;
}
