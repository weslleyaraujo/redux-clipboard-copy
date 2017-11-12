export const COPY = '@@redux-clipboard/COPY';
export const SUCCESS = '@@redux-clipboard/SUCCESS';
export const FAILED = '@@redux-clipboard/FAILED';

function createAction(type) {
  return ({ payload = {}, meta = {} }) => ({
    type,
    payload,
    meta
  });
}

export const copy = createAction(COPY);
export const success = createAction(SUCCESS);
export const failed = createAction(FAILED);

const styles = `
  position: absolute;
  left: -9999px;
  top: -999px;
`;

const reduxClipboardCopy = ({ dispatch }) => {
  const input = global.document.createElement('input');
  input.type = 'text';
  input.setAttribute('styles', styles);

  return next => action => {
    const { type, payload } = action;
    if (type !== COPY) {
      return next(action);
    }

    const { value } = payload;
    input.value = value;

    global.document.body.appendChild(input);
    input.select();

    const result = document.execCommand('copy');
    dispatch(result ? success(payload) : failed(payload));
    global.document.body.removeChild(input);
    return next(action);
  };
};

export default reduxClipboardCopy;
