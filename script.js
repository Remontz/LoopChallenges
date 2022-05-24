/*1. Print odds 1-20
    Using a loop write code that will console.log all of the odd values from 1 up to 20. */
        function printOdds(x) {
            for (i=1; i<=x; i+=2) {
                console.log(i);
            }
        }

       // printOdds(20);


/*2. Decreasing Multiples of 3
    Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.  */
        function decreasingX3(x) {
            while (x!=0) {
                if (x%3 == 0) {
                    console.log(x);
                }
                x--;
            }
        }

       // decreasingX3(100);


/*3.  Print the sequence
    Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.*/
        function printSequence(array) {
            for (i=0; i<array.length; i++) {
                console.log(array[i]);
            }
        }

        var sequence = [4, 2.5, 1, -0.5, -2, -3.5]
      //printSequence(sequence);


/*4.  Sigma
    Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100.  We should get back 5050 at the end. */
        function sigma(x) {
            var sum = 0;
            var i = 0;
            while (i<=x) {
                sum += i;
                i++;
            }
            console.log(sum);
        }

        sigma(100);


/*5.  Factorial
    Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12.  We should get back 479001600 at the end. */
        function factorial(x) {
            var product = 1;
            for (i=1; i<=x; i++) {
                product *= i; 
            }
            console.log(product);
        }

        factorial(12);