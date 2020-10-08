<template>
    <div class="nav-wrapper container dashboard-padding">

        <Sidenav/>

        <div class="container">
            <div class="body-container">
                <div class="account--card">
                    <div class="account--card__panel">
                        <div class="account--card__panel-header">
                            <h2>Subscription</h2>
                        </div>
                        <div class="account--card__panel-sub">
                            <p>Current Plan</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Free</span>
                                    <button class="upgrade-button">Upgrade Plan</button>
                                </div>
                            </div>
                        </div>

                        <!-- Preference -->
                        <div class="account--card__panel-sub">
                            <p>Manage Plan</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Free Plan <br>
                                        <span>(1 Social Set, 1 User)</span>
                                    </span>
                                    <button class="default-button">Change Plan</button>
                                </div>
                            </div>
                            <div class="account--card__panel-content border-none">
                                <div class="app-flex justify-b">
                                    <span class="e--block justify-b">0 Extra Social Sets
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 28 28" class=""><path fill-rule="evenodd" d="M13.97.048c7.486 0 13.5 6.014 13.5 13.5s-6.014 13.5-13.5 13.5c-7.487 0-13.5-6.014-13.5-13.5S6.482.048 13.97.048zm0 2.455A11 11 0 002.923 13.548a11 11 0 0011.045 11.046 11 11 0 0011.046-11.046A11 11 0 0013.969 2.503zm-.005 7.976c.757 0 1.37.614 1.37 1.372v7.652a1.371 1.371 0 11-2.742 0v-7.652c0-.758.614-1.372 1.372-1.372zm.004-4.693c.858 0 1.555.688 1.555 1.564a1.56 1.56 0 01-1.555 1.574 1.567 1.567 0 01-1.555-1.574c0-.876.707-1.564 1.555-1.564z" opacity=".6"></path></svg>
                                    </span>
                                    <a class="default-button" href="javascript:void(0);">Details</a>
                                </div>
                            </div>
                            <div class="account--card__panel-content border-none">
                                <div class="app-flex justify-b">
                                    <span class="e--block justify-b">0 Extra Users
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" class=""><path fill-rule="evenodd" d="M13.97.048c7.486 0 13.5 6.014 13.5 13.5s-6.014 13.5-13.5 13.5c-7.487 0-13.5-6.014-13.5-13.5S6.482.048 13.97.048zm0 2.455A11 11 0 002.923 13.548a11 11 0 0011.045 11.046 11 11 0 0011.046-11.046A11 11 0 0013.969 2.503zm-.005 7.976c.757 0 1.37.614 1.37 1.372v7.652a1.371 1.371 0 11-2.742 0v-7.652c0-.758.614-1.372 1.372-1.372zm.004-4.693c.858 0 1.555.688 1.555 1.564a1.56 1.56 0 01-1.555 1.574 1.567 1.567 0 01-1.555-1.574c0-.876.707-1.564 1.555-1.564z" opacity=".6"></path></svg>
                                    </span>
                                    <a class="default-button" href="javascript:void(0);">Details</a>
                                </div>
                            </div>
                        </div>

                        <!-- Preference -->
                        <div class="account--card__panel-sub">
                            <p>Billing</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Payment & Billing History
                                        <span>Update payment method and download receipt</span>
                                    </span>
                                    <button class="default-button">Details</button>
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
    name: 'Subscription',
    components: {
        Sidenav
    }
}
</script>