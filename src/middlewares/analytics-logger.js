
export const analyticsLoggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('dispatching', action);
    console.info('store', store);

    console.groupEnd(action.type);
  
    return next(action);
  };