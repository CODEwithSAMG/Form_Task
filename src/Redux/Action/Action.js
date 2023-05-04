export const getCamData = (DATA, ACTIVE_DATA) => {
  return {
    type: "GET_CAM_DATA",
    // camera_id: ID,
    // sdk_port: PORT,
    data: DATA,
    active_data: ACTIVE_DATA,
  };
};

export const TableRedirect = (type, value) => {
  return {
    type: "TableRedirect",
    dataType: type,
    dataValue: value,
  };
};

export const MenuValDispatch = (val) => {
  return {
    type: "MenuVal",
    menuVal: val,
  };
};
export const keyboard = (val) => {
  return {
    type: "keyboard",
    // key: type,
    value: val,
  }
}
