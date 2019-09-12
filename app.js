//Quiz #2
//John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

/* 1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score) */

let JohnScore1 = 89;
/*let JohnScore1 = 113;*/  //This is for step 3
let JohnScore2 = 120;
let JohnScore3 = 103;

let MikeScore1 = 116;
let MikeScore2 = 94;
let MikeScore3 = 123;

let JohnAvg = ((JohnScore1 + JohnScore2 + JohnScore3) / 3);
console.log(`Johns team average is ${JohnAvg}`);

let MikeAvg = ((MikeScore1 + MikeScore2 + MikeScore3) / 3);
console.log(`Mikes team average is ${MikeAvg}`);

if(JohnAvg > MikeAvg){
    console.log(`Johns team average is higher with an average of ${JohnAvg}`);
} else{
    console.log(`Mikes team average is higher with an average of ${MikeAvg}`);
}

