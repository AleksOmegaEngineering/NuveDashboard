<script>
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import '../app.postcss';
</script>

<div class="relative px-8">
	<main>
	  <Navbar 
	  navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
	  let:hidden 
	  let:toggle 
	  rounded 
	  color="form"
	  >
		<NavBrand href="/">
		  <img src="https://lhe8c7.p3cdn1.secureserver.net/wp-content/uploads/2021/10/Artboard-5.png?time=1671730690" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
		  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
		</NavBrand>
		<NavHamburger on:c--ck={toggle} />
		<NavUl {hidden}>
		  <NavLi href="/" active={true}>Patients</NavLi>
		  <NavLi href="/lab-cases">Lab Cases</NavLi>
		  <NavLi href="/appointments">Appointments</NavLi>
		</NavUl>
	  </Navbar>
	</main>
</div>

<style>

</style>

<slot />
