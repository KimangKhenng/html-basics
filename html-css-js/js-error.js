function totalExpenses(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].type == "expense") {
            total += list[i].amountCents / 100;
        }
    }
    return total;
}