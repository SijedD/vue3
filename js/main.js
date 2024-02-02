new Vue({
    el: '#app',
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
            column4: [],
            newCardTitle: '',
            newItemText: '',
            newCardDesc: '',
            deadline: '',

        }
    },
    methods: {
        addCard() {
            const newCard = {
                id: Date.now(),
                title: this.newCardTitle,
                description: this.newCardDesc,
                deadline: this.deadline,}
            this.column1.push(newCard);
            this.newCardDesc = '';
            this.newCardTitle = '';
            this.newItemText = '';
            this.deadline = '';
            newCard.completedDate = new Date().toLocaleString(); // добавляем дату и время завершения
            }

        }






})

