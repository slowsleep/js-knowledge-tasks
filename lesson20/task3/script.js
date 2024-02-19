class Counter {
    constructor(n) {
        this.state = {
            n
        };
        this.root = document.getElementById('root');
        this.render();
    }

    increment() {
        this.setState({
            n: this.state.n + 1
        });
    }

    decrement() {
        this.setState({
            n: this.state.n - 1
        });
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState,
        };
        this.render();
    }

    render() {
        this.root.innerHTML = '';
        this.root.innerHTML = this.state.n;
    }
}

const buttonIncrement = document.querySelector('.increment');
const buttonDecrement = document.querySelector('.decrement');

const counter = new Counter(5);

buttonIncrement.addEventListener('click', counter.increment.bind(counter));
buttonDecrement.addEventListener('click', counter.decrement.bind(counter));
