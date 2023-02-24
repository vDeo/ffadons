<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3" :class="sort == 'Name' ? 'font-bold text-white' : ''">
                        Name {{ sort == 'Name' ? '('+direction+')' : '' }}
                    </th>
                    <th scope="col" class="px-6 py-3" :class="sort == 'Author' ? 'font-bold text-white' : ''">
                        Author {{ sort == 'Author' ? '('+direction+')' : '' }}
                    </th>
                    <th scope="col" class="px-6 py-3" :class="sort == 'Ratings' ? 'font-bold text-white' : ''">
                        Ratings {{ sort == 'Ratings' ? '('+direction+')' : '' }}
                    </th>
                    <th scope="col" class="px-6 py-3" :class="sort == 'Updated' ? 'font-bold text-white' : ''">
                        Updated {{ sort == 'Updated' ? '('+direction+')' : '' }}
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="addOn in addOns" :key="addOn.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ addOn.name[addOn.default_locale]}}
                    </th>
                    <td class="px-6 py-4">
                        {{addOn.authors[0].name}}
                    </td>
                    <td class="px-6 py-4">
                        {{Math.round(addOn.ratings.average*10)/10}}
                    </td>
                    <td class="px-6 py-4">
                        {{ addOn.last_updated }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {

    data() {
        return {}
    },

    computed: {
        ...mapState({
            addOns: state => state.addOns,
            sort: state => state.sort,
            direction: state => state.direction
        }),

        ...mapGetters(['getAddons']),
    },

    methods: {

    }
}


</script>
