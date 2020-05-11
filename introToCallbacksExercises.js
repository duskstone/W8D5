class Clock {
    constructor(date = new Date()) {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        // 3. Call printTime.
        this.printTime();
        setInterval(this._tick.bind(this), 1000); 

        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        let hr = this.hours;
        let min = this.minutes;
        let sec = this.seconds;
        console.log(`${hr}:${min}:${sec}`);
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        // 1. Increment the time by one second.
        if(this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        };

        if(this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        };

        this.seconds += 1;
        this.printTime();
        // 2. Call printTime.
    }                                               
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    function addNumbers(sum, numsLeft, completionCallback) {
        if (numsLeft > 0) {
            reader.question('Enter a number', (input) => {
                sum += parseInt(input)
                console.log(sum);
                addNumbers(sum, numsLeft - 1, completionCallback)
            })
        } else if(numsLeft === 0) {
            completionCallback(sum)
            reader.close();
        }    
    }

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// does readline expect the words 'input:' / 'output:'
// how does spread operator work

function absurdBubbleSort(arr, sortCompletionCallback) {

    function askIfGreaterThan(el1, el2, callback){
        reader.question(`Is ${el1} greater than ${el2}?`
        )
    }
}
