export const isEmpty = (value) => {
    if (!value) {
      return true;
    }
    value = ('' + value).replace(/\r?\n|\r/g, '').replace(' ', '')
    if (value) {
      return false
    }
    return true
  } 