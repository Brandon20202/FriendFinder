var friends = require("../data/friends.js")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        friends.push(req.body);
        console.log(friends);

        var bestMatch = "";
        var currentUser = friends[friends.length - 1];
        var currentTopScore = 100;
        console.log(currentUser);

        for (var i = 0; i < friends.length - 1; i++) {
            var accumulator = 0;
            for (var j = 0; j < 10; j++) {
                accumulator += Math.abs(currentUser.scores[j] - friends[i].scores[j]);
            }
            if (accumulator < currentTopScore) {
                currentTopScore = accumulator;
                bestMatch = friends[i];
                console.log("This is the best match " + bestMatch.name);
            }
        }

        res.json(bestMatch);
    });
}