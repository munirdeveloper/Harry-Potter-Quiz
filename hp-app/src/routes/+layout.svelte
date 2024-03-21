<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
</script>

<!-- App Shell -->
<AppShell>
	<nav class="navbar">
		<!-- LOGO -->
		<div class="h2">Sorting Hat Quiz</div>

		<!-- NAVIGATION MENU -->
		<ul class="nav-links">
			<!-- USING CHECKBOX HACK -->
			<input type="checkbox" id="checkbox_toggle" />
			<label for="checkbox_toggle" class="hamburger">&#9776;</label>

			<!-- NAVIGATION MENUS -->
			<div class="menu">
				<li><a href="/">Home</a></li>
				<li><a href="/quiz">Quiz</a></li>
				<li><a href="/">Pricing</a></li>
				<li><a href="/">Contact</a></li>
			</div>
		</ul>
	</nav>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
			<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
					>© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All
					Rights Reserved.
				</span>
				<ul
					class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
				>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">About</a>
					</li>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
					</li>
					<li>
						<a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
					</li>
					<li>
						<a href="#" class="hover:underline">Contact</a>
					</li>
				</ul>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>

<style>
	/* NAVBAR STYLING STARTS */
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		background-color: black;
		color: #fff;
		position: fixed; /* Fixed position to stick to the top */
		width: 100%; /* Full width */
		z-index: 1000; /* Ensure it's above other content */
	}

	.nav-links a {
		color: #fff;
	}

	/* LOGO */
	.logo {
		font-size: 32px;
	}

	/* NAVBAR MENU */
	.menu {
		display: flex;
		gap: 1em;
		font-size: 18px;
	}

	.menu li:hover {
		background-color: black;
		border-radius: 5px;
		transition: 0.3s ease;
	}

	.menu li {
		padding: 5px 14px;
	}

	/* RESPONSIVE NAVBAR MENU STARTS */

	/* CHECKBOX HACK */

	input[type='checkbox'] {
		display: none;
	}

	/* HAMBURGER MENU */
	.hamburger {
		display: none;
		font-size: 24px;
		user-select: none;
		margin-top: 8px;
	}

	/* APPLYING MEDIA QUERIES */
	@media (max-width: 768px) {
		.menu {
			display: none;
			position: absolute;
			background-color: black;
			right: 0;
			left: 0;
			text-align: center;
			padding: 16px 0;
		}

		.menu li:hover {
			display: inline-block;
			background-color: black;
			transition: 0.3s ease;
		}

		.menu li + li {
			margin-top: 12px;
		}

		input[type='checkbox']:checked ~ .menu {
			display: block;
		}

		.hamburger {
			display: block;
		}

		.dropdown {
			left: 50%;
			top: 30px;
			transform: translateX(35%);
		}

		.dropdown li:hover {
			background-color: #4c9e9e;
		}
	}
</style>
