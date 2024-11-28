export default function MAXNUMBER(...NUMB) {
    let max = NUMB[0];
    
    for (let i = 0; i < NUMB.length; i++) {
        if (NUMB[i] > max) {
            max = NUMB[i];
        }
    }
    return max
}