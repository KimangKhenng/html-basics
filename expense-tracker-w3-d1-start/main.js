const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        counter = ref(0)
        const transcations = ref([
            { "id": 1, "note": "Salary", "category": "Income", "type": "income", "amountCents": 30000 },
            { "id": 2, "note": "Lunch", "category": "Food", "type": "expense", "amountCents": 450 },
            { "id": 3, "note": "Bus", "category": "Transport", "type": "expense", "amountCents": 150 },
            { "id": 4, "note": "Notebook", "category": "Study", "type": "expense", "amountCents": 300 }
        ]
        )

        const filteredType = ref('all')

        const filteredTranscations = ref([
            { "id": 1, "note": "Salary", "category": "Income", "type": "income", "amountCents": 30000 },
            { "id": 2, "note": "Lunch", "category": "Food", "type": "expense", "amountCents": 450 },
            { "id": 3, "note": "Bus", "category": "Transport", "type": "expense", "amountCents": 150 },
            { "id": 4, "note": "Notebook", "category": "Study", "type": "expense", "amountCents": 300 }
        ])

        function filterByTypeUI(type) {
            filteredType.value = type
            if (type === 'all') {
                filteredTranscations.value = transcations.value
            } else {
                filteredTranscations.value = transcations.value.filter((tx) => tx.type === type);
            }
        }

        function totalCents(list) {
            return list.reduce((sum, tx) => sum + tx.amountCents, 0);
        }

        function filterByType(list, type) {
            return list.filter((tx) => tx.type === type);
        }

        function formatMoney(cents) {
            const sign = cents < 0 ? "-" : "";
            return sign + "$" + (Math.abs(cents) / 100).toFixed(2);
        }

        function summarize() {
            const incomeCents = totalCents(filterByType(transcations.value, "income"));
            const expensesCents = totalCents(filterByType(transcations.value, "expense"));
            return {
                incomeCents: incomeCents,
                expensesCents: expensesCents,
                balanceCents: incomeCents - expensesCents,
            };
        }

        const increaseCounter = () => {
            counter.value++
        }

        return {
            counter,
            transcations,
            formatMoney,
            summarize,
            increaseCounter,
            filterByTypeUI,
            filteredTranscations,
            filteredType
        }
    }
})

app.mount("#app")