import { writable, readable, derived } from 'svelte/store';
import config from './config';
import enFields from './languages/en/en.json';
import jpFields from './languages/jp/jp.json';

const user = writable({
    createError: "",
    createMessage: ""
});

const nav = writable({
    showSideBar: false 
});
const subNav = writable({
    subNav: false 
});
const collapse = writable({
    collapse: false 
});
const apiInfo = readable({
    basePath: "http://localhost:5000"
});

// const system = writable({
//     len : (typeof window !== "undefined")? writable(localStorage.getItem('len') || 'en') : writable(null)
// });

const fields = (config.system.lan == 'en') ? writable(enFields) : writable(jpFields);

export { user, nav, apiInfo, subNav, collapse, fields }
