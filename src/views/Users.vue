<template>
    <div class="nav-wrapper container dashboard-padding">

        <Sidenav/>

        <div class="container">
            <div class="body-container">
                <div class="account--card">
                    <div class="account--card__panel">
                        <div class="account--card__panel-header">
                            <h2>Users</h2>
                        </div>
                        <div class="account--card__panel-sub">
                            <div class="account--card__panel-content">
                                <div class="app-flex justify-b">
                                    <span>Add users to help manage your social media</span>
                                    <button class="upgrade-button">Upgrade to Add Users</button>
                                </div>
                            </div>
                        </div>

                        <!-- User's Table -->
                        <div class="account--card__panel-sub">
                            <table class="account--table fixed--table">

                                <thead>
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Last Signed In
                                        </th>
                                        <th>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <span>
                                                Nameh Singh
                                            </span>
                                        </td>
                                        <td>
                                            <span class="u--text--light">
                                                vkf00365@cuoly.com
                                            </span>
                                        </td>
                                        <td>
                                            <time datetime="1600710312">4 days ago</time>
                                        </td>
                                        <td>
                                            <span class="text-owner">
                                                Account Owner (You)
                                            </span>
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
    name: 'Users',
    components: {
        Sidenav
    }
}
</script>