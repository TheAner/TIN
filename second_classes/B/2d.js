const rules = ["js is shit", "js sucks", "js should be outsourced to india"]

function printRules(rules){
    console.log("Those are the rules:")
    rules.forEach((rule,i) => console.log(`${i+1}: ${rule}`));
}

printRules(rules)