<template>
  <div class="registration-form">
    <Form @submit="handleLogin">
      <div class="content">
        <div class="contentHeader">
          <div class="instructions">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                 style="width: 185px;">
          </div>
          <h3 class="pageTitle"><strong>AppName</strong> wants to access your Google Account</h3>
        </div>
      </div>
      <div class="form-group">
        <h5>This will allow <strong>AppName</strong> to:</h5>
      </div>
      <div class="form-group">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="form-group">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="form-group">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="form-group">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <div class="form-group">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <button class="btn btn-danger cancel" style="margin-right: 200px">Cancel</button>
      <button class="btn btn-block submit" >Submit</button>
    </Form>
  </div>
</template>

<script>

export default {
  name: "ConsentScreen",
  methods: {
    handleLogin(user) {
      this.$store.dispatch("auth2/allow", user)
    },
  },
  computed: {
    allow() {
      return this.$store.state.auth2.status.allow;
    },
  },
  mounted() {
    if (this.allow) {
      window.location.href = 'http://localhost:8084/image';
    }
  },
};
</script>

<style scoped>
body {
  background-color: #dee9ff;
}

.registration-form {
  padding: 50px 0;
}

.registration-form form {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-radius: 25px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  border: 1px solid #b9b9b9;
}

.registration-form .form-icon {
  text-align: center;
  background-color: #5891ff;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 50px;
  line-height: 100px;
}

.registration-form .item {
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}

.registration-form .cancel {
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: #c4c4c4;
  border: none;
  color: #797979;
  margin-top: 20px;
}

.registration-form .submit {
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: #5791ff;
  border: none;
  color: white;
  margin-top: 20px;
}

.registration-form .social-media {
  max-width: 600px;
  background-color: #fff;
  margin: auto;
  padding: 35px 0;
  text-align: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #9fadca;
  border-top: 1px solid #dee9ff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons {
  margin-top: 30px;
  margin-bottom: 16px;
}

.registration-form .social-icons a {
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

.registration-form .social-icons a:hover {
  text-decoration: none;
  opacity: 0.6;
}

@media (max-width: 576px) {
  .registration-form form {
    padding: 50px 20px;
  }

  .registration-form .form-icon {
    width: 70px;
    height: 70px;
    font-size: 30px;
    line-height: 70px;
  }
}
</style>
