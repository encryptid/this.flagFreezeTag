# Flag Freeze Tag
## A exercise in 'this' using a 'flag freeze tag' game

The rules of FFT are:

* There are two teams of players. One team is designated the 'runners' and the other the 'chasers'. There's also a flag in the game.
* Chasers can tag a runner and they become 'frozen'. You aren't allowed to tag anyone when you're frozen.
* Runners can tag other runners and they are no longer 'frozen'. Runners tagging chasers doesn't do anything and is considered a very risky play by freeze tag professionals.
* Chasers win when all runners are frozen. Runners win if one of the players picks up the flag.
* You should write some code to make it so that you can create teams of players and have them interact with each other.

## Part 1: creating your objects

There's a good bit of data here, and you should build a few different types of objects to help keep it organized. I'd recommend at least having:

* a Player type
* a Team type
* maybe a Flag type
**Put each of these constructors in their own module and export them.** These types should have *at least* the following functions:

```// not actual code
Player.tag(player); // if the first is a chaser, the second player is frozen
                    // if the first and second players are runners, the second player is unfrozen
Player.getFlag();   // if the player is a runner, get the flag
Team.won();         // returns true if the team has won, or false if not (see rules above)
Team.add(player);   // add a player to the team```

Create at least three js files that run different games of FFT. For example (don't use this), one file might be:

```let a = new Player('Todd');
let b = new Player('Barb');
let c = new Player('Fitz');

let s = new Team('runners');
let t = new Team('chasers');

s.add(a);
s.add(b);
t.add(c);

s.won(); // false
t.won(); // false

c.tag(a);
a.frozen(); // true - this player was frozen by Fitz
// ... more stuff```

## Hard mode: displaying data in the DOM

Render each team into a list in the DOM.

* Give the user controls (a text box and button, maybe?) to add players to each team.
* Add a 'freeze' and 'flag' button to each runner that modifies the underlying object.
* You should also have a 'winner?' button that adds information to the DOM indicating which team won (if any).