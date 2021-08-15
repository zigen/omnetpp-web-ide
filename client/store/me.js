import { writable } from "svelte/store";
export const me = writable(null);

fetch('/me').then(res => {
 console.log(res.status)
 
})