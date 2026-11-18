const transactions = [{
    id: 1,
    amount: 100,
    note: 'Monthly salary',
    date: '2023-01-01',
    type: 'income',
    category: 'Salary'
},
{
    id: 2,
    amount: 50,
    note: 'Uncategorized expense',
    date: '2023-01-02',
    type: 'expense',
},
{
    id: 3,
    amount: 75,
    note: 'Transport fare',
    date: '2023-01-03',
    type: 'expense',
    category: 'Transport'
},
{
    id: 4,
    amount: 250,
    note: 'Freelance project payment',
    date: '2023-01-05',
    type: 'income',
    category: 'Freelance'
},
{
    id: 5,
    amount: 30,
    note: 'Entertainment',
    date: '2023-01-07',
    type: 'expense',
    category: 'Entertainment'
},
{
    id: 6,
    amount: 120,
    note: 'Utility bill',
    date: '2023-01-10',
    type: 'expense',
    category: 'Utilities'
},
{
    id: 7,
    amount: 45,
    note: 'Food purchase',
    date: '2023-01-12',
    type: 'expense',
    category: 'Food'
},
{
    id: 8,
    amount: 500,
    note: 'Annual bonus',
    date: '2023-01-15',
    type: 'income',
    category: 'Bonus'
}]


// Filter return less or equal to original array length

const expenses = transactions.filter((t) => t.type === 'expense')

// console.log(expenses)

// Map -> transform each item

const trans_notes = transactions.map((t, index) => `${index + 1} - ${t.note}`)

// console.log(trans_notes)

const totalExpense = transactions.filter((t) => t.type === 'expense')
    .map((t) => t.amount)
    .reduce((t, sum) => {
        return sum + t
    }, 0)

const totalIncome = transactions.filter((t) => t.type === 'income')
    .map((t) => t.amount)
    .reduce((t, sum) => {
        return sum + t
    }, 0)

// console.log(totalExpense)
// console.log(totalIncome)

// const balance = totalIncome - totalExpense

const balance = transactions.map((t) => t.type === 'expense' ? -t.amount : t.amount)
    .reduce((t, sum) => {
        return sum + t
    }, 0)


// reduce, FOLD many items into ONE value

// Imperative programming vs Declarative Programming
// Imperative C/C++, Tell CPU what to do step by step exactly to achive sth
// Delcarative, Python, JS, -> Tell what to be done

const totalCents = (list) => {
    return list.reduce((sum, t) => {
        return t.amount + sum
    }, 0)
}
const filterByCategory = (list, category) => {
    return list.filter((t) => t.category === category)
}

const filterByType = (list, type) => {
    return list.filter((t) => t.type === type)
}

const summarize = (list) => {
    const incomeCents = totalCents(filterByType(list, 'income'))
    const expensesCents = totalCents(filterByType(list, 'expense'))
    return {
        incomeCents: incomeCents,
        expensesCents: expensesCents,
        balanceCents: incomeCents - expensesCents
    }
}

const addTransaction = (list, tx) => {
    return [...list, tx]
}

console.log(summarize(transactions))