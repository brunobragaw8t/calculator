/**
 * Vue
 */

const app = Vue.createApp({
    data() {
        return {
            num1: null,
            num2: null,
            operator: null,
            result: null,
        };
    },
    methods: {
        type(value) {
            if (this.result !== null) {
                this.clear();
            }

            if ((this.num1 === null || this.num1 == 0) && this.operator === null) {
                if (value !== '.') {
                    this.num1 = `${value}`;
                }
            } else if (this.operator === null) {
                if (value !== '.' || !this.num1.includes('.')) {
                    this.num1 = `${this.num1}${value}`;
                }
            } else if (this.num2 === null || this.num2 == 0) {
                if (value !== '.') {
                    this.num2 = `${value}`;
                }
            } else {
                if (value !== '.' || !this.num2.includes('.')) {
                    this.num2 = `${this.num2}${value}`;
                }
            }
        },

        setOperator(op) {
            if (this.num1 !== null && this.num1 !== '') {
                this.operator = op;
                this.result = null;
            }
        },

        clear() {
            this.num1 = null;
            this.num2 = null;
            this.operator = null;
            this.result = null;
        },

        backspace() {
            if (this.num2 !== null) {
                const num2_array = this.num2.split('');
                num2_array.pop();
                this.num2 = num2_array.join('');
            } else {
                const num1_array = this.num1.split('');
                num1_array.pop();
                this.num1 = num1_array.join('');
            }
        },

        submit() {
            if (
                this.num1 !== null && this.num1 !== ''
                && this.operator !== null
                && this.num2 !== null && this.num2 !== ''
            ) {
                switch (this.operator) {
                    case '/':
                        this.result = this.num1 = Number(this.num1) / Number(this.num2);
                        break;

                    case '*':
                        this.result = this.num1 = Number(this.num1) * Number(this.num2);
                        break;

                    case '-':
                        this.result = this.num1 = Number(this.num1) - Number(this.num2);
                        break;

                    case '+':
                        this.result = this.num1 = Number(this.num1) + Number(this.num2);
                        break;
                }

                this.operator = null;
                this.num2 = null;
            }
        },
    },
});

const mountedApp = app.mount('#app');
