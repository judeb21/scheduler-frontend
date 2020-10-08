<template>
    <div class="nav-wrapper container dashboard-padding">

        <Sidenav/>

        <div class="container">
            <div class="body-container">
                <div class="account--card">
                    <div class="account--card__panel">
                        <div class="account--card__panel-header">
                            <h2>Social Sets & Access Groups</h2>
                        </div>
                        <div class="account--card__panel-sub">
                            <p>Subscription</p>
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span class="nf-width">Invite users to help manage your social media. 
                                        Give users access to social profiles in Social Sets & Access Groups.
                                    </span>
                                    <button class="upgrade-button">Upgrade</button>
                                    <button class="default-button">Organize Profiles</button>
                                </div>
                            </div>
                        </div>

                        <!-- User's Table -->
                        <div class="account--card__panel-sub">
                            <table class="account--table fixed--table">

                                <thead>
                                    <tr>
                                        <th>
                                            Access Group
                                        </th>
                                        <th>
                                            Social Set
                                        </th>
                                        <th>
                                            
                                        </th>
                                        <th>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                Main Group 
                                                <span>1 User</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="u--text--light">
                                                vkf00365@cuoly.com
                                            </span>
                                        </td>
                                        <td>
                                            <!-- <time datetime="1600710312">4 days ago</time> -->
                                        </td>
                                        <td>
                                            <a class="default-button" href="social-details.html">Details</a>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
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
    name: 'Social',
    components: {
        Sidenav
    }
}
</script>