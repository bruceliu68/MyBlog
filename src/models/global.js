import cloneDeep from "lodash/cloneDeep";

export default {
    namespace: 'global',
    state: {
        hideSider: true, // 是否隐藏侧边栏
    },
  
    effects: {},
  
    reducers: {
      setAttrValue(state, action) {
        let {payload} = action;
        return Object.assign({}, state, payload);
      },
  
      setMultipleAttrValue(state, {payload}) {
        return (function multiple(state, newState) {
          let stateChange = state;
          for(let [key, value] of Object.entries(stateChange)) {
            //这里严格判断value是否是对象{},不能使用typeof,原因自己查
            if(Object.prototype.toString.call(value) === "[object Object]" && newState[key] !== undefined) {
              stateChange[key] = multiple(value, newState[key]);
            } else {
              if(newState[key] !== undefined) {
                stateChange[key] = newState[key];
              }
            }
          }
          return stateChange;
        })(cloneDeep(state), payload);
      },
    },

    subscriptions: {
        setup({ dispatch, history }) {
          history.listen(location => {
            let noNeedApp = location.pathname.includes("/component") ? false : true
    
            dispatch({
              type: "setAttrValue",
              payload: {
                hideSider: noNeedApp ? true : false,
              }
            });
          });
        },
    },
  
  };
  