<script lang="ts">
    export let data;
    const { users } = data;
	import PatientComp from "../components/PatientComp.svelte";
    import { Button, Search, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'

    ///search bar submit and clear
    let searchFirstName = '';
    let searchLastName = '';
    let searchQuery = '';
    let value = '';
    const submitted = () => {
        searchQuery = value;
    };

    const clear = () => {
        value = '';
        searchQuery = '';
    };

    function searchSort( person : object) {
    };

    let currentSort : string;
    function alphabeticalSort() {
        if (currentSort != "alphabetical")
            users.sort((a: { firstName: string; }, b: { firstName: string; }) => a.firstName.localeCompare(b.firstName));
            currentSort = "alphabetical";
    }
    function timeSort() {
        if (currentSort != "time")
            users.sort((a: { age: number; }, b: { age: number; }) => a.age - b.age)
            currentSort = "time";
    }
    function insuranceSort() {
        if (currentSort != "insurance")
            currentSort = "insurance";
    }
</script>

<main style="height:100vh" class="overflow-scroll pb-16">
    <div class="entry">
        <div class="patient-accordion">
            <form class="flex gap-2" id="example-form" on:submit={submitted}>
                <Search bind:value size="md">
                    <div class="flex">
                        <Button class="!p-1.5" on:click={clear}>
                            <svg class="w-5 h-5" fill="currentColor" height="15px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" stroke="currentColor" xml:space="preserve"><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/></svg>
                        </Button>
                        <Button type="submit" class="!p-1.5">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </Button>
                    </div>
                </Search>
                <Button color="alternative"><Chevron> Filter </Chevron></Button>
                <Dropdown >
                    <DropdownItem on:click={timeSort}>Earliest Time</DropdownItem>
                    <DropdownItem on:click={alphabeticalSort}>Alphabetical</DropdownItem>
                    <DropdownItem on:click={insuranceSort}>Has Insurance</DropdownItem>
                </Dropdown>
            </form>
            <p>You are seaching: {value}</p>
        </div>
    </div>
    {#each users as person}
        <div class="patient-accordion"> <PatientComp firstName={person.firstName} lastName={person.lastName} age={person.age}></PatientComp> </div>
    {/each}
</main>

<style>
    .patient-accordion{
        padding-top: 20px;
        padding-right: 50px;
        padding-bottom: 0px;
        padding-left: 65px;
    }
    .entry{
        padding-top: 70px;
    }
    
    
</style>