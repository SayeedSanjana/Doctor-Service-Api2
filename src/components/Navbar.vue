<template>
    <div class="">

        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container px-6 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-semibold text-gray-700">
                            <router-link :to="'/'"><p class="text-2xl font-semibold text-green-400 dark:text-white lg:text-3xl hover:text-green-400 dark:hover:text-gray-300">
                                LOGO</p></router-link>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex md:hidden">
                            <button type="button"
                                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu" @click="toggle">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="flex-1 md:flex md:items-center md:justify-between" v-show="isOpen">
                        <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                             <router-link :to="'/'"><a href="#"
                                class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-600 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-green-300 ">Home</a>
                             </router-link>
                            <router-link :to="'/doctorList'"> <a href="#"
                                class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-600 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-green-300 ">Doctor
                                List</a></router-link>

                        </div>

                        <div class="flex items-center mt-4 md:mt-0">

                            <button
                                class=" hidden mx-4 text-gray-600 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                                aria-label="show notifications">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div class="relative">
                                <button @click="expandProfile" type="button"
                                    class=" relative z-10 block p-2 bg-white rounded-md  dark:bg-gray-800 focus:outline-none"
                                    aria-label="toggle profile dropdown">
                                    <div class="w-10 h-10 overflow-hidden border-2 border-green-400 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                            class="object-cover w-full h-full" alt="avatar">
                                    </div>

                                    <h3 class="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                                        Iktisad Rashid</h3>
                                </button>
                                <div class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800" v-show="openProfile">
                                     <router-link :to="'/accountSettings'"> <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-300 hover:text-white dark:hover:text-white">
                                        Account Settings
                                    </a></router-link>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-300 hover:text-white dark:hover:text-white">
                                        Appointments
                                    </a>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-300 hover:text-white dark:hover:text-white">
                                        Help
                                    </a>
                                    <!-- <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-300 hover:text-white dark:hover:text-white">
                                        Settings
                                    </a> -->
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-green-300 hover:text-white dark:hover:text-white">
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                            <!--relative-->
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
    name: 'Navbar',
    props:[],
	data(){
    return{
    isOpen:true,
    openProfile:false
    }
	},
	methods:{
       toggle(){
       this.isOpen=!this.isOpen
       },
       expandProfile(){
       this.openProfile=!this.openProfile
       }
       },
       
	
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
