<template>
    <section class="container">
        <div class="signup-container">
            <div class="signup-form center">
                <div class="signup-form__img">
                    <a href="/">
                        <h2>Scheduler</h2>
                    </a>
                </div>
                <div class="signup-form__header">
                    <h2>Try Scheduler for free</h2>
                    <p>By signing up, I agree to the Scheduler <a href="#">Privacy Policy</a> <br> and <a href="#">Terms of Service</a>.</p>
                </div>
                <form action="" method="post">
                    <div class="form-grouped">
                        <div class="form-col-half">
                            <label for="first_name">First Name</label>
                            <input type="text" name="first_name" id="first_name" class="form-field" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="Enter First Name" autocomplete="first name">
                        </div>
                        <div class="form-col-half">
                            <label for="last_name">Last Name</label>
                            <input type="text" name="last_name" id="last_name" class="form-field" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="Enter Last Name" autocomplete="lastname name">
                        </div>
                        <div class="form-col-half">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class="form-field" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off"  placeholder="Enter Email" autocomplete="email">
                        </div>
                        <div class="form-col-half">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-field" tabindex="0" autocorrect="off" spellcheck="false" autocapitalize="off"  placeholder="Enter Email" autocomplete="email">
                        </div>
                        <div class="form-col-half">
                            <p id="country"></p>
                            <p id="local"></p>
                        </div>
                    </div>
                    <div class="form-grouped">
                        <button class="button">Register</button>
                    </div>
                </form>
                <div class="signup-form__link">
                    <p>Already have an account <a href="#">Login</a> </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Register',

  mounted() {
    document.querySelector('#local').innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
</script>