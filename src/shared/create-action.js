function createAction(type) {
  return (payload = {}, meta = {}) => ({
    type,
    payload,
    meta
  });
}

export default createAction;
