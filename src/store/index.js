import { createStore } from "vuex";
import { auth } from "./auth.module";
import { auth2 } from "./AllowModule";

const store = createStore({
  modules: {
    auth,
    auth2
  },
});

export default store;
