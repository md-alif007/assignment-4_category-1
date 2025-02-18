function electionResult(votes) {

    if (Array.isArray(votes) === false) {
        return "Invalid";
    }

    let mango = 0;
    let banana = 0;
    for (const element of votes) {
        if (element === "mango") {
            mango++;
        }
        if (element === "banana") {
            banana++;
        }
    }

    if (mango > banana) {
        return "Mango";
    } else if (banana > mango) {
        return "Banana";
    } else if (mango === banana) {
        return "Draw";
    }
}


