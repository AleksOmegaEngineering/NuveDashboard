<script lang="ts">
    import { AccordionItem, Accordion, ButtonGroup, InputAddon, Helper } from 'flowbite-svelte';
    import { Checkbox } from 'flowbite-svelte';
    import { Input } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
    export let firstName : string;
    export let lastName : string;
    export let age : number;
    import Badge from "../components/Badge.svelte";

    /// non-API patient information
    export let person : { insuranceBool: boolean }
    export let insuranceFilter : boolean
    export let searchQuery : string
    let fullName = firstName + " " + lastName;
    let hasInsurance : boolean;
    let hasPrice : string;
    let errColor : string;

    ///check for user error
    function checkError(label : string) {
        if(label == "") {
            return false;
        }
        else return true
    }

    const dispatch = createEventDispatcher();

    function toggleInteraction() {
        hasInsurance = !hasInsurance;
        dispatch('interactionToggled');
    }

</script>
{#if !insuranceFilter || (insuranceFilter && person.insuranceBool)}
    {#if !searchQuery || (searchQuery && (fullName.toLowerCase().includes(searchQuery.toLowerCase())))}
    <Accordion>
        <AccordionItem>
                <span slot="header">
                    <div class="box" style="display:flex">
                        <div style="margin-right: 50px">{fullName}</div>
                        <div class="item">
                            {#key hasInsurance}
                                <Badge variableCheck={hasInsurance} badgeText="insurance" trueText="Has " failColor='pink'></Badge>
                            {/key}
                        </div>
                        <div class="item">
                            {#key hasPrice}
                                <Badge variableCheck={(hasPrice) ? true : false} badgeText="price" trueText="" failColor='yellow'></Badge>
                            {/key}
                        </div>
                    </div>
                </span>
            <div class="element">
                <p class="mb-2 text-gray-500 dark:text-gray-400">The patient's appointment is {age} minutes away.</p>
            </div>
            <div class="element">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Dummy text dummy text dummy text</p>
            </div>
            <div class="element" style="display:flex">
                <Checkbox on:click={toggleInteraction} style="margin-top: 5px"></Checkbox>
                <p style="margin-left: 10px" class="mb-2 text-gray-500 dark:text-gray-400"> Does the patient have insurance?</p>
            </div>
            <div class="element">
                <p class="mb-2 text-gray-500 dark:text-gray-400">The estimated cost will be</p>
                <ButtonGroup class="w-full" size="md">
                    <InputAddon>$</InputAddon>
                    <Input bind:value={hasPrice} id="input-addon-md" type="number" placeholder="0.00" />
                </ButtonGroup>
                {#if !checkError(hasPrice)}<Helper class="mb-2 text-gray-500 dark:text-gray-400" color='red'>Make sure to only include numbers and periods.</Helper>
                {/if}
            </div>
        </AccordionItem>
    </Accordion>
    {/if}
{/if}
<style>
    span{
        font-size: large;
    }
    .item{
        margin: 0 10px;
    }
    .element{
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>