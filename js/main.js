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
                deadline: this.deadline}
            this.column1.push(newCard);
            this.newCardDesc = '';
            this.newCardTitle = '';
            this.newItemText = '';
            this.deadline = '';
            newCard.completedDate = new Date().toLocaleString(); // добавляем дату и время завершения
            },

        removeCard(card){
            this.column1.splice(this.column1.indexOf(card), 1);
        },
        render(card){
            this.title = ''
            this.title.removeAttribute()
        },

        move2(card){
            this.column1.splice(this.column1.indexOf(card), 1);
            this.column2.push(card);
        },

        move3(card){
            this.column2.splice(this.column2.indexOf(card), 1);
            this.column3.push(card);
        },

        move4(card){
            this.column3.splice(this.column3.indexOf(card), 1);
            this.column4.push(card);
        },

        remove3(card){
            this.column3.splice(this.column3.indexOf(card), 1);
            this.column2.push(card);
        }

        }






})

