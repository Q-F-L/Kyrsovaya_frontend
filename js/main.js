const main = {
    methods: {

        selectContinent1($e) {
            console.log($e)
        },

        sortContinent(){
            this.arrFilter = this.tur.filter(tour => { return tour.continent === this.selectContinent });
        },

        sortCountry(){
            if(this.selectCountry != 'Все')
            this.arrFilter = this.tur.filter(tour => { return tour.country === this.selectCountry });
        
        }
    },

    computed: {
        continentsString() {
            const continents = Object.keys(this.continents)
            return continents
        },

        countries() {
            console.log(this.continents[this.selectContinent])
            return this.continents[this.selectContinent]
        },

        // sortCC(){
        //     if(selectCountry === ''){
        //         this.arrFilter = this.tur.filter(tour => { return tour.country === this.selectCountry });
        //         this.selectCountry = '';y
        //     }

        //     return this.arrFilter = this.tur.filter(tour => { return tour.continent === this.selectContinent });
        // }

        // sortRating(l){
        //     return this.arrFilter.sort(function comp(a, b){
        //         if (a > b) return 1;
        //         if (a == b) return 0;
        //         if (a < b) return -1;
        //     });
        // }

    },

    data() {
        return {
            selectContinent: '',
            selectCountry: '',
            continents: {
                'Европа': [
                    "Все",
                    "Россия",
                    "Англия",
                    "Франция",
                    "Албания",
                ], 
                'Азия': [
                    "Все",
                    "Китай",
                    "Узбекистан",
                    "Пекин",
                ], 
            },

            arrFilter: [

            ],

            tur: [
            ],
        }
    },

    created() {
        fetch("/tour.json")
            .then(response => response.json())
            .then(json => this.tur = json)

    }

}


Vue.createApp(main).mount('#main');