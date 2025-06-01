function outerFunction(){
    let name = "Shakil";
    function innerFunction(){
        console.log(name)
    }
    return innerFunction;
}
const myFunc = outerFunction();
myFunc()
// ---------------------------------------------------
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3
// ----------------------------------------------------------
function বাইরের_ফাংশন() {
  const গোপন_সংখ্যা = 10; // বাইরের ভেরিয়েবল

  function ভিতরের_ফাংশন() {
    console.log(গোপন_সংখ্যা); // ভিতরের ফাংশন গোপন_সংখ্যা অ্যাক্সেস করতে পারছে!
  }

  return ভিতরের_ফাংশন;
}

const আমার_ফাংশন = বাইরের_ফাংশন();
আমার_ফাংশন(); // আউটপুট: 10