<template>
    <div class="overflow-hidden">
        <div class="overflow-auto border-round border-1 border-primary-500" style="height: 470px">
            <div v-for="i in 10" :key="i">
                <div class="sticky top-0 font-bold bg-yellow-300 p-2 pl-4 z-1">
                    Рейс № {{ i }}
                </div>
                <p class="surface-overlay p-2 m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                <div class="flex justify-content-end flex-wrap">
                    <Button label="Купить" class="m-2 z-0" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>