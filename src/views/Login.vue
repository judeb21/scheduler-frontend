<template>
    <section class="container">
        <div class="signup-container">
            <div class="signup-form center">
                <div class="signup-form__img">
                    <a href="/">
                        <h2>Scheduler</h2>
                    </a>
                </div>
                <form>

                    <div class="form-grouped">
                        <div class="form-col-half">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class="form-field" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off"  placeholder="Enter Email" autocomplete="email" v-model="email">
                        </div>
                        <div class="form-col-half">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-field" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off"  placeholder="Enter Password" autocomplete="off" v-model="password">
                        </div>
                        <div v-if="errors.length > 0">
                            <span class="text-danger" v-for="error in errors" :key="errors.indexOf(error)">
                                {{ error }}
                            </span>
                        </div>
                    </div>
                    <div class="form-grouped">
                        <button class="button" :disabled="!isLoginFormValid" @click.prevent="submit">Login</button>
                        <!-- <a href="/dashboard" class="button">Register</a> -->
                    </div>
                </form>
                <div class="signup-form__link">
                    <p>Don't have an account yet? <a href="/register">Register</a> </p>
                    <p> <a href="#">Forgot Password</a> </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Login',

  data() {
      return {
          email: '',
          password: '',
          loading: false,
          errors: []
      }
  },

  methods: {
      emailIsValid() {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) {
            return (true)
        } else {
            return (false)
        }
      },

      submit() {
        this.error = []
        this.loading = true
        this.$store.dispatch("LOGIN", {
            email: this.email, 
            password: this.password
        }).then( response => {
            this.$router.push("/dashboard")
        }).catch( error => {
            this.loading = false
            if (error.response.status === 422) {
                this.errors.push("Invalid email or password!")
            } else if (error.response.status === 404) {
                this.errors.push("User was not found, please register again!")
            }else if (error.response.status === 401) {
                this.errors.push("Unauthorized acccess! Please try again")
            } else{
                this.error.push("Something went wrong")
            }
        })
      }
  },

  computed: {
      isLoginFormValid() {
          return this.emailIsValid() && this.password && !this.loading
      }
  },
}
</script>