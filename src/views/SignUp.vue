<template>
  <div class="form">
    <h3>SignUp</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div v-if="errMsgEmail">{{errMsgEmail}} </div>
    <div v-if="errMsg">{{errMsg}} </div>
    <button @click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
name: "SignUp", 
data: function() {
    return {
      email: '',
      password: '',
      errMsg: '',
      errMsgEmail: ''
    }
  },

methods: {
validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
      this.errMsg = ''
      }
    },

    validateEmail(value) {
      // Use a regular expression or another method to validate email
      // For simplicity, a basic email validation is used here
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        this.errMsgEmail = 'Please enter a valid email'
      }
      else {
        this.errMsgEmail = ''
      }
    },

    async checkIfUserExists(email) {
      try {
        const response = await fetch('http://localhost:3000/auth/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        return data.exists;
      } catch (error) {
        console.error('Error checking user existence:', error);
        return false; // Handle the error appropriately in your application
      }
    },

async SignUp() {
  this.validatePassword(this.password);
  this.validateEmail(this.email);

 if (!this.errMsgEmail) {
  const v = await this.checkIfUserExists(this.email);
  if (v) {
    this.errMsgEmail = "Email already exists";
  }
  else {
    this.errMsgEmail = "";
  }
 }

  if (!this.errMsg && !this.errMsgEmail) {
    // Do not proceed if there are validation errors
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', 
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
    },
  }, 
  }
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: #2c3e50;
}
label {
  color: #2c3e50;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}
button {
  background: rgb(97, 85, 85);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
div {
  padding: 10px 20px;
  margin-top: 20px;
}
</style>