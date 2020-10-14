<template>
    <header>
        <div class="container container-padding">
            <div class="nav-wrapper">
                <div class="nav-wrapper__logo">
                    <a href="/">SCHEDULER</a>
                </div>
                <nav role="navigation" class="nav-wrapper__nav">
                    <ul class="nav-wrapper__nav-desktop">
                        <li class="nav-wrapper__nav-desktop_list">
                            <a href="">Pricing</a>
                        </li>
                        <li class="nav-wrapper__nav-desktop_list">
                            <a href="/login">Sign In</a>
                        </li>
                        <li class="nav-wrapper__nav-desktop_list">
                            <a href="/register" class="nav_button">Get Started</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>