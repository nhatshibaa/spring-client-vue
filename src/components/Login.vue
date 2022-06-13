<template>
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-xl-10">
      <div class="card rounded-3 text-black">
        <div class="row g-0">
          <div class="col-lg-6 d-flex align-items-center gradient-custom-2"></div>
          <div class="col-lg-6">
            <div class="card-body p-md-5 mx-md-4">

              <div class="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                     style="width: 185px;" alt="logo">
                <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
              </div>

              <Form @submit="handleLogin" :validation-schema="schema">
                <p>Please login to your account</p>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example11">Username</label>
                  <Field type="email" id="form2Example11" class="form-control" name="username"/>
                  <ErrorMessage name="username" class="error-feedback"/>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example22">Password</label>
                  <Field type="password" id="form2Example22" class="form-control" name="password"/>
                  <ErrorMessage name="password" class="error-feedback"/>
                </div>

                <div class="text-center pt-1 mb-5 pb-1">
                  <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Log
                    in
                  </button>
                </div>
                <div class="d-flex align-items-center justify-content-center pb-4">
                  <p class="mb-0 me-2">Don't have an account?</p>
                  <button type="button" class="btn btn-outline-danger">Create new</button>
                </div>
                <div class="social-media">
                  <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-google"></i></a>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="padding-bottom: 10px"></div>
</template>

<script>
import {Form, Field, ErrorMessage} from "vee-validate";
import * as yup from "yup";
// import AuthorService from "@/service/AuthorService";


export default {
  name: "admin-login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleLogin(user) {
      this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/consent");
          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/consent");
    }
  },
};
</script>

<style scoped>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}

@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}
.social-media {
  max-width: 600px;
  background-color: #fff;
  margin: auto;
  text-align: center;
  color: #9fadca;
}
.social-icons {
  margin-top: 30px;
  margin-bottom: 16px;
}

.social-icons a {
  font-size: 23px;
  margin: 0 3px;
  color: #5691ff;
  border: 1px solid;
  border-radius: 50%;
  width: 45px;
  display: inline-block;
  height: 45px;
  text-align: center;
  background-color: #fff;
  line-height: 45px;
}

.social-icons a:hover {
  text-decoration: none;
  opacity: 0.6;
}
</style>
