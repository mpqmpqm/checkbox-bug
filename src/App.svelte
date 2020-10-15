<script>
  import { writable } from "svelte/store"

  // creates a writable store with an initial value.
  // Stores can be subscribed to by prefixing the variable name
  // with a $, e.g. $checked.

  // When multiple checkbox inputs are bound to the same store,
  // Svelte represents the value as an array. e.g. ["one","three"]
  const checked = writable([])

  // every time the value of checked changes, console.log its value.
  $: console.log($checked)
</script>

<div>
  <!--
    `bind:group={$checked}` sets up two way data binding between these inputs
    and the `checked` store. Whether or not the checkbox is filled is linked to 
    whether or not that checkbox's `value` is in the `checked` array.
  -->
  <input type="checkbox" bind:group={$checked} value="one" id="one" /><label
    for="one">one</label>
  <input type="checkbox" bind:group={$checked} value="two" id="two" /><label
    for="two">two</label>
  <input type="checkbox" bind:group={$checked} value="three" id="three" /><label
    for="three">three</label>

  <!-- The innerText of the paragraph is updated on change to the `checked` store. -->
  <p>{$checked}</p>
</div>
