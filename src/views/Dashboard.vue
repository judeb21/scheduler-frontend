<template>
    <div class="nav-wrapper container dashboard-padding">

        <Sidenav/>

        <div class="container">
            <div class="body-container">
                <div class="account--card">
                    <div class="account--card__panel">
                        <div class="account--card__panel-header">
                            <h2>Account Settings</h2>
                        </div>
                        <div class="account--card__panel-sub">
                            <p>Subscription</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Free</span>
                                    <button class="upgrade-button">Upgrade your plan</button>
                                </div>
                            </div>
                        </div>

                        <!-- Personal Information -->
                        <div class="account--card__panel-sub">
                            <p>Personal Information</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Name
                                        <span>Nameh Singh</span>
                                    </span>
                                    <button class="default-button">Edit</button>
                                </div>
                            </div>
                            <div class="account--card__panel-content border-none">
                                <div class="app-flex justify-b">
                                    <span>Email
                                        <span>test@gmail.com</span>
                                    </span>
                                    <button class="default-button">Edit</button>
                                </div>
                            </div>
                            <div class="account--card__panel-content border-none">
                                <div class="app-flex justify-b">
                                    <span>Change Password</span>
                                    <button class="default-button">Change</button>
                                </div>
                            </div>
                        </div>

                        <!-- Preference -->
                        <div class="account--card__panel-sub">
                            <p>Preference</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Time Zone
                                        <span>Nigeria</span>
                                    </span>
                                    <button class="default-button">Edit</button>
                                </div>
                            </div>
                        </div>

                        <!-- Preference -->
                        <div class="account--card__panel-sub error">
                            <p>Delete Account</p>
                            <div class="account--card__panel-content error-border">
                                <div class="app-flex justify-b">
                                    <span class="error">Once you delete your account, there is no going back. Please be certain.</span>
                                    <button class="delete-button">Delete your account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Sidenav from '@/components/Sidenav.vue'

export default {
    name: 'Dashboard',
    components: {
        Sidenav
    }
}
</script>