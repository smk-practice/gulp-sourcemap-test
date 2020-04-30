import anime from 'animejs';
const fadeOut = (selector: string) => {
    // let anime:any;
    anime({
        targets: selector,
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#CCC',
        duration: 800
    });
}
const run = (multiple: [number, string][]) => {
    console.clear();
    let i: number = 1;
    do {
        if (i == 50) throw 'error';
        let results = multiple.filter(o => (i) % o[0] == 0);
        console.log(`${(i)}${results.length !== 0 ? ` : ${results[0][1]}`: ''}`);
    } while (++i <= 100);
}
(<any>window).fizzBuzz = (m: [number, string][]) => { run(m); };
(<any>window).fadeOut = (s: string) => { fadeOut(s); };